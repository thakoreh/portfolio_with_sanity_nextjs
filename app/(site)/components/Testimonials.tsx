'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    content: "Hiren is an exceptional developer who consistently delivers high-quality solutions. His expertise in cloud technologies and e-commerce integrations has been invaluable to our projects.",
    author: "John Smith",
    position: "Tech Lead, eHouse Studio",
    image: "/testimonial1.jpg"
  },
  {
    id: 2,
    content: "Working with Hiren was a great experience. His technical skills and problem-solving abilities helped us streamline our integration processes and improve overall system performance.",
    author: "Sarah Johnson",
    position: "Project Manager, VL OMNI",
    image: "/testimonial2.jpg"
  },
  // Add more testimonials
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          What People Say
        </h2>

        <div className="relative">
          <div className="flex overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100
                }}
                transition={{ duration: 0.5 }}
                className={`w-full flex-shrink-0 ${
                  activeIndex === index ? 'block' : 'hidden'
                }`}
              >
                <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex flex-col items-center text-center">
                    <blockquote className="text-xl text-gray-600 italic mb-8">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-gray-800">
                          {testimonial.author}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 