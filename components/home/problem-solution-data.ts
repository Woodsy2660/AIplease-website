import { HOW_WE_WORK_STEPS } from "@/components/home/how-we-work-data";

/** All client voices for the quote marquee. */
export const CLIENT_VOICES = [
  "We're paying for AI tools nobody actually uses.",
  "Everyone says we need AI. Nobody says what to do with it.",
  "Our systems are too fragile and old.",
  "What about training our team?",
  "I know we're losing hours somewhere. I just can't see where.",
  "Is my client data safe if we use this?",
  "The last agency built it and vanished.",
  "I don't want to spend money on something that's obsolete next year.",
  "We built something last year and it already feels old.",
  "I don't want to change how we work to suit some software.",
  "Just tell me straight. Do we even need this?",
] as const;

export const HOW_WE_ARE_DIFFERENT = [
  {
    title: "Cut the waste.",
    body: "No more paying for AI nobody uses. Only tools that earn their spot.",
    icon: "scissors",
  },
  {
    title: "Reclaim the hours.",
    body: "We find where time leaks and hand it back, with the numbers to prove it.",
    icon: "clock",
  },
  {
    title: "Stay protected.",
    body: "Onshore data, Australian privacy law, no public tools without your say-so. Security built in, not bolted on.",
    icon: "shield",
  },
  {
    title: "Keep the edge.",
    body: "AI that fits, improves as the models do, and stays supported for the long run.",
    icon: "trending-up",
  },
] as const;

export { HOW_WE_WORK_STEPS };