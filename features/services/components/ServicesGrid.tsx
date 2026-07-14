"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import ServiceCard from "./ServiceCard";
import { SERVICES_LIST } from "../data/servicesList";

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-neutral-bg">
      <Container className="flex flex-col gap-8">
        {/* Grid Header with View All Link */}
        <div className="flex items-center justify-between w-full">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-primary-navy tracking-tight">
            Our Services
          </h2>
          <Link
            href="/services"
            className="flex items-center gap-1 font-heading font-bold text-sm text-secondary-blue hover:underline group"
          >
            View All Services
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Services Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
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
