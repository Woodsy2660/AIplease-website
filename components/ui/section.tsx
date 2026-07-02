import * as React from "react";
import { cn } from "@/lib/utils";

const tones = {
  canvas: "bg-canvas text-ink",
  sand: "bg-sand text-ink",
  ink: "bg-ink text-canvas",
} as const;

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  tone?: keyof typeof tones;
  /** Hairline rule across the top of the section. */
  bordered?: boolean;
  /** Tighter vertical rhythm for secondary bands. */
  compact?: boolean;
};

export function Section({
  tone = "canvas",
  bordered = false,
  compact = false,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        tones[tone],
        compact ? "py-16 sm:py-20" : "py-20 sm:py-28 lg:py-32",
        bordered && "border-t border-border",
        className,
      )}
      {...props}
    />
  );
}
