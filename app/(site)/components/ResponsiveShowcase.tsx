"use client";
import Image from "next/image";
import { useState } from "react";
import { Monitor, Smartphone, ArrowUpRight } from "lucide-react";
export default function ResponsiveShowcase() {
  const [view, setView] = useState<"mobile" | "desktop">("mobile");
  return (
    <section
      className="responsive-showcase container"
      aria-labelledby="responsive-title"
    >
      <h2 className="editorial-title" id="responsive-title">
        Thoughtfully responsive.
        <br />
        <em>Beautifully presented.</em>
      </h2>
      <p className="section-description">
        A closer look at ARA Calls, from desktop to pocket-sized screens.
      </p>
      <div
        className="device-switch"
        role="group"
        aria-label="Product preview device"
      >
        <button
          aria-pressed={view === "mobile"}
          onClick={() => setView("mobile")}
        >
          <Smartphone size={17} /> Mobile
        </button>
        <button
          aria-pressed={view === "desktop"}
          onClick={() => setView("desktop")}
        >
          <Monitor size={17} /> Desktop
        </button>
      </div>
      <div className={`device-stage showing-${view}`}>
        {view === "mobile" ? (
          <div className="phone-preview">
            <div className="phone-island" aria-hidden="true" />
            <div className="phone-screen-window">
              <Image
                src="/images/work-aracalls-mobile-v2.jpg"
                alt="ARA Calls homepage on a phone"
                fill
                sizes="290px"
                className="device-screen"
              />
            </div>
          </div>
        ) : (
          <div className="desktop-preview">
            <div className="device-browser-bar">
              <span />
              <span />
              <span />
              <p>aracalls.ca</p>
            </div>
            <div className="desktop-screen">
              <Image
                src="/images/work-aracalls-desktop-v2.jpg"
                alt="ARA Calls homepage on a desktop"
                fill
                sizes="(max-width:720px) 90vw, 960px"
                className="device-screen"
              />
            </div>
          </div>
        )}
      </div>
      <a
        className="text-link"
        href="https://aracalls.ca"
        target="_blank"
        rel="noreferrer"
      >
        Explore ARA Calls <ArrowUpRight size={15} />
      </a>
    </section>
  );
}
