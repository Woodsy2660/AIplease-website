import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pillars } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

type PillarsSectionProps = {
  tone?: "canvas" | "sand";
  eyebrow?: string;
  heading?: string;
  intro?: string;
};

/**
 * The three service pillars as a numbered, hairline-ruled editorial list.
 * Reused on the home page and the services overview.
 */
export function PillarsSection({
  tone = "canvas",
  eyebrow = "What we do",
  heading = "Three ways we work — across the whole life of an AI system.",
  intro = "Strategy to find the right problem. Delivery to ship it. Partnership to keep it sharp.",
}: PillarsSectionProps) {
  return (
    <Section tone={tone} bordered id="services">
      <Container>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-5 max-w-3xl text-4xl sm:text-5xl">{heading}</h2>
          <p className="mt-5 max-w-xl text-lg text-ink-soft">{intro}</p>
        </Reveal>

        <div className="mt-12 border-b border-border sm:mt-16">
          {pillars.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                href={`/services/${p.slug}`}
                className="group block border-t border-border py-8 sm:py-10"
              >
                <div className="grid gap-5 lg:grid-cols-[3rem_1fr_auto] lg:items-start lg:gap-8">
                  <span className="font-mono text-sm font-medium text-accent">
                    {p.number}
                  </span>
                  <div>
                    <h3 className="text-2xl tracking-tight sm:text-3xl">
                      {p.name}
                    </h3>
                    <p className="mt-2 max-w-xl text-ink-soft">{p.tagline}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {p.offerings.map((o) => (
                        <li
                          key={o}
                          className="rounded-full border border-border px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wide text-muted"
                        >
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-accent lg:pt-1">
                    Explore
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
