import { site } from "@/lib/site";
import {
  hero,
  differentiators,
  pillars,
  caseStudies,
  testimonials,
} from "@/lib/content";

export const industries = [
  "Transport & Logistics",
  "Professional Services",
  "Manufacturing",
  "Retail",
  "Healthcare",
  "Construction & Infrastructure",
  "Property",
  "Public Sector",
];

export const landingStats = [
  { value: "3", label: "ways we work" },
  { value: "100%", label: "Australian-owned" },
  { value: "2 days", label: "enquiry response" },
  { value: "0", label: "commitment on first call" },
];

export const landingContent = {
  site,
  hero,
  differentiators,
  pillars,
  caseStudies: caseStudies.slice(0, 3),
  testimonials,
};