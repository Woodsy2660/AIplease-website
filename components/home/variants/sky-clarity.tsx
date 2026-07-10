import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { NumberedMarker } from "@/components/ui/marker";
import { Marquee } from "@/components/ui/marquee";
import { Testimonial, DEFAULT_IMAGES } from "@/components/ui/testimonial";
import { CaseStudyCards } from "@/components/site/case-study-cards";
import { industries, landingContent } from "@/components/home/landing-data";

const { site, hero, differentiators, pillars, caseStudies, testimonials } =
  landingContent;

/** Typography-first layout — Stone + Sky, no hero photo, airy whitespace. */
export function SkyClarityVariant() {
  return (
    <>
      <section className="border-b border-border bg-canvas">
        <Container className="py-20 sm:py-24 lg:py-32">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              {site.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <div
              aria-hidden
              className="mt-8 h-1 w-16 rounded-full bg-[var(--highlight)]"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 max-w-4xl text-[2.5rem] font-semibold leading-[1.03] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              {hero.headline}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              {hero.subhead}
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              {hero.intro}
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border bg-sand py-6 sm:py-7">
        <Container>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
            Industries &amp; partners we work with
          </p>
        </Container>
        <div className="mt-4">
          <Marquee items={industries} />
        </div>
      </section>

      <Section tone="canvas" bordered>
        <Container>
          <Reveal>
            <Eyebrow>Why aiplease</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-3xl tracking-tight sm:text-4xl">
              Clarity before code. Outcomes after launch.
            </h2>
          </Reveal>
          <div className="mt-14 space-y-0">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.05}>
                <article className="grid gap-5 border-t border-border py-9 sm:grid-cols-[4rem_1fr] sm:gap-8">
                  <NumberedMarker value={`0${i + 1}`} />
                  <div>
                    <h3 className="text-xl tracking-tight">{d.title}</h3>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">
                      {d.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="sand" bordered>
        <Container>
          <Reveal>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-4 text-3xl tracking-tight sm:text-4xl">
              Outcomes, measured.
            </h2>
          </Reveal>
          <CaseStudyCards className="mt-10" items={caseStudies} />
        </Container>
      </Section>

      <Section bordered>
        <Container>
          <Reveal>
            <Eyebrow>Perspectives from the field</Eyebrow>
          </Reveal>
          <Testimonial
            className="mt-8"
            items={testimonials.map((t, i) => ({
              text: t.text.replace(/^\[SAMPLE\]\s*/i, ""),
              name: t.name,
              role: t.company,
              image: DEFAULT_IMAGES[i] ?? DEFAULT_IMAGES[0],
            }))}
          />
        </Container>
      </Section>

      <Section tone="ink" bordered>
        <Container>
          <Reveal>
            <Eyebrow inverted>What we do</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-3xl tracking-tight text-canvas sm:text-4xl">
              Three ways we work — across the whole life of an AI system.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link
                  href={`/services/${p.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-canvas/15 bg-canvas/5 p-6 transition-colors hover:border-[var(--highlight)]/40 hover:bg-canvas/10"
                >
                  <span className="font-mono text-sm text-[var(--highlight)]">
                    {p.number}
                  </span>
                  <h3 className="mt-4 text-lg tracking-tight text-canvas">
                    {p.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-canvas/65">{p.tagline}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-canvas/80 group-hover:text-canvas">
                    Explore <ArrowRight className="size-4" />
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