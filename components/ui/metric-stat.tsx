import { cn } from "@/lib/utils";
import { CountUp } from "@/components/ui/count-up";

type MetricStatProps = {
  value: string;
  label: string;
  className?: string;
  inverted?: boolean;
};

/** Metric-first stat: a large display figure over a small caption. */
export function MetricStat({ value, label, className, inverted }: MetricStatProps) {
  return (
    <div className={className}>
      <div
        className={cn(
          "font-display text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl",
          inverted ? "text-canvas" : "text-ink",
        )}
      >
        <CountUp value={value} />
      </div>
      <div
        className={cn(
          "mt-2 text-sm leading-snug",
          inverted ? "text-canvas/70" : "text-muted",
        )}
      >
        {label}
      </div>
    </div>
  );
}
