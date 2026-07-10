import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { NumberedMarker } from "@/components/ui/marker";
import { Card } from "@/components/ui/card";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "aiplease builds AI systems for businesses that want something practical, not performative — structured, transparent, and measured against outcomes that matter.",
};

/** Initials for the neutral placeholder avatars on the [SAMPLE] team grid. */
function initials(name: string) {
  return name
    .replace(/^\[SAMPLE\]\s*/, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border grain-rules">
        <Container className="py-12 sm:py-16 lg:py-20">
          <Reveal>
            <Eyebrow>About</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 max-w-4xl text-[2.25rem] font-semibold leading-[1.02] tracking-tight sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
              Practical, not performative.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-2xl text-lg text-ink-soft sm:text-xl">
              {about.whoWeAre}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              {about.intro}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Background */}
      <Section tone="sand" bordered>
        <Container>
          <Reveal>
            <Eyebrow>Background</Eyebrow>
            <h2 className="mt-4 max-w-3xl text-3xl sm:text-4xl">
              From the field and the lab to the way we build.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              Two careers shape how we work — one where plans meet reality, and
              one where strategy meets evidence.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border sm:grid-cols-2">
            {about.background.map((item, i) => (
              <Reveal
                key={item.label}
                delay={i * 0.06}
                className="flex flex-col bg-sand p-6 sm:p-7"
              >
                <NumberedMarker value={`0${i + 1}`} />
                <h3 className="mt-5 text-xl tracking-tight">{item.label}</h3>
                <p className="mt-3 text-ink-soft">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* How we work */}
      <Section bordered>
        <Container>
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-4 max-w-3xl text-3xl sm:text-4xl">
              From open-ended brief to a result you can use.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border sm:grid-cols-3">
            {about.principles.map((principle, i) => (
              <Reveal
                key={principle.title}
                delay={i * 0.06}
                className="flex flex-col bg-canvas p-6 sm:p-7"
              >
                <NumberedMarker value={`0${i + 1}`} />
                <h3 className="mt-5 text-xl tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-3 text-ink-soft">{principle.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section tone="sand" bordered>
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>Team</Eyebrow>
                <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">
                  Small team, end-to-end accountability.
                </h2>
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                [SAMPLE] Placeholder profiles
              </span>
            </div>
            <p className="mt-4 max-w-xl text-sm text-muted">
              Profiles and photographs are on the way.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.06} className="h-full">
                <Card className="flex h-full flex-col p-6">
                  <div
                    aria-hidden
                    className="flex size-16 items-center justify-center rounded-2xl bg-sand-deep font-mono text-lg font-medium tracking-tight text-ink-soft"
                  >
                    {initials(member.name)}
                  </div>
                  <h3 className="mt-6 text-lg tracking-tight">{member.name}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    {member.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    {member.bio}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
