"use client";

import Image from "next/image";

const testimonial = {
  quote:
    "They tell me the truth, including when something isn't worth building. That's rare, and it's why I trust their advice.",
  name: "A/Prof Andrew Roy",
  role: "Senior Interventional Cardiologist, Sydney",
  // Placeholder avatar - replace with actual photo when available
  image: "/team/hero-main.jpg",
};

export function TestimonialMinimal() {
  return (
    <div className="w-full bg-stone border-t border-chocolate/10">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
          {/* Quote */}
          <p className="flex-1 text-lg font-light leading-relaxed text-chocolate/90 md:text-xl">
            &ldquo;{testimonial.quote}&rdquo;
          </p>

          {/* Divider */}
          <div className="hidden h-12 w-px bg-chocolate/15 sm:block" />

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="relative size-12 overflow-hidden rounded-full ring-2 ring-chocolate/10">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-chocolate">
                {testimonial.name}
              </span>
              <span className="text-xs text-rock">
                {testimonial.role}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
