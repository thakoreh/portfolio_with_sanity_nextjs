import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import AnimatedProjects from "../components/AnimatedProjects";
import { manualProjects } from "@/data/projects";

export default async function Projects() {
  const sanityProjects: ProjectType[] = await getProjects();

  // Merge manual projects with Sanity projects, prioritizing the new ones
  const allProjects = [...manualProjects, ...sanityProjects];

  return (
    <main className="min-h-screen bg-[#0F172A] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto md:px-16 px-6">
        <AnimatedProjects projects={allProjects} />
      </div>
    </main>
  );
}