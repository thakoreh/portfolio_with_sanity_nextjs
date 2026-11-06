import type { Metadata } from "next";
import { loadProfile } from "@/lib/profile";
import WorkCollection from "../components/WorkCollection";
import BentoProfile from "../components/BentoProfile";
export const metadata: Metadata = { title: "Work" };
export default async function Projects() {
  const profile = await loadProfile();
  return (
    <main className="work-route">
      <section className="work-route-collection container">
        <div className="centered-section-heading work-route-heading">
          <span className="eyebrow">CASE STUDIES</span>
          <h1 className="editorial-title">
            Featured <em>Work.</em>
          </h1>
        </div>
        <WorkCollection />
      </section>
      <div className="work-route-bento">
        <BentoProfile profile={profile} />
      </div>
    </main>
  );
}
