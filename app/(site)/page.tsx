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
import { experience, stack } from "@/data/portfolio";
import { ContactButton, CopyEmail } from "./components/PortfolioControls";
import WorkCollection from "./components/WorkCollection";
import LocationGlobe from "./components/LocationGlobe";

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
      <section
        className="bento-grid container"
        id="a-little-about-me"
        aria-label="A little about me"
      >
        <div className="bento-card location-card">
          <LocationGlobe />
          <div className="card-bottom">
            <span className="card-kicker">
              <MapPin size={12} /> {profile.location}
            </span>
            <h2>
              Good work.
              <br />
              Across time zones.
            </h2>
            <p>Based in Ontario. Building for people everywhere.</p>
          </div>
          <Globe2 className="card-corner" size={19} />
        </div>
        <Link className="bento-card portrait-card" href="/about">
          <Image
            src="/images/hiren-portrait.jpg"
            alt="Hiren Thakore outdoors"
            fill
            sizes="(max-width: 720px) 100vw, 420px"
            className="portrait-image"
          />
          <div className="portrait-shade" />
          <div className="portrait-top">
            <span>ALWAYS CURIOUS · ALWAYS BUILDING</span>
            <p>
              Software engineer.
              <br />
              Turning ideas into
              <br />
              <em>useful things.</em>
            </p>
          </div>
          <div className="portrait-label">
            <span>ENGINEER. BUILDER. ALWAYS CURIOUS.</span>
            <h2>
              A little more <br />
              <em>about me.</em>
            </h2>
          </div>
          <span className="card-arrow">
            <ArrowUpRight size={20} />
          </span>
        </Link>
        <div className="bento-card stack-card">
          <div className="bento-tech-strips" aria-hidden="true">
            {[stack.slice(0, 5), stack.slice(5, 10), stack.slice(10, 15)].map(
              (row, index) => (
                <div key={index}>
                  {row.map((tech) => (
                    <span key={tech}>
                      <Code2 size={13} />
                      {tech}
                    </span>
                  ))}
                </div>
              ),
            )}
          </div>
          <span className="card-kicker">THE TOOLS BEHIND THE IDEAS</span>
          <h2>Curiosity is part of my stack.</h2>
          <p>Cloud systems, AI agents, and the space in between.</p>
          <a className="text-link" href="#skills">
            Explore my toolkit <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="bento-card collaboration-card">
          <span className="status-dot" />
          <span className="card-kicker">LET’S BUILD SOMETHING USEFUL</span>
          <h2>
            Your next idea.
            <br />
            <em>Our next conversation.</em>
          </h2>
          <CopyEmail email={profile.email} compact />
        </div>
      </section>
      <div className="stack-marquee" aria-label="Technologies I work with">
        <div>
          {[...stack.slice(0, 10), ...stack.slice(0, 10)].map((item, i) => (
            <span key={`${item}-${i}`} aria-hidden={i >= 10}>
              {item}
              <span className="marquee-dot" aria-hidden="true">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
      <section className="about-intro container section-space">
        <div>
          <span className="eyebrow">MORE THAN A JOB TITLE</span>
          <h2 className="editorial-title">
            I’m Hiren, an engineer
            <br />
            with a <em>builder’s instinct.</em>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I turn ideas into software people can use. My work spans backend
            systems, cloud integrations, AI products, and the tools that help
            developers ship.
          </p>
          <p>
            By day, I work on media and broadcast software at Evertz. Outside
            that, you’ll find me building products, exploring AI agents, and
            following a good problem wherever it leads.
          </p>
          <div className="about-links">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Hiren’s GitHub"
            >
              <Github size={19} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Hiren’s LinkedIn"
            >
              <Linkedin size={19} />
            </a>
            <a
              className="text-link"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              <Download size={15} /> Download résumé
            </a>
          </div>
        </div>
      </section>
      <section className="container skills-section" id="skills">
        <span className="eyebrow">ALWAYS LEARNING, ALWAYS BUILDING</span>
        <h2 className="editorial-title">
          Skills <em>& tools.</em>
        </h2>
        <p>A practical toolkit, shaped by the things I build.</p>
        <div className="skill-grid">
          {stack.map((skill, i) => (
            <div key={skill}>
              <span className="skill-symbol" aria-hidden="true">
                {
                  [
                    <Code2 key="code" />,
                    <Braces key="braces" />,
                    <Cloud key="cloud" />,
                  ][i % 3]
                }
              </span>
              {skill}
            </div>
          ))}
        </div>
      </section>
      <section className="container section-space" id="selected-work">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A FEW THINGS I’VE BEEN BUILDING</span>
            <h2 className="editorial-title">
              Selected <em>work.</em>
            </h2>
          </div>
          <Link className="text-link" href="/projects">
            All work <ArrowUpRight size={16} />
          </Link>
        </div>
        <WorkCollection />
      </section>
      <section className="container experience-section">
        <div>
          <span className="eyebrow">THE JOURNEY SO FAR</span>
          <h2 className="editorial-title">
            Built on
            <br />
            <em>experience.</em>
          </h2>
          <Link className="text-link" href="/about">
            More about me <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="experience-list">
          {experience.map((job, i) => (
            <div className="experience-row" key={job.company}>
              <span className="experience-index">0{i + 1}</span>
              <div>
                <h3>{job.company}</h3>
                <p>{job.role}</p>
              </div>
              <span>{job.timeline}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
