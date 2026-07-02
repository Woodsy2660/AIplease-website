import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { CaseStudiesGrid } from "@/components/site/work-grid";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Engagements measured by outcomes, not feature lists — how strategy, build, and partnership move AI from prototype to production value.",
};

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border grain-rules">
        <Container className="py-16 sm:py-24 lg:py-28">
          <Reveal>
            <Eyebrow>Work</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-4xl text-[2.7rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              Outcomes, measured — not features, listed.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              We judge our work the way you do: by what it changes. Each
              engagement below ties an AI system back to the operational and
              economic outcome it was built to deliver.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              [SAMPLE] These are sample engagements shown for illustration while
              we prepare real client work for publication. The shape of the work
              — the problem framed, the system shipped, the result measured — is
              true to how we operate.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* All case studies */}
      <Section tone="sand" bordered>
        <Container>
          <Reveal>
            <Eyebrow>Selected engagements</Eyebrow>
          </Reveal>
          <div className="mt-12">
            <CaseStudiesGrid items={caseStudies} />
          </div>
        </Container>
      </Section>
    </>
  );
}
