export type HomeConcept = {
  slug: string;
  name: string;
  inspiration: string;
  description: string;
};

export const homeConcepts: HomeConcept[] = [
  {
    slug: "consulting",
    name: "Consulting",
    inspiration: "McKinsey",
    description:
      "Editorial authority — structured hierarchy, restrained imagery, and insight-led sections.",
  },
  {
    slug: "frontier",
    name: "Frontier",
    inspiration: "Faculty AI",
    description:
      "Cinematic hero with the team photo, impact metrics, and frontline perspectives.",
  },
  {
    slug: "clarity",
    name: "Clarity",
    inspiration: "Anthropic",
    description:
      "Mission-first minimalism — generous whitespace, soft cards, and a calm reading rhythm.",
  },
  {
    slug: "partner",
    name: "Partner",
    inspiration: "pointdot",
    description:
      "Human and direct — bold headline, stat strip, team-forward partnering, and outcome cards.",
  },
];

export const getHomeConcept = (slug: string) =>
  homeConcepts.find((c) => c.slug === slug);