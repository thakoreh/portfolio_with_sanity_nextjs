// app/about/page.tsx

import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import ScrollAnimation from "../components/ScrollAnimation";
import SectionDivider from "../components/SectionDivider";

export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="min-h-screen bg-[#0F172A] text-white pt-24 pb-16">
      <div className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
        {profile &&
          profile.map((data) => (
            <div key={data._id}>
              <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 justify-items-center">
                <ScrollAnimation>
                  <div className="order-2 lg:order-none w-full">
                    {/* Latest Role (Manual Update) */}
                    <div className="mb-12">
                      <h2 className="text-2xl font-bold text-white mb-6">Current Mission</h2>
                      <div className="glass-panel p-8 rounded-xl border border-blue-500/20 shadow-[0_0_30px_rgba(37,99,235,0.15)] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-3 bg-blue-600/20 rounded-bl-xl border-b border-l border-blue-500/30 text-blue-300 font-mono text-xs">
                          ACTIVE
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
                            <span className="font-bold text-blue-400">EM</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-xl text-white">Senior Software Development Engineer</h3>
                            <p className="text-blue-400">Evertz Microsystems</p>
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          Architecting high-performance software solutions for media and broadcasting industries.
                          Focusing on scalable backend infrastructure, real-time data processing, and optimizing system latency for critical broadcasting workflows.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
                          <span>June 2024 - Present</span>
                          <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                          <span>Burlington, ON</span>
                        </div>
                      </div>
                    </div>

                    {/* Bio Section (Manual Update) */}
                    <div className="mb-12">
                      <h2 className="text-4xl font-bold mb-6 text-white inline-block border-b-2 border-emerald-500 pb-2">About The Architect</h2>
                      <div className="glass-panel p-8 rounded-2xl border border-white/5 shadow-2xl">
                        <div className="text-gray-300 leading-relaxed font-light space-y-6 text-lg">
                          <p>
                            I am a <strong className="text-white">Senior Software Development Engineer</strong> and Cloud Architect with a passion for building scalable, high-performance systems. My journey is defined by a relentless pursuit of engineering excellence—transforming complex requirements into robust, "Deep Space" reliable infrastructure.
                          </p>
                          <p>
                            Currently at <strong className="text-blue-400">Evertz Microsystems</strong>, I architect next-generation media workflow solutions, optimizing critical data paths for broadcasting giants. Previously, I engineered heavy-lifting backend strategies at <strong className="text-blue-400">VL OMNI</strong> that processed millions in revenue and streamlined operations for global e-commerce brands.
                          </p>
                          <p>
                            Beyond code, I am an advocate for <strong>Agentic AI</strong> and open-source contribution. Whether it's building LLM-friendly crawlers or visualizing complex ASTs, I build tools that empower other developers. I thrive in environments where performance, scalability, and clean architecture are paramount.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Education Section */}
                    <div className="mb-12">
                      <h2 className="text-2xl font-bold text-white mb-6">Education & Foundation</h2>
                      <div className="space-y-4">
                        <div className="glass-panel p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all group">
                          <h3 className="font-semibold text-xl text-white group-hover:text-blue-400 transition-colors">MSC in Electrical-Computer Engineering</h3>
                          <p className="text-emerald-400 font-mono text-sm mt-1">University of Windsor</p>
                          <p className="text-sm text-gray-500 mt-2">2017 - 2018</p>
                        </div>
                        <div className="glass-panel p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all group">
                          <h3 className="font-semibold text-xl text-white group-hover:text-blue-400 transition-colors">Bachelor&apos;s in Computer Science & Engineering</h3>
                          <p className="text-emerald-400 font-mono text-sm mt-1">Gujarat Technological University</p>
                          <p className="text-sm text-gray-500 mt-2">2012 - 2016</p>
                        </div>
                      </div>
                    </div>

                    {/* Skills Section (Manual Update) */}
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-6">arsenal.tech_stack</h2>
                      <div className="flex flex-wrap gap-3">
                        {[
                          "TypeScript", "Next.js", "React", "Node.js", "Python", "GraphQL",
                          "AWS Lambda", "DynamoDB", "Docker", "Kubernetes", "Tailwind CSS",
                          "System Architecture", "OpenAI API", "CI/CD"
                        ].map((skill, id) => (
                          <span
                            key={id}
                            className="px-4 py-2 bg-blue-900/20 border border-blue-500/20 text-blue-300 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation>
                  <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12 w-full max-w-md">
                    {/* Profile Card */}
                    <div className="glass-panel rounded-2xl shadow-2xl p-6 border border-white/10 relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
                      <div className="relative mb-8 rounded-xl overflow-hidden shadow-inner border border-white/5">
                        <Image
                          className="object-cover w-full h-[400px] transform group-hover:scale-105 transition-transform duration-700"
                          src={data.profileImage.image}
                          width={400}
                          height={400}
                          quality={100}
                          alt={data.profileImage.alt}
                          priority
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                          <p className="text-white text-center font-bold text-lg">{data.fullName}</p>
                          <p className="text-blue-400 text-center text-sm">Senior Software Engineer & Architect</p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex justify-center mb-8">
                        <a
                          href={`${data.resumeURL}?dl=${data.fullName}_resume`}
                          className="flex items-center justify-center gap-x-2 bg-white text-slate-900 hover:bg-blue-500 hover:text-white rounded-full px-8 py-3 text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all duration-300"
                        >
                          <BiFile className="text-xl" /> Download Blueprint
                        </a>
                      </div>

                      {/* Contact Info */}
                      <div className="space-y-6 border-t border-white/10 pt-6">
                        <div>
                          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Base Of Operations</h3>
                          <p className="text-gray-300 flex items-center gap-2"><span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> {data.location}</p>
                        </div>

                        <div>
                          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Communication Channels</h3>
                          <div className="space-y-4">
                            <a
                              href={`mailto:${data.email}`}
                              className="flex items-center gap-x-3 text-gray-300 hover:text-blue-400 duration-300 group/link"
                            >
                              <div className="p-2 bg-white/5 rounded-lg group-hover/link:bg-blue-500/20 transition-colors">
                                <BiEnvelope className="text-xl" />
                              </div>
                              {data.email}
                            </a>
                            <div className="flex gap-4 pt-2">
                              <a
                                href={data.socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white hover:bg-black transition-all duration-300"
                              >
                                <BiLogoGithub className="text-2xl" />
                              </a>
                              <a
                                href={data.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white hover:bg-[#0077b5] transition-all duration-300"
                              >
                                <BiLogoLinkedin className="text-2xl" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </section>
            </div>
          ))}
      </div>
    </main>
  );
}

