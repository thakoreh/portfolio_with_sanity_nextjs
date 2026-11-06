import { FaGithub as Github, FaLinkedinIn as Linkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Cloud,
  Code2,
  Download,
  Globe2,
  MapPin,
  Sparkles,
} from "lucide-react";
import { loadProfile } from "@/lib/profile";
import { stack } from "@/data/portfolio";
import { ContactButton, CopyEmail } from "./components/PortfolioControls";
import WorkCollection from "./components/WorkCollection";
import LocationGlobe from "./components/LocationGlobe";
import TechIcon from "./components/TechIcon";
import ResponsiveShowcase from "./components/ResponsiveShowcase";
import CreativeSpace from "./components/CreativeSpace";
import AboutIntro from "./components/AboutIntro";
import BentoProfile from "./components/BentoProfile";

export default async function Home() {
  const profile = await loadProfile();
  return (
    <main className="portfolio-home">
      <section className="portfolio-hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <Link className="intro-pill" href="#selected-work">
            <span>BUILDING</span> Ideas into useful things{" "}
            <ArrowUpRight size={13} />
          </Link>
          <h1 id="hero-title">
            Building software
            <br />
            that makes a <em>difference.</em>
          </h1>
          <p className="hero-intro">
            Hello, I’m Hiren <span aria-hidden="true">|</span>{" "}
            <span className="rotating-role">
              Software Engineer
              <span className="typing-caret" aria-hidden="true">
                |
              </span>
            </span>
          </p>
          <div className="hero-actions">
            <ContactButton>
              Let’s connect{" "}
              <span className="button-orb">
                <ArrowRight size={19} />
              </span>
            </ContactButton>
            <CopyEmail email={profile.email} />
          </div>
        </div>
        <div className="hero-horizon" aria-hidden="true" />
        <a
          className="scroll-cue"
          href="#a-little-about-me"
          aria-label="Discover more about Hiren"
        >
          <ArrowDown size={14} />
        </a>
      </section>
      <BentoProfile profile={profile} />
      <AboutIntro profile={profile} />
      <section className="container skills-section" id="skills">
        <h2 className="editorial-title">
          Skills & <em>Tools.</em>
        </h2>
        <p>A practical toolkit, shaped by the things I build.</p>
        <div className="skill-grid">
          {stack.map((skill) => (
            <div
              className="skill-tile"
              role="img"
              aria-label={skill}
              tabIndex={0}
              key={skill}
            >
              <TechIcon name={skill} size={36} />
              <span className="skill-name" aria-hidden="true">
                {skill}
              </span>
            </div>
          ))}
        </div>
        <div className="skills-foundation" aria-hidden="true">
          <Cloud size={30} />
          <span>From systems to software.</span>
        </div>
      </section>
      <ResponsiveShowcase />
      <section className="container section-space" id="selected-work">
        <div className="section-heading centered-work-heading">
          <div>
            <span className="eyebrow">CASE STUDIES</span>
            <h2 className="editorial-title">
              Featured <em>Work.</em>
            </h2>
          </div>
          <Link className="text-link" href="/projects">
            All work <ArrowUpRight size={16} />
          </Link>
        </div>
        <WorkCollection />
      </section>
      <CreativeSpace />
    </main>
  );
}
