"use client";

import { useEffect, useState } from "react";

/**
 * OtherWay — "So we do it the other way" statement band
 *
 * The emotional pivot from problem to solution. This is where the page
 * turns from light (stone) to dark (chocolate).
 *
 * Three contrast lines showing "usual way" (muted) vs "our way" (emphasized).
 * Visually distinct from the card-based How We Work section that follows.
 */

const CONTRASTS = [
  {
    usual: "Most AI gets built on a hunch and a sales pitch.",
    ours: "We find the return first — and tell you when there isn't one.",
  },
  {
    usual: "Most tools force you to work their way, then age out in a year.",
    ours: "We build to fit how you already work, and to last as AI improves.",
  },
  {
    usual: "Most agencies build it and vanish.",
    ours: "We stay straight with you, keep your data onshore and safe, and stick around as the tech moves.",
  },
];

export function OtherWay() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section
      className="w-full bg-chocolate py-14 lg:py-20"
      style={{ backgroundColor: "#291F16" }}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Section heading - serif, stone */}
        <h2
          className="mb-10 text-stone lg:mb-14"
          style={{
            // TODO: use brand serif (Fraunces) when available
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(24px, 3.5vw, 38px)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          So we do it the other way.
        </h2>

        {/* Contrast lines */}
        <div className="space-y-8 lg:space-y-10">
          {CONTRASTS.map((contrast, i) => (
            <div
              key={i}
              className="max-w-3xl"
              style={{
                opacity: prefersReducedMotion ? 1 : undefined,
              }}
            >
              {/* Usual way - muted rock */}
              <p
                className="mb-2 text-rock"
                style={{
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  // TODO: use Schrifted Sans when available
                  fontFamily: "var(--font-sans), 'Inter', sans-serif",
                }}
              >
                {contrast.usual}
              </p>

              {/* Separator - vermilion arrow */}
              <span
                className="mb-2 inline-block"
                style={{
                  color: "#FE4939",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
                aria-hidden="true"
              >
                →
              </span>

              {/* Our way - emphasized stone */}
              <p
                className="text-stone"
                style={{
                  fontSize: "clamp(18px, 2.2vw, 24px)",
                  fontWeight: 600,
                  lineHeight: 1.4,
                  letterSpacing: "-0.01em",
                  // TODO: use Schrifted Sans when available
                  fontFamily: "var(--font-sans), 'Inter', sans-serif",
                }}
              >
                {contrast.ours}
              </p>
            </div>
          ))}
        </div>

        {/* Bridge line - points to How We Work */}
        <p
          className="mt-10 text-rock lg:mt-12"
          style={{
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          Here&apos;s exactly how we do it
        </p>
      </div>
    </section>
  );
}
