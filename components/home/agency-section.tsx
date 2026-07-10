import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { agencyTrustPoints } from "@/components/home/home-section-data";

export function AgencySection() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8">
        <div>
          <h2 className="font-sans text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-chocolate">
            Consultancy you can trust
          </h2>

          <ul className="mt-8 divide-y divide-chocolate/10">
            {agencyTrustPoints.map((point) => (
              <li key={point.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-chocolate/8 text-chocolate">
                  <CircleCheck className="size-3.5" strokeWidth={2.5} aria-hidden />
                </span>
                <div>
                  <p className="font-sans text-[0.9375rem] font-bold leading-snug text-chocolate sm:text-base">
                    {point.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {point.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/50 sm:aspect-[5/6] lg:aspect-auto lg:min-h-[480px]">
          <Image
            src="/team/landing-main.jpg"
            alt="Senior aiplease strategist"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-[center_25%]"
          />
        </div>
      </div>
    </section>
  );
}