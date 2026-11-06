"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

export default function LocationGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let globe: ReturnType<typeof createGlobe> | undefined;
    let width = canvas.clientWidth;
    let phi = 4.6;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const resize = new ResizeObserver(() => {
      width = canvas.clientWidth;
    });
    resize.observe(canvas);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          globe?.destroy();
          globe = undefined;
          return;
        }
        if (globe) return;
        try {
          globe = createGlobe(canvas, {
            devicePixelRatio: pixelRatio,
            width: width * pixelRatio,
            height: width * pixelRatio,
            phi,
            theta: 0.25,
            dark: 1,
            diffuse: 1.7,
            mapSamples: 20000,
            mapBrightness: 7,
            baseColor: [0.46, 0.44, 0.52],
            markerColor: [0.76, 0.58, 1],
            glowColor: [0.1, 0.085, 0.14],
            markers: [{ location: [43.2557, -79.8711], size: 0.055 }],
            onRender: (state) => {
              state.width = width * pixelRatio;
              state.height = width * pixelRatio;
              state.phi = phi;
              if (!reducedMotion.matches) phi += 0.001;
            },
          });
          setReady(true);
        } catch {
          setReady(false);
        }
      },
      { rootMargin: "80px" },
    );
    observer.observe(canvas);
    return () => {
      resize.disconnect();
      observer.disconnect();
      globe?.destroy();
    };
  }, []);

  return (
    <div
      className="location-globe"
      role="img"
      aria-label="A globe with a marker for Hamilton, Ontario"
    >
      {!ready && (
        <Image
          src="/images/earth.jpg"
          alt=""
          fill
          sizes="(max-width:720px) 300px, 580px"
          className="globe-fallback"
        />
      )}
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
  );
}
