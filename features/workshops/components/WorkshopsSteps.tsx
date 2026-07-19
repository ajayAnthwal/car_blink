import React from "react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { WORKSHOP_STEPS } from "../data/forWorkshopsPageData";

export default function WorkshopsSteps() {
  return (
    <section className="bg-neutral-bg py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <Badge variant="info" className="mb-4">
            Getting Started
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-neutral-text-dark tracking-tight">
            Four steps to your first booking
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WORKSHOP_STEPS.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative">
              {i < WORKSHOP_STEPS.length - 1 && (
                <div className="absolute left-6 top-6 hidden h-px w-full bg-neutral-text-muted/20 lg:block" />
              )}
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary-navy text-white">
                <Icon className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent-orange font-heading text-[10px] font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-heading font-bold text-base text-neutral-text-dark">
                {title}
              </h3>
              <p className="mt-1.5 font-body text-sm leading-relaxed text-neutral-text-muted">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
