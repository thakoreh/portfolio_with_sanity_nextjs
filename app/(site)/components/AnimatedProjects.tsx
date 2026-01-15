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

  // Helper to generate a placeholder image if none exists
  const getProjectImage = (project: ProjectType) => {
    if (project.coverImage?.image) return project.coverImage.image;

    // Deterministic selection based on project name length to keep it consistent
    const placeholders = [
      "/images/project-ai.png",
      "/images/project-backend.png",
      "/images/project-ecommerce.png"
    ];
    const index = project.name.length % placeholders.length;
    return placeholders[index];
  }

  return (
    <>
      <section className="max-w-2xl mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight text-white/90"
        >
          Featured <span className="text-gradient-primary">Architecture</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-400 leading-relaxed"
        >
          Selected case studies and architectural implementations. From cloud-native systems to open-source contributions.
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
              className="flex flex-col h-full glass-panel rounded-xl border border-white/5 hover:border-blue-500/30 transition-all p-5 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] group"
            >
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                <Image
                  src={getProjectImage(project)}
                  alt={project.name}
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-blue-400 font-medium tracking-wide">View Case Study →</span>
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h2>
                <p className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed">
                  {project.tagline}
                </p>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 3).map((tech, id) => (
                      <span
                        key={id}
                        className="px-2 py-1 text-xs glass-panel border border-white/10 text-gray-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-500">+ {project.technologies.length - 3}</span>
                    )}
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
        className="grid md:grid-cols-3 gap-8 glass-panel p-8 rounded-xl border border-white/10"
      >
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-2">{projects.length}+</h3>
          <p className="text-gray-400">Projects Delivered</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-2">100%</h3>
          <p className="text-gray-400">Uptime & Reliability</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-2">7+</h3>
          <p className="text-gray-400">Years Architecture</p>
        </div>
      </motion.section>
    </>
  );
} 