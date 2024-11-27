// app/page.tsx

import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import HeroSvg from "./components/HeroSvg";
import Job from "./components/Job";
import Link from "next/link";
import Image from "next/image";
import SkillsShowcase from './components/SkillsShowcase';
import Testimonials from './components/Testimonials';
import TechGlobe from './components/TechGlobe';
import GitHubActivity from './components/GitHubActivity';
import CodingStats from './components/CodingStats';
import FloatingTechStack from './components/FloatingTechStack';
import SectionDivider from './components/SectionDivider';
import FeaturedAchievement from './components/FeaturedAchievement';
import BlogPosts from './components/BlogPosts';
import ProblemSolving from './components/ProblemSolving';
import DeveloperProfile from "./components/DeveloperProfile";
import BlueSkyComments from './components/BlueSkyComments';

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-6 lg:px-16 pt-24 pb-16">
          <div className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-between gap-x-12">
            {profile &&
              profile.map((data) => (
                <div key={data._id} className="lg:max-w-2xl w-full">
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src="https://media.licdn.com/dms/image/v2/D5603AQH5XulB08-9tw/profile-displayphoto-shrink_800_800/0/1688578156925"
                      alt="Hiren Thakore"
                      width={80}
                      height={80}
                      className="rounded-full image-hover cursor-pointer"
                    />
                    <div>
                      <h1 className="text-4xl font-bold text-gray-800 mb-1">
                        Hiren Thakore
                      </h1>
                      <p className="text-lg text-gray-600">
                        Software Engineer
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    Driven by a passion for technology and innovation, I am a Software Engineer with expertise in crafting cloud-based solutions that propel business growth.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-10">
                    {["JavaScript", "Python", "React", "AWS", "Node.js"].map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a href="mailto:your-email@example.com" className="btn-primary group">
                      Contact Me
                      <span className="absolute right-4 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                    <Link
                      href="/projects"
                      className="px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                    >
                      View Projects
                    </Link>
                  </div>
                </div>
              ))}
            <div className="xl:w-1/2 w-full mt-12 xl:mt-0">
              <HeroSvg />
            </div>
          </div>
          <FloatingTechStack />
        </section>
        <SectionDivider />

        {/* Experience Section */}
        <section className="w-full bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <Job />
          </div>
        </section>
        <SectionDivider />

        <DeveloperProfile />

        {/* Skills Section */}
        <section className="w-full bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <SkillsShowcase />
          </div>
        </section>
        <SectionDivider />

        {/* Testimonials Section */}
        <section className="w-full bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <Testimonials />
          </div>
        </section>
        <SectionDivider />

        {/* After Testimonials section */}
        <TechGlobe />
        <CodingStats />
        
        {/* <GitHubActivity /> */}
        <FeaturedAchievement />
        <ProblemSolving />
        {/* <BlogPosts /> */}
        
        <BlueSkyComments />
      </main>
    </div>
  );
}