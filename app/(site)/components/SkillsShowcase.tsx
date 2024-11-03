'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const skillCategories = {
  "Frontend": [
    { name: "React", level: 90, icon: "⚛️" },
    { name: "Next.js", level: 85, icon: "▲" },
    { name: "TypeScript", level: 85, icon: "TS" },
    { name: "Tailwind CSS", level: 90, icon: "🎨" },
  ],
  "Backend": [
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Python", level: 80, icon: "🐍" },
    { name: "GraphQL", level: 75, icon: "◈" },
    { name: "REST APIs", level: 90, icon: "🔌" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", level: 85, icon: "☁️" },
    { name: "Docker", level: 75, icon: "🐳" },
    { name: "CI/CD", level: 80, icon: "⚡" },
    { name: "MongoDB", level: 85, icon: "🍃" },
  ],
};

export default function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Technical Expertise</h2>
        
        <div className="flex flex-wrap gap-4 mb-12">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                </div>
                <span className="text-blue-600 font-medium">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-blue-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 