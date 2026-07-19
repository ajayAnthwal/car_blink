import React from "react";
import { Zap } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

export default function HowItWorksPageHero() {
  return (
    <section className="bg-neutral-hero-bg py-16 md:py-24">
      <Container className="text-center">
        <div className="flex flex-col items-center gap-5 max-w-2xl mx-auto">
          <Badge variant="info" className="bg-white border-primary-blue/20 text-primary-blue shadow-sm">
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span className="font-bold">Simple. Transparent. Fast.</span>
            </span>
          </Badge>

          <h1 className="font-heading font-black text-4xl sm:text-5xl text-neutral-text-dark tracking-tight leading-tight">
            How <span className="text-primary-blue">CarBlink</span> Works
          </h1>

          <p className="font-body text-neutral-text-muted text-base sm:text-lg leading-relaxed max-w-xl">
            From request to road-ready — see exactly how we help you compare
            car service prices and book the best deal in four simple steps.
          </p>
        </div>
      </Container>
    </section>
  );
}
