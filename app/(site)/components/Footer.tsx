import { FaGithub as Github, FaLinkedinIn as Linkedin } from "react-icons/fa";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import type { PortfolioProfile } from "@/lib/profile";
import { ContactButton } from "./PortfolioControls";
export default function Footer({ profile }: { profile: PortfolioProfile }) {
  return (
    <footer className="site-footer" id="contact">
      <section className="contact-finale container">
        <h2>
          From concept to{" "}
          <strong>
            code <Code2 aria-hidden="true" />
          </strong>
        </h2>
        <p className="finale-subtitle">
          Let’s turn ideas into <em>something useful.</em>
        </p>
        <ContactButton>
          Get in touch{" "}
          <span className="button-orb">
            <ArrowUpRight size={19} />
          </span>
        </ContactButton>
        <p className="finale-note">
          A project, a collaboration, or a good problem.
          <br />
          Let’s talk.
        </p>
      </section>
      <div className="footer-grid container">
        <div>
          <Link className="monogram" href="/" aria-label="Hiren Thakore home">
            HT
          </Link>
          <p>
            Thoughtful software.
            <br />
            Built with curiosity.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Work</Link>
        </div>
        <div>
          <h3>Elsewhere</h3>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={13} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={13} />
          </a>
          <a href={`mailto:${profile.email}`}>
            Email <ArrowUpRight size={13} />
          </a>
        </div>
        <div>
          <h3>A little more</h3>
          <a href={profile.resume} target="_blank" rel="noreferrer">
            Download résumé <ArrowUpRight size={13} />
          </a>
          <a
            href="https://github.com/thakoreh/portfolio_with_sanity_nextjs"
            target="_blank"
            rel="noreferrer"
          >
            View source <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
      <div className="footer-bottom container">
        <small>© {new Date().getFullYear()} Hiren Thakore</small>
        <span>Designed with intention. Built with care.</span>
        <div>
          <a href={profile.github} aria-label="GitHub">
            <Github size={17} />
          </a>
          <a href={profile.linkedin} aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
