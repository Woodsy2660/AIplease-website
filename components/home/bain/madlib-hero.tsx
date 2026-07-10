"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  bainBusinessNeeds,
  bainHeroImages,
  bainIndustries,
} from "@/components/home/bain/data";

type Step = 1 | 2;

export function BainMadlibHero() {
  const [step, setStep] = useState<Step>(1);
  const [industry, setIndustry] = useState<string | null>(null);
  const [need, setNeed] = useState<string | null>(null);

  const canAdvance = step === 1 ? industry !== null : need !== null;

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-[84rem] lg:grid-cols-[1fr_0.95fr]">
        {/* Copy + madlib */}
        <div className="flex flex-col justify-center px-6 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
          <h1 className="max-w-xl text-[2rem] font-semibold leading-[1.08] tracking-tight text-chocolate sm:text-[2.35rem] lg:text-[2.65rem]">
            We champion the bold to achieve the extraordinary.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
            Answer two questions and put our thinking to work on your challenges.
          </p>

          <div className="mt-10">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              {step}. What is your {step === 1 ? "industry" : "business need"}?{" "}
              <span className="text-rock">Question {step} of 2</span>
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {(step === 1 ? bainIndustries : bainBusinessNeeds).map((item) => {
                const selected = step === 1 ? industry === item : need === item;
                return (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() =>
                        step === 1 ? setIndustry(item) : setNeed(item)
                      }
                      className={cn(
                        "cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors duration-200",
                        selected
                          ? "border-chocolate bg-chocolate text-white"
                          : "border-border bg-white text-chocolate hover:border-chocolate/30 hover:bg-stone/60",
                      )}
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
              <li>
                <button
                  type="button"
                  className="cursor-pointer rounded-full border border-dashed border-rock px-4 py-2 text-sm text-muted transition-colors duration-200 hover:border-chocolate/30 hover:text-chocolate"
                >
                  View all
                </button>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="cursor-pointer text-sm font-medium text-chocolate underline-offset-4 transition-colors duration-200 hover:underline"
                >
                  Back
                </button>
              )}
              {step === 1 ? (
                <button
                  type="button"
                  disabled={!canAdvance}
                  onClick={() => setStep(2)}
                  className={cn(
                    "inline-flex cursor-pointer items-center justify-center rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-200",
                    canAdvance
                      ? "bg-chocolate text-white hover:bg-chocolate/90"
                      : "cursor-not-allowed bg-rock/40 text-white/80",
                  )}
                >
                  Next
                </button>
              ) : (
                <Link
                  href="/contact"
                  className={cn(
                    "inline-flex cursor-pointer items-center justify-center rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-200",
                    canAdvance
                      ? "bg-chocolate text-white hover:bg-chocolate/90"
                      : "pointer-events-none bg-rock/40 text-white/80",
                  )}
                  aria-disabled={!canAdvance}
                  tabIndex={canAdvance ? 0 : -1}
                  onClick={(e) => {
                    if (!canAdvance) e.preventDefault();
                  }}
                >
                  Submit
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Step imagery — Bain swaps photo per question */}
        <div className="relative hidden min-h-[520px] lg:block">
          <Image
            src={bainHeroImages.step1}
            alt=""
            fill
            priority
            sizes="50vw"
            className={cn(
              "object-cover transition-opacity duration-500",
              step === 1 ? "opacity-100" : "opacity-0",
            )}
          />
          <Image
            src={bainHeroImages.step2}
            alt=""
            fill
            sizes="50vw"
            className={cn(
              "object-cover transition-opacity duration-500",
              step === 2 ? "opacity-100" : "opacity-0",
            )}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20"
          />
        </div>
      </div>
    </section>
  );
}