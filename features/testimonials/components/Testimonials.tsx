"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS_LIST } from "../data/testimonialsList";

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <Container className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-primary-navy tracking-tight">
            What Our <span className="text-secondary-blue">Customers</span> Say
          </h2>
          <Link
            href="/reviews"
            className="flex items-center gap-1 font-heading font-bold text-sm text-secondary-blue hover:underline group"
          >
            View All Reviews
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {TESTIMONIALS_LIST.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
