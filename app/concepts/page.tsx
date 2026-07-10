import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { landingPalettes, landingVariantSlugs } from "@/lib/landing-palettes";

export const metadata: Metadata = {
  title: "Landing palette variants",
  description:
    "Compare five landing page directions for aiplease — each with a unique palette and layout from the brand guidelines.",
};

const previewImages: Record<string, string> = {
  "refined-stone": "/team/landing-main.jpg",
  "stone-vermilion": "/team/landing-main.jpg",
  "chocolate-noir": "/team/landing-main.jpg",
  "sky-clarity": "/brand/hero-concept.webp",
  "rock-earth": "/team/landing-main.jpg",
};

export default function ConceptsIndexPage() {
  return (
    <Section tone="canvas">
      <Container className="pb-24">
        <Reveal>
          <Eyebrow>Landing page exploration</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Five palette variants for the homepage.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            Each variant uses your team photo and existing aiplease copy, but
            applies a different colour palette and layout rhythm from the brand
            guidelines. Open any variant to preview it — use the switcher at the
            bottom to compare.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {landingVariantSlugs.map((slug, i) => {
            const palette = landingPalettes[slug];

            return (
              <Reveal key={slug} delay={i * 0.05}>
                <Link
                  href={`/concepts/${slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-sand transition-[border-color,box-shadow] hover:border-ink/20 hover:shadow-[0_24px_60px_-32px_rgba(28,26,23,0.3)]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-canvas">
                    <Image
                      src={previewImages[slug] ?? "/team/landing-main.jpg"}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <span
                        className="size-3 rounded-full border border-canvas/30"
                        style={{ backgroundColor: palette.accent }}
                        aria-hidden
                      />
                      <span
                        className="size-3 rounded-full border border-canvas/30"
                        style={{ backgroundColor: palette.canvas }}
                        aria-hidden
                      />
                      <span
                        className="size-3 rounded-full border border-canvas/30"
                        style={{ backgroundColor: palette.ink }}
                        aria-hidden
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold tracking-tight group-hover:text-accent">
                      {palette.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {palette.description}
                    </p>
                    <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
                      {palette.design}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink">
                      Preview variant
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 rounded-2xl border border-border bg-white p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">
              Sound familiar section
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
              Seven HTML mock-ups for the quote marquee and differentiation
              block below the hero.
            </p>
            <Link
              href="/concepts/sound-familiar"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-chocolate hover:underline"
            >
              Compare Sound familiar variants
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-sm text-muted">
            Current production homepage remains at{" "}
            <Link href="/" className="font-medium text-ink hover:text-accent">
              /
            </Link>
            . Pick a direction and we can promote it to the main route.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}