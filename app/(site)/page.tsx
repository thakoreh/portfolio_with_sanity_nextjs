import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Link2,
  MapPin,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  activityStats,
  builds,
  currentFocus,
  experience,
  githubSignals,
  stack,
} from "@/data/portfolio";
import MotionReveal from "./components/MotionReveal";

const fallbackProfile = {
  fullName: "Hiren Thakore",
  headline: "Senior Software Development Engineer building AI products and developer tools",
  shortBio:
    "Software engineer focused on AI products, developer tooling, cloud systems, and automation-heavy workflows.",
  location: "Hamilton, Ontario",
  profileImage: { image: "/images/digital-identity.png", alt: "Hiren Thakore" },
  socialLinks: {
    github: "https://github.com/thakoreh",
    linkedin: "https://www.linkedin.com/in/hirenthakore/",
  },
};

const workModes = [
  {
    icon: Cpu,
    title: "AI product builder",
    body: "Turning messy AI workflows into software products with clear positioning, pragmatic automation, and measurable user value.",
  },
  {
    icon: TerminalSquare,
    title: "Developer-tool operator",
    body: "Shipping CLI, MCP, benchmark, QA, and internal tooling that helps engineers choose, test, and control modern AI stacks.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability-minded engineer",
    body: "Backend, cloud, integration, and broadcast software experience with an emphasis on data paths, scale, and operational safety.",
  },
];

