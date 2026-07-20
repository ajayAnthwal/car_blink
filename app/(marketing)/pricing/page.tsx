import type { Metadata } from "next";
import PricingHero from "@/features/pricing/components/PricingHero";
import PricingContent from "@/features/pricing/components/PricingContent";
import PricingFAQ from "@/features/pricing/components/PricingFAQ";
import FinalCTA from "@/features/home/components/FinalCTA";

export const metadata: Metadata = {
  title: "Pricing | Car Blink",
  description:
    "Free forever for car owners. Flexible, transparent plans for workshops that want to grow. No hidden fees, ever.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingContent />
      <PricingFAQ />
      <FinalCTA />
    </>
  );
}
