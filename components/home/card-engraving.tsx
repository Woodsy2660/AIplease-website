import { type ReactNode } from "react";

/**
 * CardEngraving — swappable slot for vintage engraving illustrations
 *
 * Renders a placeholder frame for now. Replace with actual monochrome
 * vintage-engraving illustrations when assets are available.
 *
 * Intended subjects per card:
 * - Map: antique compass
 * - Find: brass balance scales
 * - Build: interlocking gears
 * - Stay: lighthouse
 */

type CardEngravingProps = {
  /** The intended subject for this engraving */
  subject: "compass" | "scales" | "gears" | "lighthouse";
  /** Optional children to render instead of placeholder */
  children?: ReactNode;
  /** Additional className */
  className?: string;
};

const SUBJECT_LABELS: Record<CardEngravingProps["subject"], string> = {
  compass: "antique compass",
  scales: "brass balance scales",
  gears: "interlocking gears",
  lighthouse: "lighthouse",
};

export function CardEngraving({
  subject,
  children,
  className = "",
}: CardEngravingProps) {
  if (children) {
    return (
      <div className={`relative w-full ${className}`}>
        {children}
      </div>
    );
  }

  // Placeholder frame
  return (
    <div
      className={`flex aspect-square w-full items-center justify-center rounded border border-dashed border-stone/20 bg-stone/5 ${className}`}
    >
      <p className="px-4 text-center font-mono text-[0.6rem] uppercase tracking-[0.1em] text-stone/40">
        engraving: {SUBJECT_LABELS[subject]}
      </p>
    </div>
  );
}
