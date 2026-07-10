/** Gold Coast Waterski Club — editorial case study content (distilled from client brief). */

export const gcwscMeta = {
  slug: "gcwsc",
  client: "Gold Coast Waterski Club",
  location: "Gold Coast, QLD",
  logo: "/clients/gcwsc-logo.jpg",
  eyebrow: "Case study · Gold Coast Waterski Club, QLD",
  headline:
    "One boat, sixty members, and a rulebook that finally lives in the software.",
  standfirst:
    "How a member-run waterski club on the Gold Coast replaced its ageing booking system with a platform that enforces booking rules, tracks every set and guest fee, and closes out each ski day with the boat's numbers on record.",
  heroImage:
    "https://images.unsplash.com/photo-1530023368-8a4580021a85?w=1400&h=800&fit=crop",
} as const;

export type GcwscSection = {
  num: string;
  marker: string;
  title: string;
  paragraphs: string[];
  image: { src: string; alt: string; caption?: string };
  imagePosition: "left" | "right";
};

export const gcwscSections: GcwscSection[] = [
  {
    num: "01",
    marker: "The club",
    title: "A one-boat club where every two-hour slot has to be shared fairly",
    paragraphs: [
      "Gold Coast Waterski Club is a member-run club of around sixty skiers sharing a single tow boat across fixed two-hour slots from 7am to 7pm. Every booking on the calendar is the boat: there is no second vessel to absorb a clash, and every person on board has to be named for insurance, whether they ski or not.",
      "The build began with the club's own documents: booking rules, the fee schedule, and a structured Q&A with the committee to pin down every edge case. Each answer became an explicit constraint in the data model, so the calendar refuses a booking the rules would refuse.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=960&h=600&fit=crop",
      alt: "Waterski boat on open water",
      caption: "One boat, fixed slots, sixty members",
    },
    imagePosition: "right",
  },
  {
    num: "02",
    marker: "The problem",
    title: "The system took the money, but the rules lived in people's heads",
    paragraphs: [
      "The previous app handled a calendar and set fees. Nothing stopped a member booking outside the club's rules, so enforcement fell to the committee after the fact. Unpaid sets drifted for weeks with no lockout. Family bookings scattered across accounts, so payments were missed because a set never appeared on the payer's dashboard.",
      "The committee wanted a system that knew the club's rules as well as its longest-standing members, and applied them evenly to everyone. The rules do the enforcing, not the volunteers.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=960&h=600&fit=crop",
      alt: "Watersports on a lake",
      caption: "Fairness written into software, not memory",
    },
    imagePosition: "left",
  },
  {
    num: "03",
    marker: "The built",
    title: "A booking platform that runs the whole ski day, not just the calendar",
    paragraphs: [
      "A single web app carries a booking from slot selection through boat reporting, refuelling and payment. Anyone can view availability; only members can book. Rule-aware bookings enforce windows, same-slot restrictions, the 48-hour bonus rule and slot capacity, naming every person on board for insurance.",
      "Yearly memberships with lockouts for lapsed renewals, family groups under one paying account, Square card-on-file for per-set and tiered guest fees, and start/end reports with engine hours, fuel level and photo proof. Incidents flag automatically when consecutive bookings do not reconcile.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=960&h=600&fit=crop",
      alt: "Person waterskiing behind a boat",
      caption: "From calendar pick to boat numbers on record",
    },
    imagePosition: "right",
  },
  {
    num: "04",
    marker: "The delivered",
    title: "Card data stays with Square, club data stays consistent",
    paragraphs: [
      "Payments run on Square's card-on-file vault. Charges are calculated server-side from the booking record, so what a member sees is what their card is charged, and every payment traces to a specific booking. The app runs on Next.js and Supabase on Vercel, with row-level security separating members, family payers and committee admins.",
      "Delivered: rule-aware calendar with public availability, memberships and family accounts, Square payments, boat start/end reporting, refuel history and automatic incident detection. Live in production across the club, with booking notes and payments hardening in progress.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=960&h=600&fit=crop",
      alt: "Calm water at sunrise",
      caption: "Next.js · Supabase · Vercel · Square",
    },
    imagePosition: "left",
  },
];