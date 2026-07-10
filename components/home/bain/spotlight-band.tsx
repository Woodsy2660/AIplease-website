import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { bainSpotlight } from "@/components/home/bain/data";

export function BainSpotlightBand() {
  return (
    <section className="border-y border-border bg-stone/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Link
          href={bainSpotlight.href}
          className="group grid cursor-pointer gap-6 py-8 sm:grid-cols-[140px_1fr] sm:items-center sm:gap-8 sm:py-10 lg:grid-cols-[180px_1fr]"
        >
          <div className="relative aspect-square w-full max-w-[140px] overflow-hidden sm:max-w-none">
            <Image
              src={bainSpotlight.image}
              alt=""
              fill
              sizes="280px"
              className="object-cover object-[center_20%] transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {bainSpotlight.name}
            </p>
            <h2 className="mt-2 text-lg font-semibold tracking-tight text-chocolate transition-colors duration-200 group-hover:underline sm:text-xl">
              {bainSpotlight.title}
            </h2>
            <p className="mt-4 flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors duration-200 group-hover:text-chocolate">
              {bainSpotlight.kicker}
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}