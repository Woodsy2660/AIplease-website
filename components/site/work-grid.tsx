import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/content";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";

/** Metric-first case-study cards. All current entries are [SAMPLE]. */
export function CaseStudiesGrid({ items }: { items: CaseStudy[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c, i) => (
        <Reveal key={c.slug} delay={i * 0.05} className="h-full">
          <Link href={`/work/${c.slug}`} className="group block h-full">
            <Card interactive className="flex h-full flex-col p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                  {c.industry}
                </span>
                <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-muted">
                  Sample
                </span>
              </div>
              <div className="mt-8 font-display text-5xl font-semibold tracking-tight tabular-nums text-ink">
                <CountUp value={c.metric} />
              </div>
              <div className="mt-1 text-sm text-muted">{c.metricLabel}</div>
              <h3 className="mt-6 text-xl tracking-tight">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {c.summary}
              </p>
              <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-ink transition-colors group-hover:text-accent">
                Read case study
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </Card>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
