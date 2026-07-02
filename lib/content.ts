/**
 * Single source of truth for site copy.
 *
 * VERBATIM lines from the existing aiplease.au are preserved exactly.
 * NEW copy follows the brand's business-first voice (and Strategist Hub's
 * "from X to Y" / "engineered for" patterns) where the rebuild expands scope.
 * Anything invented for layout completeness is marked [SAMPLE] and must be
 * replaced with real content before launch.
 */

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export const hero = {
  // Verbatim
  headline: "AI that earns its place — and keeps it.",
  subhead: "The newest model is a tool, not a strategy.",
  intro:
    "We help Australian businesses find where AI creates genuine value, build systems that reach production, and keep them sharp as the field moves.",
  primaryCta: { label: "Let's Talk", href: "/contact" },
  secondaryCta: { label: "See How We Work", href: "/services" },
} as const;

// ---------------------------------------------------------------------------
// Differentiators (verbatim labels)
// ---------------------------------------------------------------------------

export const differentiators = [
  {
    title: "Business-first before we build",
    body: "We start with the outcome and the economics, not the model. If AI isn't the right answer, we'll tell you.",
  },
  {
    title: "Production-ready delivery",
    body: "Prototypes are easy. We engineer systems that survive real users, real data, and real edge cases.",
  },
  {
    title: "Australian-owned & operated",
    body: "Local accountability, local context, and a working knowledge of the regulation you operate under.",
  },
] as const;

// ---------------------------------------------------------------------------
// Service pillars (verbatim names, taglines & offerings)
// ---------------------------------------------------------------------------

export type Pillar = {
  number: string;
  slug: string;
  name: string;
  tagline: string; // verbatim
  /** "from X to Y" headline for the detail page. */
  headline: string;
  summary: string;
  offerings: string[]; // verbatim offerings
  process: { step: string; title: string; body: string }[];
};

export const pillars: Pillar[] = [
  {
    number: "01",
    slug: "strategy-foresight",
    name: "Strategy + Foresight",
    tagline: "Where AI fits your business—and where it doesn't.",
    headline: "From AI hype to a decision you can defend.",
    summary:
      "We map where AI creates genuine business value, pressure-test the options, and give your leadership a clear, evidence-backed view of what to do next — and what to ignore.",
    offerings: [
      "Opportunity mapping",
      "Vendor assessment",
      "Trend scanning",
      "Executive briefs & reporting",
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        body: "We learn your operations, constraints, and economics before naming a single use case.",
      },
      {
        step: "02",
        title: "Assess",
        body: "Each opportunity is scored on value, feasibility, and risk — with the assumptions stated.",
      },
      {
        step: "03",
        title: "Brief",
        body: "You get a prioritised roadmap and an executive brief your board can act on.",
      },
    ],
  },
  {
    number: "02",
    slug: "build-deploy",
    name: "Build + Deploy",
    tagline: "Practical AI systems that move from prototype to production.",
    headline: "From prototype to production — without the rewrite.",
    summary:
      "We engineer assistants, agents, and automations that hold up under real users and real data — integrated with the systems your business already runs on.",
    offerings: [
      "Custom AI assistants",
      "Voice agents",
      "Workflow automation",
      "System integrations",
    ],
    process: [
      {
        step: "01",
        title: "Prototype",
        body: "A working slice in weeks, tested against real tasks rather than a demo script.",
      },
      {
        step: "02",
        title: "Harden",
        body: "Evaluation, guardrails, observability, and the unglamorous edge cases that decide production.",
      },
      {
        step: "03",
        title: "Ship",
        body: "Deployed into your stack with the documentation and handover your team needs.",
      },
    ],
  },
  {
    number: "03",
    slug: "evolve-partner",
    name: "Evolve + Partner",
    tagline: "We don't hand it back and walk away.",
    headline: "From launch day to lasting advantage.",
    summary:
      "AI systems drift as models, data, and your business change. We stay on to monitor, tune, and upgrade — so the advantage you built compounds instead of decaying.",
    offerings: [
      "Ongoing monitoring",
      "Tuning",
      "Model upgrades",
      "Training",
      "Quarterly reviews",
    ],
    process: [
      {
        step: "01",
        title: "Monitor",
        body: "Live quality, cost, and usage tracking so issues surface before your users find them.",
      },
      {
        step: "02",
        title: "Tune",
        body: "Continuous refinement and model upgrades as the field — and your data — moves.",
      },
      {
        step: "03",
        title: "Review",
        body: "Quarterly reviews that tie the system back to the outcomes it was built to deliver.",
      },
    ],
  },
];

