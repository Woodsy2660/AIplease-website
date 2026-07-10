import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { hrplease, projectsInDevelopment } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "The platforms we're building — starting with HRplease, our 24/7 Australian HR compliance assistant, with more in development.",
};

function StatusBadge({ status }: { status: "Live" | "In development" }) {
  const live = status === "Live";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em]",
        live ? "bg-accent/12 text-accent" : "border border-border text-muted",
      )}
    >
      <span
        aria-hidden
        className={cn("size-1.5 rounded-full", live ? "bg-accent" : "bg-muted")}
      />
      {status}
    </span>
  );
}

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border grain-rules">
        <Container className="py-12 sm:py-16 lg:py-20">
          <Reveal>
            <Eyebrow>Our projects</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 max-w-4xl text-[2.25rem] font-semibold leading-[1.02] tracking-tight sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
              Productising what we keep building.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-2xl text-lg text-ink-soft sm:text-xl">
              When we solve the same problem enough times, we turn it into a
              product. HRplease is the first to ship — more are in development.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Live — HRplease featured */}
      <Section bordered>
        <Container>
          <Reveal>
            <Eyebrow>Live now</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-8 rounded-2xl border border-border bg-sand p-6 sm:p-8 lg:p-10">
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <StatusBadge status="Live" />
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                      HR &amp; compliance
                    </span>
                  </div>
                  <Image
                    src="/brand/hrplease-wordmark.png"
                    alt="HRplease"
                    width={2577}
                    height={330}
                    className="mt-6 h-7 w-auto"
                  />
                  <h2 className="mt-4 text-2xl tracking-tight text-ink sm:text-3xl">
                    {hrplease.tagline}
                  </h2>
                  <p className="mt-4 max-w-md text-ink-soft">{hrplease.value}</p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button href="/projects/hrplease">
                      Explore HRplease
                      <ArrowRight className="size-4" />
                    </Button>
                    <Button href="/contact?product=hrplease" variant="secondary">
                      Request access
                    </Button>
                  </div>
                </div>
                <ul className="grid gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-2">
                  {hrplease.capabilities.map((c) => (
                    <li key={c.title} className="bg-canvas p-4">
                      <div className="flex items-center gap-2">
                        <Check className="size-3.5 text-accent" aria-hidden />
                        <h3 className="text-sm font-semibold tracking-tight">
                          {c.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {c.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* In development */}
      <Section tone="sand" bordered>
        <Container>
          <Reveal>
            <Eyebrow>In development</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl tracking-tight sm:text-4xl">
              More platforms on the way.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-muted">
              [SAMPLE] Working names and concepts shown for illustration.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projectsInDevelopment.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05} className="h-full">
                <Card className="flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                      {p.category}
                    </span>
                    <StatusBadge status="In development" />
                  </div>
                  <h3 className="mt-8 text-xl tracking-tight">{p.name}</h3>
                  <p className="mt-2 text-ink-soft">{p.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>
                  <div className="mt-auto pt-6 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                    Coming soon
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
