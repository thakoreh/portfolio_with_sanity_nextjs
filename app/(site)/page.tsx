import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import HeroSection from "./components/HeroSection";
import FeaturedArchitecture from "./components/FeaturedArchitecture";
import Job from "./components/Job";
import SkillsShowcase from './components/SkillsShowcase';
import TechGlobe from './components/TechGlobe';
import FloatingTechStack from './components/FloatingTechStack';
import SectionDivider from './components/SectionDivider';
import CodingStats from './components/CodingStats';
import FeaturedAchievement from './components/FeaturedAchievement';
import ProblemSolving from './components/ProblemSolving';
import BlueSkyComments from './components/BlueSkyComments';

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-white selection:bg-blue-500/30 selection:text-blue-200">
      <main className="flex-grow">

        {/* New Hero Section */}
        {profile && profile.length > 0 && <HeroSection profile={profile[0]} />}
        <FloatingTechStack />

        <SectionDivider />

        {/* Featured Projects / Architecture */}
        <FeaturedArchitecture />
        <SectionDivider />

        {/* Work Experience */}
        <div className="max-w-7xl mx-auto px-6">
          <Job />
        </div>
        <SectionDivider />

        {/* Skills */}
        <SkillsShowcase />
        <SectionDivider />

        {/* 3D Elements & Stats */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-blue-900/5 z-0 pointer-events-none"></div>
          <TechGlobe />

          <div className="relative z-10 mt-20 max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-10 text-white">Engineering Activity</h3>
            <CodingStats />
          </div>
        </section>

        {/* Additional Sections */}
        <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
          <FeaturedAchievement />
          <ProblemSolving />
          <BlueSkyComments />
        </div>

      </main>
    </div>
  );
}