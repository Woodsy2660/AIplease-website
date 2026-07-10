/** Pacific Fertiliser — editorial case study content (distilled from client brief). */

export const pacificFertiliserMeta = {
  slug: "pacific-fertiliser",
  client: "Pacific Fertiliser",
  location: "Australia",
  logo: "/clients/pacific-fertiliser-logo.png",
  eyebrow: "Case study · Pacific Fertiliser, Australia",
  headline:
    "The answers were in the database. The people who needed them were on the phone, at the plant, or on the road.",
  standfirst:
    "How an Australian fertiliser supplier put locally deployed chat agents on top of its internal database, so its people spend less time chasing information and more time acting on it, without a single record leaving the building.",
  heroImage: "/case-studies/pacific-fertiliser-main.jpg",
} as const;

export type PacificFertiliserSection = {
  num: string;
  marker: string;
  title: string;
  paragraphs: string[];
  image: { src: string; alt: string; caption?: string };
  imagePosition: "left" | "right";
};

export const pacificFertiliserSections: PacificFertiliserSection[] = [
  {
    num: "01",
    marker: "The company",
    title: "A products business that runs on knowledge as much as tonnage",
    paragraphs: [
      "Pacific Fertiliser is an Australian owned company supplying fertilisers, agricultural minerals and liquid nutrients across agricultural, industrial, civil and mining sectors. From bulk granular fertiliser out of major ports to tailored NPK blends, the business spans supply, custom blending, port logistics and spreading services across eastern Australia.",
      "The engagement started inside the business: mapping how work moves through sales, dispatch and accounts, documenting the existing software estate, and identifying where time was lost to retrieval. The technology adapts to the business, not the other way around.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1574943329822-4b9b0c8a8f8e?w=960&h=600&fit=crop",
      alt: "Agricultural fields",
      caption: "Supply, blending and logistics across eastern Australia",
    },
    imagePosition: "right",
  },
  {
    num: "02",
    marker: "The problem",
    title: "Skilled people spending their day as the search engine",
    paragraphs: [
      "The most experienced people become the lookup layer. A customer calls about a blend from two seasons ago. Dispatch wants to know what went out on a particular run. Accounts reconstructs the history behind a query. Each answer exists in the internal database, but retrieving it means the right person stopping work and knowing where to look.",
      "The goal was never to replace anyone's judgement. It was to stop paying senior people to do retrieval, and let them spend that time on decisions only they can make.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=960&h=600&fit=crop",
      alt: "Industrial operations environment",
      caption: "Retrieval load, not decision load",
    },
    imagePosition: "left",
  },
  {
    num: "03",
    marker: "The built",
    title: "Chat agents that already know where everything is",
    paragraphs: [
      "Nemoclaw chat agents run locally, connected directly to the company's internal database. Staff ask questions in plain language and get answers drawn from the company's own records, with responses pointing back to underlying records for quick verification.",
      "Each agent sees what its users are entitled to see, following permissions the business already maintains. The agents sit alongside existing tools rather than replacing them, so quoting, dispatch and reconciliation workflows stay unchanged.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=960&h=600&fit=crop",
      alt: "Team working with business systems",
      caption: "Plain-language access, grounded in source records",
    },
    imagePosition: "right",
  },
  {
    num: "04",
    marker: "The delivered",
    title: "Local by design: the data never leaves the business",
    paragraphs: [
      "Everything runs on Pacific Fertiliser's own infrastructure: agents, database connection and conversation history stay on premises. Database access is read-focused and permissioned through structures the business already maintains, not a copy that drifts out of date.",
      "Delivered: business and systems discovery, integration design against the existing software estate, and local deployment of chat agents connected to the internal database. In refinement: agent tuning against real question patterns and progressive expansion of data each role can reach.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=960&h=600&fit=crop",
      alt: "Professional reviewing operational data",
      caption: "On-premises deployment · data stays local",
    },
    imagePosition: "left",
  },
];