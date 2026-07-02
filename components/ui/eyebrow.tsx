import * as React from "react";
import { cn } from "@/lib/utils";

type EyebrowProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Optional index marker, e.g. "01". Rendered in the accent colour. */
  index?: string;
  /** Inverted treatment for dark (ink) sections. */
  inverted?: boolean;
};

/** Mono, upper-case section label with a hairline tick — a signature device. */
export function Eyebrow({ index, inverted, className, children, ...props }: EyebrowProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em]",
        inverted ? "text-canvas/70" : "text-muted",
        className,
      )}
      {...props}
    >
      {index ? (
        <span className="text-accent">{index}</span>
      ) : (
        <span
          aria-hidden
          className={cn("h-px w-6", inverted ? "bg-canvas/30" : "bg-border")}
        />
      )}
      <span>{children}</span>
    </div>
  );
}
