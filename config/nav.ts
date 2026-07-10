/**
 * Primary navigation configuration — single source of truth for the site header.
 *
 * Render rules:
 * - Items with `items` array → dropdown (chevron-down icon)
 * - Items without `items` → plain link (no chevron)
 * - Items with `enabled: false` → skip rendering entirely
 */

export type NavSubItem = {
  label: string;
  href: string;
  desc?: string;
};

export type NavItem = {
  label: string;
  href: string;
  items?: NavSubItem[];
  enabled?: boolean;
};

export const NAV: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    items: [
      {
        label: "AI Audit & Strategy",
        href: "/services/ai-audit",
        desc: "Map your workflows, find the real return",
      },
      {
        label: "Team Training",
        href: "/services/training",
        desc: "Get more from tools you already pay for",
      },
      {
        label: "Safe AI Use",
        href: "/services/safe-ai",
        desc: "Data safety, governance, the rules",
      },
      {
        label: "Custom AI Builds",
        href: "/services/custom-builds",
        desc: "Systems that fit how you already work",
      },
      {
        label: "Ongoing Partnership",
        href: "/services/ongoing",
        desc: "We stay as the technology moves",
      },
    ],
  },
  {
    label: "How we work",
    href: "/how-we-work",
  },
  {
    label: "Work",
    href: "/work",
    items: [
      {
        label: "Roy Cardiology",
        href: "/work/roy-cardiology",
        desc: "Healthcare · Practice operations",
      },
      {
        label: "Pacific Fertiliser",
        href: "/work/pacific-fertiliser",
        desc: "Agriculture · Supply & logistics",
      },
      {
        label: "Agri-Mate",
        href: "/work/agrimate",
        desc: "Agriculture · Harvest operations",
      },
      {
        label: "Gold Coast Waterski Club",
        href: "/work/gcwsc",
        desc: "Sport · Club operations",
      },
      { label: "All case studies \u2192", href: "/work" },
    ],
  },
  {
    label: "About",
    href: "/about",
    items: [
      { label: "Team", href: "/about#team" },
      { label: "Our story", href: "/about#story" },
      { label: "Contact", href: "/contact" },
    ],
  },
  // COMING SOON — re-enable when the Resources page ships
  // {
  //   label: "Resources",
  //   href: "/resources",
  //   enabled: false,
  //   items: [
  //     { label: "Insights", href: "/resources/insights" },
  //     { label: "Guides", href: "/resources/guides" },
  //     { label: "Videos", href: "/resources/videos" },
  //   ],
  // },
];

/** Primary call-to-action displayed in the header. */
export const CTA = {
  label: "Contact",
  href: "/contact",
} as const;
