"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import { WHY_CHOOSE_US_POINTS } from "../data/whyChooseUsPoints";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Image with Floating Badge */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-lg border border-neutral-text-muted/10">
            <Image
              src="/images/why-choose-us.png"
              alt="Why Choose CarBlink"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            {/* Floating Badge */}
            <div className="absolute top-6 right-6 bg-primary-blue text-white text-xs font-heading font-black px-4 py-2 rounded-full shadow-xl shadow-primary-blue/30 animate-bounce">
              Save Time • Save Money
            </div>
          </div>
        </div>

        {/* Right Column - Text & 2-Column Checklist */}
        <div className="lg:col-span-7 flex flex-col gap-8 text-left">
          <div className="flex flex-col gap-3">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-primary-navy tracking-tight">
              Why Choose <span className="text-primary-blue">CarBlink</span>?
            </h2>
          </div>

          {/* checklist grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 w-full">
            {WHY_CHOOSE_US_POINTS.map((point, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={4} />
                </div>
                <span className="font-body font-medium text-sm sm:text-base text-neutral-text-dark">
                  {point.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
