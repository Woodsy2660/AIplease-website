import Image from "next/image";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeroVisualProps = {
  children?: ReactNode;
  className?: string;
};

/** Right-column visual — full-bleed team photo matching reference layout. */
export function HeroVisual({ children, className = "" }: HeroVisualProps) {
  if (children) {
    return (
      <div className={cn("relative h-full min-h-[220px] w-full", className)}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative aspect-[4/5] w-full overflow-hidden rounded-lg",
        className,
      )}
    >
      <Image
        src="/team/hero-main.jpg"
        alt="AI Please team"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-stone/20 lg:to-stone/40"
      />
    </div>
  );
}