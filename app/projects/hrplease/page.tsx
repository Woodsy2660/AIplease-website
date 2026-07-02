import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { NumberedMarker } from "@/components/ui/marker";
import { hrplease } from "@/lib/content";

export const metadata: Metadata = {
  title: "HRplease — 24/7 Australian HR compliance assistant",
  description: hrplease.value,
};

const trainedOn = [
  "National Employment Standards",
  "Fair Work Act",
  "Fair Work templates",
];

export default function HRpleasePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border grain-rules">
        <Container className="py-16 sm:py-24 lg:py-28">
          <Reveal>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
              All projects
            </Link>
          </Reveal>
          <div className="mt-10 max-w-3xl">
            <Reveal>
              <Eyebrow>Project · Live</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <Image
                src="/brand/hrplease-wordmark.png"
                alt="HRplease"
                width={2577}
                height={330}
                priority
                className="mt-6 h-8 w-auto sm:h-9"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
                {hrplease.tagline}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink-soft sm:text-2xl">
                {hrplease.value}
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/contact?product=hrplease" size="lg">
                  Request access
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  href="/contact?product=hrplease"
                  size="lg"
                  variant="secondary"
                >
                  Ask a question
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Who it's for */}
      <Section tone="sand" bordered>
        <Container>
          <Reveal>
            <Eyebrow>Who it&apos;s for</Eyebrow>
            <h2 className="mt-5 max-w-3xl text-4xl sm:text-5xl">
              Built for the teams without HR on call.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-2">
            {hrplease.audiences.map((audience, i) => (
              <Reveal
                key={audience}
                delay={i * 0.06}
                className="flex flex-col bg-sand p-8 sm:p-10"
              >
                <NumberedMarker value={`0${i + 1}`} />
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                  {audience}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section tone="canvas" bordered>
        <Container>
          <Reveal>
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="mt-5 max-w-3xl text-4xl sm:text-5xl">
              From a legislation search to a sourced answer.
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-2">
            {hrplease.capabilities.map((capability, i) => (
              <Reveal key={capability.title} delay={i * 0.06} className="h-full">
                <li className="flex h-full flex-col bg-canvas p-8 sm:p-10">
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden
                      className="size-1.5 rounded-full bg-accent"
                    />
                    <h3 className="text-lg font-semibold tracking-tight">
                      {capability.title}
                    </h3>
                  </div>
                  <p className="mt-3 leading-relaxed text-ink-soft">
                    {capability.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* How it works */}
      <Section tone="ink" bordered>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal>
              <Eyebrow inverted>How it works</Eyebrow>
              <h2 className="mt-5 text-4xl sm:text-5xl">
                Every answer is traceable to source.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-xl leading-relaxed text-canvas/80">
                {hrplease.howItWorks}
              </p>
              <div className="mt-10 border-t border-canvas/15 pt-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-canvas/50">
                  Trained on
                </p>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {trainedOn.map((source) => (
                    <li
                      key={source}
                      className="inline-flex items-center gap-2 rounded-full border border-canvas/20 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-canvas/80"
                    >
                      <Check className="size-3 text-accent" aria-hidden />
                      {source}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
