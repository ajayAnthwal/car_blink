import React from "react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A0F1C] via-[#111827] to-primary-navy">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-blue/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-orange/15 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-white/[0.02] bg-[length:32px_32px] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] pointer-events-none" />

      <Container className="relative py-24 text-center sm:py-32 z-10">
        <Badge variant="info" className="bg-white/10 backdrop-blur-md text-accent-orange border border-white/20 shadow-none mb-6">
          <span className="font-bold tracking-wide">Pricing</span>
        </Badge>
        <h1 className="mx-auto max-w-3xl font-heading font-black text-5xl leading-[1.1] text-white sm:text-6xl md:text-7xl tracking-tight">
          Simple pricing, <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-yellow-400">no surprises</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-white/70 sm:text-xl">
          Free forever for car owners in India. Flexible plans for workshops that
          want to grow. No hidden fees, ever.
        </p>
      </Container>
    </section>
  );
}
