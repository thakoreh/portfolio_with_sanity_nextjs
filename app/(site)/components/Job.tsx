'use client';

import { BiCalendar } from "react-icons/bi";
import { useState } from "react";
import JobModal from "./JobModal";
import Image from "next/image";

const jobData = {
  evertz: {
    title: "Senior Software Development Engineer",
    company: "Evertz Microsystems",
    period: "June 2024 - Present",
    logo: "https://ui-avatars.com/api/?name=Evertz&background=0D8ABC&color=fff",
    description: [
      "Architecting high-performance software solutions for media and broadcasting industries",
      "Developing scalable backend infrastructure and real-time data processing systems",
      "Collaborating with cross-functional teams to deliver enterprise-grade software",
      "Optimizing system latency and ensuring high availability for critical broadcasting workflows"
    ],
    achievements: [
      "Leading development of next-generation broadcasting control systems",
      "Engineered robust microservices architecture for media management",
      "Reduced system latency by optimizing critical data paths",
      "Mentoring junior developers and driving code quality standards"
    ]
  },
  eHouse: {
    title: "Software Developer",
    company: "eHouse Studio",
    period: "July 2024 - Present",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQFDr1vbpFR0eQ/company-logo_400_400/company-logo_400_400/0/1720621749295/_e_house_studio_logo",
    description: [
      "Building and maintaining e-commerce solutions using modern web technologies",
      "Collaborating with cross-functional teams to deliver exceptional digital experiences",
      "Implementing best practices for web development and performance optimization",
      "Contributing to technical architecture decisions and project planning"
    ],
    achievements: [
      "Successfully onboarded and contributed to multiple client projects within first month",
      "Implementing modern frontend solutions using React and Next.js",
      "Collaborating on e-commerce platform integrations"
    ]
  },
  vlOmni: {
    title: "Software Engineer",
    company: "VL OMNI",
    period: "June 2019 - July 2024",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFkuFJT7I3LKQ/company-logo_400_400/company-logo_400_400/0/1631342984865",
    description: [
      "Led development of Amazon Seller Central and Shopify connectors",
      "Built backend engine for real-time inventory tracking using GraphQL and DynamoDB",
      "Implemented order processing system using AWS SQS and notification system with AWS SNS/SES",
      "Led integration projects with Microsoft Business Dynamics/NAV"
    ],
    achievements: [
      "Generated over $1M in revenue through connector development",
      "Successfully delivered 20+ major integration projects",
      "Reduced system response time by 40% through optimization",
      "Built internal dashboard improving team productivity by 25%"
    ]
  },
  upwork: {
    title: "Software Developer",
    company: "Upwork",
    period: "May 2018 - June 2019",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFHVb6ZSCipCw/company-logo_400_400/company-logo_400_400/0/1727104517379/upwork_logo",
    description: [
      "Developed and maintained various client projects",
      "Implemented automated testing and CI/CD pipelines",
      "Resolved critical issues in AWS, MongoDB, and Redis",
      "Modernized legacy systems and automated processes"
    ],
    achievements: [
      "Completed large data migration to new MongoDB clusters",
      "Reduced manual testing time by 70% through automation",
      "Improved application performance by 50%",
      "Successfully delivered 15+ client projects"
    ]
  }
};

export default function Job() {
  const [selectedJob, setSelectedJob] = useState<keyof typeof jobData | null>(null);

  return (
    <section className="py-20 relative">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
        <p className="text-gray-400 max-w-lg text-lg">
          My professional journey across different companies and roles.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(jobData).map(([key, job]) => (
          <div
            key={key}
            className="glass-panel rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            onClick={() => setSelectedJob(key as keyof typeof jobData)}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{job.title}</h3>
                <p className="text-blue-400 font-medium">{job.company}</p>
              </div>
              <div className="bg-white/10 p-2 rounded-lg">
                <Image
                  src={job.logo}
                  alt={job.company}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
              {job.description[0]}
            </p>
            <div className="flex items-center text-gray-500 text-sm border-t border-white/5 pt-4">
              <BiCalendar className="mr-2" />
              <span>{job.period}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedJob && (
        <JobModal
          job={jobData[selectedJob]}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </section>
  );
}