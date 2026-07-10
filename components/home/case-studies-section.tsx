import Link from "next/link";
import { CaseStudyShowcaseGrid } from "@/components/site/case-study-showcase-grid";

export function CaseStudiesSection() {
  return (
    <section className="bg-stone py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <p className="font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-chocolate">
          Recent work
        </p>
        <h2 className="mt-3 max-w-2xl font-sans text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.03em] text-chocolate">
          Applied AI, where it has to work.
        </h2>

        <CaseStudyShowcaseGrid className="mt-8" />

        <Link
          href="/work"
          className="mt-10 inline-flex cursor-pointer font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-chocolate transition-colors duration-200 hover:underline"
        >
          See all client results
        </Link>
      </div>
    </section>
  );
}