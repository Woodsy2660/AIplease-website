import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { NumberedMarker } from "@/components/ui/marker";
import { ConceptSwitcher } from "@/components/home/concept-switcher";
import { site } from "@/lib/site";
import {
  hero,
  differentiators,
  pillars,
  caseStudies,
  about,
} from "@/lib/content";

const perspectives = [
  {
    title: "The model is not the strategy",
    body: "Leaders are under pressure to adopt AI before the business case is clear. We start with economics, operations, and risk — not the latest release notes.",
  },
  {
    title: "Production is the proof",
    body: "A convincing demo is not a system. We measure success by what survives contact with real users, real data, and real governance.",
  },
];

export function ConsultingHome() {
  return (
    <>
      {/* Editorial hero — McKinsey: authority, structure, no visual noise */}
      <section className="border-b border-border">
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
            <div>
              <Reveal>
                <Eyebrow>{site.tagline}</Eyebrow>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-4 max-w-2xl text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-4xl lg:text-[2.75rem]">
                  {hero.headline}
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                  {hero.subhead}
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                  {hero.intro}
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href={hero.primaryCta.href}>
                    {hero.primaryCta.label}
                    <ArrowRight className="size-4" />
                  </Button>
                  <Button href={hero.secondaryCta.href} variant="secondary">
                    {hero.secondaryCta.label}
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.16} className="lg:pt-8">
              <aside className="border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                  At a glance
                </p>
                <dl className="mt-5 space-y-5">
                  {[
                    { label: "Practice", value: "Strategy · Build · Partner" },
                    { label: "Based", value: "Australian-owned & operated" },
                    { label: "Response", value: site.responsePromise },
                    { label: "Engagement", value: "No-commitment initial call" },
                  ].map((row) => (
                    <div key={row.label}>
                      <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                        {row.label}
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-ink">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Perspectives — insight-led bands */}
      <Section tone="sand" bordered compact>
        <Container>
          <Reveal>
            <Eyebrow>Our perspective</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-3xl tracking-tight sm:text-4xl">
              What separates a pilot from an advantage.
            </h2>
          </Reveal>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {perspectives.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="grid gap-4 py-8 sm:grid-cols-[1fr_1.4fr] sm:gap-10">
                  <h3 className="text-xl tracking-tight">{item.title}</h3>
                  <p className="text-base leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Capabilities — numbered editorial list */}
      <Section bordered>
        <Container>
          <Reveal>
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-3xl tracking-tight sm:text-4xl">
              Three disciplines, one continuous engagement.
            </h2>
          </Reveal>
          <div className="mt-10 border-t border-border">
            {pillars.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${p.slug}`}
                  className="group grid gap-4 border-b border-border py-7 sm:grid-cols-[4rem_1fr_auto] sm:items-start sm:gap-8"
                >
                  <NumberedMarker value={p.number} />
                  <div>
                    <h3 className="text-xl tracking-tight sm:text-2xl">
                      {p.name}
                    </h3>
                    <p className="mt-2 max-w-xl text-ink-soft">{p.tagline}</p>
                  </div>
                  <ArrowRight className="size-4 text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent sm:mt-2" />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team + differentiators — restrained photo placement */}
      <Section tone="sand" bordered>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <Reveal>
              <div className="relative aspect-[5/4] overflow-hidden rounded-xl border border-border">
                <Image
                  src="/team/landing-main.jpg"
                  alt="The aiplease team in a modern office — Australian-owned AI consultancy."
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <Eyebrow>Who we are</Eyebrow>
                <h2 className="mt-4 text-3xl tracking-tight sm:text-4xl">
                  {about.whoWeAre}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  {about.intro}
                </p>
              </Reveal>
              <ul className="mt-8 space-y-5">
                {differentiators.map((d, i) => (
                  <Reveal key={d.title} delay={0.06 + i * 0.05}>
                    <li className="border-t border-border pt-5">
                      <h3 className="text-lg tracking-tight">{d.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {d.body}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Selected work — list-forward, not card-heavy */}
      <Section bordered>
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Eyebrow>Selected work</Eyebrow>
                <h2 className="mt-4 text-3xl tracking-tight sm:text-4xl">
                  Outcomes, measured.
                </h2>
              </div>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                View all
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {caseStudies.slice(0, 3).map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <Link
                  href={`/work/${c.slug}`}
                  className="group grid gap-3 py-6 sm:grid-cols-[6rem_1fr_auto] sm:items-center sm:gap-8"
                >
                  <div className="font-display text-3xl font-semibold tabular-nums text-ink">
                    {c.metric}
                  </div>
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                      {c.industry}
                    </p>
                    <h3 className="mt-1 text-lg tracking-tight group-hover:text-accent">
                      {c.title}
                    </h3>
                  </div>
                  <ArrowRight className="size-4 text-muted transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <ConceptSwitcher />
    </>
  );
}