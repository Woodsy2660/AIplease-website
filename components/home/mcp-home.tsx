import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { BlurFade } from "@/components/magicui/blur-fade";
import { MagicMarquee } from "@/components/magicui/marquee";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { CaseStudyCards } from "@/components/site/case-study-cards";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Separator } from "@/components/ui/separator";
import { Section } from "@/components/ui/section";
import { Testimonial, DEFAULT_IMAGES } from "@/components/ui/testimonial";
import { industries, landingContent, landingStats } from "@/components/home/landing-data";

const { site, hero, differentiators, pillars, caseStudies, testimonials } =
  landingContent;

function LandingStat({ value, label }: { value: string; label: string }) {
  const match = value.match(/^(\d+)(%?)$/);

  return (
    <div className="px-4 py-5 text-center sm:px-5">
      <div className="font-display text-3xl font-semibold tabular-nums text-ink sm:text-4xl">
        {match ? (
          <>
            <NumberTicker value={Number(match[1])} delay={0.1} />
            {match[2]}
          </>
        ) : (
          value
        )}
      </div>
      <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
        {label}
      </p>
    </div>
  );
}

/** MCP-driven landing — Magic UI accents + shadcn structure, brand tokens overlaid. */
export function McpHome() {
  return (
    <>
      {/* Hero — mission + credibility */}
      <section className="relative min-h-[82vh] overflow-hidden border-b border-border bg-chocolate">
        <Image
          src="/team/landing-main.jpg"
          alt="The aiplease team — applied AI consultancy, Australian-owned."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%] opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-chocolate via-chocolate/80 to-chocolate/40"
        />

        <Container className="relative flex min-h-[82vh] flex-col justify-end pb-12 pt-10 sm:pb-16">
          <BlurFade delay={0}>
            <Badge variant="ink" className="mb-4">
              {site.tagline}
            </Badge>
          </BlurFade>
          <BlurFade delay={0.06}>
            <h1 className="max-w-3xl text-[2.25rem] font-semibold leading-[1.04] tracking-tight text-stone sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
              {hero.headline}
            </h1>
          </BlurFade>
          <BlurFade delay={0.12}>
            <p className="mt-5 max-w-xl text-lg text-stone/90 sm:text-xl">
              {hero.subhead}
            </p>
          </BlurFade>
          <BlurFade delay={0.16}>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-rock">
              {hero.intro}
            </p>
          </BlurFade>
          <BlurFade delay={0.22}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="outline">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </BlurFade>
        </Container>
      </section>

      {/* Proof — stats strip (Magic UI number-ticker) */}
      <section className="border-b border-border bg-stone">
        <Container className="py-8 sm:py-10">
          <BlurFade>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
              {landingStats.map((stat) => (
                <div key={stat.label} className="bg-canvas">
                  <LandingStat value={stat.value} label={stat.label} />
                </div>
              ))}
            </dl>
          </BlurFade>
        </Container>
      </section>

      {/* Industries — Magic UI slow marquee */}
      <section className="border-b border-border bg-chocolate py-6 sm:py-7">
        <Container>
          <Eyebrow inverted className="text-rock">
            Industries &amp; partners we work with
          </Eyebrow>
        </Container>
        <div className="relative mt-4">
          <MagicMarquee pauseOnHover className="[--gap:3rem]">
            {industries.map((item) => (
              <span
                key={item}
                className="mx-4 font-mono text-sm uppercase tracking-[0.18em] text-rock"
              >
                {item}
              </span>
            ))}
          </MagicMarquee>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-chocolate to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-chocolate to-transparent"
          />
        </div>
      </section>

      {/* Why aiplease — shadcn cards */}
      <Section tone="canvas" bordered>
        <Container>
          <BlurFade>
            <Eyebrow>Why aiplease</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-3xl tracking-tight sm:text-4xl">
              The difference is what happens before and after the build.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
              We measure our work by what changes in your business — not by how
              advanced the model sounds in a slide deck.
            </p>
          </BlurFade>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {differentiators.map((d, i) => (
              <BlurFade key={d.title} delay={i * 0.05}>
                <Card interactive className="h-full bg-stone/50">
                  <CardHeader>
                    <Badge variant="secondary">0{i + 1}</Badge>
                    <CardTitle className="mt-3">{d.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{d.body}</CardDescription>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case studies */}
      <Section tone="sand" bordered>
        <Container>
          <BlurFade>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>Selected work</Eyebrow>
                <h2 className="mt-4 max-w-2xl text-3xl tracking-tight sm:text-4xl">
                  Outcomes, measured — not features, listed.
                </h2>
              </div>
              <Link
                href="/work"
                className="group inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-ink transition-colors duration-200 hover:text-vermilion"
              >
                View all work
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </BlurFade>
          <p className="mt-4 max-w-xl text-sm text-muted">
            Sample engagements shown for illustration while we publish our client
            work. Card images are placeholders — swap when project photography is
            ready.
          </p>
          <BlurFade delay={0.06}>
            <CaseStudyCards className="mt-10" items={caseStudies} />
          </BlurFade>
        </Container>
      </Section>

      <Separator className="bg-border" />

      {/* Perspectives — social proof */}
      <Section bordered>
        <Container>
          <BlurFade>
            <Eyebrow>Perspectives from the field</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-3xl tracking-tight sm:text-4xl">
              What partners say after the build ships.
            </h2>
          </BlurFade>
          <BlurFade delay={0.08}>
            <Testimonial
              className="mt-10"
              items={testimonials.map((t, i) => ({
                text: t.text.replace(/^\[SAMPLE\]\s*/i, ""),
                name: t.name,
                role: t.company,
                image: DEFAULT_IMAGES[i] ?? DEFAULT_IMAGES[0],
              }))}
            />
          </BlurFade>
        </Container>
      </Section>

      {/* What we do — shadcn service cards on chocolate band */}
      <Section tone="ink" bordered className="bg-chocolate text-stone">
        <Container>
          <BlurFade>
            <Eyebrow inverted className="text-rock">
              What we do
            </Eyebrow>
            <h2 className="mt-4 max-w-2xl text-3xl tracking-tight text-stone sm:text-4xl">
              Three ways we work — across the whole life of an AI system.
            </h2>
          </BlurFade>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <BlurFade key={p.slug} delay={i * 0.05}>
                <Link href={`/services/${p.slug}`} className="block h-full">
                  <Card
                    interactive
                    className="h-full border-canvas/10 bg-canvas/5 text-stone hover:border-vermilion/30 hover:bg-canvas/10"
                  >
                    <CardHeader>
                      <Badge variant="ink">{p.number}</Badge>
                      <CardTitle className="mt-3 text-stone">{p.name}</CardTitle>
                      <CardDescription className="text-rock">
                        {p.tagline}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-stone/80 transition-colors duration-200 hover:text-vermilion">
                        Explore
                        <ArrowRight className="size-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </BlurFade>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA path */}
      <section className="border-t border-border bg-sky/30 py-14 sm:py-16">
        <Container>
          <BlurFade>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <Eyebrow>Ready to talk</Eyebrow>
                <p className="mt-3 max-w-lg text-xl tracking-tight text-chocolate sm:text-2xl">
                  Start with a conversation — no commitment on the first call.
                </p>
              </div>
              <Button href="/contact" size="lg">
                {hero.primaryCta.label}
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </BlurFade>
        </Container>
      </section>
    </>
  );
}