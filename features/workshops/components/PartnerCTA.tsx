"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

const BENEFITS = [
  "Receive High Quality Leads Daily",
  "Increase Your Workshop Revenue",
  "Zero Marketing Cost",
  "Easy Dashboard & Management",
];

export default function PartnerCTA() {
  return (
    <div className="flex-1 bg-primary-navy rounded-3xl text-white relative overflow-hidden flex flex-col lg:flex-row justify-between items-stretch w-full border border-primary-navy-light shadow-md min-h-[360px]">
      {/* Background Decorative Glow */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary-orange/5 rounded-full blur-3xl pointer-events-none" />

      {/* Left Column - Content */}
      <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col gap-6 items-center text-center lg:items-start lg:text-left relative z-10">
        <div className="flex flex-col gap-1.5">
          <span className="font-heading font-black text-xs text-neutral-bg/60 uppercase tracking-wider">
            For Workshops (B2B)
          </span>
          <h3 className="font-heading font-black text-2xl md:text-3xl text-white tracking-tight">
            Become a Verified Partner
          </h3>
        </div>

        {/* Benefits Checklist */}
        <div className="flex flex-col items-center lg:items-start gap-3">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <Check className="w-4 h-4 text-secondary-blue shrink-0" strokeWidth={3} />
              <span className="font-body text-sm text-neutral-text-muted leading-tight">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <Button
          variant="primary"
          size="md"
          className="w-full sm:w-auto bg-primary-orange hover:bg-primary-orange-dark border-0 mt-2 font-heading font-bold"
        >
          Join as Partner
        </Button>
      </div>

      {/* Right Column - Image & Floating Speech Bubble */}
      <div className="relative w-full lg:w-2/5 min-h-[240px] lg:min-h-full shrink-0 overflow-hidden">
        <Image
          src="/images/mechanic-partner.png"
          alt="Become a Partner mechanic"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority
        />
        {/* Floating Speech Bubble Tag */}
        <div className="absolute top-4 right-4 lg:-left-4 lg:right-auto lg:top-8 bg-secondary-blue text-white text-xs font-heading font-black px-4 py-2 rounded-2xl shadow-lg z-20 animate-pulse">
          Grow Your Business
          {/* Speech bubble pointer tail */}
          <div className="absolute -bottom-1 left-6 w-2.5 h-2.5 bg-secondary-blue transform rotate-45" />
        </div>
      </div>
    </div>
  );
}
