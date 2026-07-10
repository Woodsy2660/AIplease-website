"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { homeConcepts } from "@/lib/home-concepts";

export function ConceptSwitcher() {
  const pathname = usePathname();
  const activeSlug = pathname.split("/").pop() ?? "";

  return (
    <div
      aria-label="Landing page concepts"
      className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 rounded-2xl border border-border bg-canvas/95 p-2 shadow-[0_20px_60px_-24px_rgba(28,26,23,0.45)] backdrop-blur-md"
    >
      <div className="flex items-center justify-between gap-3 px-2 pb-2">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
          Landing concepts
        </p>
        <Link
          href="/concepts"
          className="text-xs font-medium text-ink-soft transition-colors hover:text-accent"
        >
          Compare all
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-4">
        {homeConcepts.map((concept) => {
          const href = `/concepts/${concept.slug}`;
          const active = activeSlug === concept.slug;

          return (
            <Link
              key={concept.slug}
              href={href}
              className={cn(
                "rounded-xl px-3 py-2.5 transition-colors",
                active
                  ? "bg-ink text-canvas"
                  : "text-ink-soft hover:bg-sand hover:text-ink",
              )}
            >
              <span className="block text-sm font-medium">{concept.name}</span>
              <span
                className={cn(
                  "mt-0.5 block font-mono text-[0.6rem] uppercase tracking-wider",
                  active ? "text-canvas/60" : "text-muted",
                )}
              >
                {concept.inspiration}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}