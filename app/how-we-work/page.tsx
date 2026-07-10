import type { Metadata } from "next";
import { HowWeWork } from "@/components/home/how-we-work";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Our engagement process from first call to ongoing partnership — map, find, build, and stay.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <section className="bg-stone py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-chocolate">
            How we work
          </p>
          <h1 className="mt-3 max-w-2xl font-sans text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.03em] text-chocolate">
            From first call to systems that last.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
            We map how your business really runs, find where AI pays off, build
            only what earns its place, and stay as the technology moves.
          </p>
        </div>
      </section>

      <HowWeWork showTitle={false} />
    </>
  );
}