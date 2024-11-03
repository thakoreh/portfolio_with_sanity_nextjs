import Image from "next/image";
import { Metadata } from "next";
import { getSingleProject } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import fallBackImage from "../../icons/project.png";

type Props = {
  params: {
    project: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const project: ProjectType = await getSingleProject(slug);

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
  const project: ProjectType = await getSingleProject(slug);

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8 pt-24 pb-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-8">
          <div>
            <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-2 text-gray-800">
              {project.name}
            </h1>
            <p className="text-gray-600">{project.tagline}</p>
          </div>

          <a
            href={project.projectUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-primary whitespace-nowrap"
          >
            View Project
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <Image
            className="w-full h-auto object-cover"
            width={1200}
            height={630}
            src={project.coverImage?.image || "/project-placeholder.jpg"}
            alt={project.coverImage?.alt || project.name}
            priority
          />
        </div>

        <div className="flex flex-col gap-y-6 mt-8 leading-7 text-gray-600 bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <PortableText value={project.description} />
        </div>

        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech, id) => (
              <span
                key={id}
                className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-12">
          <a
            href="/projects"
            className="text-gray-600 hover:text-blue-600 flex items-center gap-2 transition-colors duration-300"
          >
            <svg 
              className="w-5 h-5" 
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
            Back to Projects
          </a>
        </div>
      </div>
    </main>
  );
}