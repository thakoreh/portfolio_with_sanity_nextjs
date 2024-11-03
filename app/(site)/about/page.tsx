// app/about/page.tsx

import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile } from "react-icons/bi";

export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
              <div className="order-2 lg:order-none">
                <h1 className="lg:text-5xl text-4xl lg:leading-tight font-bold mb-8 text-gray-800">
                  I&apos;m {data.fullName}. I live in {data.location}, where I
                  design the future.
                </h1>

                <div className="flex flex-col gap-y-3 text-gray-600 leading-relaxed">
                  <PortableText value={data.fullBio} />
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  {data.skills.map((skill, id) => (
                    <span
                      key={id}
                      className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                <div className="bg-white rounded-xl shadow-lg p-4">
                  <Image
                    className="rounded-xl mb-4 object-cover max-h-96 min-h-96 bg-top"
                    src={data.profileImage.image}
                    width={400}
                    height={400}
                    quality={100}
                    alt={data.profileImage.alt}
                  />

                  <a
                    href={`${data.resumeURL}?dl=${data.fullName}_resume`}
                    className="flex items-center justify-center gap-x-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg duration-200 py-3 text-center cursor-pointer font-medium"
                  >
                    <BiFile className="text-xl" /> Download Resumé
                  </a>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact</h2>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href={`mailto:${data.email}`}
                        className="flex items-center gap-x-2 text-gray-600 hover:text-blue-600 duration-300"
                      >
                        <BiEnvelope className="text-xl" />
                        {data.email}
                      </a>
                    </li>
                    {Object.entries(data.socialLinks).map(([platform, url], index) => (
                      <li key={index}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-x-2 text-gray-600 hover:text-blue-600 duration-300"
                        >
                          {platform}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-24 max-w-2xl">
              <h2 className="font-semibold text-3xl text-gray-800 mb-4">Expertise</h2>
              <p className="text-gray-600 mb-8">
                I&apos;ve spent several years working on my skills. Here are some of my key areas of expertise:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.skills.map((skill, id) => (
                  <div
                    key={id}
                    className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </section>
          </div>
        ))}
    </main>
  );
}

