import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string,
  fullName: string,
  headline: string,
  profileImage: {
    alt: string,
    image: string
  },
  shortBio: string,
  email: string,
  fullBio: PortableTextBlock[],
  location: string,
  resumeURL: string,
  socialLinks: string[],
  skills: string[],
};

export type JobType = {
    _id: string;
    name: string;
    jobTitle: string;
    logo: string;
    url: string;
    description: string;
    startDate: Date;
    endDate: Date;
  };

export interface ProjectType {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  tagline: string;
  projectUrl: string;
  coverImage: {
    image: string;
    alt: string;
  };
  description: any;
  technologies: string[];
}