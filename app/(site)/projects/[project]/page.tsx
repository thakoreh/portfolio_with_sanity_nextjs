import Image from "next/image";
import { Metadata } from "next";
import { getSingleProject } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import fallBackImage from "../../icons/project.png";
import { manualProjects } from "@/data/projects";

type Props = {
  params: {
    project: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  let project = manualProjects.find(p => p.slug === slug);

  if (!project) {
    project = await getSingleProject(slug);
  }

  if (!project) {
    return {
      title: "Project Not Found",
      description: "This project project does not exist."
    }
  }

  return {
    title: `${project.name} | Project`,
    description: project.tagline,
    openGraph: {
      title: project.name,
      description: project.tagline,
      images: [
        {
          url: project.coverImage?.image || "/project-placeholder.jpg",
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
  };
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  let project = manualProjects.find(p => p.slug === slug);

  if (!project) {
    project = await getSingleProject(slug);
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-[#0F172A] text-white pt-28 pb-16 flex items-center justify-center">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0F172A] text-white pt-28 pb-16">
      <div className="max-w-6xl mx-auto lg:px-16 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-12">
            <div>
              <h1 className="font-bold lg:text-5xl text-4xl lg:leading-tight mb-4 text-white">
                {project.name}
              </h1>
              <p className="text-xl text-blue-400 font-light">{project.tagline}</p>
            </div>

            <a
              href={project.projectUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all whitespace-nowrap"
            >
              View Live System
            </a>
          </div>

          {/* Project Image */}
          <div className="glass-panel p-2 rounded-2xl border border-white/10 shadow-2xl mb-12">
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <Image
                className="w-full h-full object-cover"
                width={1200}
                height={630}
                src={project.coverImage?.image || "/project-placeholder.jpg"}
                alt={project.coverImage?.alt || project.name}
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="glass-panel rounded-2xl p-8 md:p-12 border border-white/5 shadow-xl">
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
              <PortableText value={project.description} />
            </div>

            {project.technologies && project.technologies.length > 0 && (
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-lg font-semibold text-white mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, id) => (
                    <span
                      key={id}
                      className="px-4 py-2 bg-slate-800 border border-white/10 text-blue-300 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Back Button */}
          <div className="mt-12">
            <a
              href="/projects"
              className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors duration-300 group"
            >
              <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Return to Archives
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}