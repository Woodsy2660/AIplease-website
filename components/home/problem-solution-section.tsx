import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Scissors,
  Shield,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import {
  CLIENT_VOICES,
  HOW_WE_ARE_DIFFERENT,
} from "@/components/home/problem-solution-data";
import { QuoteMarquee } from "@/components/home/quote-marquee";

const PILLAR_ICONS: Record<
  (typeof HOW_WE_ARE_DIFFERENT)[number]["icon"],
  LucideIcon
> = {
  scissors: Scissors,
  clock: Clock,
  shield: Shield,
  "trending-up": TrendingUp,
};

/**
 * Problem → differentiation band (minimal divider layout).
 * Quote marquee, ruled headline strip, 2×2 copy grid.
 */
export function ProblemSolutionSection() {
  return (
    <>
      <QuoteMarquee quotes={CLIENT_VOICES} />

      <section className="bg-white pb-12 sm:pb-14 lg:pb-16">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-8 sm:gap-6 sm:px-6 sm:py-10 lg:px-8">
          <div aria-hidden className="h-px flex-1 bg-chocolate/12" />
          <h2 className="max-w-[min(100%,28rem)] shrink-0 text-center font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium leading-snug tracking-[-0.02em] text-balance text-chocolate sm:max-w-none sm:whitespace-nowrap">
            Sound familiar? Here&apos;s how we&apos;re different.
          </h2>
          <div aria-hidden className="h-px flex-1 bg-chocolate/12" />
        </div>

        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-16 lg:gap-y-20">
            {HOW_WE_ARE_DIFFERENT.map((item) => {
              const Icon = PILLAR_ICONS[item.icon];

              return (
                <article key={item.title} className="flex flex-col gap-5">
                  <div
                    aria-hidden
                    className="flex size-11 items-center justify-center rounded-full border border-vermilion/35"
                  >
                    <Icon className="size-[1.125rem] text-vermilion" strokeWidth={1.75} />
                  </div>
                  <p className="text-base leading-relaxed text-ink-soft sm:text-[1.0625rem]">
                    <span className="font-semibold text-chocolate">
                      {item.title}
                    </span>{" "}
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-14 flex justify-center sm:mt-16">
            <Link
              href="/how-we-work"
              className="group inline-flex cursor-pointer items-center gap-2 font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-chocolate transition-colors duration-200 hover:text-chocolate/70"
            >
              Here&apos;s exactly how we do it
              <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}