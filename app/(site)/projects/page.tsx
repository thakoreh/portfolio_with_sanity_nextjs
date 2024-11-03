import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import AnimatedProjects from "../components/AnimatedProjects";

export default async function Projects() {
  const projects: ProjectType[] = await getProjects();

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 py-24">
      <AnimatedProjects projects={projects} />
    </main>
  );
}