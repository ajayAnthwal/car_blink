import React from "react";
import Container from "@/components/ui/Container";
import { HOW_IT_WORKS_BENEFITS } from "../data/howItWorksPageData";

export default function HowItWorksBenefits() {
  return (
    <section className="bg-white py-20 md:py-32">
      <Container className="max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-heading font-black text-3xl md:text-5xl text-neutral-text-dark tracking-tight mb-4">
            Why It Works <span className="text-primary-blue">So Well</span>
          </h2>
          <p className="font-body text-neutral-text-muted text-lg max-w-2xl">
            Thousands of car owners trust Car Blink because we take the guesswork out of car servicing with guaranteed transparency and quality.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[250px]">
          {HOW_IT_WORKS_BENEFITS.map((benefit, idx) => {
            const Icon = benefit.icon;
            
            // Layout specific styling based on index to create the Bento effect
            let gridSpan = "";
            let bgStyle = "";
            let textStyle = "";
            let iconWrapper = "";
            
            if (idx === 0) {
              // Large hero card
              gridSpan = "md:col-span-2 md:row-span-2";
              bgStyle = "bg-gradient-to-br from-primary-navy to-primary-blue-dark border-none text-white";
              textStyle = "text-white/80";
              iconWrapper = "bg-white/10 text-white shadow-xl";
            } else if (idx === 1) {
              // Tall side card
              gridSpan = "md:col-span-1 md:row-span-2";
              bgStyle = "bg-gradient-to-b from-accent-orange/10 to-accent-orange/5 border-accent-orange/20";
              textStyle = "text-neutral-text-muted";
              iconWrapper = "bg-accent-orange text-white shadow-lg shadow-accent-orange/30";
            } else {
              // Standard smaller cards (if there are more than 2, though data currently has 3)
              // Wait, if it's 3 items total, and we use row-span-2 for both 0 and 1, we need 2 rows total.
              // Let's adjust so it looks like a proper bento.
              // 0: span 2 cols, span 1 row
              // 1: span 1 col, span 2 rows (side)
              // 2: span 2 cols, span 1 row
            }

            if (HOW_IT_WORKS_BENEFITS.length === 3) {
              if (idx === 0) {
                gridSpan = "md:col-span-2 md:row-span-1";
                bgStyle = "bg-gradient-to-br from-primary-navy to-primary-blue border-none text-white";
                textStyle = "text-white/80";
                iconWrapper = "bg-white/10 text-white shadow-xl";
              } else if (idx === 1) {
                gridSpan = "md:col-span-1 md:row-span-2";
                bgStyle = "bg-gradient-to-b from-accent-orange/5 to-accent-orange/10 border-accent-orange/20";
                textStyle = "text-neutral-text-muted";
                iconWrapper = "bg-accent-orange text-white shadow-lg shadow-accent-orange/30";
              } else if (idx === 2) {
                gridSpan = "md:col-span-2 md:row-span-1";
                bgStyle = "bg-neutral-hero-bg border-neutral-text-muted/10";
                textStyle = "text-neutral-text-muted";
                iconWrapper = "bg-primary-blue text-white shadow-lg shadow-primary-blue/30";
              }
            }

            return (
              <div
                key={benefit.title}
                className={`group relative overflow-hidden rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl border ${gridSpan} ${bgStyle}`}
              >
                {/* Background decorative blob for hover effect */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-2xl mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${iconWrapper}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className={`font-heading font-black text-2xl mb-3 ${idx === 0 ? 'text-white' : 'text-neutral-text-dark'}`}>
                    {benefit.title}
                  </h3>
                  
                  <p className={`font-body text-base leading-relaxed max-w-lg ${textStyle}`}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
