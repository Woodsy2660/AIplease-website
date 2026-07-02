import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "The terms that govern your use of the AI Please website, including intellectual property, liability, and governing law in Australia.",
};

export default function TermsPage() {
  return (
    <Section tone="canvas">
      <Container className="max-w-3xl">
        <Reveal>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-6 text-4xl tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Last updated June 2026
          </p>
          <p className="mt-6 rounded-2xl border border-border bg-sand p-4 text-sm leading-relaxed text-ink-soft">
            [SAMPLE] — placeholder legal copy; review with a qualified Australian
            legal adviser before launch.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-12 space-y-6 text-base leading-relaxed text-ink-soft">
            <p>
              These terms govern your use of the AI Please website. By accessing
              or using this site, you agree to them. If you do not agree, please
              do not use the site. These terms apply to the website only;
              engagements for our services are governed by a separate written
              agreement.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl tracking-tight text-ink">
                Acceptance and use of the site
              </h2>
              <p>
                You may use this site for lawful purposes and in line with these
                terms. You agree not to interfere with the site&rsquo;s
                operation or security, attempt to access it in ways we have not
                authorised, or use it to transmit anything unlawful or harmful.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl tracking-tight text-ink">
                Intellectual property
              </h2>
              <p>
                Unless otherwise stated, all content on this site — including
                text, design, graphics, and logos — is owned by or licensed to
                AI Please and is protected by intellectual property laws. You may
                view and print content for your own information, but you may not
                reproduce, distribute, or commercially exploit it without our
                written permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl tracking-tight text-ink">
                No professional advice and no warranty
              </h2>
              <p>
                The content on this site is provided for general information
                only. It is not professional, technical, or legal advice, and
                you should not rely on it as such. While we take care to keep the
                site accurate and up to date, we provide it &ldquo;as is&rdquo;
                and make no warranties that it is complete, current, or
                error-free.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl tracking-tight text-ink">
                Limitation of liability
              </h2>
              <p>
                To the maximum extent permitted by law, AI Please is not liable
                for any loss or damage arising from your use of, or reliance on,
                this site or its content. Nothing in these terms excludes,
                restricts, or modifies any rights or remedies you may have under
                the Australian Consumer Law or other laws that cannot lawfully be
                excluded.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl tracking-tight text-ink">
                Links to third parties
              </h2>
              <p>
                This site may contain links to third-party websites. We provide
                these for convenience only and do not control or endorse them. We
                are not responsible for the content, products, or practices of
                any third-party site, and your use of them is at your own risk.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl tracking-tight text-ink">
                Governing law
              </h2>
              <p>
                These terms are governed by the laws of Australia. You submit to
                the non-exclusive jurisdiction of the courts of Australia and the
                state in which we operate in relation to any dispute connected
                with this site or these terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl tracking-tight text-ink">
                Changes to these terms
              </h2>
              <p>
                We may update these terms from time to time. Any changes take
                effect when we publish the updated version on this page, so
                please review it periodically. Your continued use of the site
                after a change means you accept the revised terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl tracking-tight text-ink">
                Contact
              </h2>
              <p>
                If you have any questions about these terms, contact us at{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-ink underline decoration-border underline-offset-4 transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
                .
              </p>
            </section>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