export const getPillar = (slug: string) => pillars.find((p) => p.slug === slug);

// ---------------------------------------------------------------------------
// HRplease product (verbatim)
// ---------------------------------------------------------------------------

export const hrplease = {
  name: "HRplease",
  tagline: "24/7 Australian HR compliance assistant",
  value:
    "HRplease gives small and medium businesses on-demand HR compliance guidance — without an internal HR function.",
  audiences: [
    "Small to medium businesses without a dedicated HR department.",
    "HR professionals verifying advice and retrieving specific provisions quickly.",
  ],
  capabilities: [
    {
      title: "Fair Work Act retrieval",
      body: "Retrieve specific sections of the Fair Work Act instantly — no manual search through legislation.",
    },
    {
      title: "NES guidance",
      body: "Answer questions about minimum entitlements under the National Employment Standards.",
    },
    {
      title: "Template access",
      body: "Surface Fair Work templates for letters of engagement, warnings, and termination — correctly formatted.",
    },
    {
      title: "Available 24/7",
      body: "On-demand access for managers making decisions outside business hours, without waiting for HR.",
    },
  ],
  howItWorks:
    "HRplease is trained on Australian HR law — the National Employment Standards, the Fair Work Act, and Fair Work templates. Every response references the specific legislative provisions behind it, so advice is traceable to source.",
  ctas: [
    { label: "Request access", href: "/contact?product=hrplease", primary: true },
    { label: "Ask a question", href: "/contact?product=hrplease" },
  ],
} as const;

// ---------------------------------------------------------------------------
// Projects in development — [SAMPLE] placeholders alongside HRplease (live)
// ---------------------------------------------------------------------------

export type Project = {
  name: string;
  status: "Live" | "In development";
  category: string;
  tagline: string;
  description: string;
  sample?: boolean;
};

/**
 * Upcoming productised platforms. HRplease (live) is featured separately on the
 * Projects page from its own `hrplease` object. These are clearly-marked
 * placeholders — replace with real roadmap items (or remove) before launch.
 */
export const projectsInDevelopment: Project[] = [
  {
    name: "[SAMPLE] SafetyPlease",
    status: "In development",
    category: "WHS & safety",
    tagline: "Work health & safety guidance, on demand.",
    description:
      "Sourced answers on WHS obligations plus simple incident-reporting workflows for site-based teams.",
    sample: true,
  },
  {
    name: "[SAMPLE] LeasePlease",
    status: "In development",
    category: "Property & legal",
    tagline: "Plain-English commercial lease answers.",
    description:
      "Explains Australian commercial and retail lease terms, flagging the clauses that matter before you sign.",
    sample: true,
  },
  {
    name: "[SAMPLE] TenderPlease",
    status: "In development",
    category: "Bids & proposals",
    tagline: "Draft and review tenders against the brief.",
    description:
      "Turns a tender brief into a structured first draft and checks every response against the requirements.",
    sample: true,
  },
];

// ---------------------------------------------------------------------------
// About (verbatim)
// ---------------------------------------------------------------------------

