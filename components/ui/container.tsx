import * as React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Wider measure for hero / showcase rows. */
  wide?: boolean;
};

export function Container({ className, wide, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        wide ? "max-w-[84rem]" : "max-w-6xl",
        className,
      )}
      {...props}
    />
  );
}
