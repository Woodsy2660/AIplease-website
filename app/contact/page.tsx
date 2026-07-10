import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/site/contact-form";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're trying to achieve. We'll come back with a clear view of whether — and how — AI helps.",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;

  return (
    <Section tone="canvas">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
          {/* Left: invitation + commitments */}
          <div>
            <Reveal>
              <Eyebrow>Contact</Eyebrow>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-tight sm:text-[2.75rem]">
                {contact.heading}
              </h1>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 max-w-md text-lg text-ink-soft">
                {contact.intro}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <ul className="mt-10 space-y-4 border-t border-border pt-8">
                {contact.commitments.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
                    >
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-ink-soft">{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex items-baseline gap-3 border-t border-border pt-6">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  Response
                </span>
                <span className="text-sm font-medium text-ink">
                  {contact.responsePromise}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <ContactForm defaultProduct={product} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
