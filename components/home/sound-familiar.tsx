"use client";

import { useEffect, useState } from "react";

/**
 * SoundFamiliar — animated quote carousel section
 * Ported from Claude Design source (v2 - slide animation).
 *
 * Quotes slide in one at a time, centered, with a counter (01/11, 02/11, etc.)
 * Simple, clean animation that cycles through all quotes.
 *
 * Respects prefers-reduced-motion: shows first quote statically.
 */

const QUOTES = [
  "We're paying for AI tools nobody actually uses.",
  "Everyone says we need AI. Nobody says what to do with it.",
  "Our systems are too fragile and old.",
  "What about training our team?",
  "I know we're losing hours somewhere — I just can't see where.",
  "Is my client data safe if we use this?",
  "The last agency built it and vanished.",
  "I don't want to spend money on something that's obsolete next year.",
  "We built something last year and it already feels old.",
  "I don't want to change how we work to suit some software.",
  "Just tell me straight — do we even need this?",
];

export function SoundFamiliar() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const secondsPerQuote = 4.2;
  const totalDuration = secondsPerQuote * QUOTES.length;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      {/* Keyframes */}
      <style jsx global>{`
        @keyframes sf-slide {
          0% {
            opacity: 0;
            filter: blur(10px);
            transform: translateY(16px);
          }
          1.6% {
            opacity: 1;
            filter: blur(0px);
            transform: translateY(0px);
          }
          7.5% {
            opacity: 1;
            filter: blur(0px);
            transform: translateY(0px);
          }
          9.09% {
            opacity: 0;
            filter: blur(10px);
            transform: translateY(-16px);
          }
          100% {
            opacity: 0;
            filter: blur(10px);
            transform: translateY(-16px);
          }
        }
      `}</style>

      <section
        className="relative w-full overflow-hidden bg-stone"
        style={{
          minHeight: "340px",
          height: "50vh",
          maxHeight: "480px",
          // TODO: swap Inter for SFT Schrifted Sans when font files available
          fontFamily: "var(--font-sans), 'Inter', 'Helvetica Neue', sans-serif",
        }}
      >
        {/* Heading - vermilion, uppercase */}
        <h2
          className="absolute left-1/2 z-10 m-0 -translate-x-1/2 whitespace-nowrap uppercase"
          style={{
            top: "15%",
            color: "#FE4939",
            fontSize: "clamp(13px, 1vw, 16px)",
            fontWeight: 600,
            letterSpacing: "0.2em",
          }}
        >
          Sound familiar?
        </h2>

        {/* Sliding quotes */}
        {QUOTES.map((text, i) => (
          <div
            key={i}
            className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-[7vw]"
            style={{
              opacity: prefersReducedMotion ? (i === 0 ? 1 : 0) : 0,
              filter: prefersReducedMotion ? "none" : undefined,
              transform: prefersReducedMotion ? "none" : undefined,
              willChange: prefersReducedMotion ? "auto" : "opacity, filter, transform",
              animation: prefersReducedMotion
                ? "none"
                : `sf-slide ${totalDuration.toFixed(2)}s ease-in-out ${(i * secondsPerQuote).toFixed(2)}s infinite both`,
            }}
          >
            <p
              className="m-0 max-w-[800px] text-center text-chocolate"
              style={{
                fontSize: "clamp(22px, 2.8vw, 38px)",
                fontWeight: 500,
                lineHeight: 1.3,
                letterSpacing: "-0.015em",
                textWrap: "balance",
              }}
            >
              &ldquo;{text}&rdquo;
            </p>
            <p
              className="m-0 text-rock"
              style={{
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.22em",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {pad(i + 1)} / {pad(QUOTES.length)}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
