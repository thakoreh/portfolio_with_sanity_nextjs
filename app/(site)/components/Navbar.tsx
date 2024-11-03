'use client';

import Image from "next/image";
import Link from "next/link";
import Logo from "../icons/logo.png";
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
    <header className="fixed top-0 left-0 right-0 navbar-glass z-50">
      <div className="h-0.5 bg-blue-600 transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 md:px-16 px-6">
        <Link href="/">
          <Image 
            src={Logo} 
            width={35} 
            height={35} 
            alt="logo" 
            className="hover:opacity-80 transition-opacity hover:rotate-12 duration-300" 
          />
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
                  className={`relative px-2 py-1 transition-colors duration-300 hover:text-blue-600 ${
                    pathname === href ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {label}
                  {pathname === href && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
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
