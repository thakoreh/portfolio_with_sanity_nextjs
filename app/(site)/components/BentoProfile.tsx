import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe2, MapPin } from "lucide-react";
import type { PortfolioProfile } from "@/lib/profile";
import { stack } from "@/data/portfolio";
import LocationGlobe from "./LocationGlobe";
import TechIcon from "./TechIcon";
import { CopyEmail } from "./PortfolioControls";
export default function BentoProfile({
  profile,
}: {
  profile: PortfolioProfile;
}) {
  return (
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
          <p>
            Based in Ontario. Open to thoughtful collaboration across time
            zones.
          </p>
          <h2>Across time zones.</h2>
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
          <p>A little more beyond the code.</p>
          <h2>About me</h2>
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
                    <TechIcon name={tech} size={15} />
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
        <CopyEmail email={profile.email} responsive />
      </div>
    </section>
  );
}
