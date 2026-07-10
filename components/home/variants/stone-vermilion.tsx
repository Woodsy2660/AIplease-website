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

/** Split hero + vermilion band — official Stone / Chocolate / Vermilion kit. */
export function StoneVermilionVariant() {
  return (
    <>
      <section className="border-b border-border bg-canvas">
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <Reveal>
                <Eyebrow>{site.tagline}</Eyebrow>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-4 text-[2.25rem] font-semibold leading-[1.04] tracking-tight sm:text-4xl lg:text-[2.75rem]">
                  {hero.headline}
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 text-lg text-ink-soft sm:text-xl">{hero.subhead}</p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
                  <Button href={hero.secondaryCta.href} variant="secondary">
                    {hero.secondaryCta.label}
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border-4 border-sand shadow-[0_32px_70px_-40px_rgba(41,31,22,0.35)]">
                <Image
                  src="/team/landing-main.jpg"
                  alt="The aiplease team"
                  width={800}
                  height={600}
                  priority
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-accent py-7 text-on-accent sm:py-8">
        <Container>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-on-accent/70">
            Industries &amp; partners we work with
          </p>
        </Container>
        <div className="mt-5 [&_li]:text-on-accent/80">
          <Marquee items={industries} />
        </div>
      </section>

      <Section tone="sand" bordered>
        <Container>
          <Reveal>
            <Eyebrow>Why aiplease</Eyebrow>
            <h2 className="mt-4 text-center text-3xl tracking-tight sm:text-4xl">
              The difference is what happens before and after the build.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.06}>
                <article className="h-full rounded-xl border border-border bg-canvas p-6">
                  <NumberedMarker value={`0${i + 1}`} />
                  <h3 className="mt-4 text-lg tracking-tight">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{d.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section bordered>
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

      <Section tone="canvas" bordered>
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
          <div className="grid gap-5 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06} className="h-full">
                <Link
                  href={`/services/${p.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-canvas/15 bg-canvas/5 p-6 transition-colors hover:bg-canvas/10"
                >
                  <span className="font-mono text-sm text-accent">{p.number}</span>
                  <h3 className="mt-4 text-xl tracking-tight text-canvas">{p.name}</h3>
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