"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { PortfolioProfile } from "@/lib/profile";
import { ContactButton, SiteUtilities } from "./PortfolioControls";
export default function Navbar({ profile }: { profile: PortfolioProfile }) {
  const path = usePathname();
  return (
    <header className="site-header">
      <Link className="monogram" href="/" aria-label="Hiren Thakore home">
        HT
      </Link>
      <nav className="floating-nav" aria-label="Main navigation">
        {[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/projects", label: "Work" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={path === item.href ? "active" : ""}
            aria-current={path === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
        <ContactButton className="nav-contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </ContactButton>
      </nav>
      <SiteUtilities profile={profile} />
    </header>
  );
}
