export type LandingPalette = {
  id: string;
  name: string;
  description: string;
  design: string;
  canvas: string;
  sand: string;
  sandDeep: string;
  ink: string;
  inkSoft: string;
  muted: string;
  border: string;
  accent: string;
  accentStrong: string;
  onAccent: string;
  /** Optional secondary highlight from brand kit */
  highlight?: string;
};

/** Palettes drawn from AiPlease Brand Guidelines v2 + Refined Stone system. */
export const landingPalettes: Record<string, LandingPalette> = {
  "refined-stone": {
    id: "refined-stone",
    name: "Refined Stone",
    description: "Current production look — warm canvas, near-black ink, burnt sienna accent.",
    design: "Cinematic full-bleed team hero, editorial why list, photo case-study cards.",
    canvas: "#faf9f7",
    sand: "#f2eee7",
    sandDeep: "#eae3d8",
    ink: "#1c1a17",
    inkSoft: "#4a453e",
    muted: "#6f675b",
    border: "#e4ded4",
    accent: "#c2410c",
    accentStrong: "#9a3412",
    onAccent: "#fff8f3",
  },
  "stone-vermilion": {
    id: "stone-vermilion",
    name: "Stone & Vermilion",
    description: "Official brand primary — Stone surfaces, Chocolate type, Vermilion CTAs.",
    design: "Split hero with framed team photo, vermilion industry band, three-column why grid.",
    canvas: "#e5e2dd",
    sand: "#beb8aa",
    sandDeep: "#a8a196",
    ink: "#291f16",
    inkSoft: "#4a3f35",
    muted: "#7a7268",
    border: "#d4cfc6",
    accent: "#fe4939",
    accentStrong: "#e03a2c",
    onAccent: "#ffffff",
  },
  "chocolate-noir": {
    id: "chocolate-noir",
    name: "Chocolate Noir",
    description: "Dark Chocolate dominant — high contrast, vermilion sparks, editorial drama.",
    design: "Immersive dark hero, circular team focal point, inverted light-on-dark sections.",
    canvas: "#f0ebe4",
    sand: "#3d2f26",
    sandDeep: "#291f16",
    ink: "#291f16",
    inkSoft: "#5c4a40",
    muted: "#8a7d72",
    border: "#4a3f35",
    accent: "#fe4939",
    accentStrong: "#d93b2d",
    onAccent: "#ffffff",
    highlight: "#e5e2dd",
  },
  "sky-clarity": {
    id: "sky-clarity",
    name: "Sky Clarity",
    description: "Stone + Sky secondary — airy, minimal, calm professional tone.",
    design: "Typography-first hero without photo, sky accent rules, generous whitespace.",
    canvas: "#e5e2dd",
    sand: "#eef7fa",
    sandDeep: "#c7e3ee",
    ink: "#291f16",
    inkSoft: "#4a453e",
    muted: "#6f675b",
    border: "#d4e8ef",
    accent: "#3d8fad",
    accentStrong: "#2d7289",
    onAccent: "#ffffff",
    highlight: "#c7e3ee",
  },
  "rock-earth": {
    id: "rock-earth",
    name: "Rock Earth",
    description: "Rock-forward earth tones — grounded, warm, structured horizontal bands.",
    design: "Rock hero band with inset photo card, stat strip, compact banded sections.",
    canvas: "#e8e4dc",
    sand: "#beb8aa",
    sandDeep: "#a39d8f",
    ink: "#291f16",
    inkSoft: "#4a3f35",
    muted: "#736b60",
    border: "#c9c2b6",
    accent: "#b85c38",
    accentStrong: "#9a4a2c",
    onAccent: "#fff8f3",
  },
};

export const landingVariantSlugs = Object.keys(landingPalettes);

export function getLandingPalette(slug: string) {
  return landingPalettes[slug];
}