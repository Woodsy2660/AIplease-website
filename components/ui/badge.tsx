import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border px-2.5 py-0.5 font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] whitespace-nowrap transition-colors duration-200 cursor-default",
  {
    variants: {
      variant: {
        default: "border-chocolate/15 bg-stone text-chocolate",
        secondary: "border-rock/40 bg-stone text-chocolate",
        outline: "border-border bg-transparent text-muted",
        ink: "border-canvas/15 bg-canvas/10 text-stone",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };