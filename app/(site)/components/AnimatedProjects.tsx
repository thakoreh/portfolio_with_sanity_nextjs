'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ProjectType } from "@/types";

type AnimatedProjectsProps = {
  projects: ProjectType[];
};

export default function AnimatedProjects({ projects }: AnimatedProjectsProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      <section className="max-w-2xl mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight gradient-text"
        >
          Featured Projects
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 leading-relaxed"
        >
          I&apos;ve worked on tons of little projects over the years but these are the ones that I&apos;m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
        </motion.p>
      </section>

      <motion.section 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12"
      >
        {projects.map((project) => (
          <motion.div key={project._id} variants={item}>
            <Link
              href={`/projects/${project.slug}`}
              className="flex flex-col h-full bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all p-5 hover:shadow-lg enhanced-card-hover group"
            >
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={project.coverImage?.image || "/project-placeholder.jpg"}
                  alt={project.name}
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm rounded-full">
                      View Project →
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
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
                        className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid md:grid-cols-3 gap-8 bg-white p-8 rounded-xl shadow-sm border border-gray-200"
      >
        <div className="text-center">
          <h3 className="text-4xl font-bold text-gray-800 mb-2">{projects.length}+</h3>
          <p className="text-gray-600">Projects Completed</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold text-gray-800 mb-2">100%</h3>
          <p className="text-gray-600">Client Satisfaction</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold text-gray-800 mb-2">5+</h3>
          <p className="text-gray-600">Years Experience</p>
        </div>
      </motion.section>
    </>
  );
} 