export default async function Home() {
  const profiles: ProfileType[] = await getProfile();
  const profile = profiles?.[0] ?? fallbackProfile;
  const socialLinks = {
    github: profile.socialLinks?.github || fallbackProfile.socialLinks.github,
    linkedin: profile.socialLinks?.linkedin || fallbackProfile.socialLinks.linkedin,
  };

  return (
    <main className="min-h-[100dvh] overflow-hidden bg-[#08090a] text-zinc-100">
      <section className="relative border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.06),transparent_24%)]" />
        <div className="absolute inset-0 architect-grid opacity-40" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-32 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-16 lg:pb-28 lg:pt-36">
          <MotionReveal>
            <div className="flex flex-col items-start gap-8">
              <Badge variant="accent" className="font-mono uppercase tracking-[0.18em]">
                AI systems / developer tools / cloud software
              </Badge>

              <div className="space-y-6">
                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.07em] text-zinc-50 md:text-7xl">
                  I build AI products that software teams can actually use.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
                  {profile.fullName} is a {profile.headline?.replace(" | AWS Certified Developer ", "") || "software engineer"}. Recent work centers on AI stack intelligence, trust QA for AI-built websites, agent tooling, and micro-SaaS systems.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/projects">
                    View current builds <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href={socialLinks.github} target="_blank" rel="noreferrer noopener">
                    GitHub activity <Code2 className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="grid w-full gap-3 sm:grid-cols-2 lg:max-w-2xl">
                {currentFocus.map((item) => (
                  <div key={item} className="rounded-xl bg-white/[0.035] px-4 py-3 text-sm text-zinc-300 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12}>
            <Card className="relative overflow-hidden rounded-[2rem] bg-[#0f1011]/90">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-zinc-900 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]">
                    <Image
                      src={profile.profileImage?.image || fallbackProfile.profileImage.image}
                      alt={profile.profileImage?.alt || profile.fullName}
                      fill
                      sizes="80px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-200">Available signal</p>
                    <CardTitle className="mt-2 text-2xl">{profile.fullName}</CardTitle>
                    <p className="mt-1 flex items-center gap-2 text-sm text-zinc-400">
                      <MapPin className="h-4 w-4" /> {profile.location || "Hamilton, Ontario"}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-2xl bg-zinc-950/70 p-4 font-mono text-sm leading-7 text-zinc-300 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
                  <div className="text-zinc-500">$ current_focus</div>
                  <div className="text-cyan-200">AI stack intelligence</div>
                  <div className="text-cyan-200">trust QA for AI-built websites</div>
                  <div className="text-cyan-200">agent tooling and MCP utilities</div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Button asChild variant="secondary" className="justify-between">
                    <a href={socialLinks.linkedin} target="_blank" rel="noreferrer noopener">
                      LinkedIn <Link2 className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="secondary" className="justify-between">
                    <a href={socialLinks.github} target="_blank" rel="noreferrer noopener">
                      GitHub <Code2 className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </MotionReveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-6 py-10 md:grid-cols-4 md:px-10 lg:px-16">
        {activityStats.map((stat, index) => (
          <MotionReveal key={stat.label} delay={index * 0.04}>
            <Card className="h-full rounded-2xl">
              <CardContent className="p-5">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">{stat.label}</p>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-zinc-50">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{stat.detail}</p>
              </CardContent>
            </Card>
          </MotionReveal>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">
        <MotionReveal>
          <div className="sticky top-28 space-y-5 self-start">
            <Badge variant="accent">GitHub-informed positioning</Badge>
            <h2 className="text-4xl font-semibold tracking-[-0.06em] text-zinc-50 md:text-5xl">
              The portfolio now reflects the work actually happening.
            </h2>
            <p className="text-base leading-7 text-zinc-400">
              Recent repository activity points to a clear lane: developer-facing AI products, agent infrastructure, trust tooling, and pragmatic micro-SaaS experiments.
            </p>
          </div>
        </MotionReveal>

        <div className="grid gap-4">
          {githubSignals.map((repo, index) => (
            <MotionReveal key={repo.repo} delay={index * 0.05}>
              <a href={repo.href} target="_blank" rel="noreferrer noopener" className="group block">
                <Card className="overflow-hidden transition-colors duration-200 group-hover:bg-white/[0.055]">
                  <CardContent className="grid gap-5 p-6 md:grid-cols-[1fr_auto] md:items-center">
                    <div>
                      <div className="mb-4 flex flex-wrap items-center gap-2">
                        <Badge>{repo.language}</Badge>
                        <Badge variant="dark">{repo.updated}</Badge>
                      </div>
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-zinc-50">
                        {repo.repo}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-cyan-200">{repo.label}</p>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">{repo.description}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-zinc-500 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-200" />
                  </CardContent>
                </Card>
              </a>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
          <MotionReveal>
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <Badge variant="accent">Current builds</Badge>
                <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-zinc-50 md:text-5xl">
                  Product surface area, not resume padding.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-zinc-400">
                This site now prioritizes the products and experiments that compound into wealth acceleration: useful software, clear niches, and repeatable shipping systems.
              </p>
            </div>
          </MotionReveal>

          <div className="grid gap-4 md:grid-cols-2">
            {builds.map((item, index) => (
              <MotionReveal key={item.name} delay={index * 0.05}>
                <Card className="h-full rounded-[1.75rem]">
                  <CardContent className="flex h-full flex-col justify-between p-7">
                    <div>
                      <div className="mb-8 flex items-center justify-between gap-4">
                        <Badge>{item.stage}</Badge>
                        <span className="font-mono text-xs text-zinc-500">{item.metric}</span>
                      </div>
                      <h3 className="text-3xl font-semibold tracking-[-0.05em] text-zinc-50">{item.name}</h3>
                      <p className="mt-4 text-sm leading-7 text-zinc-400">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[1fr_1fr] lg:px-16">
        <MotionReveal>
          <div className="space-y-5">
            <Badge variant="accent">LinkedIn-aligned profile</Badge>
            <h2 className="text-4xl font-semibold tracking-[-0.06em] text-zinc-50 md:text-5xl">
              Senior software engineer with a builder operating system.
            </h2>
            <p className="text-base leading-7 text-zinc-400">
              The career story now connects professional engineering depth with the current product direction: cloud systems, integrations, AI tooling, and fast product execution.
            </p>
          </div>
        </MotionReveal>

        <div className="space-y-4">
          {experience.map((job, index) => (
            <MotionReveal key={job.company} delay={index * 0.05}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm text-cyan-200">{job.company}</p>
                      <h3 className="mt-1 text-xl font-semibold tracking-[-0.03em] text-zinc-50">{job.role}</h3>
                    </div>
                    <span className="font-mono text-xs text-zinc-500">{job.timeline}</span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">{job.description}</p>
                </CardContent>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-16">
        <MotionReveal>
          <Card className="rounded-[2rem] bg-[#0f1011]">
            <CardContent className="grid gap-10 p-7 md:grid-cols-[0.85fr_1.15fr] md:p-10">
              <div>
                <Badge variant="accent">Stack</Badge>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-zinc-50">
                  Practical tools for shipping.
                </h2>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Strongest overlap: TypeScript products, Python automation, cloud integrations, AI agents, and content-backed growth loops.
                </p>
              </div>
              <div className="flex flex-wrap content-start gap-3">
                {stack.map((item) => (
                  <Badge key={item} className="px-4 py-2 text-sm">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </MotionReveal>
      </section>
    </main>
  );
}
