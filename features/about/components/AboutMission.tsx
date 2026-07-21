import React from "react";
import Image from "next/image";
import { Target, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { ABOUT_MISSION_POINTS } from "../data/aboutContent";

export default function AboutMission() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left - Text */}
        <div className="lg:col-span-6 flex flex-col gap-5 text-left">
          <Badge variant="success" className="bg-success/10 text-success border-success/20 w-fit">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-success" /> Our Mission
            </span>
          </Badge>

          <h2 className="font-heading font-black text-3xl sm:text-4xl text-neutral-text-dark tracking-tight leading-tight">
            Making every car service decision <span className="text-primary-blue">transparent</span>
          </h2>

          <p className="font-body text-neutral-text-muted text-base leading-relaxed">
            Millions of car owners overpay or get poor service simply because they
            can&apos;t compare their options. On the other side, great workshops
            struggle to find customers beyond their immediate neighbourhood.
          </p>
          <p className="font-body text-neutral-text-muted text-base leading-relaxed">
            Car Blink closes that gap. We verify every workshop on our platform,
            surface real prices upfront, and let customers pick based on quality
            and cost — not guesswork.
          </p>

          <Card className="mt-2 border border-neutral-text-muted/15 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-blue/10">
                <Target className="w-5 h-5 text-primary-blue" />
              </div>
              <h3 className="font-heading font-bold text-base text-neutral-text-dark">
                What we&apos;re working toward
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {ABOUT_MISSION_POINTS.map((point) => (
                <div key={point.text} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                  </div>
                  <span className="font-body text-sm text-neutral-text-dark">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right - Image */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end pb-8 pr-8">
          <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-lg border border-neutral-text-muted/10">
            <Image
              src="/images/about3.png"
              alt="Car Blink diagnostics and transparent pricing"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute top-6 right-6 bg-primary-blue text-white text-xs font-heading font-black px-4 py-2 rounded-full shadow-xl shadow-primary-blue/30">
              100% Transparent Pricing
            </div>
          </div>

          {/* Floating secondary photo */}
          <div className="hidden sm:block absolute -bottom-2 -left-2 w-32 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/images/about4.png"
              alt="A Car Blink customer reviewing a service quote"
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
