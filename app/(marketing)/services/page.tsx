import ServicesHero from "@/features/services/components/ServicesHero";
import ServicesCatalog from "@/features/services/components/ServicesCatalog";
import ServiceProcessCTA from "@/features/services/components/ServiceProcessCTA";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesCatalog />
      <ServiceProcessCTA />
    </>
  );
}