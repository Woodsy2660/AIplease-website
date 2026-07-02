"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type RevealProps = HTMLMotionProps<"div"> & {
  /** Entrance delay in seconds — increment across siblings to stagger. */
  delay?: number;
  /** Vertical travel in px. */
  y?: number;
};

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * Scroll-triggered fade + rise. Markup is identical on server and client
 * (no hook-based branching) to stay hydration-safe; reduced-motion is handled
 * globally by <MotionProvider> (MotionConfig reducedMotion="user"), which
 * disables the transform while keeping content reachable.
 */
export function Reveal({ delay = 0, y = 18, children, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
