import Image from "next/image";
import { FaGithub as Github, FaLinkedinIn as Linkedin } from "react-icons/fa";
import { Download } from "lucide-react";
import type { PortfolioProfile } from "@/lib/profile";
export default function AboutIntro({
  profile,
  asPageTitle = false,
}: {
  profile: PortfolioProfile;
  asPageTitle?: boolean;
}) {
  const Heading = asPageTitle ? "h1" : "h2";
  return (
    <section
      className="about-intro container section-space"
      aria-labelledby="about-heading"
    >
      <div className="about-intro-copy">
        <span className="eyebrow">MORE ABOUT ME</span>
        <Heading className="editorial-title" id="about-heading">
          I’m Hiren, a<br />
          <em>Software Engineer.</em>
        </Heading>
        <div className="about-copy">
          <p>
            I’m a software engineer focused on backend systems, cloud
            infrastructure, and AI-powered products. I enjoy taking a
            complicated problem and turning it into reliable software that
            people can use.
          </p>
          <p>
            My work spans Python, event-driven microservices, commerce
            integrations, and developer tooling. At Evertz, I build serverless
            systems and APIs; before that, I worked on cloud platforms and
            integrations at eHouse Studio and VL OMNI.
          </p>
          <p>
            Outside that work, I’m exploring AI agents, model benchmarks, and
            tools that make engineering workflows easier to understand.
            Curiosity usually leads me to the next thing I build.
          </p>
        </div>
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
            className="resume-button"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            <Download size={14} /> Download résumé
          </a>
        </div>
      </div>
      <div className="about-portrait-stage">
        <div className="portrait-backplate backplate-left" aria-hidden="true" />
        <div
          className="portrait-backplate backplate-right"
          aria-hidden="true"
        />
        <figure className="about-featured-portrait">
          <div>
            <Image
              src="/images/hiren-portrait.jpg"
              alt="Hiren Thakore"
              fill
              sizes="(max-width:720px) 80vw, 380px"
              className="about-portrait-photo"
            />
          </div>
          <figcaption>
            Hiren Thakore <span>Engineer & builder</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
