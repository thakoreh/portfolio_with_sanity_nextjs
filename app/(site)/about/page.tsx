import { FaGithub as Github, FaLinkedinIn as Linkedin } from "react-icons/fa";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { loadProfile } from "@/lib/profile";
import { experience, stack } from "@/data/portfolio";
export const metadata: Metadata = { title: "About" };
export default async function About() {
  const profile = await loadProfile();
  return (
    <main className="interior-page container">
      <section className="about-page-grid">
        <div className="about-page-portrait">
          <Image
            src="/images/hiren-portrait.jpg"
            alt="Hiren Thakore"
            fill
            sizes="(max-width: 760px) 90vw, 440px"
            priority
            className="object-cover"
          />
          <span>
            <MapPin size={14} />
            {profile.location}
          </span>
        </div>
        <div className="page-intro">
          <span className="eyebrow">THE PERSON BEHIND THE CODE</span>
          <h1 className="editorial-title">
            Engineer by trade.
            <br />
            <em>Builder at heart.</em>
          </h1>
          <p>
            I’m Hiren Thakore, a software engineer who likes turning complicated
            problems into something useful.
          </p>
          <p>
            I work across backend systems, cloud infrastructure, and
            integrations. Lately, much of my curiosity has found its way into AI
            agents, developer tools, and independent software products.
          </p>
          <p>
            I’m a Senior Software Development Engineer at Evertz Microsystems.
            Before that, I built commerce integrations at VL OMNI, connecting
            platforms and keeping data moving reliably.
          </p>
          <div className="about-links">
            <a
              href={profile.github}
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a
              className="text-link"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              <Download size={16} /> Download résumé
            </a>
          </div>
        </div>
      </section>
      <section className="about-experience section-space">
        <span className="eyebrow">WHERE I’VE BEEN</span>
        <h2 className="editorial-title">
          The <em>experience.</em>
        </h2>
        {experience.map((job) => (
          <article className="about-job" key={job.company}>
            <div>
              <span className="eyebrow">{job.timeline}</span>
              <h3>{job.company}</h3>
            </div>
            <div>
              <h4>{job.role}</h4>
              <p>{job.description}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="skills-section">
        <span className="eyebrow">MY EVERYDAY TOOLKIT</span>
        <h2 className="editorial-title">
          Built with <em>these.</em>
        </h2>
        <div className="work-tags">
          {stack.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
        <a className="text-link" href="/projects">
          See them in action <ArrowUpRight size={15} />
        </a>
      </section>
    </main>
  );
}
