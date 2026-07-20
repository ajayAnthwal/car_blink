import React from "react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { HOW_IT_WORKS_BENEFITS } from "../data/howItWorksPageData";

export default function HowItWorksBenefits() {
  return (
    <section className="bg-neutral-bg py-16 md:py-20">
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-neutral-text-dark tracking-tight mb-3">
            Why It Works So Well
          </h2>
          <p className="font-body text-neutral-text-muted max-w-md">
            Thousands of car owners trust Car Blink because we take the
            guesswork out of car servicing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {HOW_IT_WORKS_BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={benefit.title}
                hoverable
                className="flex flex-col items-center text-center bg-white border border-neutral-text-muted/15 rounded-2xl p-6"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary-blue/10 text-primary-blue mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-base text-neutral-text-dark mb-1.5">
                  {benefit.title}
                </h3>
                <p className="font-body text-sm text-neutral-text-muted leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
