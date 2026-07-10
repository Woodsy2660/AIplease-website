import { cn } from "@/lib/utils";

type QuoteMarqueeProps = {
  quotes: readonly string[];
  className?: string;
};

/**
 * Infinite quote band on chocolate — brand-slider style.
 * Pauses on hover; static wrap under prefers-reduced-motion.
 */
export function QuoteMarquee({ quotes, className }: QuoteMarqueeProps) {
  const items = quotes.map((quote) => (
    <li key={quote} className="shrink-0 pl-12 sm:pl-16">
      <span className="whitespace-nowrap font-sans text-base leading-relaxed text-stone sm:text-lg">
        &ldquo;{quote}&rdquo;
      </span>
    </li>
  ));

  const animatedRow = (
    <ul className="flex shrink-0 items-center">{items}</ul>
  );

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-chocolate py-10 sm:py-12 lg:py-14",
        className,
      )}
    >
      {/* Static layout for reduced motion */}
      <ul className="mx-auto hidden max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 motion-reduce:flex sm:px-6 lg:px-8">
        {quotes.map((quote) => (
          <li
            key={quote}
            className="text-center font-sans text-base leading-relaxed text-stone sm:text-lg"
          >
            &ldquo;{quote}&rdquo;
          </li>
        ))}
      </ul>

      {/* Sliding marquee */}
      <div className="group relative flex motion-reduce:hidden">
        <div className="flex animate-[marquee_100s_linear_infinite] group-hover:[animation-play-state:paused]">
          {animatedRow}
          {animatedRow}
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-chocolate to-transparent sm:w-24"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-chocolate to-transparent sm:w-24"
        />
      </div>
    </div>
  );
}