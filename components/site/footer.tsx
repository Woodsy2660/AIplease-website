import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { footerNav, site } from "@/lib/site";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
import { Wordmark } from "@/components/ui/wordmark";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer>
      {/* Closing CTA — stone band, distinct from chocolate directory below */}
      <div className="relative overflow-hidden border-t border-border bg-stone text-chocolate">
        <Image
          src="/brand/aiplease-mark-chocolate.jpg"
          alt=""
          width={520}
          height={520}
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 w-[clamp(16rem,40vw,30rem)] rounded-full opacity-[0.06]"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 xl:max-w-6xl">
          <Eyebrow>Let&apos;s talk</Eyebrow>
          <div className="mt-5 grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
            <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-chocolate sm:text-4xl">
              Let&apos;s build AI that earns its place.
            </h2>
            <div className="lg:justify-self-end">
              <p className="max-w-sm text-ink-soft">
                Tell us what you&apos;re trying to achieve. No commitment for the
                initial call, and a clear scope before any engagement begins.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact">Start a conversation</Button>
                <Button href="/services" variant="secondary">
                  See how we work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Directory */}
      <div className="bg-chocolate text-stone">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 xl:max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_2fr]">
          <div>
            <Link href="/" aria-label="AI Please — home">
              <Wordmark inverted className="text-2xl" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone/60">
              {site.tagline} Australian-owned &amp; operated AI consultancy.
            </p>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-stone/20 px-4 py-2 text-sm text-stone/80 transition-colors hover:border-stone/50 hover:text-stone"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-stone/40">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-stone/70 transition-colors hover:text-stone"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-stone/10 pt-6 text-xs text-stone/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.copyrightYear} {site.wordmark}. All rights reserved.
          </p>
          <p>Australian-owned &amp; operated.</p>
        </div>
      </div>
      </div>
    </footer>
  );
}
