import Image from "next/image";
import Link from "next/link";
import { Bookmark } from "lucide-react";
import { bainInsights } from "@/components/home/bain/data";

export function BainInsightsGrid() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold tracking-tight text-chocolate sm:text-2xl">
          Our Latest Insights
        </h2>

        <div className="mt-7 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {bainInsights.map((insight) => (
            <article key={insight.title} className="group">
              <Link href={insight.href} className="block cursor-pointer">
                <div className="relative aspect-[16/9] overflow-hidden bg-stone">
                  <Image
                    src={insight.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </Link>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                    {insight.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-chocolate sm:text-xl">
                    <Link
                      href={insight.href}
                      className="cursor-pointer transition-colors duration-200 hover:underline"
                    >
                      {insight.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {insight.excerpt}
                  </p>
                  <span className="mt-4 inline-block rounded border border-border px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-muted">
                    {insight.type}
                  </span>
                </div>
                <button
                  type="button"
                  aria-label="Save insight"
                  className="inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-chocolate hover:text-chocolate"
                >
                  <Bookmark className="size-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <Link
          href="/services"
          className="mt-12 inline-flex cursor-pointer text-sm font-semibold uppercase tracking-[0.12em] text-chocolate transition-colors duration-200 hover:underline"
        >
          See all insights
        </Link>
      </div>
    </section>
  );
}