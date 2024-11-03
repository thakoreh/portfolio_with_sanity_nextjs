'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    label: 'Lines of Code',
    value: '500K+',
    icon: '📝',
    color: 'from-blue-400 to-blue-600'
  },
  {
    label: 'Projects Completed',
    value: '50+',
    icon: '🚀',
    color: 'from-green-400 to-green-600'
  },
  {
    label: 'GitHub Contributions',
    value: '1.2K+',
    icon: '⭐',
    color: 'from-purple-400 to-purple-600'
  },
  {
    label: 'Technical Articles',
    value: '15+',
    icon: '✍️',
    color: 'from-orange-400 to-orange-600'
  }
];

export default function CodingStats() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">
          By the Numbers
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl -z-10"
                style={{
                  background: `linear-gradient(to right, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})`
                }}
              />
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="text-4xl mb-4 block">{stat.icon}</span>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 