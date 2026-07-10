import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CardEngraving } from "./card-engraving";
import { HOW_WE_WORK_STEPS } from "./how-we-work-data";

/**
 * HowWeWork — dark band section with process cards
 *
 * Four cards explaining the process: Map → Find → Build → Stay
 * Each card has a vermilion number badge, serif title, description, and engraving placeholder.
 *
 * Features a "Start with a free audit" banner at the bottom with CTA.
 */

// Toggle for uniform card backgrounds vs. varied tints
const UNIFORM_CARDS = false;

const CARD_TINTS = UNIFORM_CARDS
  ? ["#291F16", "#291F16", "#291F16", "#291F16"]
  : ["#2A2018", "#2E211A", "#24211E", "#232A22"];

// Logo strip placeholders (greyscale partners/stack logos)
const LOGO_PLACEHOLDERS = ["Anthropic", "OpenAI", "Microsoft", "AWS", "Vercel"];

export function HowWeWork({ showTitle = true }: { showTitle?: boolean }) {
  return (
    <section
      className="w-full bg-chocolate py-10 pb-16 lg:py-12 lg:pb-24"
      style={{
        // Slightly darker variant available: #1B130C
        backgroundColor: "#291F16",
      }}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {showTitle && (
          <h2
            className="mb-10 text-stone lg:mb-14"
            style={{
              // TODO: use brand serif (Fraunces/Georgia) when available
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            How we work
          </h2>
        )}

        {/* Process cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {HOW_WE_WORK_STEPS.map((card, i) => (
            <div
              key={card.number}
              className="flex flex-col rounded-xl p-5 lg:p-6"
              style={{ backgroundColor: CARD_TINTS[i] }}
            >
              {/* Number badge - vermilion border and digit */}
              <div
                className="mb-4 flex size-10 items-center justify-center rounded-full border"
                style={{ borderColor: "#FE4939" }}
              >
                <span
                  className="font-mono text-sm font-semibold"
                  style={{ color: "#FE4939" }}
                >
                  {card.number}
                </span>
              </div>

              {/* Card title - serif */}
              <h3
                className="mb-3 text-stone"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(22px, 2.5vw, 28px)",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="mb-6 flex-1 text-rock"
                style={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  // TODO: use Schrifted Sans when available
                  fontFamily: "var(--font-sans), 'Inter', sans-serif",
                }}
              >
                {card.description}
              </p>

              {/* Engraving placeholder */}
              <CardEngraving subject={card.engraving} className="mt-auto" />
            </div>
          ))}
        </div>

        {/* Featured banner - "Start with a free audit" */}
        <div
          className="mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl p-6 sm:flex-row sm:items-center lg:mt-10 lg:p-8"
          style={{ backgroundColor: "#2E241C" }}
        >
          <div className="flex-1">
            <h3
              className="mb-2 text-stone"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(20px, 2.5vw, 26px)",
                fontWeight: 500,
              }}
            >
              Start with a free audit
            </h3>
            <p
              className="max-w-xl text-rock"
              style={{ fontSize: "15px", lineHeight: 1.6 }}
            >
              A structured look at how you work and where AI actually pays off —
              yours to keep whether or not you build with us.
            </p>
          </div>

          {/* CTA button - vermilion */}
          <Link
            href="/audit"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors duration-200 hover:opacity-90"
            style={{
              backgroundColor: "#FE4939",
              color: "#291F16",
              fontSize: "14px",
            }}
          >
            Get a free audit
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Logo strip - "We build across your stack" */}
        <div className="mt-10 lg:mt-12">
          <p
            className="mb-4 text-rock/60"
            style={{
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            We build across your stack
          </p>
          <div className="flex flex-wrap items-center gap-6 lg:gap-8">
            {LOGO_PLACEHOLDERS.map((name) => (
              <div
                key={name}
                className="flex h-8 items-center justify-center rounded border border-dashed border-stone/15 bg-stone/5 px-4"
              >
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-stone/30">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
