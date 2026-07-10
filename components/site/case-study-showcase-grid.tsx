import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudyShowcase } from "@/components/home/home-section-data";
import { cn } from "@/lib/utils";

const tintOverlay = {
  warm: "bg-chocolate/40 mix-blend-multiply",
  cool: "bg-sky/50 mix-blend-multiply",
} as const;

type ShowcaseStudy = (typeof caseStudyShowcase)[number];

export function CaseStudyShowcaseGrid({
  studies = caseStudyShowcase,
  className,
}: {
  studies?: readonly ShowcaseStudy[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-8 lg:grid-cols-2 lg:gap-10", className)}>
      {studies.map((study) => (
        <article key={study.slug} className="group flex flex-col">
          <Link
            href={`/work/${study.slug}`}
            className="block cursor-pointer overflow-hidden rounded-sm"
          >
            <div className="relative aspect-[16/10] bg-stone">
              <Image
                src={study.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 motion-reduce:transition-none group-hover:scale-[1.02]"
              />
              <div
                aria-hidden
                className={cn("absolute inset-0", tintOverlay[study.tint])}
              />
            </div>
          </Link>

          <div className="mt-5 flex flex-1 flex-col">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
              {study.category}
            </p>
            <h3 className="mt-2 font-sans text-lg font-bold tracking-tight text-chocolate sm:text-xl">
              <Link
                href={`/work/${study.slug}`}
                className="cursor-pointer transition-colors duration-200 hover:underline"
              >
                {study.client}
              </Link>
            </h3>
            <p className="mt-2 text-sm font-semibold text-chocolate">
              {study.metric}
            </p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
              {study.summary}
            </p>
            <Link
              href={`/work/${study.slug}`}
              className="mt-4 inline-flex cursor-pointer items-center gap-1.5 font-mono text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-chocolate transition-colors duration-200 hover:underline"
            >
              Read story
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}