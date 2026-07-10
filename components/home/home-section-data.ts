/** Homepage section copy — distilled from client case studies. */

export const caseStudyShowcase = [
  {
    slug: "roy-cardiology",
    category: "Healthcare · Practice operations",
    client: "Roy Cardiology",
    metric: "Meeting-ready insights, zero extra admin",
    summary:
      "A Sydney cardiology practice turned Gentu data into a weekly operational rhythm. Observations arrive before the meeting, not after a manual export.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=960&h=540&fit=crop",
    tint: "warm" as const,
  },
  {
    slug: "pacific-fertiliser",
    category: "Agriculture · Supply & logistics",
    client: "Pacific Fertiliser",
    metric: "Answers on premises, data never leaves",
    summary:
      "An Australian fertiliser supplier deployed local chat agents on its internal database so staff spend less time chasing records and more time acting on them.",
    image: "/case-studies/pacific-fertiliser-main.jpg",
    tint: "cool" as const,
  },
  {
    slug: "agrimate",
    category: "Agriculture · Harvest operations",
    client: "Agri-Mate",
    metric: "Live harvest data, row by row",
    summary:
      "A NSW Riverina citrus orchard turned its harvest into live, row-level data: every picker, every bin and every block tracked without slowing a crew down.",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=960&h=540&fit=crop",
    tint: "warm" as const,
  },
  {
    slug: "gcwsc",
    category: "Sport · Club operations",
    client: "Gold Coast Waterski Club",
    metric: "Rules enforced in software, not by committee",
    summary:
      "A member-run waterski club replaced its ageing booking app with a platform that enforces club rules, tracks sets and guest fees, and closes each ski day on record.",
    image: "/case-studies/gcwsc-main.jpg",
    tint: "cool" as const,
  },
] as const;

export const agencyTrustPoints = [
  {
    title: "You work with the person who builds it",
    body: "No rotating account queue, no handoffs to a junior bench. The practitioner who scopes your project is the one who ships it.",
  },
  {
    title: "One system your team can actually run",
    body: "Strategy, build, integration, and governance under a single operating model, designed to be handed over, not to keep you dependent on us.",
  },
  {
    title: "Built for the messy middle",
    body: "Legacy databases, systems with no API, compliance data that can't be touched. Production rollouts in environments like yours are our routine work, not our edge cases.",
  },
  {
    title: "Accountability by design",
    body: 'Every engagement has clear KPIs, owners, and decision logs. And if the honest answer is "you don\'t need this," that goes in the log too.',
  },
] as const;