import { cn } from "@/lib/utils";

type NumberedMarkerProps = {
  /** Sequence value, e.g. "01". */
  value: string;
  className?: string;
  inverted?: boolean;
};

/**
 * Large mono sequence marker (01 / 02 / 03). Used where the content genuinely
 * is an ordered set — the three service pillars and process steps.
 */
export function NumberedMarker({ value, className, inverted }: NumberedMarkerProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "block font-mono text-sm font-medium tabular-nums",
        inverted ? "text-canvas/50" : "text-accent",
        className,
      )}
    >
      {value}
    </span>
  );
}
