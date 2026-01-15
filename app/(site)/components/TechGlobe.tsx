'use client';

import { useEffect, useRef } from 'react';
import TagCloud, { TagCloudOptions } from 'TagCloud';

export default function TechGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const texts = [
      'JavaScript', 'React', 'Node.js',
      'Python', 'AWS', 'TypeScript',
      'Next.js', 'GraphQL', 'MongoDB',
      'Docker', 'CI/CD', 'REST API',
      'DynamoDB', 'Redux', 'Git',
      'Tailwind', 'PostgreSQL', 'Express'
    ];

    if (container) {
      try {
        const options: TagCloudOptions = {
          radius: Math.min(500, window.innerWidth / 2),
          maxSpeed: 'fast',
          initSpeed: 'fast',

          keep: true,
          useContainerInlineStyles: true,
          containerClass: 'tagcloud',
          itemClass: 'tagcloud--item',
        };

        // Clear any existing instances
        container.innerHTML = '';

        // Create new instance
        const tagCloud = TagCloud(container, texts, options);

        // Add hover effect
        const items = container.querySelectorAll('.tagcloud--item');
        items.forEach((item) => {
          item.addEventListener('mouseover', () => {
            (item as HTMLElement).style.color = '#3b82f6'; // blue-500
          });
          item.addEventListener('mouseout', () => {
            (item as HTMLElement).style.color = '#94a3b8'; // slate-400
          });
        });

        return () => {
          if (tagCloud) {
            // @ts-ignore - Cleanup
            tagCloud.destroy();
          }
        };
      } catch (e) {
        console.error('Error initializing TagCloud:', e);
      }
    }
  }, []);

  return (
    <section className="w-full py-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My Tech Universe
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            An interactive visualization of the technologies I work with regularly.
            Feel free to drag and explore!
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div
            ref={containerRef}
            className="tagcloud-wrapper"
            style={{
              minHeight: '500px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </div>
      </div>

      <style jsx>{`
        :global(.tagcloud) {
          display: inline-block;
          font-family: inherit;
          font-weight: 600;
          letter-spacing: 0.0625em;
          font-size: 1.125rem;
        }
        :global(.tagcloud--item) {
          color: #94a3b8;
          padding: 2px 6px;
          transition: 0.3s;
          cursor: pointer;
          text-shadow: 0 0 10px rgba(59, 130, 246, 0.1);
        }
        :global(.tagcloud--item:hover) {
          color: #3b82f6;
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
        }
      `}</style>
    </section>
  );
} 