"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { bainCaseStudies } from "@/components/home/bain/data";

export function BainCaseStudyCarousel() {
  const [active, setActive] = useState(0);
  const story = bainCaseStudies[active];

  const go = (dir: -1 | 1) => {
    setActive((i) => (i + dir + bainCaseStudies.length) % bainCaseStudies.length);
  };

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold tracking-tight text-chocolate sm:text-2xl">
          Bold steps forward.
        </h2>

        {/* Thumbnail strip — Bain square image row */}
        <div className="relative mt-7">
          <div className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-4">
            {bainCaseStudies.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "group relative aspect-square w-[38vw] max-w-[160px] shrink-0 cursor-pointer overflow-hidden sm:w-[150px] lg:w-[170px]",
                  index === active && "ring-2 ring-chocolate ring-offset-2",
                )}
                aria-label={`View ${item.logoLabel} story`}
                aria-pressed={index === active}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="220px"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-chocolate/80 to-transparent px-3 pb-3 pt-10">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-stone">
                    {item.logoLabel}
                  </span>
                </div>
                {item.featured && (
                  <span className="absolute left-3 top-3 rounded bg-chocolate/90 px-2 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-stone">
                    Featured
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Featured story detail */}
        <div className="mt-12 grid gap-10 border-t border-border pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Featured client success story
            </p>
            <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-chocolate sm:text-2xl">
              <Link
                href={story.href}
                className="cursor-pointer transition-colors duration-200 hover:underline"
              >
                {story.title}
              </Link>
            </h3>
            <Link
              href={story.href}
              className="mt-8 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-chocolate transition-colors duration-200 hover:underline"
            >
              Read story
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              The impact
            </p>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              {story.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="font-display text-4xl font-semibold tracking-tight text-chocolate sm:text-5xl">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="mt-10 flex items-center justify-between gap-4">
          <Link
            href="/work"
            className="cursor-pointer text-sm font-semibold uppercase tracking-[0.12em] text-chocolate transition-colors duration-200 hover:underline"
          >
            See all client results
          </Link>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous story"
              className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-border text-chocolate transition-colors duration-200 hover:border-chocolate hover:bg-stone/50"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next story"
              className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-border text-chocolate transition-colors duration-200 hover:border-chocolate hover:bg-stone/50"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}