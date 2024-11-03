'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function ScrollAnimation({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
} 