"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import ServiceCard from "./ServiceCard";
import { SERVICES_LIST } from "../data/servicesList";

export default function ServicesGrid() {
  return (
    <section className="py-14 md:py-16 bg-gradient-to-b from-neutral-hero-bg to-white">
      <Container className="flex flex-col gap-6">
        {/* Grid Header with View All Link */}
        <div className="flex items-center justify-between w-full">
          <h2 className="font-heading font-black text-xl sm:text-2xl text-neutral-text-dark tracking-tight">
            Popular Car Services
          </h2>
          <Link
            href="/services"
            className="flex items-center gap-1 font-heading font-semibold text-xs sm:text-sm text-primary-blue hover:underline group"
          >
            View All Services
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Services Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {SERVICES_LIST.map((service, idx) => (
            <ServiceCard
              key={idx}
              label={service.label}
              iconName={service.iconName}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}