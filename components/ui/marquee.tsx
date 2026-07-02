import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
};

/**
 * Edge-to-edge infinite marquee (CSS-only). Pauses on hover and stops under
 * prefers-reduced-motion. Fades match the canvas background.
 */
export function Marquee({ items, className }: MarqueeProps) {
  const row = (
    <ul className="flex shrink-0 items-center" aria-hidden>
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-center gap-8 pl-8 font-mono text-sm uppercase tracking-[0.18em] text-muted"
        >
          <span>{item}</span>
          <span className="size-1 rounded-full bg-accent/60" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn("group relative flex overflow-hidden", className)}>
      <div className="flex animate-[marquee_38s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {row}
        {row}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-canvas to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-canvas to-transparent sm:w-32" />
    </div>
  );
}
