import { Hero } from "@/components/ui/hero-with-image-text-and-two-buttons";
import { ProblemSolutionSection } from "@/components/home/problem-solution-section";
import { CaseStudiesSection } from "@/components/home/case-studies-section";
import { AgencySection } from "@/components/home/agency-section";

export function BainHome() {
  return (
    <>
      <Hero />
      <ProblemSolutionSection />
      <CaseStudiesSection />
      <AgencySection />
    </>
  );
}