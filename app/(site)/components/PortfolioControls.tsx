"use client";
import { FaGithub as Github, FaLinkedinIn as Linkedin } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  Moon,
  Search,
  Sun,
  X,
} from "lucide-react";
import type { PortfolioProfile } from "@/lib/profile";

export function CopyEmail({
  email,
  compact = false,
}: {
  email: string;
  compact?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(id);
  }, [copied]);
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setFailed(false);
    } catch {
      setFailed(true);
    }
  }
  return (
    <div className="copy-wrap">
      <button
        className={`copy-email ${compact ? "compact" : ""}`}
        onClick={copy}
        aria-label={`Copy email address ${email}`}
      >
        {copied ? <Check size={17} /> : <Copy size={17} />}
        <span>{copied ? "Email copied!" : compact ? "Copy email" : email}</span>
      </button>
      <span className="sr-only" role="status">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
      {failed && (
        <a className="copy-fallback" href={`mailto:${email}`}>
          Open your email app
        </a>
      )}
    </div>
  );
}
export function ContactButton({
  children,
  className = "pill-button",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={className}
      onClick={() => window.dispatchEvent(new Event("portfolio-contact"))}
    >
      {children}
    </button>
  );
}
export function SiteUtilities({ profile }: { profile: PortfolioProfile }) {
  const [light, setLight] = useState(false);
  const [search, setSearch] = useState("");
  const contactRef = useRef<HTMLDialogElement>(null);
  const searchRef = useRef<HTMLDialogElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  function openSearch() {
    searchRef.current?.showModal();
    searchInputRef.current?.focus();
  }
  function closeOnBackdrop(event: React.MouseEvent<HTMLDialogElement>) {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      event.currentTarget.close();
  }
  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme") === "light";
    setLight(stored);
    document.documentElement.dataset.theme = stored ? "light" : "dark";
    const openContact = () => contactRef.current?.showModal();
    const shortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openSearch();
      }
    };
    window.addEventListener("portfolio-contact", openContact);
    window.addEventListener("keydown", shortcut);
    return () => {
      window.removeEventListener("portfolio-contact", openContact);
      window.removeEventListener("keydown", shortcut);
    };
  }, []);
  function toggleTheme() {
    const next = !light;
    setLight(next);
    localStorage.setItem("portfolio-theme", next ? "light" : "dark");
    document.documentElement.dataset.theme = next ? "light" : "dark";
  }
  const destinations = [
    { label: "Home", detail: "Back to the beginning", href: "/" },
    {
      label: "About",
      detail: "My story and engineering experience",
      href: "/about",
    },
    {
      label: "Work",
      detail: "Products, projects, and open source",
      href: "/projects",
    },
    {
      label: "Email Hiren",
      detail: profile.email,
      href: `mailto:${profile.email}`,
    },
    { label: "GitHub", detail: "Explore the code", href: profile.github },
  ];
  return (
    <>
      <div className="nav-utilities">
        <button
          className="command-trigger"
          onClick={openSearch}
          aria-label="Search pages"
        >
          <Search size={13} />
          <span>Explore</span>
          <kbd>⌘ K</kbd>
        </button>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
        >
          {light ? <Moon size={19} /> : <Sun size={19} />}
        </button>
      </div>
      <dialog
        className="portfolio-dialog"
        ref={contactRef}
        aria-labelledby="contact-title"
        onClick={closeOnBackdrop}
      >
        <div className="dialog-top">
          <span className="eyebrow">LET’S MAKE SOMETHING GOOD</span>
          <button
            className="icon-button"
            aria-label="Close contact panel"
            onClick={() => contactRef.current?.close()}
          >
            <X size={20} />
          </button>
        </div>
        <h2 id="contact-title">
          Let’s get in touch<span className="accent">.</span>
        </h2>
        <p>
          Have a project in mind, an engineering opportunity, or just something
          interesting to share?
        </p>
        <a className="contact-option" href={`mailto:${profile.email}`}>
          <Mail />
          <span>
            Email me<small>{profile.email}</small>
          </span>
          <ArrowUpRight />
        </a>
        <div className="dialog-socials">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={17} /> GitHub <ArrowUpRight size={14} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} />
          </a>
        </div>
        <CopyEmail email={profile.email} />
      </dialog>
      <dialog
        className="portfolio-dialog search-dialog"
        ref={searchRef}
        aria-labelledby="search-title"
        onClick={closeOnBackdrop}
      >
        <div className="dialog-top">
          <h2 id="search-title">Where to?</h2>
          <button
            className="icon-button"
            aria-label="Close search"
            onClick={() => searchRef.current?.close()}
          >
            <X size={20} />
          </button>
        </div>
        <label className="search-field">
          <Search size={18} />
          <input
            ref={searchInputRef}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search pages, projects, contact…"
            autoFocus
            aria-label="Search portfolio pages"
          />
        </label>
        <nav aria-label="Search results">
          {destinations
            .filter((d) =>
              `${d.label} ${d.detail}`
                .toLowerCase()
                .includes(search.toLowerCase()),
            )
            .map((d) => (
              <Link
                key={d.label}
                className="search-result"
                href={d.href}
                onClick={() => {
                  searchRef.current?.close();
                  setSearch("");
                }}
              >
                <span>
                  {d.label}
                  <small>{d.detail}</small>
                </span>
                <ArrowUpRight size={17} />
              </Link>
            ))}
          {!destinations.some((d) =>
            `${d.label} ${d.detail}`
              .toLowerCase()
              .includes(search.toLowerCase()),
          ) && (
            <p className="no-results">
              No matching pages. Try “work” or “contact”.
            </p>
          )}
        </nav>
      </dialog>
    </>
  );
}
