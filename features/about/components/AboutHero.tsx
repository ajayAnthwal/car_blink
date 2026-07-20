import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

export default function AboutHero() {
  return (
    <section className="relative bg-neutral-hero-bg text-neutral-text-dark overflow-hidden pt-16 pb-28 md:pt-20 md:pb-40">
      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/about1.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-hero-bg via-neutral-hero-bg/85 to-neutral-hero-bg/30" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl flex flex-col items-start gap-6 text-left">
          <Badge variant="info" className="bg-white border-primary-blue/20 text-primary-blue shadow-sm">
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-bold">About Car Blink</span>
            </span>
          </Badge>

          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-neutral-text-dark leading-tight tracking-tight">
            Car care, <span className="text-primary-blue">verified</span> — not guessed at.
          </h1>

          <p className="font-body text-base sm:text-lg text-neutral-text-muted leading-relaxed max-w-xl">
            We&apos;re building the most trusted way to find, compare and book car
            services — connecting car owners with verified workshops, one honest
            quote at a time.
          </p>
        </div>
      </Container>
    </section>
  );
}
