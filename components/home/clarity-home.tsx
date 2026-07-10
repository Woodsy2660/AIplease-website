import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ConceptSwitcher } from "@/components/home/concept-switcher";
import { site } from "@/lib/site";
import {
  hero,
  differentiators,
  caseStudies,
  hrplease,
  pillars,
} from "@/lib/content";

const coreViews = [
  {
    title: "Business-first before we build",
    category: "Strategy",
    href: "/services/strategy-foresight",
  },
  {
    title: "Production-ready delivery",
    category: "Engineering",
    href: "/services/build-deploy",
  },
  {
    title: "We don't hand it back and walk away",
    category: "Partnership",
    href: "/services/evolve-partner",
  },
];

const latestItems = [
  {
    title: caseStudies[0].title,
    category: caseStudies[0].industry,
    href: `/work/${caseStudies[0].slug}`,
    metric: caseStudies[0].metric,
  },
  {
    title: `${hrplease.name} — ${hrplease.tagline}`,
    category: "Product",
    href: "/projects/hrplease",
    metric: "Live",
  },
  {
    title: caseStudies[1].title,
    category: caseStudies[1].industry,
    href: `/work/${caseStudies[1].slug}`,
    metric: caseStudies[1].metric,
  },
];

export function ClarityHome() {
  return (
    <>
      {/* Minimal mission hero — Anthropic: calm, spacious, statement-first */}
      <section className="border-b border-border">
        <Container className="py-16 sm:py-20 lg:py-28">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              {site.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl text-[2.35rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              We build AI to earn its place in your business — and keep it there.
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              {hero.subhead}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={hero.primaryCta.href} variant="secondary">
                {hero.primaryCta.label}
              </Button>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-2 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                About aiplease
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Latest releases — soft card grid */}
      <Section tone="sand" bordered compact>
        <Container>
          <Reveal>
            <h2 className="text-2xl tracking-tight sm:text-3xl">Latest</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latestItems.map((item, i) => (
              <Reveal key={item.href} delay={i * 0.06} className="h-full">
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-2xl bg-canvas p-6 shadow-[0_1px_0_rgba(28,26,23,0.04)] transition-shadow hover:shadow-[0_20px_50px_-30px_rgba(28,26,23,0.25)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                      {item.category}
                    </p>
                    <span className="font-display text-lg font-semibold tabular-nums text-accent">
                      {item.metric}
                    </span>
                  </div>
                  <h3 className="mt-4 flex-1 text-lg leading-snug tracking-tight group-hover:text-accent">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="mt-6 size-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Core views — simple linked list */}
      <Section bordered>
        <Container>
          <Reveal>
            <h2 className="max-w-2xl text-2xl tracking-tight sm:text-3xl">
              How we think about applied AI.
            </h2>
          </Reveal>
          <ul className="mt-10 space-y-3">
            {coreViews.map((view, i) => (
              <Reveal key={view.href} delay={i * 0.05}>
                <li>
                  <Link
                    href={view.href}
                    className="group flex items-center justify-between gap-4 rounded-2xl px-4 py-5 transition-colors hover:bg-sand"
                  >
                    <div>
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                        {view.category}
                      </p>
                      <h3 className="mt-1 text-lg tracking-tight group-hover:text-accent">
                        {view.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="size-4 shrink-0 text-muted" />
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Team — single focal image, lots of air */}
      <Section tone="sand" bordered>
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <Eyebrow className="justify-center">The team</Eyebrow>
              <h2 className="mt-4 text-3xl tracking-tight sm:text-4xl">
                Australian-owned. Outcome-driven.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
                {hero.intro}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative mx-auto mt-10 aspect-[16/10] max-w-3xl overflow-hidden rounded-3xl">
                <Image
                  src="/team/landing-main.jpg"
                  alt="The aiplease team — strategy, build, and partnership for production AI."
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Services — quiet three-up */}
      <Section bordered>
        <Container>
          <Reveal>
            <h2 className="text-2xl tracking-tight sm:text-3xl">What we do</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border/80 p-6">
                  <p className="font-mono text-xs text-accent">{p.number}</p>
                  <h3 className="mt-3 text-xl tracking-tight">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {p.summary}
                  </p>
                  <Link
                    href={`/services/${p.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent"
                  >
                    Learn more
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Differentiators — closing mission band */}
      <Section tone="ink" bordered>
        <Container>
          <Reveal>
            <p className="max-w-3xl text-2xl leading-relaxed tracking-tight text-canvas sm:text-3xl">
              {differentiators[0].body}
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="outline">
                Start a conversation
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <ConceptSwitcher />
    </>
  );
}