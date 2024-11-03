'use client';

import { motion } from 'framer-motion';
import { BiGitBranch, BiStar, BiCode } from 'react-icons/bi';
import Link from 'next/link';

const githubData = {
  bio: "I'm a maestro of tech, navigating complex projects with OOP expertise and fostering robust communication. Committed to innovation.",
  location: "Toronto, ON, Canada",
  skills: [
    "Python",
    "Amazon Web Services (AWS)",
    "ReactJS",
    "FastAPI",
    "SQL",
    "NodeJS"
  ],
  pinnedRepos: [
    {
      name: "fetch-wallpapers-api",
      description: "developing API for fetching wallpapers as per need.",
      languages: ["Python"]
    },
    {
      name: "object-detection-ml",
      description: "The API gives the json response giving objects present in the posted image",
      languages: ["Python"]
    }
  ],
  achievements: ["Pull Shark", "YOLO"]
};

export default function DeveloperProfile() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Developer Profile</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{githubData.bio}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Skills Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <BiCode className="text-2xl text-blue-600" />
              Core Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {githubData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* GitHub Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <BiStar className="text-2xl text-yellow-500" />
              GitHub Achievements
            </h3>
            <div className="flex flex-wrap gap-4">
              {githubData.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full text-sm"
                >
                  <span className="text-lg">🏆</span>
                  {achievement}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Featured Repositories */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Featured Repositories
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {githubData.pinnedRepos.map((repo, index) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <BiGitBranch className="text-blue-600" />
                      {repo.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{repo.description}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {repo.languages.map((lang, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://github.com/thakoreh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            View More on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 