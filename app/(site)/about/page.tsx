import type { Metadata } from "next";
import { loadProfile } from "@/lib/profile";
import { experience } from "@/data/portfolio";
import AboutIntro from "../components/AboutIntro";
import GitHubActivity from "../components/GitHubActivity";
import CreativeSpace from "../components/CreativeSpace";
export const metadata: Metadata = { title: "About" };
export default async function About() {
  const profile = await loadProfile();
  return (
    <main className="about-route">
      <AboutIntro profile={profile} asPageTitle />
      <section
        className="career-section container"
        aria-labelledby="career-title"
      >
        <h2 className="editorial-title" id="career-title">
          My <em>Experience.</em>
        </h2>
        <div className="career-timeline">
          {experience.map((job) => (
            <article className="career-entry" key={job.company}>
              <span className="career-marker" aria-hidden="true" />
              <h3>
                {job.role} <span>· {job.company}</span>
              </h3>
              <p className="career-dates">{job.timeline}</p>
              <p>{job.description}</p>
            </article>
          ))}
        </div>
      </section>
      <GitHubActivity />
      <CreativeSpace />
    </main>
  );
}
