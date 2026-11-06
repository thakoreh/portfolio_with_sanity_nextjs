import { cache } from "react";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";

// Public profile fallbacks keep the portfolio useful if the CMS is unavailable.
export const loadProfile = cache(async () => {
  let profile: Partial<ProfileType> = {};
  try {
    const profiles = await getProfile();
    profile = profiles?.[0] || {};
  } catch (error) {
    console.error("Portfolio profile unavailable", error);
  }
  return {
    fullName: profile.fullName || "Hiren Thakore",
    email: profile.email || "hiren.thakore58@gmail.com",
    location: profile.location || "Hamilton, Ontario",
    image: profile.profileImage?.image || "/images/hiren-portrait.jpg",
    resume:
      profile.resumeURL ||
      "https://cdn.sanity.io/files/rqj6hx4f/production/dd7c9fa557688d6e91d5089dc086ec4dd691aa0b.pdf",
    github: profile.socialLinks?.github || "https://github.com/thakoreh",
    linkedin:
      profile.socialLinks?.linkedin ||
      "https://www.linkedin.com/in/hirenthakore/",
  };
});
export type PortfolioProfile = Awaited<ReturnType<typeof loadProfile>>;
