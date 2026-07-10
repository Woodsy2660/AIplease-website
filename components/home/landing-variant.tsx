import { getLandingPalette } from "@/lib/landing-palettes";
import { PaletteScope } from "@/components/home/palette-scope";
import { RefinedStoneVariant } from "@/components/home/variants/refined-stone";
import { StoneVermilionVariant } from "@/components/home/variants/stone-vermilion";
import { ChocolateNoirVariant } from "@/components/home/variants/chocolate-noir";
import { SkyClarityVariant } from "@/components/home/variants/sky-clarity";
import { RockEarthVariant } from "@/components/home/variants/rock-earth";

const variantComponents = {
  "refined-stone": RefinedStoneVariant,
  "stone-vermilion": StoneVermilionVariant,
  "chocolate-noir": ChocolateNoirVariant,
  "sky-clarity": SkyClarityVariant,
  "rock-earth": RockEarthVariant,
} as const;

type LandingVariantSlug = keyof typeof variantComponents;

type LandingVariantProps = {
  slug: string;
};

export function LandingVariant({ slug }: LandingVariantProps) {
  const palette = getLandingPalette(slug);
  const Variant = variantComponents[slug as LandingVariantSlug];

  if (!palette || !Variant) {
    return null;
  }

  return (
    <PaletteScope palette={palette}>
      <Variant />
    </PaletteScope>
  );
}