export const about = {
  whoWeAre:
    "aiplease builds AI systems for businesses that want something practical, not performative.",
  intro:
    "We deliver in real business environments, measure against outcomes that matter, and work across industries rather than chasing a single vertical.",
  background: [
    {
      label: "Construction & infrastructure",
      body: "A decade of construction and infrastructure work — hands-on delivery where plans meet reality.",
    },
    {
      label: "National science research",
      body: "Four years at a national science research organization — enterprise strategy, market analysis, and operational capability.",
    },
  ],
  principles: [
    {
      title: "Structured",
      body: "Clear scope, documented methodology, and defined milestones from the outset.",
    },
    {
      title: "Transparent",
      body: "Assumptions are stated. Sources are cited. Decision logic is visible to all stakeholders.",
    },
    {
      title: "Outcome-driven",
      body: "Every deliverable is designed to be used, not filed. Success is measured against agreed criteria.",
    },
  ],
  // [SAMPLE] — replace with real profiles & photos before launch.
  team: [
    {
      name: "[SAMPLE] Founder & Principal",
      role: "Strategy & delivery",
      bio: "Construction and infrastructure background; leads engagements end to end.",
    },
    {
      name: "[SAMPLE] Head of Strategy",
      role: "Foresight & research",
      bio: "Ex national science research organization; opportunity mapping and executive briefing.",
    },
    {
      name: "[SAMPLE] Lead AI Engineer",
      role: "Build & deploy",
      bio: "Production AI systems, evaluation, and integration into existing stacks.",
    },
    {
      name: "[SAMPLE] Partner Success",
      role: "Evolve & partner",
      bio: "Monitoring, tuning, and the quarterly reviews that keep systems sharp.",
    },
  ],
} as const;

// ---------------------------------------------------------------------------
// Contact (verbatim fields, commitments & promise)
// ---------------------------------------------------------------------------

export const contact = {
  heading: "Let's Talk",
  intro:
    "Tell us what you're trying to achieve. We'll come back with a clear view of whether — and how — AI helps.",
  commitments: [
    "No commitment required for the initial call",
    "All enquiries treated in confidence",
    "Scoping and proposal provided before any engagement begins",
  ],
  responsePromise: "Within two business days",
  timelines: [
    "Exploring options",
    "Within 1 month",
    "1–3 months",
    "3–6 months",
    "Not sure yet",
  ],
  budgets: [
    "Not sure yet",
    "Under $25k",
    "$25k–$50k",
    "$50k–$100k",
    "$100k+",
  ],
} as const;

// ---------------------------------------------------------------------------
// Case studies — [SAMPLE] placeholders (metric-first, à la Strategist Hub)
// ---------------------------------------------------------------------------

