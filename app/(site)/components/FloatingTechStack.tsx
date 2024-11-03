'use client';

import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', color: '#61DAFB', delay: 0 },
  { name: 'Node.js', color: '#339933', delay: 0.2 },
  { name: 'AWS', color: '#FF9900', delay: 0.4 },
  { name: 'Python', color: '#3776AB', delay: 0.6 },
  { name: 'TypeScript', color: '#3178C6', delay: 0.8 },
];

export default function FloatingTechStack() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: tech.delay,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2
          }}
          className="mb-4"
        >
          <div 
            className="px-4 py-2 rounded-lg text-white font-medium shadow-lg"
            style={{ backgroundColor: tech.color }}
          >
            {tech.name}
          </div>
        </motion.div>
      ))}
    </div>
  );
} 