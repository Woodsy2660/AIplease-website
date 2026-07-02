/**
 * Global site configuration — navigation, contact details, and social links.
 * Items marked [SAMPLE] are placeholders to confirm before launch.
 */

export const site = {
  name: "AI Please",
  // Lowercase wordmark styling preserved from the existing brand.
  wordmark: "aiplease",
  tagline: "Strategy. Delivery. Partnership.",
  description:
    "AI that earns its place — and keeps it. Australian-owned strategy, build and partnership for production-ready AI.",
  url: "https://aiplease.au",
  // [SAMPLE] — confirm the real LinkedIn URL before launch.
  linkedin: "https://www.linkedin.com/company/aiplease",
  // [SAMPLE] — confirm the real enquiries address before launch.
  email: "hello@aiplease.au",
  responsePromise: "Within two business days",
  copyrightYear: 2026,
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Strategy + Foresight",
        href: "/services/strategy-foresight",
        description: "Where AI fits your business — and where it doesn't.",
      },
      {
        label: "Build + Deploy",
        href: "/services/build-deploy",
        description: "Practical AI systems from prototype to production.",
      },
      {
        label: "Evolve + Partner",
        href: "/services/evolve-partner",
        description: "We don't hand it back and walk away.",
      },
    ],
  },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Strategy + Foresight", href: "/services/strategy-foresight" },
      { label: "Build + Deploy", href: "/services/build-deploy" },
      { label: "Evolve + Partner", href: "/services/evolve-partner" },
      { label: "All services", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
