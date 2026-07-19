import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import ServiceRatesTable from "./ServiceRatesTable";
import WorkshopMapCard from "./WorkshopMapCard";

export default function ServiceRatesSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-neutral-text-dark tracking-tight">
            Latest Service Rates in Dubai
          </h2>
          <Link
            href="/pricing"
            className="flex items-center gap-1 font-heading font-bold text-sm text-primary-blue hover:underline group"
          >
            View Rate List
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Table + Map grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <ServiceRatesTable />
          <WorkshopMapCard />
        </div>
      </Container>
    </section>
  );
}
