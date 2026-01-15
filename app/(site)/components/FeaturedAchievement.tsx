'use client';

import { motion } from 'framer-motion';

export default function FeaturedAchievement() {
  return (
    <section className="w-full py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-sm z-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center glass-panel p-12 rounded-3xl border border-blue-500/20 shadow-[0_0_50px_rgba(37,99,235,0.2)]"
        >
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            $1M+
          </h2>
          <h3 className="text-2xl font-bold text-white mb-4">Revenue Generated</h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Through development of Amazon Seller Central and Shopify connectors,
            helping businesses streamline their operations and boost their growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 