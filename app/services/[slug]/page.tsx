import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { NumberedMarker } from "@/components/ui/marker";
import { CaseStudiesGrid } from "@/components/site/work-grid";
import { pillars, getPillar, caseStudies } from "@/lib/content";

export async function generateStaticParams() {
  return pillars.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPillar(slug);
  return p ? { title: p.name, description: p.summary } : {};
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) notFound();

  const relatedWork = caseStudies.filter((c) => c.pillarSlug === pillar.slug);
  const work = relatedWork.length > 0 ? relatedWork : caseStudies.slice(0, 3);
  const otherPillars = pillars.filter((p) => p.slug !== pillar.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border grain-rules">
        <Container className="py-12 sm:py-16 lg:py-20">
          <Reveal>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
              All services
            </Link>
          </Reveal>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.55fr_1fr] lg:items-end lg:gap-10">
            <div>
              <Reveal>
                <Eyebrow index={pillar.number}>{pillar.name}</Eyebrow>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-5 max-w-3xl text-[2.1rem] font-semibold leading-[1.04] tracking-tight sm:text-4xl lg:text-[2.75rem]">
                  {pillar.headline}
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
                  {pillar.summary}
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button href="/contact">
                    Let&apos;s Talk
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Tagline panel — quiet echo of the home hero spec sheet */}
            <Reveal delay={0.24} className="lg:pb-1">
              <div className="rounded-xl border border-border bg-canvas/60 p-5 backdrop-blur-sm sm:p-6">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                  In short
                </span>
                <p className="mt-3 text-balance text-lg leading-snug tracking-tight text-ink">
                  {pillar.tagline}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What we deliver */}
      <Section tone="sand" bordered>
        <Container>
          <Reveal>
            <Eyebrow>What we deliver</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl tracking-tight sm:text-4xl">
              Engineered for outcomes, not a feature list.
            </h2>
          </Reveal>
          <ul className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border">
            {pillar.offerings.map((offering, i) => (
              <Reveal key={offering} delay={i * 0.05}>
                <li className="flex items-baseline gap-4 bg-canvas px-6 py-5 sm:px-8">
                  <span
                    aria-hidden
                    className="size-1.5 shrink-0 translate-y-2 rounded-full bg-accent"
                  />
                  <span className="text-lg tracking-tight text-ink">
                    {offering}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* How we work */}
      <Section tone="canvas" bordered>
        <Container>
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl tracking-tight sm:text-4xl">
              A defined path from first call to delivery.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-3">
            {pillar.process.map((step, i) => (
              <Reveal
                key={step.step}
                delay={i * 0.06}
                className="flex flex-col bg-sand p-6"
              >
                <NumberedMarker value={step.step} />
                <h3 className="mt-5 text-xl tracking-tight">{step.title}</h3>
                <p className="mt-3 text-ink-soft">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Related work */}
      <Section tone="sand" bordered>
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>Related work</Eyebrow>
                <h2 className="mt-5 max-w-2xl text-3xl tracking-tight sm:text-4xl">
                  {relatedWork.length > 0
                    ? "What this looks like in practice."
                    : "How we measure the work we ship."}
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
            <CaseStudiesGrid items={work} />
          </div>
        </Container>
      </Section>

      {/* Explore the other pillars */}
      <Section tone="ink" bordered>
        <Container>
          <Reveal>
            <Eyebrow inverted>Explore the other pillars</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-canvas/15 sm:grid-cols-2">
            {otherPillars.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06} className="h-full">
                <Link
                  href={`/services/${p.slug}`}
                  className="group flex h-full flex-col bg-ink p-6 transition-colors hover:bg-canvas/5 sm:p-7"
                >
                  <NumberedMarker value={p.number} inverted />
                  <h3 className="mt-5 text-2xl tracking-tight text-canvas">
                    {p.name}
                  </h3>
                  <p className="mt-3 max-w-md text-canvas/70">{p.tagline}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-canvas transition-colors group-hover:text-accent">
                    Explore {p.name}
                    <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
