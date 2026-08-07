import { Suspense } from "react";
import ServicesHero from "@/features/services/components/ServicesHero";
import ServicesCatalog from "@/features/services/components/ServicesCatalog";
import ServiceProcessCTA from "@/features/services/components/ServiceProcessCTA";

export default function ServicesPage() {
  return (
    <>
      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <ServicesHero />
        <ServicesCatalog />
      </Suspense>
      <ServiceProcessCTA />
    </>
  );
}