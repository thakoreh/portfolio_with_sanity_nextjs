import { FaGithub as Github } from "react-icons/fa";
import Image from "next/image";
import { ArrowUpRight, CircleCheck } from "lucide-react";
import { selectedWork } from "@/data/selected-work";
import TechIcon from "./TechIcon";
export default function WorkCollection() {
  return (
    <div className="work-list">
      {selectedWork.map((project, index) => (
        <article className="work-card" key={project.name}>
          <a
            className={`work-preview project-${project.kind}`}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Explore ${project.name}`}
          >
            <Image
              src={project.image}
              alt={project.alt}
              fill
              sizes="(max-width:800px) 92vw, 620px"
              className={
                project.kind === "screen"
                  ? "project-screen-image"
                  : "project-cover-image"
              }
            />
            {project.kind === "artwork" && (
              <div className="cover-caption">
                <span>{project.category}</span>
                <strong>{project.name}</strong>
              </div>
            )}
            <span className="preview-open">
              <ArrowUpRight size={18} />
            </span>
          </a>
          <div className="work-description">
            <span className="eyebrow">
              <span className="work-number">0{index + 1}</span>
              {project.category}
            </span>
            <h3>
              <a href={project.href} target="_blank" rel="noreferrer">
                {project.name}
                <ArrowUpRight size={20} />
              </a>
            </h3>
            <p>{project.description}</p>
            <ul className="project-feature-list">
              {project.features.map((feature) => (
                <li key={feature}>
                  <CircleCheck size={15} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="work-tags">
              {project.tags.map((tag) => (
                <span key={tag}>
                  <TechIcon name={tag} size={14} />
                  {tag}
                </span>
              ))}
            </div>
            <a
              className="text-link"
              href={project.source || project.href}
              target="_blank"
              rel="noreferrer"
            >
              {project.source ? <Github size={15} /> : null}
              {project.source ? "Explore the code" : "Visit the website"}
              <ArrowUpRight size={13} />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
