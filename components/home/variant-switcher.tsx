"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { landingPalettes, landingVariantSlugs } from "@/lib/landing-palettes";

export function VariantSwitcher() {
  const pathname = usePathname();
  const activeSlug = pathname.split("/").pop() ?? "";

  return (
    <div
      aria-label="Landing palette variants"
      className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 rounded-2xl border border-border bg-canvas/95 p-2 shadow-[0_20px_60px_-24px_rgba(28,26,23,0.45)] backdrop-blur-md"
    >
      <div className="flex items-center justify-between gap-3 px-2 pb-2">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
          Palette variants
        </p>
        <Link
          href="/concepts"
          className="text-xs font-medium text-ink-soft transition-colors hover:text-accent"
        >
          Compare all
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-5">
        {landingVariantSlugs.map((slug) => {
          const palette = landingPalettes[slug];
          const href = `/concepts/${slug}`;
          const active = activeSlug === slug;

          return (
            <Link
              key={slug}
              href={href}
              className={cn(
                "rounded-xl px-2.5 py-2 transition-colors sm:px-3 sm:py-2.5",
                active
                  ? "bg-ink text-canvas"
                  : "text-ink-soft hover:bg-sand hover:text-ink",
              )}
            >
              <span className="block text-sm font-medium leading-tight">
                {palette.name}
              </span>
              <span
                className={cn(
                  "mt-0.5 block font-mono text-[0.55rem] uppercase tracking-wider sm:text-[0.6rem]",
                  active ? "text-canvas/60" : "text-muted",
                )}
              >
                {slug}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}