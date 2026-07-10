import Link from "next/link";
import Image from "next/image";
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

/** Current production layout — Refined Stone palette. */
export function RefinedStoneVariant() {
  return (
    <>
      <section className="relative min-h-[80vh] overflow-hidden border-b border-border">
        <Image
          src="/team/landing-main.jpg"
          alt="The aiplease team"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/25"
        />
        <Container className="relative flex min-h-[80vh] flex-col justify-end pb-12 pt-10 sm:pb-14">
          <Reveal>
            <Eyebrow inverted>{site.tagline}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 max-w-3xl text-[2.25rem] font-semibold leading-[1.04] tracking-tight text-canvas sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
              {hero.headline}
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-xl text-lg text-canvas/90 sm:text-xl">
              {hero.subhead}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-canvas/75">
              {hero.intro}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="outline">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-canvas/10 bg-ink py-7 sm:py-8">
        <Container>
          <Eyebrow inverted>Industries &amp; partners we work with</Eyebrow>
        </Container>
        <div className="mt-5">
          <Marquee items={industries} inverted />
        </div>
      </section>

      <Section tone="canvas" bordered>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:items-start lg:gap-16">
            <Reveal>
              <Eyebrow>Why aiplease</Eyebrow>
              <h2 className="mt-4 text-3xl tracking-tight sm:text-4xl">
                The difference is what happens before and after the build.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
                We measure our work by what changes in your business — not by
                how advanced the model sounds in a slide deck.
              </p>
            </Reveal>
            <div className="divide-y divide-border border-y border-border">
              {differentiators.map((d, i) => (
                <Reveal key={d.title} delay={i * 0.06}>
                  <article className="grid gap-3 py-7 sm:grid-cols-[3rem_1fr] sm:gap-6">
                    <NumberedMarker value={`0${i + 1}`} className="pt-0.5" />
                    <div>
                      <h3 className="text-lg tracking-tight sm:text-xl">{d.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">
                        {d.body}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="sand" bordered>
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>Selected work</Eyebrow>
                <h2 className="mt-4 max-w-2xl text-3xl tracking-tight sm:text-4xl">
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
            Sample engagements shown for illustration while we publish our client
            work. Card images are placeholders — swap when project photography is
            ready.
          </p>
          <Reveal delay={0.06}>
            <CaseStudyCards className="mt-10" items={caseStudies} />
          </Reveal>
        </Container>
      </Section>

      <Section bordered>
        <Container>
          <Reveal>
            <Eyebrow>Perspectives from the field</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-3xl tracking-tight sm:text-4xl">
              What partners say after the build ships.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Testimonial
              className="mt-10"
              items={testimonials.map((t, i) => ({
                text: t.text.replace(/^\[SAMPLE\]\s*/i, ""),
                name: t.name,
                role: t.company,
                image: DEFAULT_IMAGES[i] ?? DEFAULT_IMAGES[0],
              }))}
            />
          </Reveal>
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
          <div className="mt-10 divide-y divide-canvas/10 border-y border-canvas/10">
            {pillars.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${p.slug}`}
                  className="group grid gap-4 py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:gap-8"
                >
                  <span className="font-mono text-sm font-medium text-accent">
                    {p.number}
                  </span>
                  <div>
                    <h3 className="text-xl tracking-tight text-canvas sm:text-2xl">
                      {p.name}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm text-canvas/65">{p.tagline}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-canvas/80 transition-colors group-hover:text-canvas">
                    Explore
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
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