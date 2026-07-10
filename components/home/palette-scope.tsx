import type { LandingPalette } from "@/lib/landing-palettes";

type PaletteScopeProps = {
  palette: LandingPalette;
  children: React.ReactNode;
  className?: string;
};

/** Scopes brand CSS variables to a landing variant without affecting the global site. */
export function PaletteScope({ palette, children, className }: PaletteScopeProps) {
  return (
    <div
      className={className}
      style={
        {
          "--canvas": palette.canvas,
          "--sand": palette.sand,
          "--sand-deep": palette.sandDeep,
          "--ink": palette.ink,
          "--ink-soft": palette.inkSoft,
          "--muted": palette.muted,
          "--border": palette.border,
          "--accent": palette.accent,
          "--accent-strong": palette.accentStrong,
          "--on-accent": palette.onAccent,
          "--highlight": palette.highlight ?? palette.sandDeep,
          "--color-canvas": palette.canvas,
          "--color-sand": palette.sand,
          "--color-sand-deep": palette.sandDeep,
          "--color-ink": palette.ink,
          "--color-ink-soft": palette.inkSoft,
          "--color-muted": palette.muted,
          "--color-border": palette.border,
          "--color-accent": palette.accent,
          "--color-accent-strong": palette.accentStrong,
          "--color-on-accent": palette.onAccent,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}