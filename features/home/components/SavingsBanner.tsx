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

export default function SavingsBanner() {
  return (
    <section className="pt-24 pb-32 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-orange/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <Container>
        <div className="relative bg-gradient-to-br from-primary-navy to-primary-blue-dark rounded-[3rem] overflow-hidden shadow-2xl shadow-primary-blue/20 border border-primary-blue/20">
          
          {/* Abstract Background patterns */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-orange/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary-blue/30 rounded-full blur-[100px] mix-blend-screen opacity-50" />
            <svg viewBox="0 0 800 400" className="w-full h-full opacity-10 absolute inset-0 mix-blend-overlay" preserveAspectRatio="none">
              <path d="M0 0C150 100 250 -50 400 100C550 250 650 100 800 200V400H0V0Z" fill="white" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 p-8 sm:p-12 md:p-16">
            
            {/* Left Content */}
            <div className="flex flex-col flex-1 text-left">
              <div className="inline-block px-4 py-1.5 bg-accent-orange/10 border border-accent-orange/20 text-accent-orange font-bold text-sm rounded-full mb-6 w-fit">
                Start Saving Today
              </div>
              <h2 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight mb-4 leading-[1.1]">
                See How Much <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-yellow-400">You Can Save</span>
              </h2>
              <p className="font-body text-white/70 mb-8 text-lg max-w-md">
                Stop overpaying for car maintenance. Compare prices instantly and save up to 40% on your next service.
              </p>

              {/* Price comparison cards */}
              <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-10">
                <div className="flex flex-col justify-center bg-white/5 backdrop-blur-md px-6 py-5 rounded-2xl border border-white/10">
                  <span className="font-heading font-bold text-[11px] text-white/50 uppercase tracking-wider mb-1.5">
                    Avg. Market Price
                  </span>
                  <span className="font-heading font-black text-2xl text-white/90 line-through decoration-accent-orange/50">
                    &#8377;8,500
                  </span>
                </div>

                <div className="relative flex flex-col justify-center bg-accent-orange/10 backdrop-blur-md px-6 py-5 rounded-2xl border border-accent-orange/30 shadow-lg shadow-accent-orange/10">
                  <span className="font-heading font-bold text-[11px] text-accent-orange uppercase tracking-wider mb-1.5">
                    Best Price on Car Blink
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-heading font-black text-3xl text-white">
                      &#8377;6,200
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust checklist */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10">
                {TRUST_POINTS.map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                    <span className="font-body text-sm text-white/90 font-medium">{point}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex">
                <Button variant="accent" size="lg" className="font-bold px-8 shadow-xl shadow-accent-orange/20" rightIcon={<ArrowRight className="w-5 h-5" />} href="/quotes">
                  Compare Prices Now
                </Button>
              </div>
            </div>

            {/* Right Content (Phone Mockup) */}
            <div className="w-full max-w-[240px] shrink-0 flex justify-center lg:justify-end lg:translate-y-12 relative group perspective-1000">
              <div className="relative w-full aspect-[9/19] -rotate-6 group-hover:rotate-0 transition-transform duration-700 ease-out">
                {/* Glow behind phone */}
                <div className="absolute inset-0 bg-primary-blue-light/30 rounded-[3rem] blur-2xl group-hover:bg-primary-blue-light/50 transition-colors duration-700" />
                
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-neutral-bg rounded-[2.5rem] border-[8px] border-neutral-text-dark shadow-2xl overflow-hidden flex flex-col relative z-10">
                  {/* Status Bar */}
                  <div className="relative bg-white px-5 pt-3 pb-1.5 flex items-center justify-between text-[10px] font-bold text-neutral-text-dark shrink-0">
                    <span>11:41</span>
                    <div className="w-16 h-5 bg-neutral-text-dark rounded-full absolute left-1/2 -translate-x-1/2 top-1" />
                    <div className="flex items-center gap-1.5">
                      <Signal className="w-3 h-3" />
                      <Wifi className="w-3 h-3" />
                      <BatteryFull className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="bg-white px-4 py-3 border-b border-neutral-text-muted/10 flex items-center justify-between shrink-0 shadow-sm relative z-20">
                    <ChevronLeft className="w-5 h-5 text-neutral-text-dark" />
                    <span className="font-heading font-black text-sm text-neutral-text-dark">
                      Car<span className="text-primary-blue">Blink</span>
                    </span>
                    <div className="w-6 h-6 rounded-full bg-neutral-bg flex items-center justify-center">
                      <Search className="w-3 h-3 text-primary-blue" />
                    </div>
                  </div>

                  {/* Listings */}
                  <div className="flex-1 bg-neutral-bg p-3 flex flex-col gap-3 relative z-10">
                    {PHONE_LISTINGS.map((item) => (
                      <div
                        key={item.name}
                        className="bg-white p-2.5 rounded-2xl border border-neutral-text-muted/10 shadow-sm flex items-center justify-between gap-3 transform hover:-translate-y-0.5 transition-transform"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-neutral-bg shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-heading font-bold text-[10px] text-neutral-text-dark truncate">
                              {item.name}
                            </span>
                            <span className="font-body text-[9px] text-neutral-text-muted">
                              {item.subtitle}
                            </span>
                          </div>
                        </div>
                        <span className="font-heading font-black text-[10px] text-accent-orange shrink-0">
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