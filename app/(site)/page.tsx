// app/page.tsx

import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import HeroSvg from "./components/HeroSvg";
import Job from "./components/Job";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        {profile &&
          profile.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
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
                  <span key={skill} className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href="mailto:your-email@example.com"
                  className="btn-primary group"
                >
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
        <HeroSvg />
      </section>
      <Job />
    </main>
  );
}