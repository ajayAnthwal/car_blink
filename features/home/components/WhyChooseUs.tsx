"use client";

import React from "react";
import {
  IndianRupee,
  ShieldCheck,
  Lock,
  Star,
  FolderOpen,
  Headphones,
  Car,
  Handshake,
  MapPin,
  Gift,
  Check,
  X,
  Sparkles,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Link from "next/link";

const rows = [
  {
    icon: IndianRupee,
    title: "Best Price",
    good: "Compare quotes from multiple verified partners.",
    bad: "One workshop, one price — no comparison.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Partners",
    good: "Every partner passes a background & quality check.",
    bad: "Workshop quality is unknown, take a chance.",
  },
  {
    icon: Lock,
    title: "Secure Payment",
    good: "Payment releases only after you're satisfied.",
    bad: "No payment protection whatsoever.",
  },
  {
    icon: Star,
    title: "Genuine Reviews",
    good: "Real, verified ratings from real customers.",
    bad: "Limited or no review system to check.",
  },
  {
    icon: FolderOpen,
    title: "Digital Garage",
    good: "Every service saved to My Garage automatically.",
    bad: "Records rarely kept, easy to lose track.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    good: "CarBlink steps in the moment something's off.",
    bad: "You're on your own once you've paid.",
  },
  {
    icon: Car,
    title: "All-in-One",
    good: "Garage, detailing, tyres, insurance & more — one app.",
    bad: "Usually just one service at one shop.",
  },
  {
    icon: Handshake,
    title: "Free Negotiation",
    good: "We negotiate the best price on your behalf.",
    bad: "You bargain and manage everything yourself.",
  },
  {
    icon: MapPin,
    title: "Live Tracking",
    good: "Real-time status, booking to payment released.",
    bad: "Zero visibility once the car's dropped off.",
  },
  {
    icon: Gift,
    title: "Cashback & Rewards",
    good: "Earn points on every booking, redeem anytime.",
    bad: "No loyalty or rewards program at all.",
  },
];

const comparisonRows = [
  { feature: "Compare Multiple Quotes", direct: false },
  { feature: "Verified Workshop", direct: "Depends" },
  { feature: "Payment Protection", direct: false },
  { feature: "Service Tracking", direct: false },
  { feature: "Customer Support", direct: "Limited" },
  { feature: "Digital Service History", direct: false },
  { feature: "My Garage Records", direct: false },
  { feature: "Warranty Records", direct: false },
  { feature: "Future Reminders", direct: false },
  { feature: "Cashback Rewards", direct: false },
  { feature: "Price Negotiation", direct: false },
  { feature: "Single Dashboard", direct: false },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-neutral-bg overflow-hidden relative">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 font-body font-semibold text-xs tracking-wide uppercase text-primary-blue bg-primary-blue/10 px-3 py-1.5 rounded-full mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            The CarBlink Difference
          </span>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-neutral-text-dark tracking-tight mb-4">
            Why Choose <span className="text-primary-blue">CarBlink</span>?
          </h2>
          <p className="font-body text-neutral-text-muted text-lg leading-relaxed">
            You&apos;re not just choosing a workshop. You&apos;re choosing a platform that protects
            your money, saves your time, and guarantees quality — every single time.
          </p>
        </div>

        {/* Duel comparison list */}
        <div className="max-w-4xl mx-auto mb-20 rounded-[1.75rem] bg-white border border-neutral-text-muted/10 shadow-xl shadow-neutral-text-dark/[0.03] overflow-hidden">
          {/* Sticky-style column headers */}
          <div className="grid grid-cols-2 bg-primary-navy">
            <div className="flex items-center gap-2 px-6 py-4 border-r border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-heading font-bold text-white text-sm md:text-base">
                With CarBlink
              </span>
            </div>
            <div className="flex items-center gap-2 px-6 py-4">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="font-heading font-bold text-white/60 text-sm md:text-base">
                Booking Directly
              </span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-neutral-text-muted/10">
            {rows.map(({ icon: Icon, title, good, bad }, i) => (
              <div
                key={title}
                className={`grid grid-cols-2 group transition-colors duration-300 hover:bg-primary-blue/[0.03] ${i % 2 === 0 ? "bg-neutral-bg/40" : "bg-white"
                  }`}
              >
                {/* CarBlink side */}
                <div className="flex items-start gap-3.5 px-5 md:px-6 py-4 md:py-5 border-r border-neutral-text-muted/10">
                  <div className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-xl bg-primary-blue/10 flex items-center justify-center group-hover:bg-primary-blue/15 transition-colors">
                    <Icon className="w-4 h-4 md:w-4.5 md:h-4.5 text-primary-blue" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-heading font-bold text-sm text-neutral-text-dark mb-0.5">
                      {title}
                    </h4>
                    <p className="font-body text-neutral-text-muted text-xs md:text-[13px] leading-snug">
                      {good}
                    </p>
                  </div>
                </div>

                {/* Direct workshop side */}
                <div className="flex items-start gap-3 px-5 md:px-6 py-4 md:py-5">
                  <div className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-xl bg-red-50 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="font-body text-neutral-text-muted/70 text-xs md:text-[13px] leading-snug pt-1.5 md:pt-2">
                    {bad}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-20">
          <h3 className="font-heading font-black text-2xl md:text-3xl text-neutral-text-dark text-center mb-8">
            Feature by Feature Comparison
          </h3>
          <div className="max-w-2xl mx-auto relative rounded-[1.5rem] bg-white border border-neutral-text-muted/10 shadow-xl shadow-neutral-text-dark/[0.04] overflow-hidden">
            {/* Highlighted CarBlink column band */}
            <div className="absolute top-0 bottom-0 right-0 w-[30%] bg-primary-blue/[0.04] pointer-events-none" />

            <div className="relative grid grid-cols-[1fr_repeat(2,minmax(0,30%))] items-end bg-primary-navy px-5 md:px-7 pt-5 pb-4">
              <span className="font-heading font-bold text-white/80 text-xs md:text-sm">
                Feature
              </span>
              <div className="flex flex-col items-center gap-1">
                <span className="font-heading font-black text-white text-xs md:text-sm">
                  CarBlink
                </span>
                <span className="font-body text-[9px] md:text-[10px] font-bold tracking-wide uppercase text-accent-orange bg-accent-orange/15 px-2 py-0.5 rounded-full">
                  Recommended
                </span>
              </div>
              <span className="font-heading font-semibold text-white/50 text-xs md:text-sm text-center">
                Direct
              </span>
            </div>

            <div className="relative">
              {comparisonRows.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-[1fr_repeat(2,minmax(0,30%))] items-center px-5 md:px-7 py-3 ${i % 2 === 0 ? "bg-neutral-bg/50" : "bg-white/60"
                    }`}
                >
                  <span className="font-body text-neutral-text-dark text-xs md:text-sm">
                    {row.feature}
                  </span>
                  <span className="flex justify-center">
                    <span className="w-6 h-6 rounded-full bg-primary-blue/10 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-primary-blue" />
                    </span>
                  </span>
                  <span className="flex justify-center">
                    {row.direct === false ? (
                      <X className="w-4 h-4 text-neutral-text-muted/40" />
                    ) : (
                      <span className="font-body text-neutral-text-muted/50 text-[11px] md:text-xs">
                        {row.direct}
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-navy to-primary-blue-dark px-8 py-14 text-center">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent-orange/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="font-heading font-black text-2xl md:text-4xl text-white mb-4">
              Still Booking Directly?
            </h3>
            <p className="font-body text-white/70 text-lg mb-8">
              Why settle for one quote when CarBlink compares multiple verified workshops for you —
              at zero extra cost.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
              {[
                "Better Price",
                "Trusted Partners",
                "Secure Payment",
                "Complete Service Records",
                "Dedicated Support",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 font-body text-white/80 text-sm"
                >
                  <Check className="w-4 h-4 text-accent-orange" />
                  {item}
                </span>
              ))}
            </div>
            <Link href="/quotes" className="font-heading font-bold text-sm md:text-base bg-accent-orange text-white px-8 py-4 rounded-full hover:bg-accent-orange/90 transition-colors shadow-lg shadow-accent-orange/20">
              Compare Quotes Now
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}