import React from "react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-primary-navy">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-orange/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary-blue/20 blur-3xl" />

      <Container className="relative py-20 text-center sm:py-24">
        <Badge variant="info" className="bg-white/5 text-accent-orange border border-white/10 shadow-none">
          Pricing
        </Badge>
        <h1 className="mx-auto mt-5 max-w-2xl font-heading font-black text-4xl leading-[1.1] text-white sm:text-5xl tracking-tight">
          Simple pricing, <span className="text-accent-orange">no surprises</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl font-body text-base leading-relaxed text-white/70 sm:text-lg">
          Free forever for car owners. Flexible plans for workshops that
          want to grow. No hidden fees, ever.
        </p>
      </Container>
    </section>
  );
}
