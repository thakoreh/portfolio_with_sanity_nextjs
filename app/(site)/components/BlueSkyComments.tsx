'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function BlueSkyComments() {
  useEffect(() => {
    // Initialize comments after scripts are loaded
    const initComments = () => {
      if (typeof window !== 'undefined' && (window as any).initBlueskyComments) {
        const uri = 'https://bsky.app/profile/hirenthakore.bsky.social/post/3lbvftka4622a';
        (window as any).initBlueskyComments('bluesky-comments', uri);
      }
    };

    // Check if scripts are already loaded
    if (document.readyState === 'complete') {
      initComments();
    } else {
      window.addEventListener('load', initComments);
    }

    return () => {
      window.removeEventListener('load', initComments);
    };
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Join the Conversation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with me on BlueSky where I share insights about software engineering, 
            tech humor, and development tips. Join our growing community of 13K+ followers!
          </p>
        </div>

        {/* BlueSky Comments Container */}
        <div 
          id="bluesky-comments"
          className="bg-white rounded-xl shadow-sm p-8 border border-gray-200"
        />

        {/* Load required scripts */}
        <Script
          src="https://unpkg.com/react@18/umd/react.production.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://unpkg.com/bluesky-comments@0.3.0/dist/bluesky-comments.umd.js"
          strategy="beforeInteractive"
        />
      </div>
    </section>
  );
} 