import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How AI Please collects, uses, stores and discloses personal information — and your rights under the Australian Privacy Principles.",
};

export default function PrivacyPage() {
  return (
    <Section tone="canvas">
      <Container className="max-w-3xl">
        <Reveal>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-6 text-4xl tracking-tight sm:text-5xl">
            Privacy Policy
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
              AI Please (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
              respects your privacy. This policy explains how we handle personal
              information in connection with this website and our enquiries. We
              are committed to managing personal information in accordance with
              the Privacy Act 1988 (Cth) and the Australian Privacy Principles.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl tracking-tight text-ink">
                Information we collect
              </h2>
              <p>
                We collect the information you choose to give us through our
                contact form. This includes your name, work email address, the
                organisation you represent, your message, and — where you tell
                us — your indicative timeline and budget. We may also collect
                basic technical information, such as your browser type and pages
                visited, to keep the site secure and working well.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl tracking-tight text-ink">
                How we use it
              </h2>
              <p>
                We use the information you provide to respond to your enquiry,
                scope potential work, and stay in touch about the engagement you
                asked about. We do not sell your personal information, and we do
                not use it for unrelated marketing without your consent.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl tracking-tight text-ink">
                Storage and security
              </h2>
              <p>
                We store enquiry information using reputable service providers
                and take reasonable steps to protect it from misuse,
                interference, loss, and unauthorised access, modification, or
                disclosure. We retain personal information only for as long as we
                need it for the purposes described here, or as required by law,
                after which we take reasonable steps to delete or de-identify it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl tracking-tight text-ink">
                Disclosure
              </h2>
              <p>
                We may disclose your information to trusted third parties who
                help us operate our business — for example, email, hosting, and
                customer-relationship providers — and only so they can perform
                services for us. We may also disclose information where required
                or authorised by law. Some of these providers may store data
                outside Australia; where that is the case, we take reasonable
                steps to ensure your information is handled consistently with
                this policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl tracking-tight text-ink">
                The Australian Privacy Principles
              </h2>
              <p>
                Our handling of personal information is governed by the Privacy
                Act 1988 (Cth) and the Australian Privacy Principles (APPs). The
                APPs set out standards for how personal information is collected,
                used, disclosed, secured, and accessed. Where this policy and the
                APPs differ, the APPs prevail.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl tracking-tight text-ink">
                Your rights: access and correction
              </h2>
              <p>
                You may request access to the personal information we hold about
                you, and ask us to correct it if it is inaccurate, out of date,
                or incomplete. We will respond within a reasonable period. If we
                decline a request, we will explain why and how you can complain.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl tracking-tight text-ink">
                How to contact us about privacy
              </h2>
              <p>
                To ask a question, request access or correction, or make a
                privacy complaint, contact us at{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-ink underline decoration-border underline-offset-4 transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
                . If you are not satisfied with our response, you may contact the
                Office of the Australian Information Commissioner (OAIC).
              </p>
            </section>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
