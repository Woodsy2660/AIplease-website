import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/** Compact under-hero CTA — stone surface, flows from hero. */
export function UnderHeroSection() {
  return (
    <section id="explore" className="bg-stone">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="border-t border-chocolate/10 pt-5 lg:pt-6">
          <div className="flex flex-col items-start justify-between gap-3 rounded-2xl bg-chocolate px-4 py-4 sm:flex-row sm:items-center sm:px-5 sm:py-4 lg:mb-8">
            <p className="max-w-lg text-sm leading-relaxed text-stone">
              Need a clear AI plan for the next 90 days? Book a strategy call.
            </p>
            <Link
              href="/contact"
              className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-chocolate transition-colors duration-200 hover:bg-stone"
            >
              Book call
              <ArrowUpRight className="size-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}