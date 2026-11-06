import Link from "next/link";
import { FaGithub as Github } from "react-icons/fa";
import { ArrowUpRight, GitBranch, Terminal, Cpu, Mail } from "lucide-react";
import TechIcon from "./TechIcon";
import { ContactButton } from "./PortfolioControls";
export default function CreativeSpace() {
  return (
    <section
      className="creative-space container"
      id="explore"
      aria-labelledby="creative-title"
    >
      <div className="centered-section-heading">
        <span className="eyebrow">A LITTLE MORE TO EXPLORE</span>
        <h2 className="editorial-title" id="creative-title">
          Follow the curiosity.
          <br />
          <em>See what’s next.</em>
        </h2>
      </div>
      <div className="creative-grid">
        <a
          className="creative-card open-source-card"
          href="https://github.com/thakoreh"
          target="_blank"
          rel="noreferrer"
        >
          <div className="creative-art repository-art" aria-hidden="true">
            <div className="repository-sheet rear" />
            <div className="repository-sheet">
              <Github size={34} />
              <div className="repository-lines">
                <i />
                <i />
                <i />
              </div>
              <span>
                <GitBranch size={15} /> Built in the open
              </span>
            </div>
          </div>
          <div className="creative-card-copy">
            <p>The experiments, commits, and tools behind the work.</p>
            <h3>
              Open source <ArrowUpRight size={17} />
            </h3>
          </div>
        </a>
        <div className="creative-card conversation-card">
          <div className="conversation-symbol" aria-hidden="true">
            <Mail size={30} />
          </div>
          <h3>
            A good conversation
            <br />
            can start something.
          </h3>
          <p>Ideas, engineering questions, or a simple hello.</p>
          <ContactButton className="creative-contact-button">
            Say hello <ArrowUpRight size={16} />
          </ContactButton>
        </div>
        <Link className="creative-card workspace-card" href="/#skills">
          <div className="creative-art workspace-art" aria-hidden="true">
            <div className="workspace-hub">
              <Github size={35} />
            </div>
            <span className="workspace-node node-1">
              <TechIcon name="React" size={25} />
            </span>
            <span className="workspace-node node-2">
              <TechIcon name="Python" size={25} />
            </span>
            <span className="workspace-node node-3">
              <TechIcon name="AWS" size={25} />
            </span>
            <span className="workspace-node node-4">
              <Terminal size={25} />
            </span>
            <span className="workspace-node node-5">
              <Cpu size={25} />
            </span>
          </div>
          <div className="creative-card-copy">
            <p>The tools and systems that shape how I build.</p>
            <h3>
              My toolkit <ArrowUpRight size={17} />
            </h3>
          </div>
        </Link>
      </div>
    </section>
  );
}
