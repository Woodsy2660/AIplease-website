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
import { MetricStat } from "@/components/ui/metric-stat";
import { Testimonial, DEFAULT_IMAGES } from "@/components/ui/testimonial";
import { CaseStudyCards } from "@/components/site/case-study-cards";
import { industries, landingContent, landingStats } from "@/components/home/landing-data";

const { site, hero, differentiators, pillars, caseStudies, testimonials } =
  landingContent;

/** Rock-forward earth tones — banded hero, inset photo, stat strip. */
export function RockEarthVariant() {
  return (
    <>
      <section className="border-b border-border bg-sand">
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
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
              <div className="relative overflow-hidden rounded-xl border border-border bg-canvas shadow-[0_24px_60px_-32px_rgba(41,31,22,0.25)]">
                <Image
                  src="/team/landing-main.jpg"
                  alt="The aiplease team"
                  width={640}
                  height={480}
                  priority
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
              {landingStats.map((stat) => (
                <div key={stat.label} className="bg-canvas px-4 py-5 text-center sm:px-5">
                  <MetricStat value={stat.value} label={stat.label} />
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border bg-ink py-6 sm:py-7">
        <Marquee items={industries} inverted />
      </section>

      <Section compact bordered>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <Reveal>
              <Eyebrow>Why aiplease</Eyebrow>
              <h2 className="mt-4 text-2xl tracking-tight sm:text-3xl">
                Grounded in what your business actually needs.
              </h2>
            </Reveal>
            <div className="divide-y divide-border border-y border-border">
              {differentiators.map((d, i) => (
                <Reveal key={d.title} delay={i * 0.05}>
                  <article className="grid gap-3 py-6 sm:grid-cols-[2.5rem_1fr] sm:gap-5">
                    <NumberedMarker value={`0${i + 1}`} className="pt-0.5" />
                    <div>
                      <h3 className="text-base tracking-tight sm:text-lg">{d.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
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

      <Section tone="canvas" compact bordered>
        <Container>
          <Reveal>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-4 text-2xl tracking-tight sm:text-3xl">
              Outcomes, measured.
            </h2>
          </Reveal>
          <CaseStudyCards className="mt-8" items={caseStudies} />
        </Container>
      </Section>

      <Section compact bordered>
        <Container>
          <Reveal>
            <Eyebrow>Perspectives from the field</Eyebrow>
          </Reveal>
          <Testimonial
            className="mt-6"
            items={testimonials.map((t, i) => ({
              text: t.text.replace(/^\[SAMPLE\]\s*/i, ""),
              name: t.name,
              role: t.company,
              image: DEFAULT_IMAGES[i] ?? DEFAULT_IMAGES[0],
            }))}
          />
        </Container>
      </Section>

      <Section tone="sand" compact bordered>
        <Container>
          <Reveal>
            <Eyebrow>What we do</Eyebrow>
          </Reveal>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${p.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-border bg-canvas p-5 transition-[border-color,box-shadow] hover:border-ink/20 hover:shadow-[0_12px_40px_-24px_rgba(41,31,22,0.2)]"
                >
                  <span className="font-mono text-xs text-accent">{p.number}</span>
                  <h3 className="mt-3 text-base tracking-tight sm:text-lg">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-ink-soft">{p.tagline}</p>
                  <ArrowRight className="mt-4 size-4 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}