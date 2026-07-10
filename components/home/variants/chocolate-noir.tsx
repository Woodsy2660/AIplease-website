import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
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

/** Dark chocolate immersive layout with vermilion accents. */
export function ChocolateNoirVariant() {
  return (
    <>
      <section className="relative overflow-hidden bg-sand-deep py-16 text-canvas sm:py-24">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] grain-rules"
        />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Reveal>
                <Eyebrow inverted>{site.tagline}</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-4 text-[2.35rem] font-semibold leading-[1.03] tracking-tight sm:text-5xl">
                  {hero.headline}
                </h1>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-6 max-w-lg text-lg text-canvas/80">{hero.subhead}</p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 flex gap-3">
                  <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
                  <Button href={hero.secondaryCta.href} variant="outline">
                    {hero.secondaryCta.label}
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <div className="relative mx-auto size-64 overflow-hidden rounded-full border-4 border-accent shadow-[0_0_0_12px_rgba(254,73,57,0.15)] sm:size-80">
                <Image
                  src="/team/landing-main.jpg"
                  alt="The aiplease team"
                  fill
                  priority
                  sizes="320px"
                  className="object-cover object-[center_20%]"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-canvas/10 bg-ink py-6">
        <Marquee items={industries} inverted />
      </section>

      <section className="border-b border-border bg-canvas py-14 sm:py-16">
        <Container>
          <Reveal>
            <Eyebrow>Why aiplease</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-3xl tracking-tight sm:text-4xl">
              Built for decisions you can defend.
            </h2>
          </Reveal>
          <ol className="mt-10 space-y-0">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.05}>
                <li className="grid gap-4 border-t border-border py-8 sm:grid-cols-[4rem_1fr]">
                  <NumberedMarker value={`0${i + 1}`} />
                  <div>
                    <h3 className="text-xl tracking-tight">{d.title}</h3>
                    <p className="mt-2 text-ink-soft">{d.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-sand-deep py-14 text-canvas sm:py-16">
        <Container>
          <Reveal>
            <Eyebrow inverted>Selected work</Eyebrow>
            <h2 className="mt-4 text-3xl tracking-tight sm:text-4xl">
              Outcomes, measured.
            </h2>
          </Reveal>
          <CaseStudyCards className="mt-10" items={caseStudies} />
        </Container>
      </section>

      <section className="border-y border-border bg-canvas py-14">
        <Container>
          <Testimonial
            items={testimonials.map((t, i) => ({
              text: t.text.replace(/^\[SAMPLE\]\s*/i, ""),
              name: t.name,
              role: t.company,
              image: DEFAULT_IMAGES[i] ?? DEFAULT_IMAGES[0],
            }))}
          />
        </Container>
      </section>

      <section className="bg-sand-deep py-14 text-canvas sm:py-16">
        <Container>
          <Reveal>
            <Eyebrow inverted>What we do</Eyebrow>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link
                  href={`/services/${p.slug}`}
                  className="group block rounded-xl border border-canvas/10 p-6 transition-colors hover:border-accent/50"
                >
                  <span className="font-mono text-accent">{p.number}</span>
                  <h3 className="mt-3 text-lg tracking-tight">{p.name}</h3>
                  <p className="mt-2 text-sm text-canvas/65">{p.tagline}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}