"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type CountUpProps = {
  /** Display string, e.g. "31%", "$480k", "4.2×", "1,200". */
  value: string;
  className?: string;
  duration?: number;
};

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * Counts a metric up from zero when scrolled into view, preserving any prefix
 * ($), suffix (%, ×, k, +) and decimal/comma formatting. SSR-safe: the final
 * value is the initial render, so content is correct without JS. Values that
 * aren't a single clean number (e.g. "24/7") render as-is.
 */
export function CountUp({ value, className, duration = 1.3 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const match = value.match(/^([^\d-]*)(-?\d[\d,]*\.?\d*)(.*)$/);
  const animatable = !!match && !value.includes("/");
  const prefix = match?.[1] ?? "";
  const numStr = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";
  const target = animatable ? parseFloat(numStr.replace(/,/g, "")) : 0;
  const decimals = numStr.includes(".") ? numStr.split(".")[1]?.length ?? 0 : 0;
  const hasComma = numStr.includes(",");

  const fmt = (n: number) => {
    const fixed = n.toFixed(decimals);
    return hasComma
      ? Number(fixed).toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : fixed;
  };

  const [text, setText] = useState(value);

  useEffect(() => {
    if (!animatable || !inView) return;
    if (reduce) {
      setText(value);
      return;
    }
    const controls = animate(0, target, {
      duration,
      ease: EASE,
      onUpdate: (v) => setText(prefix + fmt(v) + suffix),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, animatable, reduce]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {text}
    </span>
  );
}
