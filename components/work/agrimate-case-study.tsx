import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TallyTrace } from "@/components/work/tally-trace";
import {
  agrimateMeta,
  agrimateSections,
  type AgrimateSection,
} from "@/lib/agrimate-case-study";

function SectionPhoto({ image }: { image: AgrimateSection["image"] }) {
  return (
    <figure className="relative overflow-hidden rounded-2xl bg-stone">
      <div className="relative aspect-[16/10]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover"
        />
      </div>
      {image.caption ? (
        <figcaption className="border-t border-border bg-white px-4 py-2.5 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function NarrativeSection({ section }: { section: AgrimateSection }) {
  const photoFirst = section.imagePosition === "left";

  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-6 sm:py-11 lg:grid-cols-[11rem_1fr] lg:gap-10 lg:px-8 lg:py-12">
        <div className="lg:pt-0.5">
          <span className="font-mono text-2xl font-medium text-chocolate/25">
            {section.num}
          </span>
          <p className="mt-1 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
            {section.marker}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div className={photoFirst ? "lg:order-2" : ""}>
            <h2 className="font-sans text-[clamp(1.25rem,2.2vw,1.625rem)] font-bold leading-snug tracking-[-0.02em] text-chocolate">
              {section.title}
            </h2>
            <div className="mt-4 space-y-3 text-[0.9375rem] leading-relaxed text-ink-soft">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
          </div>

          <div className={photoFirst ? "lg:order-1" : ""}>
            <SectionPhoto image={section.image} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function AgrimateCaseStudy() {
  return (
    <>
      <section className="relative overflow-hidden bg-chocolate text-stone">
        <div className="absolute inset-0">
          <Image
            src={agrimateMeta.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-chocolate/80 via-chocolate/92 to-chocolate"
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pb-0 pt-6 sm:px-6 sm:pt-7 lg:px-8 lg:pt-8">
          <Link
            href="/work"
            className="group inline-flex cursor-pointer items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-stone/70 transition-colors duration-200 hover:text-stone"
          >
            <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
            All work
          </Link>

          <p className="mt-5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-sky">
            {agrimateMeta.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-sans text-[clamp(1.625rem,3.2vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-stone">
            {agrimateMeta.headline}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone/75 sm:text-base">
            {agrimateMeta.standfirst}
          </p>
        </div>

        <div className="relative mt-6 sm:mt-7">
          <TallyTrace />
        </div>
      </section>

      <article className="bg-white">
        {agrimateSections.map((section) => (
          <NarrativeSection key={section.num} section={section} />
        ))}
      </article>
    </>
  );
}