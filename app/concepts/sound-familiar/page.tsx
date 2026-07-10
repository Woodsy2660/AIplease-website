import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Sound familiar section variants",
  description:
    "Compare seven layout directions for the Sound familiar homepage section.",
};

const variants = [
  {
    slug: "current",
    name: "Current — Editorial stack",
    description:
      "Centered headline with four open paragraphs stacked below. What ships on the homepage today.",
    tag: "Live",
  },
  {
    slug: "split",
    name: "Option A — Split editorial",
    description:
      "Headline anchored left, differentiation copy right. Bain-style authority on desktop.",
    tag: "Mock-up",
  },
  {
    slug: "stone-band",
    name: "Option B — Stone band",
    description:
      "Quote marquee then a stone background chapter with a 2×2 copy grid.",
    tag: "Mock-up",
  },
  {
    slug: "numbered",
    name: "Option C — Numbered pillars",
    description:
      "Vermilion step numbers with open copy. Links visually to Map / Find / Build / Stay.",
    tag: "Mock-up",
  },
  {
    slug: "paired",
    name: "Option D — Paired rows",
    description:
      "Each client quote paired with its answer in horizontal rows.",
    tag: "Mock-up",
  },
  {
    slug: "chocolate-panel",
    name: "Option E — All-in-one chocolate",
    description:
      "Marquee and differentiation merged into one dark panel.",
    tag: "Mock-up",
  },
  {
    slug: "minimal",
    name: "Option F — Minimal divider",
    description:
      "Headline on a ruled strip, copy in a light 2×2 grid. Lightest layout weight.",
    tag: "Mock-up",
  },
] as const;

export default function SoundFamiliarConceptsPage() {
  return (
    <Section tone="canvas">
      <Container className="pb-24">
        <Reveal>
          <Eyebrow>Homepage section exploration</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Sound familiar — layout variants
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            Static HTML mock-ups with your real copy, quote marquee, and a
            placeholder hero for context. Open any variant in a new tab to compare
            full-page presentation.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {variants.map((variant, i) => (
            <Reveal key={variant.slug} delay={i * 0.04}>
              <Link
                href={`/concepts/sound-familiar/${variant.slug}.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-border bg-white p-6 transition-[border-color,box-shadow] hover:border-chocolate/20 hover:shadow-[0_20px_50px_-30px_rgba(41,31,22,0.35)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold tracking-tight text-chocolate group-hover:text-chocolate/80">
                    {variant.name}
                  </h2>
                  <span className="shrink-0 rounded-full border border-border px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-muted">
                    {variant.tag}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {variant.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-chocolate">
                  Open mock-up
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 text-sm text-muted">
            Production homepage:{" "}
            <Link href="/" className="font-medium text-chocolate hover:underline">
              /
            </Link>
            . Other explorations:{" "}
            <Link
              href="/concepts"
              className="font-medium text-chocolate hover:underline"
            >
              /concepts
            </Link>
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}