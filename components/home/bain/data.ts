/** Placeholder structure mirroring bain.com — swap copy later. */

export const bainIndustries = [
  "Transport & Logistics",
  "Professional Services",
  "Manufacturing",
  "Healthcare",
  "Financial Services",
  "Retail",
  "Construction & Infrastructure",
  "Technology",
  "Public Sector",
  "Property",
] as const;

export const bainBusinessNeeds = [
  "AI Strategy",
  "Production Delivery",
  "Workflow Automation",
  "Data & Analytics",
  "Change Management",
  "System Integration",
  "Governance & Risk",
  "Cost Reduction",
  "Customer Experience",
  "Long-term Partnership",
] as const;

export type BainCaseStudy = {
  id: string;
  image: string;
  logoLabel: string;
  title: string;
  href: string;
  metrics: { value: string; label: string }[];
  featured?: boolean;
};

export const bainCaseStudies: BainCaseStudy[] = [
  {
    id: "freight",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=768&h=768&fit=crop",
    logoLabel: "Logistics Co.",
    title: "A Freight Operator Deploys an AI Dispatch Copilot Across Three Sites",
    href: "/work/freight-dispatch-copilot",
    metrics: [
      { value: "40%", label: "reduction in manual dispatch tasks" },
      { value: "6", label: "weeks from pilot to production" },
    ],
    featured: true,
  },
  {
    id: "advisory",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=768&h=768&fit=crop",
    logoLabel: "Advisory Firm",
    title: "A Professional Services Firm Scales Knowledge Access with a Governed AI Assistant",
    href: "/work/advisory-knowledge-assistant",
    metrics: [
      { value: "3x", label: "faster research turnaround" },
      { value: "12", label: "practice areas onboarded in wave one" },
    ],
  },
  {
    id: "manufacturing",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=768&h=768&fit=crop",
    logoLabel: "Manufacturer",
    title: "A Manufacturer Automates Vision QA Without Slowing the Line",
    href: "/work/manufacturing-vision-qa",
    metrics: [
      { value: "85%", label: "defect detection accuracy uplift" },
      { value: "0", label: "line stoppages added in rollout" },
    ],
  },
  {
    id: "hr",
    image: "https://images.unsplash.com/photo-1521737711862-e3b381243052?w=768&h=768&fit=crop",
    logoLabel: "HRplease",
    title: "Multi-Site HR Operations Unified with a Production AI Platform",
    href: "/work/hrplease-multi-site-rollout",
    metrics: [
      { value: "8", label: "sites on a single governed stack" },
      { value: "1", label: "source of truth for policy answers" },
    ],
  },
];

export const bainSpotlight = {
  image: "/team/landing-main.jpg",
  name: "Leadership perspective",
  title: "AI's Evolution: What Good Looks Like Now",
  href: "/services/strategy-foresight",
  kicker: "View how we've helped Australian businesses win with AI",
};

export type BainInsight = {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  href: string;
  type: string;
};

export const bainInsights: BainInsight[] = [
  {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=960&h=540&fit=crop",
    category: "AI, Insights, and Solutions",
    title: "Resilience by Design: Preparing Your AI Stack for an Era of Uncertainty",
    excerpt:
      "As access to critical AI capabilities becomes less predictable, businesses need to rethink how they design, operate, and govern their AI systems.",
    href: "/services/build-deploy",
    type: "Brief",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=960&h=540&fit=crop",
    category: "Strategy",
    title: "The Business Case Divide Is About Proof of Performance, Not Priorities",
    excerpt:
      "Leaders with aligned strategy and delivery functions are far more likely to see measurable share and revenue outcomes from AI investments.",
    href: "/services/strategy-foresight",
    type: "Brief",
  },
];

export const bainHeroImages = {
  step1: "/team/landing-main.jpg",
  step2: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=900&fit=crop",
} as const;