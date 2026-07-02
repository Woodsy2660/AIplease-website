import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { NumberedMarker } from "@/components/ui/marker";
import { PillarsSection } from "@/components/site/pillars";
import { CaseStudiesGrid } from "@/components/site/work-grid";
import { Marquee } from "@/components/ui/marquee";
import { site } from "@/lib/site";
import {
  hero,
  differentiators,
  hrplease,
  testimonials,
  caseStudies,
} from "@/lib/content";

const heroSpec = [
  { label: "Practice", value: "Strategy · Build · Partner" },
  { label: "Based", value: "Australian-owned & operated" },
  { label: "Response", value: site.responsePromise },
  { label: "Start", value: "No-commitment initial call" },
];

const industries = [
  "Transport & Logistics",
  "Professional Services",
  "Manufacturing",
  "Retail",
  "Healthcare",
  "Construction & Infrastructure",
  "Property",
  "Public Sector",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border grain-rules">
        <Container className="py-16 sm:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <Reveal>
                <Eyebrow>{site.tagline}</Eyebrow>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-6 max-w-2xl text-[2.7rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                  {hero.headline}
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-xl text-ink-soft sm:text-2xl">
                  {hero.subhead}
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                  {hero.intro}
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button href={hero.primaryCta.href} size="lg">
                    {hero.primaryCta.label}
                    <ArrowRight className="size-4" />
                  </Button>
                  <Button
                    href={hero.secondaryCta.href}
                    size="lg"
                    variant="secondary"
                  >
                    {hero.secondaryCta.label}
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Original "charted route" concept art from the existing brand */}
            <Reveal delay={0.2}>
              <div className="relative">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -top-8 -z-10 size-48 rounded-full bg-accent/15 blur-3xl animate-[floaty_9s_ease-in-out_infinite] motion-reduce:animate-none"
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-sand shadow-[0_40px_90px_-50px_rgba(28,26,23,0.5)]">
                  <Image
                    src="/brand/hero-concept.webp"
                    alt="An illustrated topographic map with a dashed route charted to a compass — strategy, delivery, partnership."
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Engineered spec strip */}
          <Reveal delay={0.32}>
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-16 sm:grid-cols-4">
              {heroSpec.map((row) => (
                <div key={row.label} className="bg-canvas p-5">
                  <dt className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                    {row.label}
                  </dt>
                  <dd className="mt-2 text-sm font-medium text-ink">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* Industries marquee */}
      <section className="border-b border-border bg-canvas py-10 sm:py-12">
        <Container>
          <Eyebrow>Industries we work across</Eyebrow>
        </Container>
        <div className="mt-6">
          <Marquee items={industries} />
        </div>
      </section>

      {/* Differentiators */}
      <Section tone="sand" bordered>
        <Container>
          <Reveal>
            <Eyebrow>Why aiplease</Eyebrow>
            <h2 className="mt-5 max-w-3xl text-4xl sm:text-5xl">
              The difference is what happens before and after the build.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-3">
            {differentiators.map((d, i) => (
              <Reveal
                key={d.title}
                delay={i * 0.06}
                className="flex flex-col bg-sand p-8"
              >
                <NumberedMarker value={`0${i + 1}`} />
                <h3 className="mt-5 text-xl tracking-tight">{d.title}</h3>
                <p className="mt-3 text-ink-soft">{d.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services */}
      <PillarsSection />

      {/* Selected work */}
      <Section tone="sand" bordered>
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

      {/* HRplease product */}
      <Section tone="canvas" bordered>
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-border bg-sand p-8 sm:p-12 lg:p-16">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                  <Eyebrow>Flagship project · {hrplease.name}</Eyebrow>
                  <h2 className="mt-5 text-3xl tracking-tight sm:text-4xl">
                    {hrplease.tagline}
                  </h2>
                  <p className="mt-4 max-w-md text-ink-soft">{hrplease.value}</p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button href="/projects/hrplease">
                      Explore {hrplease.name}
                    </Button>
                    <Button href="/projects" variant="secondary">
                      View all projects
                    </Button>
                  </div>
                </div>
                <ul className="grid gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-2">
                  {hrplease.capabilities.map((c) => (
                    <li key={c.title} className="bg-canvas p-5">
                      <div className="flex items-center gap-2">
                        <span
                          aria-hidden
                          className="size-1.5 rounded-full bg-accent"
                        />
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

      {/* Testimonials */}
      <Section tone="sand" bordered>
        <Container>
          <Reveal>
            <Eyebrow>What partners say</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06} className="h-full">
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-canvas p-8 sm:p-10">
                  <blockquote className="text-balance text-xl leading-relaxed tracking-tight text-ink sm:text-2xl">
                    {t.text}
                  </blockquote>
                  <figcaption className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    {t.name} — {t.company}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
