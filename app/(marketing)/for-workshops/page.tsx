import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import WorkshopsHero from "@/features/workshops/components/WorkshopsHero";
import WorkshopsBenefits from "@/features/workshops/components/WorkshopsBenefits";
import WorkshopsSteps from "@/features/workshops/components/WorkshopsSteps";
import WorkshopsTestimonials from "@/features/workshops/components/WorkshopsTestimonials";
import WorkshopsFAQ from "@/features/workshops/components/WorkshopsFAQ";
import PartnerCTA from "@/features/workshops/components/PartnerCTA";

export const metadata: Metadata = {
  title: "For Workshops | CarBlink",
  description:
    "Join 2,500+ verified workshops on CarBlink and get a steady stream of genuine service requests from car owners near you — zero setup cost, reliable payouts.",
};

export default function ForWorkshopsPage() {
  return (
    <>
      <WorkshopsHero />
      <WorkshopsBenefits />
      <WorkshopsSteps />
      <WorkshopsTestimonials />
      <WorkshopsFAQ />

      <section className="pb-16 md:pb-24 bg-neutral-bg">
        <Container>
          <PartnerCTA />
        </Container>
      </section>
    </>
  );
}
