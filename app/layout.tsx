import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Hanken_Grotesk,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { Footer } from "@/components/site/footer";
import { MotionProvider } from "@/components/motion-provider";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aiplease.au"),
  title: {
    default: "AI Please — Strategy. Delivery. Partnership.",
    template: "%s · AI Please",
  },
  description:
    "Australian-owned AI consultancy. AI that earns its place — and keeps it. Strategy, build, and long-term partnership for production-ready AI systems.",
  keywords: [
    "AI consultancy Australia",
    "AI strategy",
    "AI automation",
    "production AI systems",
    "AI agents",
    "HRplease",
  ],
  authors: [{ name: "AI Please" }],
  openGraph: {
    title: "AI Please — Strategy. Delivery. Partnership.",
    description: "AI that earns its place — and keeps it.",
    url: "https://aiplease.au",
    siteName: "AI Please",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Please — Strategy. Delivery. Partnership.",
    description: "AI that earns its place — and keeps it.",
  },
  icons: {
    icon: [{ url: "/brand/aiplease-mark-stone-t.png", type: "image/png" }],
    apple: "/brand/aiplease-mark-stone-t.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-canvas text-ink font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-canvas"
        >
          Skip to content
        </a>
        <MotionProvider>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
