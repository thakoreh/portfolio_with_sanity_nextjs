'use client';

import { useEffect } from 'react';
import { BiX, BiCalendar, BiBuildings } from 'react-icons/bi';
import Image from "next/image";

type JobModalProps = {
  job: {
    title: string;
    company: string;
    period: string;
    description: string[];
    achievements: string[];
    logo: string;
  };
  onClose: () => void;
};

export default function JobModal({ job, onClose }: JobModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-2xl shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-all"
        >
          <BiX size={24} />
        </button>

        <div className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-white/10 p-2 rounded-xl">
              <Image
                src={job.logo}
                alt={job.company}
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{job.title}</h2>
              <div className="flex items-center gap-2 text-blue-400 mt-1 font-medium">
                <BiBuildings />
                <span>{job.company}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 mt-1 text-sm">
                <BiCalendar />
                <span>{job.period}</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3 tracking-wide">Responsibilities</h3>
              <ul className="space-y-3">
                {job.description.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3 tracking-wide">Key Achievements</h3>
              <ul className="space-y-3">
                {job.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 