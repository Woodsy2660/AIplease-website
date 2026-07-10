"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type PhotoCardItem = {
  image: string;
  /** Primary copy — quote or summary. */
  body: string;
  /** Attribution or case title. */
  title: string;
  /** Accent gradient label (role, metric, industry, etc.). */
  label: string;
  href?: string;
};

export const PHOTO_CARD_PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop",
] as const;

function PhotoCard({ item }: { item: PhotoCardItem }) {
  const card = (
    <article className="w-full max-w-80 overflow-hidden rounded-2xl bg-ink text-canvas transition-shadow duration-300 hover:shadow-[0_24px_60px_-32px_rgba(28,26,23,0.45)]">
      <div className="relative -mt-px overflow-hidden rounded-2xl">
        <Image
          src={item.image}
          alt=""
          width={600}
          height={270}
          className="h-[270px] w-full rounded-2xl object-cover object-top transition-all duration-300 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t from-ink to-transparent"
        />
      </div>
      <div className="px-4 pb-4">
        <p className="border-b border-canvas/15 pb-5 font-medium leading-relaxed">
          &ldquo;{item.body}&rdquo;
        </p>
        <p className="mt-4">{item.title}</p>
        <p className="text-sm font-medium text-rock">{item.label}</p>
      </div>
    </article>
  );

  if (item.href) {
    return (
      <Link href={item.href} className="group block w-full max-w-80">
        {card}
      </Link>
    );
  }

  return card;
}

type PhotoCardGridProps = {
  items: PhotoCardItem[];
  className?: string;
};

/** Three-up photo card layout (reference testimonial design). */
export function PhotoCardGrid({ items, className }: PhotoCardGridProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-stretch justify-center gap-6",
        className,
      )}
    >
      {items.map((item, index) => (
        <PhotoCard key={`${item.title}-${index}`} item={item} />
      ))}
    </div>
  );
}