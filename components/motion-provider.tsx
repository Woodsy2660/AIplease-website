"use client";

import { MotionConfig } from "motion/react";

/**
 * Respects the user's reduced-motion preference for all motion components
 * without per-component hook branching (which would cause SSR/CSR hydration
 * mismatches). "user" disables transform/layout animations for users who ask
 * for reduced motion while keeping opacity fades, so content stays reachable.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
