"use client";

import React from "react";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import StepCard from "./StepCard";
import StepArrow from "./StepArrow";
import { HOW_IT_WORKS_STEPS } from "../data/howItWorksSteps";

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-32 bg-white relative">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="success" className="mb-4 bg-success/10 text-success border-success/20">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-success"></span> Simple 3 Step Process</span>
          </Badge>

          <h2 className="font-heading font-black text-3xl sm:text-4xl text-neutral-text-dark tracking-tight mb-3">
            How <span className="text-primary-blue">CarBlink</span> Works?
          </h2>
          <p className="font-body text-neutral-text-muted max-w-md">
            Get the best car service in just 3 easy steps
          </p>
        </div>

        {/* Steps + Video Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 items-stretch">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <React.Fragment key={step.number}>
              <div className="relative h-full">
                <StepCard
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  iconName={step.iconName}
                />
                {/* Curved dashed arrow connector (desktop only) */}
                {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 z-10">
                    <StepArrow />
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}

          {/* Video Panel */}
          <div className="relative group cursor-pointer">
            <div className="relative w-full h-full min-h-[180px] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border border-neutral-text-muted/15">
              <Image
                src="/images/homeheroimage.png"
                alt="Mechanic working on car"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 bg-neutral-text-dark/20 group-hover:bg-neutral-text-dark/30 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-6 h-6 text-primary-blue ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}