import type { Metadata } from "next";
import { CaseStudyShowcaseGrid } from "@/components/site/case-study-showcase-grid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Client engagements measured by outcomes — applied AI in healthcare, agriculture, sport, and operations.",
};

export default function WorkPage() {
  return (
    <>
      <section className="bg-stone py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-chocolate">
            Work
          </p>
          <h1 className="mt-3 max-w-2xl font-sans text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.03em] text-chocolate">
            Applied AI, where it has to work.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
            Each engagement ties an AI system back to the operational outcome it
            was built to deliver — in environments where getting it wrong costs
            real time and real money.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <CaseStudyShowcaseGrid />
        </div>
      </section>
    </>
  );
}