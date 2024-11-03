'use client';

import { motion } from 'framer-motion';

export default function FeaturedAchievement() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-6">$1M+ Revenue Generated</h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Through development of Amazon Seller Central and Shopify connectors, 
            helping businesses streamline their operations and boost their growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 