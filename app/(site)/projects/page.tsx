import { ArrowUpRight, Boxes, Code2, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { builds, githubSignals } from "@/data/portfolio";
import MotionReveal from "../components/MotionReveal";

const productIcons = [Boxes, ShieldCheck, Code2, Boxes];

export default function Projects() {
  return (
    <main className="min-h-[100dvh] bg-[#08090a] px-6 pb-24 pt-32 text-zinc-100 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl space-y-16">
        <MotionReveal>
          <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <Badge variant="accent">Projects</Badge>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.07em] text-zinc-50 md:text-6xl">
                Current builds and GitHub signal.
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-zinc-400">
              A cleaner project archive focused on what matters now: AI stack intelligence, trust QA, agent tooling, benchmarks, MCP utilities, and monetizable micro-SaaS experiments.
            </p>
          </section>
        </MotionReveal>

        <section className="grid gap-4 md:grid-cols-2">
          {builds.map((project, index) => {
            const Icon = productIcons[index % productIcons.length];
            return (
              <MotionReveal key={project.name} delay={index * 0.05}>
                <Card className="group h-full overflow-hidden rounded-[2rem] transition-colors hover:bg-white/[0.055]">
                  <CardContent className="flex h-full flex-col justify-between p-7">
                    <div>
                      <div className="mb-10 flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.05] text-cyan-200 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <Badge>{project.stage}</Badge>
                      </div>
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">{project.metric}</p>
                      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-zinc-50">{project.name}</h2>
                      <p className="mt-4 text-sm leading-7 text-zinc-400">{project.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </MotionReveal>
            );
          })}
        </section>

        <section className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <MotionReveal>
            <div className="sticky top-28 space-y-5 self-start">
              <Badge variant="accent">Recent repositories</Badge>
              <h2 className="text-4xl font-semibold tracking-[-0.06em] text-zinc-50">The public build log</h2>
              <p className="text-sm leading-7 text-zinc-400">
                These repos were selected from recent GitHub activity and represent the strongest positioning signal for the portfolio refresh.
              </p>
              <Button asChild variant="secondary">
                <a href="https://github.com/thakoreh" target="_blank" rel="noreferrer noopener">
                  Open GitHub <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </MotionReveal>

          <div className="space-y-4">
            {githubSignals.map((repo, index) => (
              <MotionReveal key={repo.repo} delay={index * 0.05}>
                <a href={repo.href} target="_blank" rel="noreferrer noopener" className="group block">
                  <Card className="transition-colors group-hover:bg-white/[0.055]">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div>
                          <div className="mb-4 flex flex-wrap gap-2">
                            <Badge>{repo.language}</Badge>
                            <Badge variant="dark">{repo.updated}</Badge>
                          </div>
                          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-zinc-50">{repo.repo}</h3>
                          <p className="mt-1 text-sm text-cyan-200">{repo.label}</p>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-zinc-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-200" />
                      </div>
                      <p className="mt-4 text-sm leading-7 text-zinc-400">{repo.description}</p>
                    </CardContent>
                  </Card>
                </a>
              </MotionReveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
