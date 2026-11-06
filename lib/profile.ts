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
    // Public city from the latest résumé; do not expose the street address.
    location: "Paris, Ontario",
    image: profile.profileImage?.image || "/images/hiren-portrait.jpg",
    // Keep every download on the explicitly supplied, version-controlled résumé.
    resume: "/hiren-thakore-resume.pdf",
    github: profile.socialLinks?.github || "https://github.com/thakoreh",
    linkedin:
      profile.socialLinks?.linkedin ||
      "https://www.linkedin.com/in/hirenthakore/",
  };
});
export type PortfolioProfile = Awaited<ReturnType<typeof loadProfile>>;
