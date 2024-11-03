import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Projects() {
  const projects: ProjectType[] = await getProjects();

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <section className="max-w-2xl mb-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 lg:leading-[3.7rem] leading-tight text-gray-800">
          Featured Projects
        </h1>
        <p className="text-base text-gray-600 leading-relaxed">
          I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
        </p>
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="flex flex-col gap-x-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-all p-5 hover:shadow-lg card-hover"
          >
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.coverImage?.image || "/project-placeholder.jpg"}
                alt={project.name}
                className="object-cover object-center"
                fill
              />
            </div>

            <div className="flex flex-col h-full">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {project.name}
              </h2>
              <p className="text-gray-600 mb-4 flex-grow">
                {project.tagline}
              </p>

              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, id) => (
                    <span
                      key={id}
                      className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}