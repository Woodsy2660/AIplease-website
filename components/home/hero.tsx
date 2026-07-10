"use client";

import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { HeroVisual } from "./hero-visual";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";

const microLabelClass =
  "font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em]";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const EASE = [0.21, 0.47, 0.32, 0.98] as const;

  const fadeInUp = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.25, ease: EASE },
      };

  return (
    <section className="relative overflow-hidden bg-stone">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
        <motion.div
          className="flex flex-col justify-center py-10 lg:py-16"
          {...fadeInUp}
        >
          <h1 className="max-w-[14ch] font-sans text-[clamp(1.75rem,3.6vw,2.75rem)] font-bold leading-[1.05] tracking-[-0.03em] text-chocolate">
            The growth partner for high-stakes AI decisions
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-4 sm:gap-5">
            <Link
              href="/audit"
              className={cn(
                "group inline-flex cursor-pointer items-center gap-2 rounded-full bg-chocolate px-5 py-2.5 text-white transition-colors duration-200 hover:bg-chocolate/90",
                microLabelClass,
              )}
            >
              Grow with aiplease
              <ArrowUpRight
                className="size-3.5 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>

            <Link
              href="/how-we-work"
              className={cn(
                "group inline-flex cursor-pointer items-center gap-2 text-chocolate transition-colors duration-200 hover:text-chocolate/70",
                microLabelClass,
              )}
            >
              See how
              <span className="flex size-7 items-center justify-center rounded-full border border-chocolate/35 transition-colors group-hover:border-chocolate/55">
                <Play className="size-2.5 fill-current" aria-hidden />
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative py-10 lg:py-16"
          {...fadeInUp}
          {...(!prefersReducedMotion && {
            transition: { ...fadeInUp.transition, delay: 0.06 },
          })}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}