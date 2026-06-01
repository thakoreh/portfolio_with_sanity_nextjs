import Image from "next/image";
import { ArrowUpRight, Code2, Link2, MapPin } from "lucide-react";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { activityStats, currentFocus, experience, stack } from "@/data/portfolio";
import MotionReveal from "../components/MotionReveal";

export default async function About() {
  const profiles: ProfileType[] = await getProfile();
  const profile = profiles?.[0];

  return (
    <main className="min-h-[100dvh] bg-[#08090a] px-6 pb-24 pt-32 text-zinc-100 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <MotionReveal>
          <aside className="sticky top-28 space-y-6 self-start">
            <Card className="overflow-hidden rounded-[2rem] bg-[#0f1011]">
              <div className="relative aspect-[4/4.6] bg-zinc-950">
                {profile?.profileImage?.image ? (
                  <Image
                    src={profile.profileImage.image}
                    alt={profile.profileImage.alt || profile.fullName}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover"
                    priority
                  />
                ) : null}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#08090a] via-[#08090a]/70 to-transparent p-6">
                  <Badge variant="accent">LinkedIn profile</Badge>
                  <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-zinc-50">
                    {profile?.fullName || "Hiren Thakore"}
                  </h1>
                  <p className="mt-2 flex items-center gap-2 text-sm text-zinc-400">
                    <MapPin className="h-4 w-4" /> {profile?.location || "Hamilton, Ontario"}
                  </p>
                </div>
              </div>
              <CardContent className="space-y-3 p-6">
                <Button asChild className="w-full justify-between" variant="secondary">
                  <a href={profile?.socialLinks?.linkedin || "https://www.linkedin.com/in/hirenthakore/"} target="_blank" rel="noreferrer noopener">
                    LinkedIn <Link2 className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild className="w-full justify-between" variant="secondary">
                  <a href={profile?.socialLinks?.github || "https://github.com/thakoreh"} target="_blank" rel="noreferrer noopener">
                    GitHub <Code2 className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </MotionReveal>

        <div className="space-y-16">
          <MotionReveal>
            <section className="space-y-6">
              <Badge variant="accent">About</Badge>
              <h2 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.07em] text-zinc-50 md:text-6xl">
                Senior software engineer building an AI product portfolio.
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-zinc-400">
                I combine professional backend, cloud, and integration experience with a current focus on AI products, developer tooling, trust QA, and automation-led micro-SaaS systems. The throughline is practical software that makes technical teams faster, safer, or more informed.
              </p>
            </section>
          </MotionReveal>

          <section className="grid gap-4 md:grid-cols-2">
            {currentFocus.map((focus, index) => (
              <MotionReveal key={focus} delay={index * 0.05}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan-200">Focus {String(index + 1).padStart(2, "0")}</p>
                    <p className="mt-4 text-xl font-semibold tracking-[-0.04em] text-zinc-50">{focus}</p>
                  </CardContent>
                </Card>
              </MotionReveal>
            ))}
          </section>

          <section className="space-y-4">
            <MotionReveal>
              <div>
                <Badge variant="accent">Experience</Badge>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-zinc-50">Engineering background</h2>
              </div>
            </MotionReveal>
            {experience.map((job, index) => (
              <MotionReveal key={job.company} delay={index * 0.05}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="text-sm text-cyan-200">{job.company}</p>
                        <h3 className="mt-1 text-2xl font-semibold tracking-[-0.04em] text-zinc-50">{job.role}</h3>
                      </div>
                      <span className="font-mono text-xs text-zinc-500">{job.timeline}</span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-zinc-400">{job.description}</p>
                  </CardContent>
                </Card>
              </MotionReveal>
            ))}
          </section>

          <section className="grid gap-4 md:grid-cols-4">
            {activityStats.map((stat) => (
              <Card key={stat.label}>
                <CardContent className="p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">{stat.label}</p>
                  <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-zinc-50">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section>
            <Card className="rounded-[2rem] bg-[#0f1011]">
              <CardContent className="p-7">
                <div className="flex flex-wrap gap-3">
                  {stack.map((item) => (
                    <Badge key={item} className="px-4 py-2 text-sm">{item}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
}
