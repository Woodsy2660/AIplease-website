/**
 * Free Audit — CTA landing page placeholder
 * TODO: Replace with actual audit request form and value proposition
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Get a Free AI Audit",
  description:
    "Map your workflows, find the real return. Book a free AI audit with AI Please.",
};

export default function AuditPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Get a free AI audit
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          Coming soon — book a free audit to map your workflows and find where
          AI creates genuine return.
        </p>
        <div className="mt-8">
          <Button href="/contact">Contact us in the meantime</Button>
        </div>
      </Container>
    </section>
  );
}
