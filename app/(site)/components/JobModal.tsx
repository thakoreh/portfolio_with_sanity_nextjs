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
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-all"
        >
          <BiX size={24} />
        </button>

        <div className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <Image 
              src={job.logo} 
              alt={job.company} 
              width={64} 
              height={64} 
              className="rounded-full"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
              <div className="flex items-center gap-2 text-gray-600 mt-1">
                <BiBuildings />
                <span>{job.company}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 mt-1 text-sm">
                <BiCalendar />
                <span>{job.period}</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Responsibilities</h3>
              <ul className="space-y-2">
                {job.description.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Achievements</h3>
              <ul className="space-y-2">
                {job.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-600 shrink-0"></span>
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