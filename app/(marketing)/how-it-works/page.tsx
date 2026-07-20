import type { Metadata } from "next";
import HowItWorksPageHero from "@/features/how-it-works/components/HowItWorksPageHero";
import HowItWorksSteps from "@/features/how-it-works/components/HowItWorksSteps";
import HowItWorksBenefits from "@/features/how-it-works/components/HowItWorksBenefits";
import FinalCTA from "@/features/home/components/FinalCTA";

export const metadata: Metadata = {
  title: "How It Works | Car Blink",
  description:
    "See how Car Blink helps you compare car service prices from verified workshops and book the best deal in four simple steps.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksPageHero />
      <HowItWorksSteps />
      <HowItWorksBenefits />
      <FinalCTA />
    </>
  );
}
