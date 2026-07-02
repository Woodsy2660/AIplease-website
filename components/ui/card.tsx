import * as React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Adds a subtle hover lift + border emphasis for interactive cards. */
  interactive?: boolean;
};

export function Card({ interactive, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-canvas",
        interactive &&
          "transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_24px_60px_-32px_rgba(28,26,23,0.4)]",
        className,
      )}
      {...props}
    />
  );
}
