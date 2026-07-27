import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { DETAILED_STEPS } from "../data/howItWorksPageData";

export default function HowItWorksSteps() {
  return (
    <section className="bg-neutral-bg py-20 md:py-32 relative overflow-hidden">
      <Container className="relative max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading font-black text-3xl md:text-5xl text-neutral-text-dark mb-4">
            Four Steps to <span className="text-primary-blue">Hassle-Free</span> Service
          </h2>
          <p className="font-body text-neutral-text-muted text-lg max-w-2xl mx-auto">
            We've streamlined the entire process so you can get back on the road safely, quickly, and affordably.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative">
          {/* Connecting Dashed Line (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0 border-l-4 border-dashed border-primary-blue/50 -translate-x-1/2 z-0"></div>

          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {DETAILED_STEPS.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={step.number} className="relative flex flex-col md:flex-row items-center w-full group">
                  
                  {/* Center Node (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full border-4 border-neutral-bg items-center justify-center shadow-[0_0_0_4px_rgba(37,99,235,0.1)] group-hover:shadow-[0_0_0_8px_rgba(37,99,235,0.2)] transition-shadow duration-300 z-20">
                    <span className="font-heading font-black text-2xl text-primary-blue">{step.number}</span>
                  </div>

                  {/* Content Blocks */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:pr-16 md:justify-end md:mr-auto' : 'md:pl-16 md:justify-start md:ml-auto'}`}>
                    
                    {/* The Card */}
                    <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-xl shadow-primary-blue/5 border border-neutral-text-muted/10 w-full max-w-md transform transition-transform duration-500 hover:-translate-y-2 group-hover:border-primary-blue/30 relative">
                      
                      {/* Mobile Step Number */}
                      <div className="md:hidden absolute -top-5 -left-5 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center border-4 border-neutral-bg shadow-lg z-10">
                        <span className="font-heading font-black text-xl text-white">{step.number}</span>
                      </div>

                      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 bg-neutral-hero-bg">
                        <Image
                          src={step.image}
                          alt={step.alt}
                          fill
                          className="object-contain transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                      </div>
                      
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-blue/10 text-primary-blue shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-heading font-bold text-xl text-neutral-text-dark">
                          {step.title}
                        </h3>
                      </div>
                      <p className="font-body text-neutral-text-muted text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </Container>
    </section>
  );
}
