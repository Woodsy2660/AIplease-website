"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";

/** Closing CTA band — hidden on /contact where the form is the focus. */
export function FooterCtaBand() {
  const pathname = usePathname();

  if (pathname === "/contact") {
    return null;
  }

  return (
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
              <Button href="/how-we-work" variant="secondary">
                See how we work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}