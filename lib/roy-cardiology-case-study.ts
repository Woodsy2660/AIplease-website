/** Roy Cardiology — editorial case study content (distilled from client brief). */

export const royCardiologyMeta = {
  slug: "roy-cardiology",
  client: "Roy Cardiology",
  location: "Sydney, NSW",
  eyebrow: "Case study · Roy Cardiology, Sydney",
  headline: "The practice was already generating the data. What it needed was a rhythm.",
  standfirst:
    "How a single-specialist interventional cardiology practice turned Gentu practice data into a weekly operational cadence, without adding a single administrative step.",
  heroImage:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&h=800&fit=crop",
} as const;

export type RoySection = {
  num: string;
  marker: string;
  title: string;
  paragraphs: string[];
  image: { src: string; alt: string; caption?: string };
  imagePosition: "left" | "right";
};

export const royCardiologySections: RoySection[] = [
  {
    num: "01",
    marker: "The practice",
    title:
      "A busy specialist practice with data in all the right places, and none of the useful ones",
    paragraphs: [
      "Roy Cardiology is a single-specialist interventional cardiology practice led by A/Prof Andrew Roy, running consulting rooms in Sydney alongside hospital procedural sessions. Appointments, referrals, correspondence and billing all live inside Gentu.",
      "The build started with de-identified Gentu exports: invoice reports, appointment lists, banking reports and ageing data. Working from real report structures surfaced quirks early; the data model reconciles sources with hard invariants confirmed against the files. Design ran in parallel on fully synthetic data until a calm, card-based system was selected for production.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=960&h=600&fit=crop",
      alt: "Modern medical consulting environment",
      caption: "Specialist consulting alongside hospital procedural sessions",
    },
    imagePosition: "right",
  },
  {
    num: "02",
    marker: "The problem",
    title: "Practice meetings ran on recollection rather than evidence",
    paragraphs: [
      "The weekly practice meeting is where a specialist practice actually gets managed. Scheduling gaps, referral follow-ups, outstanding accounts and correspondence backlogs all surface there, but without a shared, current picture, those meetings leaned on memory and instinct.",
      "The brief was not another dashboard. The brief was infrastructure that observes the practice continuously and arrives at the meeting already prepared, noting what is worth noticing without telling a clinician what they must do.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=960&h=600&fit=crop",
      alt: "Clinical monitoring equipment",
      caption: "Operational rhythm, not reactive reporting",
    },
    imagePosition: "left",
  },
  {
    num: "03",
    marker: "The built",
    title: "Practice Insights: a rhythm layer, not a reporting tool",
    paragraphs: [
      "Practice Insights turns continuous observation into structured documents timed to the practice's own cadence: before the weekly meeting, at month end, and when something is time-sensitive.",
      "Overview surfaces appointments, referrals, correspondence and accounts with each figure in its own date context. Action items gather referrals approaching expiry, unsigned letters and ageing invoices. Weekly and monthly reports anchor the meeting; notifications arrive when the cycle cannot wait.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=960&h=600&fit=crop",
      alt: "Data analysis on screen",
      caption: "Observation, not judgement, on every screen",
    },
    imagePosition: "right",
  },
  {
    num: "04",
    marker: "The delivered",
    title: "Privacy at the boundary, built for the Gentu ecosystem",
    paragraphs: [
      "De-identification happens at the adapter boundary before data reaches any analytical layer. Patient identifiers are stripped on ingestion; everything downstream works with internal IDs and aggregate counts. All infrastructure runs in AWS Sydney with Australian data residency.",
      "Delivered: data model and reconciliation across Gentu exports, de-identification adapter, approved visual system and simulated onboarding. In build: production Overview and Action Items surfaces, report generation and the notification pipeline, with Gentu partner API integration on FHIR R4 ahead.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=960&h=600&fit=crop",
      alt: "Professional reviewing operational documents",
      caption: "AWS Sydney · FHIR R4-ready architecture",
    },
    imagePosition: "left",
  },
];