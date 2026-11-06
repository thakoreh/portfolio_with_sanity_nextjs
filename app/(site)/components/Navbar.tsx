"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  Home,
  UserRound,
  BriefcaseBusiness,
  FileText,
  MessageCircle,
} from "lucide-react";
import type { PortfolioProfile } from "@/lib/profile";
import { ContactButton, SiteUtilities } from "./PortfolioControls";
export default function Navbar({ profile }: { profile: PortfolioProfile }) {
  const path = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!mobileOpen) return;
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const closeOutside = (event: PointerEvent) => {
      if (
        !menuRef.current?.contains(event.target as Node) &&
        !toggleRef.current?.contains(event.target as Node)
      )
        setMobileOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth > 720) setMobileOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", escape);
    window.addEventListener("resize", resize);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", escape);
      window.removeEventListener("resize", resize);
    };
  }, [mobileOpen]);
  const navItems = [
    { href: "/", label: "Home", Icon: Home },
    { href: "/about", label: "About", Icon: UserRound },
    { href: "/projects", label: "Work", Icon: BriefcaseBusiness },
  ];
  return (
    <>
      <header className="site-header">
        <Link className="monogram" href="/" aria-label="Hiren Thakore home">
          HT
        </Link>
        <nav className="floating-nav" aria-label="Main navigation">
          {navItems.map((item) => (
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
      <div className="mobile-navigation-shell">
        {mobileOpen && (
          <nav
            className="mobile-navigation"
            id="mobile-navigation"
            aria-label="Mobile navigation"
            ref={menuRef}
          >
            {navItems.map(({ href, label, Icon }) => (
              <Link
                href={href}
                key={href}
                onClick={() => setMobileOpen(false)}
                aria-current={path === href ? "page" : undefined}
              >
                <Icon size={17} />
                {label}
              </Link>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
            >
              <FileText size={17} />
              Résumé
            </a>
            <button
              onClick={() => {
                setMobileOpen(false);
                toggleRef.current?.focus();
                window.dispatchEvent(new Event("portfolio-contact"));
              }}
            >
              <MessageCircle size={17} />
              Let’s talk
            </button>
          </nav>
        )}
        <button
          className="mobile-menu-toggle"
          ref={toggleRef}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </>
  );
}
