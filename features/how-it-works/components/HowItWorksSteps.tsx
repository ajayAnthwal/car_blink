import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { DETAILED_STEPS } from "../data/howItWorksPageData";

export default function HowItWorksSteps() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container className="flex flex-col gap-16 md:gap-24">
        {DETAILED_STEPS.map((step, index) => {
          const Icon = step.icon;
          const reversed = index % 2 === 1;
          return (
            <div
              key={step.number}
              className={`flex flex-col ${
                reversed ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 md:gap-14`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-neutral-text-muted/10 aspect-[4/3]">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <span className="font-heading font-black text-5xl text-primary-blue/15">
                  {step.number}
                </span>
                <div className="flex items-center gap-3 mt-2 mb-3">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-blue/10 text-primary-blue shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-neutral-text-dark">
                    {step.title}
                  </h3>
                </div>
                <p className="font-body text-neutral-text-muted text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
