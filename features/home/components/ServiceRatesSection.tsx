import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import ServiceRatesTable from "./ServiceRatesTable";
import WorkshopMapCard from "./WorkshopMapCard";

export default function ServiceRatesSection() {
  return (
    <section className="py-24 bg-neutral-bg relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <Container className="relative z-10 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 text-center md:text-left">
          <div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-neutral-text-dark tracking-tight mb-2">
              Live Compare <span className="text-primary-blue">Car Service</span> Prices
            </h2>
            <p className="font-body text-neutral-text-muted text-lg">
              Real prices from top-rated garages across India. No hidden fees.
            </p>
          </div>
          <Link
            href="/quotes"
            className="flex items-center gap-2 font-heading font-bold text-sm text-primary-blue bg-primary-blue/10 px-6 py-3 rounded-full hover:bg-primary-blue/20 hover:scale-105 transition-all group shrink-0"
          >
            Get Custom Quote
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Table + Map grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 xl:col-span-8">
            <ServiceRatesTable />
          </div>
          <div className="lg:col-span-5 xl:col-span-4 h-full">
            <WorkshopMapCard />
          </div>
        </div>
        
        {/* Features list under table */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-8 border-t border-neutral-text-muted/10">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-success" />
            <span className="font-body text-sm font-semibold text-neutral-text-dark">Prices include labor & taxes</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-success" />
            <span className="font-body text-sm font-semibold text-neutral-text-dark">Genuine OEM parts used</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-success" />
            <span className="font-body text-sm font-semibold text-neutral-text-dark">1 month service warranty</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
