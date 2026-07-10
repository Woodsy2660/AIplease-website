import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { CaseStudiesGrid } from "@/components/site/work-grid";
import { ConceptSwitcher } from "@/components/home/concept-switcher";
import { site } from "@/lib/site";
import {
  hero,
  pillars,
  caseStudies,
  testimonials,
  contact,
} from "@/lib/content";

const stats = [
  { value: "3", label: "ways we work" },
  { value: "100%", label: "Australian-owned" },
  { value: "2 days", label: "enquiry response" },
  { value: "0", label: "commitment on first call" },
];

const approachPoints = [
  "Go in with the business case, not the buzzwords.",
  "Build systems your team will still use in six months.",
  "Stay on after launch — monitoring, tuning, upgrading.",
  "Tell you plainly when AI isn't the answer.",
];

export function PartnerHome() {
  return (
    <>
      {/* Bold hero — pointdot: direct headline + stat strip */}
      <section className="border-b border-border bg-sand">
        <Container className="py-12 sm:py-16 lg:py-20">
          <Reveal>
            <h1 className="max-w-3xl text-[2.35rem] font-semibold lowercase leading-[1.02] tracking-tight sm:text-5xl lg:text-[3rem]">
              stop guessing.
              <br />
              <span className="text-accent">start shipping.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 max-w-xl text-lg text-ink-soft sm:text-xl">
              {hero.headline} {hero.subhead}
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-7">
              <Button href={hero.primaryCta.href}>
                book your strategy call
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-canvas px-4 py-5 text-center sm:px-5">
                  <dt className="font-display text-3xl font-semibold tabular-nums text-ink sm:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* Partnering — team photo + story */}
      <Section bordered>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <Reveal>
              <Eyebrow>partnering with aiplease</Eyebrow>
              <h2 className="mt-4 text-3xl lowercase tracking-tight sm:text-4xl">
                practical ai, not performative demos.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-soft">
                {hero.intro} We treat every engagement like our own business —
                structured scope, transparent assumptions, and outcomes you can
                measure.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                let&apos;s discuss your objectives
                <ArrowRight className="size-4" />
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-border shadow-[0_24px_60px_-32px_rgba(28,26,23,0.35)]">
                <Image
                  src="/team/landing-main.jpg"
                  alt="The aiplease team — your AI strategy and delivery partner."
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Services grid */}
      <Section tone="sand" bordered>
        <Container>
          <Reveal>
            <Eyebrow>our services</Eyebrow>
            <h2 className="mt-4 text-3xl lowercase tracking-tight sm:text-4xl">
              three ways we work.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06} className="h-full">
                <Link
                  href={`/services/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-canvas"
                >
                  <div className="relative aspect-[3/2] bg-sand">
                    <Image
                      src="/team/landing-main.jpg"
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                    <span className="absolute bottom-3 left-4 font-mono text-xs text-canvas/80">
                      {p.number}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {p.name.toLowerCase()}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-ink-soft">
                      {p.tagline}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case studies */}
      <Section bordered>
        <Container>
          <Reveal>
            <Eyebrow>case studies</Eyebrow>
            <h2 className="mt-4 text-3xl lowercase tracking-tight sm:text-4xl">
              outcomes, measured.
            </h2>
            <p className="mt-3 max-w-lg text-sm text-muted">
              Sample engagements shown for illustration while we publish client
              work.
            </p>
          </Reveal>
          <div className="mt-10">
            <CaseStudiesGrid items={caseStudies} />
          </div>
        </Container>
      </Section>

      {/* Approach + testimonials */}
      <Section tone="sand" bordered>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <Eyebrow>our approach</Eyebrow>
              <h2 className="mt-4 text-3xl lowercase tracking-tight sm:text-4xl">
                growth is never optional.
              </h2>
              <ul className="mt-8 space-y-4">
                {approachPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-base text-ink-soft">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted">
                {contact.responsePromise} · {site.tagline}
              </p>
            </Reveal>
            <div className="space-y-5">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.08}>
                  <figure className="rounded-xl border border-border bg-canvas p-6">
                    <blockquote className="text-base leading-relaxed text-ink">
                      &ldquo;{t.text}&rdquo;
                    </blockquote>
                    <figcaption className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                      {t.name} — {t.company}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA band with team photo accent */}
      <section className="relative overflow-hidden border-t border-border bg-ink text-canvas">
        <div className="absolute inset-y-0 right-0 hidden w-1/3 lg:block">
          <Image
            src="/team/landing-main.jpg"
            alt=""
            fill
            sizes="33vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink to-transparent" />
        </div>
        <Container className="relative py-14 sm:py-16">
          <Reveal>
            <h2 className="max-w-xl text-3xl tracking-tight sm:text-4xl">
              Ready to find where AI actually helps?
            </h2>
            <p className="mt-4 max-w-md text-canvas/70">
              {contact.intro}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact">Start a conversation</Button>
              <Button href="/services" variant="outline">
                See how we work
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <ConceptSwitcher />
    </>
  );
}