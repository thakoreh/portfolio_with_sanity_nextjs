'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const posts = [
  {
    title: "Building Scalable E-commerce Solutions with AWS",
    excerpt: "Learn how to leverage AWS services to create robust e-commerce platforms...",
    date: "2024-03-15",
    readTime: "8 min read",
    link: "#"
  },
  // Add more posts
];

export default function BlogPosts() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Insights</h2>
          <p className="text-gray-600">Sharing knowledge and experiences from my development journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <Link href={post.link} className="block">
                <div className="text-sm text-blue-600 mb-3">{post.date} · {post.readTime}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600">{post.excerpt}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 