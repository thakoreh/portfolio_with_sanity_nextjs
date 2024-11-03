'use client';

import { motion } from 'framer-motion';

const problems = [
  {
    title: "Complex Integration Challenges",
    description: "Successfully integrated multiple e-commerce platforms with enterprise systems, handling millions of transactions.",
    icon: "🔄",
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Performance Optimization",
    description: "Reduced system response time by 40% through innovative caching and optimization techniques.",
    icon: "⚡",
    color: "from-green-400 to-green-600"
  },
  {
    title: "Scalability Solutions",
    description: "Designed and implemented cloud architectures that seamlessly handle growing business demands.",
    icon: "📈",
    color: "from-purple-400 to-purple-600"
  }
];

export default function ProblemSolving() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Problem Solving</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tackling complex technical challenges with innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl -z-10"
                style={{
                  background: `linear-gradient(to right, ${problem.color.split(' ')[1]}, ${problem.color.split(' ')[3]})`
                }}
              />
              <div className="bg-white rounded-xl p-8 shadow-sm group-hover:shadow-xl transition-all duration-300">
                <span className="text-4xl mb-6 block">{problem.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 