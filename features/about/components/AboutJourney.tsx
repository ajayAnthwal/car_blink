import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { ABOUT_JOURNEY } from "../data/aboutContent";

export default function AboutJourney() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left - Timeline */}
        <div className="lg:col-span-7">
          <Badge variant="success" className="mb-4 bg-success/10 text-success border-success/20">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-success" /> Our Route
            </span>
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-neutral-text-dark tracking-tight mb-10 max-w-md">
            From an idea to a trusted car service network
          </h2>

          <div className="relative pl-10 sm:pl-12">
            {/* dashed road line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px border-l-2 border-dashed border-primary-blue/30 sm:left-[9px]" />

            <div className="flex flex-col gap-10">
              {ABOUT_JOURNEY.map((step) => (
                <div key={step.year} className="relative">
                  <span className="absolute -left-10 top-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary-blue bg-white sm:-left-12" />
                  <p className="font-heading text-xs font-bold uppercase tracking-widest text-primary-blue">
                    {step.year}
                  </p>
                  <h3 className="mt-1.5 font-heading font-bold text-base sm:text-lg text-neutral-text-dark">
                    {step.title}
                  </h3>
                  <p className="mt-1 max-w-xl font-body text-sm text-neutral-text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="lg:col-span-5">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-neutral-text-muted/10">
            <Image
              src="/images/about3.png"
              alt="CarBlink partnership with workshops"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
