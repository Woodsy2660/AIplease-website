import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Unique above-the-fold hero — fills the viewport below the header.
 * Madlib and other Bain sections sit below this on scroll.
 */
export function AboveFoldHero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] flex-col overflow-hidden bg-white">
      <div className="mx-auto flex w-full max-w-[84rem] flex-1 flex-col px-6 sm:px-8 lg:px-12">
        <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-12">
          <div className="max-w-xl">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted">
              Australian-owned AI consultancy
            </p>
            <h1 className="mt-5 text-[2.35rem] font-semibold leading-[1.02] tracking-tight text-chocolate sm:text-5xl lg:text-[3.25rem]">
              AI that earns its place — and keeps it.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft sm:text-xl">
              The newest model is a tool, not a strategy. We help businesses
              find where AI creates genuine value, ship production systems, and
              keep them sharp as the field moves.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-chocolate px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:bg-chocolate/90"
              >
                Let&apos;s talk
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-chocolate underline-offset-4 transition-colors duration-200 hover:underline"
              >
                See how we work
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-lg overflow-hidden lg:ml-auto lg:max-w-none">
              <Image
                src="/team/landing-main.jpg"
                alt="The aiplease team"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-[center_18%]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-chocolate/25 via-transparent to-transparent"
              />
            </div>
            <div
              aria-hidden
              className="absolute -bottom-4 -left-4 hidden h-24 w-24 border border-border bg-stone/60 lg:block"
            />
            <div
              aria-hidden
              className="absolute -right-3 top-8 hidden h-16 w-16 bg-sky/40 lg:block"
            />
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border py-5">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
            Strategy · Build · Partnership
          </p>
          <a
            href="#explore"
            className="cursor-pointer font-mono text-[0.65rem] uppercase tracking-[0.18em] text-chocolate transition-opacity duration-200 hover:opacity-70"
          >
            Scroll to explore
          </a>
        </div>
      </div>
    </section>
  );
}