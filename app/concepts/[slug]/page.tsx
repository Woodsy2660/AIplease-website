import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingVariant } from "@/components/home/landing-variant";
import { VariantSwitcher } from "@/components/home/variant-switcher";
import {
  getLandingPalette,
  landingVariantSlugs,
} from "@/lib/landing-palettes";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return landingVariantSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const palette = getLandingPalette(slug);

  if (!palette) {
    return { title: "Concept not found" };
  }

  return {
    title: `Landing · ${palette.name}`,
    description: palette.description,
  };
}

export default async function ConceptVariantPage({ params }: PageProps) {
  const { slug } = await params;

  if (!getLandingPalette(slug)) {
    notFound();
  }

  return (
    <>
      <LandingVariant slug={slug} />
      <VariantSwitcher />
    </>
  );
}