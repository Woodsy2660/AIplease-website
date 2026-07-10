import type { CaseStudy } from "@/lib/content";
import {
  PhotoCardGrid,
  PHOTO_CARD_PLACEHOLDER_IMAGES,
} from "@/components/ui/photo-card-grid";

type CaseStudyCardsProps = {
  items: CaseStudy[];
  className?: string;
};

/**
 * Case studies in the 3-card photo layout.
 * Images are placeholders until real project photography is supplied.
 */
export function CaseStudyCards({ items, className }: CaseStudyCardsProps) {
  return (
    <PhotoCardGrid
      className={className}
      items={items.map((study, index) => ({
        image:
          PHOTO_CARD_PLACEHOLDER_IMAGES[index % PHOTO_CARD_PLACEHOLDER_IMAGES.length],
        body: study.summary,
        title: study.title,
        label: `${study.metric} · ${study.metricLabel}`,
        href: `/work/${study.slug}`,
      }))}
    />
  );
}