'use client';

import { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

export default function GitHubActivity() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          GitHub Contributions
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A visual representation of my coding activity and open source contributions over the past year.
        </p>
        <div className="flex justify-center bg-white rounded-xl p-8 shadow-lg">
          <GitHubCalendar 
            username="thakoreh"
            colorScheme='light'
            fontSize={12}
            blockSize={12}
            blockMargin={5}
            style={{
              color: '#4B5563',
            }}
          />
        </div>
      </div>
    </section>
  );
} 