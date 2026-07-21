import type { Metadata } from "next";
import AboutHero from "@/features/about/components/AboutHero";
import AboutStats from "@/features/about/components/AboutStats";
import AboutMission from "@/features/about/components/AboutMission";
import AboutValues from "@/features/about/components/AboutValues";
import AboutJourney from "@/features/about/components/AboutJourney";
import TrustBadges from "@/features/home/components/TrustBadges";
import FinalCTA from "@/features/home/components/FinalCTA";

export const metadata: Metadata = {
  title: "About Us | Car Blink",
  description:
    "Car Blink connects car owners with verified workshops through transparent, upfront pricing. Learn about our mission, values, journey, and the team behind it.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <AboutMission />
      <AboutValues />
      <AboutJourney />
      <TrustBadges />
      <FinalCTA />
    </>
  );
}
