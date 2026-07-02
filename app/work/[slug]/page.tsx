import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { NumberedMarker } from "@/components/ui/marker";
import { MetricStat } from "@/components/ui/metric-stat";
import { CaseStudiesGrid } from "@/components/site/work-grid";
import { caseStudies, getCaseStudy } from "@/lib/content";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  return c ? { title: c.title, description: c.summary } : {};
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const moreWork = caseStudies.filter((c) => c.slug !== study.slug);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <Container className="py-16 sm:py-20 lg:py-24">
          <Reveal>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
              All work
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-16">
            <div>
              <Reveal delay={0.06}>
                <div className="flex flex-wrap items-center gap-4">
                  <Eyebrow>{study.industry}</Eyebrow>
                  <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-muted">
                    Sample
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                  {study.title}
                </h1>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-6 max-w-2xl text-lg text-ink-soft sm:text-xl">
                  {study.summary}
                </p>
              </Reveal>
            </div>

            {/* Headline metric */}
            <Reveal delay={0.24} className="lg:pb-2">
              <div className="rounded-2xl border border-border bg-sand p-8">
                <div className="font-display text-6xl font-semibold tracking-tight tabular-nums text-ink sm:text-7xl">
                  {study.metric}
                </div>
                <div className="mt-2 text-sm leading-snug text-muted">
                  {study.metricLabel}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* The challenge */}
      <Section tone="canvas">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <Reveal>
              <Eyebrow index="01">The challenge</Eyebrow>
              <h2 className="mt-5 text-3xl tracking-tight sm:text-4xl">
                What stood in the way.
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <ul className="divide-y divide-border border-t border-border">
                {study.challenge.map((item) => (
                  <li
                    key={item}
                    className="py-5 text-lg leading-relaxed text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Our approach */}
      <Section tone="sand" bordered>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <Reveal>
              <Eyebrow index="02">Our approach</Eyebrow>
              <h2 className="mt-5 text-3xl tracking-tight sm:text-4xl">
                How we engineered it.
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <ol className="grid gap-px overflow-hidden rounded-2xl border border-border">
                {study.approach.map((item, i) => (
                  <li
                    key={item}
                    className="flex gap-5 bg-canvas p-6 sm:p-7"
                  >
                    <NumberedMarker value={`0${i + 1}`} className="pt-0.5" />
                    <p className="text-lg leading-relaxed text-ink-soft">
                      {item}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Results */}
      <Section tone="canvas" bordered>
        <Container>
          <Reveal>
            <Eyebrow index="03">Results</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl tracking-tight sm:text-4xl">
              Outcomes, measured — not features, listed.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-3">
            {study.results.map((r, i) => (
              <Reveal
                key={r.label}
                delay={i * 0.06}
                className="bg-sand p-8 sm:p-10"
              >
                <MetricStat value={r.value} label={r.label} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quote */}
      <Section tone="ink" bordered>
        <Container>
          <Reveal>
            <Eyebrow inverted>In their words</Eyebrow>
            <figure className="mt-8 max-w-4xl">
              <blockquote className="text-balance text-3xl leading-[1.2] tracking-tight text-canvas sm:text-4xl">
                {study.quote.text}
              </blockquote>
              <figcaption className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-canvas/70">
                {study.quote.name} — {study.quote.role}
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </Section>

      {/* More work */}
      <Section tone="sand" bordered>
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>More work</Eyebrow>
                <h2 className="mt-5 max-w-2xl text-3xl tracking-tight sm:text-4xl">
                  Other engagements worth a look.
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
          <div className="mt-12">
            <CaseStudiesGrid items={moreWork} />
          </div>
        </Container>
      </Section>
    </>
  );
}
