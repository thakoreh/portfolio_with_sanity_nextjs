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
import ModernFloatingTechStack from './components/ModernFloatingTechStack';
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
        {/* Modern Hero Section with Glassmorphism */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background with gradient and animated elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
          </div>
          
          {/* Floating tech stack background */}
          <ModernFloatingTechStack />
          
          {/* Main content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
            <div className="flex xl:flex-row flex-col xl:items-center items-center xl:justify-between gap-12">
              {profile &&
                profile.map((data) => (
                  <div key={data._id} className="lg:max-w-2xl w-full text-center xl:text-left">
                    {/* Glass card container */}
                    <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-center xl:justify-start gap-6 mb-8">
                          <div className="relative">
                            <Image
                              src="https://media.licdn.com/dms/image/v2/D5603AQH5XulB08-9tw/profile-displayphoto-shrink_800_800/0/1688578156925"
                              alt="Hiren Thakore"
                              width={120}
                              height={120}
                              className="rounded-full ring-4 ring-white/30 shadow-2xl"
                            />
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-sm"></div>
                          </div>
                          <div>
                            <h1 className="text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                              Hiren Thakore
                            </h1>
                            <p className="text-xl text-blue-600 font-medium">
                              Software Engineer
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-2xl text-gray-700 leading-relaxed mb-8 max-w-2xl">
                          Driven by a passion for technology and innovation, I craft 
                          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold"> cloud-based solutions </span>
                          that propel business growth.
                        </p>

                        <div className="flex flex-wrap justify-center xl:justify-start gap-3 mb-10">
                          {["JavaScript", "Python", "React", "AWS", "Node.js"].map((skill) => (
                            <span 
                              key={skill} 
                              className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-gray-700 font-medium hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
                          <a 
                            href="mailto:your-email@example.com" 
                            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                          >
                            <span className="relative z-10">Contact Me</span>
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 group-hover:translate-x-1 transition-transform duration-300">
                              →
                            </span>
                          </a>
                          <Link
                            href="/projects"
                            className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 font-semibold rounded-2xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                          >
                            View Projects
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              
              <div className="xl:w-1/2 w-full">
                <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/20">
                  <HeroSvg />
                </div>
              </div>
            </div>
          </div>
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