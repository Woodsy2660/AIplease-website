/** Agri-Mate — editorial case study content (distilled from client brief). */

export const agrimateMeta = {
  slug: "agrimate",
  client: "Agri-Mate",
  location: "NSW Riverina",
  eyebrow: "Case study · Agri-Mate, NSW Riverina",
  headline:
    "The fruit was coming off the trees. The information was staying in the orchard.",
  standfirst:
    "How a citrus operation in the NSW Riverina turned its harvest into live, row-level data with Agri-Mate, tracking every picker, every bin and every block without slowing a single crew down.",
  heroImage:
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1400&h=800&fit=crop",
} as const;

export type AgrimateSection = {
  num: string;
  marker: string;
  title: string;
  paragraphs: string[];
  image: { src: string; alt: string; caption?: string };
  imagePosition: "left" | "right";
};

export const agrimateSections: AgrimateSection[] = [
  {
    num: "01",
    marker: "The farm",
    title: "A working orchard where the harvest moved faster than the paperwork",
    paragraphs: [
      "The operation is a family-run citrus orchard in the NSW Riverina, running seasonal picking crews across multiple blocks and varieties through the winter harvest. Paper tally cards, a supervisor's memory and a whiteboard back at the shed held it together.",
      "Agri-Mate was designed by founders who have picked, supervised and managed citrus harvests themselves. The build started from a picking day: gloved hands, bright glare, patchy mobile coverage, and workers for whom English is often a second language. Every screen was tested against one question: can this be done in seconds, standing next to a bin?",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=960&h=600&fit=crop",
      alt: "Citrus orchard rows",
      caption: "Navel and Valencia harvest, contract picking crews",
    },
    imagePosition: "right",
  },
  {
    num: "02",
    marker: "The problem",
    title: "Harvest decisions were being made on instinct, hours behind the orchard",
    paragraphs: [
      "Harvest is the highest-stakes window of the citrus year. Fruit quality decays with every hour a full bin sits in the sun, picker payments hinge on accurate tallies, and crew productivity varies enormously. Yet supervisors were working from a picture that was at best a day old.",
      "The brief was not an enterprise farm-management suite. The brief was a tool that lives where the work happens: something a supervisor can use one-handed in the row, capturing the harvest as it happens without adding an administrative step.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1464226189744-8e06009f6a5a?w=960&h=600&fit=crop",
      alt: "Harvest work in the field",
      caption: "Live picture, not end-of-day tally cards",
    },
    imagePosition: "left",
  },
  {
    num: "03",
    marker: "The built",
    title: "Agri-Mate: the harvest, visible in real time",
    paragraphs: [
      "Agri-Mate tracks harvest worker output as it happens: who picked what, how much was picked, and where every bin sits in the orchard. Each bin scan links a picker, a location and a timestamp, so the same tap that credits a worker's tally also plots the bin on a map.",
      "A supervisor dashboard surfaces crew productivity across blocks in real time. GPS and row-level bin positioning shorten the path from tree to truck, and the same data flows into Newterra's back office so tallies and yield records arrive reconciled.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1574943329822-4b9b0c8a8f8e?w=960&h=600&fit=crop",
      alt: "Agricultural field operations",
      caption: "Capture without ceremony, in the row",
    },
    imagePosition: "right",
  },
  {
    num: "04",
    marker: "The delivered",
    title: "Simple in the field, structured underneath",
    paragraphs: [
      "Agri-Mate runs as a mobile-first React application on Supabase (PostgreSQL), with n8n connecting field data to bookkeeping and payroll. Data is captured at block, variety and task level in a standardised model used across every Newterra client.",
      "Delivered: real-time picker and bin tracking, live counts by worker, team, block and day, GPS bin location and supervisor visibility across the harvest. In build: workforce onboarding, digital sign-in, time tracking and compliance document storage on the same foundation.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=960&h=600&fit=crop",
      alt: "Broadacre farm landscape",
      caption: "React · Supabase · n8n · mobile-first",
    },
    imagePosition: "left",
  },
];