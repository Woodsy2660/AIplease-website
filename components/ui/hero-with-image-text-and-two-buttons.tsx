import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left column - Text content */}
          <div className="flex flex-col gap-5 lg:pt-4">
            <div className="flex flex-col gap-4">
              <h1 className="max-w-lg text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-chocolate">
                AI that compounds, not expires.
              </h1>
              <p className="max-w-md text-xl font-medium leading-relaxed text-chocolate/70">
                We map how your business really runs, find where AI actually
                pays off, build it to fit, and stay as the tech moves.
              </p>
            </div>
            <div className="mt-2 flex flex-row flex-wrap gap-4">
              <Button href="/how-we-work" variant="secondary" size="lg">
                How we work <ArrowRight className="size-4" />
              </Button>
              <Button
                href="/contact"
                size="lg"
                className="bg-chocolate text-white hover:bg-chocolate/90"
              >
                Book a call <PhoneCall className="size-4" />
              </Button>
            </div>

            {/* Testimonial - Minimal style with author above quote */}
            <div className="mt-8 max-w-lg">
              {/* Author Row - Above quote so viewers see credentials first */}
              <div className="mb-5 flex items-center gap-4">
                {/* Avatar */}
                <div className="relative size-12 overflow-hidden rounded-full ring-2 ring-chocolate/10">
                  <Image
                    src="/team/andrew-roy.jpg"
                    alt="A/Prof Andrew Roy"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Divider */}
                <div className="h-10 w-px bg-chocolate/20" />

                {/* Author Info */}
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-chocolate">
                    A/Prof Andrew Roy
                  </span>
                  <span className="text-xs text-rock">
                    Senior Interventional Cardiologist, Sydney
                  </span>
                </div>
              </div>

              {/* Quote */}
              <p className="text-xl font-light leading-relaxed text-chocolate md:text-2xl">
                &ldquo;They tell me the truth, including when something isn&apos;t
                worth building. That&apos;s rare, and it&apos;s why I trust
                their advice.&rdquo;
              </p>
            </div>
          </div>

          {/* Right column - Image (moved up) */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg lg:aspect-square">
            <Image
              src="/team/hero-main.avif"
              alt="AI Please team"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
