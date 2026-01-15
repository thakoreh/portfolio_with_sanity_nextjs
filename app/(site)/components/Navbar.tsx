'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 glass-panel border-b border-white/10 z-50">
      <div className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 md:px-16 px-6">
        <Link href="/" className="group">
          <div className="text-2xl font-bold tracking-tighter text-white group-hover:text-blue-400 transition-colors">
            HT<span className="text-blue-500">.</span>
          </div>
        </Link>
        <nav>
          <ul className="flex items-center gap-x-8">
            {[
              { href: '/about', label: 'About' },
              { href: '/projects', label: 'Projects' }
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative px-2 py-1 transition-colors duration-300 hover:text-blue-400 font-medium ${pathname === href ? 'text-blue-400' : 'text-gray-400'
                    }`}
                >
                  {label}
                  {pathname === href && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
