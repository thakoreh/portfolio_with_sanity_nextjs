// app/about/page.tsx

import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import ScrollAnimation from "../components/ScrollAnimation";

export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
              <ScrollAnimation>
                <div className="order-2 lg:order-none">
                  {/* Education Section */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <div className="mb-4 last:mb-0">
                        <h3 className="font-medium text-gray-800">MSC in Electrical-Computer Engineering</h3>
                        <p className="text-gray-600">University of Windsor</p>
                        <p className="text-sm text-gray-500">2017 - 2018</p>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">Bachelor&apos;s in Computer Science & Engineering</h3>
                        <p className="text-gray-600">Gujarat Technological University</p>
                        <p className="text-sm text-gray-500">2012 - 2016</p>
                      </div>
                    </div>
                  </div>

                  {/* Bio Section */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
                    <div className="prose prose-gray">
                      <div className="text-gray-600 leading-relaxed">
                        <PortableText value={data.fullBio} />
                      </div>
                    </div>
                  </div>

                  {/* Skills Section */}
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Specializations</h2>
                    <div className="flex flex-wrap gap-3">
                      {data.skills.map((skill, id) => (
                        <span
                          key={id}
                          className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                  {/* Profile Card */}
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                    <div className="relative mb-8">
                      <Image
                        className="rounded-xl object-cover max-h-96 min-h-96"
                        src={data.profileImage.image}
                        width={400}
                        height={400}
                        quality={100}
                        alt={data.profileImage.alt}
                        priority
                      />
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                        <a
                          href={`${data.resumeURL}?dl=${data.fullName}_resume`}
                          className="flex items-center justify-center gap-x-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <BiFile className="text-xl" /> Download Resumé
                        </a>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Location</h3>
                        <p className="text-gray-600">{data.location}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Contact</h3>
                        <div className="space-y-4">
                          <a
                            href={`mailto:${data.email}`}
                            className="flex items-center gap-x-2 text-gray-600 hover:text-blue-600 duration-300"
                          >
                            <BiEnvelope className="text-xl" />
                            {data.email}
                          </a>
                          <div className="flex gap-4">
                            <a
                              href={data.socialLinks.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-blue-600 duration-300"
                            >
                              <BiLogoGithub className="text-2xl" />
                            </a>
                            <a
                              href={data.socialLinks.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-blue-600 duration-300"
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
    </main>
  );
}

