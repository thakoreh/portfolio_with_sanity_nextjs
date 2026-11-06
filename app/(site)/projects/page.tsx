import { FaGithub as Github } from "react-icons/fa";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import WorkCollection from "../components/WorkCollection";
import { githubSignals } from "@/data/portfolio";
export const metadata: Metadata = { title: "Work" };
export default function Projects() {
  return (
    <main className="interior-page container">
      <section className="page-intro">
        <span className="eyebrow">PRODUCTS, EXPERIMENTS & OPEN SOURCE</span>
        <h1 className="editorial-title">
          A few ideas,
          <br />
          <em>out in the world.</em>
        </h1>
        <p>
          Useful products, tools for developers, and experiments that start with
          a simple question: could this work better?
        </p>
      </section>
      <WorkCollection />
      <section className="repo-section section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">IN THE OPEN</span>
            <h2 className="editorial-title">
              From the <em>workbench.</em>
            </h2>
          </div>
          <a
            className="text-link"
            href="https://github.com/thakoreh"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} /> GitHub <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="repo-grid">
          {githubSignals
            .filter((repo) =>
              ["agent-tally", "llm-speedtest-mcp"].includes(repo.repo),
            )
            .map((repo) => (
              <a
                className="repo-card"
                href={repo.href}
                key={repo.repo}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <Github size={19} />
                  <ArrowUpRight size={17} />
                </div>
                <span className="eyebrow">{repo.label}</span>
                <h3>{repo.repo}</h3>
                <p>{repo.description}</p>
                <span className="repo-language">
                  <i />
                  {repo.language}
                </span>
              </a>
            ))}
        </div>
      </section>
    </main>
  );
}
