"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS_LIST } from "../data/testimonialsList";

// Duplicate the list so the CSS marquee can loop seamlessly (translateX -50%)
const SLIDER_ITEMS = [...TESTIMONIALS_LIST, ...TESTIMONIALS_LIST];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <Container className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-primary-navy tracking-tight">
            What Our <span className="text-primary-blue">Customers</span> Say
          </h2>
          <Link
            href="/reviews"
            className="flex items-center gap-1 font-heading font-bold text-sm text-primary-blue hover:underline group"
          >
            View All Reviews
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Auto-sliding carousel (pure CSS marquee, pauses on hover) */}
        <div className="relative w-full">
          {/* Edge fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="group overflow-hidden">
            <div className="flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused]">
              {SLIDER_ITEMS.map((testimonial, idx) => (
                <div key={idx} className="w-[280px] sm:w-[320px] shrink-0">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}