"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import StepCard from "./StepCard";
import { HOW_IT_WORKS_STEPS } from "../data/howItWorksSteps";


export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <Container className="flex flex-col items-center gap-12">
        {/* Section Heading */}
        <div className="text-center max-w-xl">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-primary-navy tracking-tight">
            How <span className="text-primary-navy">Car</span><span className="text-secondary-blue">Blink</span> Works?
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 lg:gap-4">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <React.Fragment key={step.number}>
              {/* Step Card Component */}
              <StepCard
                number={step.number}
                title={step.title}
                description={step.description}
                iconName={step.iconName}
              />

              {/* Conditional Arrow Connector */}
              {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="flex items-center justify-center shrink-0 w-8 h-8 lg:w-8 lg:h-auto my-2 lg:my-0 rotate-90 lg:rotate-0">
                  <ArrowRight className="w-6 h-6 text-neutral-text-muted/40 animate-pulse" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