export type CaseStudy = {
  slug: string;
  client: string; // [SAMPLE]
  industry: string;
  pillarSlug: Pillar["slug"];
  metric: string;
  metricLabel: string;
  title: string;
  summary: string;
  challenge: string[];
  approach: string[];
  results: { value: string; label: string }[];
  quote: { text: string; name: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "freight-dispatch-copilot",
    client: "[SAMPLE] Meridian Freight",
    industry: "Transport & logistics",
    pillarSlug: "build-deploy",
    metric: "31%",
    metricLabel: "fewer manual dispatch hours",
    title: "From manual dispatch to an AI co-pilot",
    summary:
      "An operations assistant that drafts dispatch plans from live orders, fleet status, and driver hours — with a human approving every run.",
    challenge: [
      "Dispatchers rebuilt the same plan by hand every morning across spreadsheets and phone calls.",
      "Driver-hour rules made errors costly and slow to check.",
      "Knowledge lived with two senior staff and didn't scale.",
    ],
    approach: [
      "Mapped the real decision before touching a model (Strategy + Foresight).",
      "Built an assistant that proposes plans and explains its reasoning, integrated with the TMS.",
      "Added guardrails for compliance limits and a one-tap human approval step.",
    ],
    results: [
      { value: "31%", label: "fewer manual dispatch hours" },
      { value: "2 wks", label: "to first production pilot" },
      { value: "100%", label: "of runs human-approved" },
    ],
    quote: {
      text: "[SAMPLE] It didn't replace our dispatchers — it gave them their mornings back.",
      name: "[SAMPLE] Operations Manager",
      role: "Meridian Freight",
    },
  },
  {
    slug: "advisory-knowledge-assistant",
    client: "[SAMPLE] Castlereagh Advisory",
    industry: "Professional services",
    pillarSlug: "build-deploy",
    metric: "4.2×",
    metricLabel: "faster answer retrieval",
    title: "A knowledge assistant that cites its sources",
    summary:
      "A retrieval assistant over years of engagements and policy, where every answer links back to the document it came from.",
    challenge: [
      "Consultants spent hours hunting through past work for precedent.",
      "Answers without a source couldn't be trusted in client work.",
      "Onboarding new staff was slow and uneven.",
    ],
    approach: [
      "Structured the document corpus and defined what 'a good answer' meant.",
      "Built a RAG assistant that always returns citations, never a bare claim.",
      "Set up evaluation so quality is measured, not assumed.",
    ],
    results: [
      { value: "4.2×", label: "faster answer retrieval" },
      { value: "Every", label: "answer linked to a source" },
      { value: "−40%", label: "new-starter ramp time" },
    ],
    quote: {
      text: "[SAMPLE] The citations are the point. Our people actually trust it.",
      name: "[SAMPLE] Director",
      role: "Castlereagh Advisory",
    },
  },
  {
    slug: "manufacturing-vision-qa",
    client: "[SAMPLE] Hunter Valley Components",
    industry: "Manufacturing",
    pillarSlug: "build-deploy",
    metric: "$480k",
    metricLabel: "annual rework avoided",
    title: "Vision QA that catches defects early",
    summary:
      "A computer-vision check on the line that flags defects before parts move downstream — with humans handling the edge calls.",
    challenge: [
      "Defects were caught late, after value had already been added.",
      "Manual inspection was inconsistent across shifts.",
      "No data trail to find root causes.",
    ],
    approach: [
      "Quantified the cost of late defects to size the opportunity first.",
      "Deployed an on-line vision model with a human review queue for low-confidence cases.",
      "Captured every decision to build a defect dataset over time.",
    ],
    results: [
      { value: "$480k", label: "annual rework avoided" },
      { value: "−63%", label: "defects reaching assembly" },
      { value: "24/7", label: "consistent inspection" },
    ],
    quote: {
      text: "[SAMPLE] We finally have the data to fix causes, not just symptoms.",
      name: "[SAMPLE] Plant Manager",
      role: "Hunter Valley Components",
    },
  },
  {
    slug: "hrplease-multi-site-rollout",
    client: "[SAMPLE] National Retail Group",
    industry: "Retail",
    pillarSlug: "evolve-partner",
    metric: "24/7",
    metricLabel: "HR compliance coverage",
    title: "HRplease across 1,200 store managers",
    summary:
      "Rolling out HRplease so every store manager has sourced HR answers after hours — and head office can see what's being asked.",
    challenge: [
      "Managers made employment decisions after hours with no HR on call.",
      "A small HR team couldn't scale to every store.",
      "Advice needed to be traceable to legislation.",
    ],
    approach: [
      "Deployed HRplease with answers referencing the Fair Work Act and NES.",
      "Surfaced correctly formatted templates for common letters.",
      "Added quarterly reviews to keep guidance current (Evolve + Partner).",
    ],
    results: [
      { value: "1,200", label: "managers covered" },
      { value: "24/7", label: "compliance coverage" },
      { value: "Sourced", label: "answers, every time" },
    ],
    quote: {
      text: "[SAMPLE] Our managers get a sourced answer at 9pm instead of guessing.",
      name: "[SAMPLE] People & Culture Lead",
      role: "National Retail Group",
    },
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

// ---------------------------------------------------------------------------
// Testimonials — [SAMPLE]
// ---------------------------------------------------------------------------

export const testimonials = [
  {
    text: "[SAMPLE] aiplease told us where AI wouldn't help before they told us where it would. That's why we trusted the parts they did build.",
    name: "[SAMPLE] Chief Operating Officer",
    company: "Meridian Freight",
  },
  {
    text: "[SAMPLE] They shipped something our team still uses six months later — and they're still tuning it.",
    name: "[SAMPLE] Managing Director",
    company: "Castlereagh Advisory",
  },
] as const;
