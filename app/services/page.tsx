import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { NumberedMarker } from "@/components/ui/marker";
import { PillarsSection } from "@/components/site/pillars";
import { CaseStudiesGrid } from "@/components/site/work-grid";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategy to find where AI creates genuine value, build to ship systems that reach production, and partnership to keep them sharp — across the whole life of an AI system.",
};

// NEW process copy in the brand's business-first voice.
const engagement = [
  {
    value: "01",
    title: "Discover & scope",
    body: "We learn your operations, constraints, and economics before naming a use case — then size the opportunity and the risk. If AI isn't the right answer, you'll hear it here.",
  },
  {
    value: "02",
    title: "Build & harden",
    body: "A working slice in weeks, tested against real tasks. Then the unglamorous part: evaluation, guardrails, observability, and the edge cases that decide production.",
  },
  {
    value: "03",
    title: "Evolve & partner",
    body: "We stay on once it ships — monitoring, tuning, and upgrading as models and your business move — so the advantage you built compounds instead of decaying.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border grain-rules">
        <Container className="py-16 sm:py-24 lg:py-28">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-4xl text-[2.7rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Where AI fits your business — and where it doesn&apos;t.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-xl text-ink-soft sm:text-2xl">
              Three ways we work — strategy, build, and partnership — engineered
              to span the whole life of an AI system, from the first question to
              years after launch.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                Let&apos;s Talk
                <ArrowRight className="size-4" />
              </Button>
              <Button href="/work" size="lg" variant="secondary">
                See the work
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Three service pillars */}
      <PillarsSection
        eyebrow="What we do"
        heading="Three ways we work — across the whole life of an AI system."
      />

      {/* How an engagement works */}
      <Section tone="sand" bordered>
        <Container>
          <Reveal>
            <Eyebrow>How an engagement works</Eyebrow>
            <h2 className="mt-5 max-w-3xl text-4xl sm:text-5xl">
              From first conversation to a system that keeps earning its place.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-ink-soft">
              One continuous engagement, three phases. You can start at any one
              of them — most partners stay for all three.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border sm:mt-16 sm:grid-cols-3">
            {engagement.map((step, i) => (
              <Reveal
                key={step.value}
                delay={i * 0.06}
                className="flex flex-col bg-sand p-8"
              >
                <NumberedMarker value={step.value} />
                <h3 className="mt-5 text-xl tracking-tight sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-ink-soft">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Selected work */}
      <Section bordered>
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>Selected work</Eyebrow>
                <h2 className="mt-5 max-w-2xl text-4xl sm:text-5xl">
                  Outcomes, measured — not features, listed.
                </h2>
              </div>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                View all work
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
          <p className="mt-4 max-w-xl text-sm text-muted">
            Sample engagements shown for illustration while we publish our
            client work.
          </p>
          <div className="mt-12">
            <CaseStudiesGrid items={caseStudies.slice(0, 3)} />
          </div>
        </Container>
      </Section>
    </>
  );
}
