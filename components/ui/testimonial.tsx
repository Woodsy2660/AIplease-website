"use client";

import { PhotoCardGrid, PHOTO_CARD_PLACEHOLDER_IMAGES } from "@/components/ui/photo-card-grid";
import { cn } from "@/lib/utils";

export type TestimonialItem = {
  text: string;
  name: string;
  role: string;
  image: string;
};

type TestimonialProps = {
  items: TestimonialItem[];
  className?: string;
};

function displayName(name: string) {
  return name.replace(/^\[SAMPLE\]\s*/i, "");
}

export function Testimonial({ items, className }: TestimonialProps) {
  return (
    <PhotoCardGrid
      className={className}
      items={items.map((item) => ({
        image: item.image,
        body: item.text,
        title: `— ${displayName(item.name)}`,
        label: item.role,
      }))}
    />
  );
}

export default function Example() {
  const demo: TestimonialItem[] = [
    {
      text: "Radiant made undercutting all of our competitors an absolute breeze.",
      name: "John Doe",
      role: "Content Marketing",
      image: PHOTO_CARD_PLACEHOLDER_IMAGES[0],
    },
    {
      text: "Radiant made undercutting all of our competitors an absolute breeze.",
      name: "John Doe",
      role: "Content Marketing",
      image: PHOTO_CARD_PLACEHOLDER_IMAGES[1],
    },
    {
      text: "Radiant made undercutting all of our competitors an absolute breeze.",
      name: "John Doe",
      role: "Content Marketing",
      image: PHOTO_CARD_PLACEHOLDER_IMAGES[2],
    },
  ];

  return <Testimonial items={demo} />;
}

export { PHOTO_CARD_PLACEHOLDER_IMAGES as DEFAULT_IMAGES };