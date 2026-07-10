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
  // ---------------------------------------------------------------------------
  // Legacy pillars (existing detailed pages)
  // ---------------------------------------------------------------------------
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
  // ---------------------------------------------------------------------------
  // New service pillars — TODO: replace placeholder content before launch
  // ---------------------------------------------------------------------------
  {
    number: "04",
    slug: "ai-audit",
    name: "AI Audit & Strategy",
    tagline: "Map your workflows, find the real return.",
    headline: "Coming soon.",
    summary: "This service page is under construction.",
    offerings: ["Workflow mapping", "ROI analysis", "Strategic recommendations"],
    process: [
      { step: "01", title: "Audit", body: "We review your current operations." },
      { step: "02", title: "Analyse", body: "Identify AI opportunities." },
      { step: "03", title: "Recommend", body: "Prioritised action plan." },
    ],
  },
  {
    number: "05",
    slug: "training",
    name: "Team Training",
    tagline: "Get more from tools you already pay for.",
    headline: "Coming soon.",
    summary: "This service page is under construction.",
    offerings: ["Tool proficiency", "Best practices", "Hands-on workshops"],
    process: [
      { step: "01", title: "Assess", body: "Understand current skill levels." },
      { step: "02", title: "Train", body: "Tailored workshops." },
      { step: "03", title: "Support", body: "Ongoing guidance." },
    ],
  },
  {
    number: "06",
    slug: "safe-ai",
    name: "Safe AI Use",
    tagline: "Data safety, governance, the rules.",
    headline: "Coming soon.",
    summary: "This service page is under construction.",
    offerings: ["Data governance", "Policy development", "Compliance review"],
    process: [
      { step: "01", title: "Review", body: "Current data practices." },
      { step: "02", title: "Design", body: "Governance framework." },
      { step: "03", title: "Implement", body: "Policies and training." },
    ],
  },
  {
    number: "07",
    slug: "custom-builds",
    name: "Custom AI Builds",
    tagline: "Systems that fit how you already work.",
    headline: "Coming soon.",
    summary: "This service page is under construction.",
    offerings: ["Custom assistants", "Workflow automation", "Integrations"],
    process: [
      { step: "01", title: "Scope", body: "Define requirements." },
      { step: "02", title: "Build", body: "Iterative development." },
      { step: "03", title: "Deploy", body: "Production rollout." },
    ],
  },
  {
    number: "08",
    slug: "ongoing",
    name: "Ongoing Partnership",
    tagline: "We stay as the technology moves.",
    headline: "Coming soon.",
    summary: "This service page is under construction.",
    offerings: ["Monitoring", "Updates", "Quarterly reviews"],
    process: [
      { step: "01", title: "Monitor", body: "Continuous oversight." },
      { step: "02", title: "Update", body: "Keep systems current." },
      { step: "03", title: "Review", body: "Regular check-ins." },
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
    "Tell us what you're trying to achieve. We'll come back with a clear view of whether and how AI helps.",
  commitments: [
    "No commitment required for the initial call",
    "All enquiries treated in confidence",
    "Scoping and proposal provided before any engagement begins",
  ],
  responsePromise: "Within two business days",
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
  // ---------------------------------------------------------------------------
  // Client case studies
  // ---------------------------------------------------------------------------
  {
    slug: "roy-cardiology",
    client: "Roy Cardiology",
    industry: "Healthcare",
    pillarSlug: "build-deploy",
    metric: "0",
    metricLabel: "extra admin steps added",
    title: "Practice Insights: a rhythm layer for specialist care",
    summary:
      "A Sydney cardiology practice turned Gentu practice data into a weekly operational cadence. Insights arrive before the meeting, not after a manual export.",
    challenge: [
      "Operational questions outpaced answers assembled from Gentu exports and spreadsheets.",
      "Weekly practice meetings ran on memory rather than a shared, current picture.",
      "The brief was infrastructure that matches how the practice already works, not another dashboard.",
    ],
    approach: [
      "Prototyped against de-identified Gentu exports to surface real report quirks early.",
      "Designed three visual directions on synthetic data before selecting a calm, card-based system.",
      "Built Practice Insights: observation, not judgement, noting what matters and offering options.",
    ],
    results: [
      { value: "Weekly", label: "meeting-ready reports on demand" },
      { value: "AWS", label: "Sydney hosting with AU data residency" },
      { value: "FHIR", label: "R4-ready architecture for Gentu API" },
    ],
    quote: {
      text: "Quote to confirm with A/Prof Andrew Roy before publishing.",
      name: "A/Prof Andrew Roy",
      role: "Roy Cardiology",
    },
  },
  {
    slug: "gcwsc",
    client: "Gold Coast Waterski Club",
    industry: "Sport & recreation",
    pillarSlug: "build-deploy",
    metric: "1",
    metricLabel: "boat, full rulebook in software",
    title: "Club booking platform built around the ski day",
    summary:
      "A member-run waterski club replaced its ageing booking system with a platform that enforces club rules, tracks sets and guest fees, and closes each ski day with the boat's numbers on record.",
    challenge: [
      "The previous app took payments but booking rules lived in people's heads.",
      "Unpaid sets drifted for weeks; family bookings scattered across accounts.",
      "Boat engine hours and fuel levels were recorded inconsistently between bookings.",
    ],
    approach: [
      "Mapped booking rules, fee tiers and ski-day workflows from club documents and committee Q&A.",
      "Encoded booking windows, guest tiers and payment lockouts as data constraints.",
      "Modelled the full ski day lifecycle from slot pick through start/end reports and payment.",
    ],
    results: [
      { value: "Live", label: "in production, club-wide" },
      { value: "Square", label: "card-on-file payments" },
      { value: "60+", label: "members on one shared boat" },
    ],
    quote: {
      text: "Quote to confirm with Alec Goznik before publishing.",
      name: "Alec Goznik",
      role: "Gold Coast Waterski Club",
    },
  },
  {
    slug: "pacific-fertiliser",
    client: "Pacific Fertiliser",
    industry: "Agriculture & fertiliser supply",
    pillarSlug: "build-deploy",
    metric: "100%",
    metricLabel: "on-premises data residency",
    title: "Local chat agents on the internal database",
    summary:
      "An Australian fertiliser supplier deployed locally hosted chat agents on its internal database so staff spend less time chasing records and more time acting on them.",
    challenge: [
      "Senior staff acted as the lookup layer for product, order and customer questions.",
      "Each answer required stopping work and knowing which system held the record.",
      "Commercial data could not be sent to external AI services.",
    ],
    approach: [
      "Mapped workflows across sales, dispatch and accounts before touching systems.",
      "Documented the existing software estate and sources of truth.",
      "Deployed read-focused, role-scoped agents on the company's own infrastructure.",
    ],
    results: [
      { value: "Local", label: "on-premises agent deployment" },
      { value: "Read", label: "access to internal database" },
      { value: "Live", label: "tuning against real question patterns" },
    ],
    quote: {
      text: "Quote to confirm with Pacific Fertiliser before publishing.",
      name: "Name to confirm",
      role: "Pacific Fertiliser",
    },
  },
  {
    slug: "agrimate",
    client: "Agri-Mate",
    industry: "Agriculture",
    pillarSlug: "build-deploy",
    metric: "Live",
    metricLabel: "row-level harvest visibility",
    title: "Agri-Mate: the harvest, visible in real time",
    summary:
      "A NSW Riverina citrus orchard turned its harvest into live, row-level data with Agri-Mate, tracking every picker, every bin and every block without slowing a crew down.",
    challenge: [
      "Paper tally cards and supervisor memory could not keep pace with the harvest.",
      "Bin locations, picker counts and block yields were only known roughly, after the fact.",
      "Enterprise farm software assumed office time and training nobody on the ground had.",
    ],
    approach: [
      "Shadowed picking days end to end and mapped tally and payment workflows.",
      "Built a field-first prototype tested mid-season with real crews.",
      "Modelled blocks, rows, varieties, crews and bins so one bin scan feeds tally, map and yield.",
    ],
    results: [
      { value: "Live", label: "picker and bin tracking in production" },
      { value: "GPS", label: "row-level bin location" },
      { value: "Field", label: "to-shed data on Supabase and n8n" },
    ],
    quote: {
      text: "Quote to confirm with the pilot grower before publishing.",
      name: "Grower",
      role: "Citrus orchard, NSW Riverina",
    },
  },
  // ---------------------------------------------------------------------------
  // New nav case studies — TODO: replace placeholder content before launch
  // ---------------------------------------------------------------------------
  {
    slug: "hr-please",
    client: "HR Please",
    industry: "HR & Compliance",
    pillarSlug: "build-deploy",
    metric: "24/7",
    metricLabel: "HR compliance coverage",
    title: "HR Please — Australian HR compliance assistant",
    summary: "On-demand HR compliance guidance for businesses without a dedicated HR function.",
    challenge: ["Small businesses need HR guidance outside business hours."],
    approach: ["Built an assistant trained on Australian HR law."],
    results: [{ value: "24/7", label: "availability" }],
    quote: {
      text: "Quote coming soon.",
      name: "Client",
      role: "HR Please",
    },
  },
  {
    slug: "openclaw",
    client: "OpenClaw",
    industry: "Legal Tech",
    pillarSlug: "build-deploy",
    metric: "TBD",
    metricLabel: "Coming soon",
    title: "OpenClaw — Legal research assistant",
    summary: "This case study is under construction.",
    challenge: ["Details coming soon."],
    approach: ["Details coming soon."],
    results: [{ value: "TBD", label: "Coming soon" }],
    quote: {
      text: "Quote coming soon.",
      name: "Client",
      role: "OpenClaw",
    },
  },
  // ---------------------------------------------------------------------------
  // Existing sample case studies
  // ---------------------------------------------------------------------------
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
