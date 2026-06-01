"use client";

import { motion, type MotionProps } from "framer-motion";
import { type ReactNode } from "react";

export default function MotionReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const props: MotionProps = {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
}
