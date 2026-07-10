import Link from "next/link";

const bands = [
  {
    question: "What can we help you achieve?",
    cta: "Let's get to work",
    href: "/contact",
  },
  {
    question: "Where will your career take you?",
    cta: "Come find out",
    href: "/about",
  },
] as const;

export function BainDualCta() {
  return (
    <section className="grid border-t border-border lg:grid-cols-2">
      {bands.map((band) => (
        <div
          key={band.question}
          className="flex flex-col items-start justify-center border-b border-border bg-chocolate px-8 py-14 sm:px-12 sm:py-16 lg:border-b-0 lg:border-r lg:py-20 last:lg:border-r-0"
        >
          <h2 className="max-w-md text-2xl font-semibold tracking-tight text-stone sm:text-[1.75rem]">
            {band.question}
          </h2>
          <Link
            href={band.href}
            className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-full border-2 border-stone px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-stone transition-colors duration-200 hover:bg-stone hover:text-chocolate"
          >
            {band.cta}
          </Link>
        </div>
      ))}
    </section>
  );
}