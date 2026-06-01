'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.08] bg-[#08090a]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-semibold tracking-[-0.04em] text-zinc-950 transition-transform duration-200 group-hover:-rotate-3">
            HT
          </div>
          <div className="hidden leading-tight sm:block">
            <p className="text-sm font-semibold tracking-[-0.03em] text-zinc-50">Hiren Thakore</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">AI product builder</p>
          </div>
        </Link>

        <nav className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {navItems.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active ? "bg-white/[0.08] text-zinc-50" : "text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-100"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Button asChild variant="ghost" size="sm" className="hidden md:inline-flex">
            <a href="https://www.linkedin.com/in/hirenthakore/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
              <Link2 className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <a href="https://github.com/thakoreh" target="_blank" rel="noreferrer noopener">
              <Code2 className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
