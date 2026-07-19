"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, Search, Signal, Wifi, BatteryFull, CheckCircle2, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const PHONE_LISTINGS = [
  {
    name: "Elite Auto Service",
    subtitle: "0.8 km away",
    price: "6,200",
    image: "/images/hero-car.png",
  },
  {
    name: "German Experts",
    subtitle: "1.2 km away",
    price: "6,900",
    image: "/images/homeheroimage.png",
  },
];

const TRUST_POINTS = ["Verified Workshops", "No Hidden Charges", "Instant Comparison"];

const MINI_STATS = [
  { value: "50+", label: "Verified Workshops" },
  { value: "4.8★", label: "Average Rating" },
  { value: "₹2,300", label: "Avg. Savings / Service" },
];

export default function SavingsBanner() {
  return (
    <section className="pt-16 pb-28 md:pt-24 md:pb-36 bg-white relative">
      <Container>
        <div className="relative">
          {/* Card background (clipped) */}
         {/* Card background (clipped) */}
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary-blue/15 via-neutral-hero-bg to-primary-blue/5">
            <div className="absolute inset-0">
              <Image
                src="/images/hero-car.png"
                alt=""
                fill
                className="object-cover object-right opacity-15"
              />
            </div>
            <svg viewBox="0 0 800 400" className="w-full h-full opacity-40" preserveAspectRatio="none">
              <path d="M0 0C150 100 250 -50 400 100C550 250 650 100 800 200V400H0V0Z" fill="#2563EB" opacity="0.06" />
            </svg>
            {/* Fade so the left-side text stays readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-hero-bg via-neutral-hero-bg/80 to-transparent" />
          </div>
          

          {/* Content */}
          <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 p-6 sm:p-8 md:p-10 lg:p-14">
            {/* Left Content */}
            <div className="flex flex-col z-10 max-w-xl">
              <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-neutral-text-dark tracking-tight mb-3 leading-tight">
                See How Much <br className="hidden sm:block" />
                <span className="text-primary-blue">You Can Save</span>
              </h2>
              <p className="font-body text-neutral-text-muted mb-8 text-sm sm:text-base">
                Price comparison for BMW 5 Series &mdash; Full Service
              </p>

              {/* Price comparison cards */}
              <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-8">
                <div className="flex flex-col justify-center bg-white px-5 py-4 rounded-2xl border border-neutral-text-muted/10 shadow-sm">
                  <span className="font-heading font-bold text-[10px] text-neutral-text-muted uppercase tracking-wider mb-1.5">
                    Avg. Market Price
                  </span>
                  <span className="font-heading font-black text-xl text-neutral-text-dark">
                    &#8377;8,500
                  </span>
                </div>

                <div className="relative flex flex-col justify-center bg-white px-5 py-4 rounded-2xl border border-success/20 shadow-sm">
                  <span className="font-heading font-bold text-[10px] text-primary-blue uppercase tracking-wider mb-1.5">
                    Best Price on CarBlink
                  </span>
                  <div className="flex items-center gap-2.5">
                    <span className="font-heading font-black text-xl text-success">
                      &#8377;6,200
                    </span>
                    <div className="bg-success text-white font-bold text-[10px] px-2.5 py-1 rounded-full">
                      Save 27%
                    </div>
                  </div>

                  {/* Green Arrow Annotation */}
                  <div className="absolute -top-9 -right-10 hidden md:block rotate-12">
                    <svg width="52" height="36" viewBox="0 0 60 40" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-md">
                      <path d="M5 35 C 10 10, 40 5, 55 20" />
                      <path d="M45 20 L 55 20 L 50 10" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Trust checklist */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8">
                {TRUST_POINTS.map((point) => (
                  <div key={point} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                    <span className="font-body text-xs sm:text-sm text-neutral-text-dark">{point}</span>
                  </div>
                ))}
              </div>

              {/* Mini stats */}
              <div className="flex items-stretch gap-6 sm:gap-8 mb-8 pt-6 border-t border-neutral-text-dark/10">
                {MINI_STATS.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col ${idx > 0 ? "pl-6 sm:pl-8 border-l border-neutral-text-dark/10" : ""}`}
                  >
                    <span className="font-heading font-black text-lg sm:text-xl text-neutral-text-dark">
                      {stat.value}
                    </span>
                    <span className="font-body text-[11px] sm:text-xs text-neutral-text-muted">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Compare Prices Now
              </Button>
            </div>

            {/* Right Content (Phone Mockup) */}
            <div className="relative z-10 w-full max-w-[200px] sm:max-w-[220px] shrink-0 flex justify-center lg:justify-end lg:translate-y-20">
              <div className="relative w-full aspect-[9/19] -rotate-6 hover:rotate-0 transition-transform duration-500">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-neutral-text-dark rounded-[2rem] border-[6px] border-neutral-text-dark shadow-2xl overflow-hidden flex flex-col">
                  {/* Status Bar */}
                  <div className="relative bg-white px-4 pt-2 pb-1 flex items-center justify-between text-[9px] font-bold text-neutral-text-dark shrink-0">
                    <span>11:41</span>
                    <div className="w-16 h-4 bg-neutral-text-dark rounded-full absolute left-1/2 -translate-x-1/2 top-1" />
                    <div className="flex items-center gap-1">
                      <Signal className="w-2.5 h-2.5" />
                      <Wifi className="w-2.5 h-2.5" />
                      <BatteryFull className="w-3 h-3" />
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="bg-white px-3 py-2 border-b border-neutral-text-muted/10 flex items-center justify-between shrink-0">
                    <ChevronLeft className="w-4 h-4 text-neutral-text-dark" />
                    <span className="font-heading font-black text-xs text-neutral-text-dark">
                      Car<span className="text-primary-blue">Blink</span>
                    </span>
                    <div className="w-5 h-5 rounded-full bg-neutral-hero-bg flex items-center justify-center">
                      <Search className="w-2.5 h-2.5 text-primary-blue" />
                    </div>
                  </div>

                  {/* Listings */}
                  <div className="flex-1 bg-neutral-hero-bg p-2.5 flex flex-col gap-2">
                    {PHONE_LISTINGS.map((item) => (
                      <div
                        key={item.name}
                        className="bg-white p-2 rounded-xl border border-neutral-text-muted/10 shadow-sm flex items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-neutral-hero-bg shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-heading font-bold text-[9px] text-neutral-text-dark truncate">
                              {item.name}
                            </span>
                            <span className="font-body text-[8px] text-neutral-text-muted">
                              {item.subtitle}
                            </span>
                          </div>
                        </div>
                        <span className="font-heading font-black text-[9px] text-success shrink-0">
                          &#8377;{item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}