"use client";

import React from "react";
import Image from "next/image";
import { Check, TrendingUp } from "lucide-react";
import Badge from "@/components/ui/Badge";
import PartnerRegisterForm from "@/features/auth/components/PartnerRegisterForm";

const BENEFITS = [
  "Receive High Quality Leads Daily",
  "Increase Your Workshop Revenue",
  "Zero Marketing Cost",
  "Easy Dashboard & Workshop Management",
];

export default function PartnerCTA() {
  return (
    <div id="become-partner-form" className="flex-1 bg-white rounded-3xl relative overflow-hidden flex flex-col lg:flex-row justify-between items-stretch w-full border border-neutral-text-muted/10 shadow-xl shadow-primary-blue/5 min-h-[420px]">
      {/* Background Decorative Glow */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-accent-orange/5 rounded-full blur-3xl pointer-events-none" />

      {/* Left Column - Content & Registration Form */}
      <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col gap-6 items-center text-center lg:items-start lg:text-left relative z-10">
        <div className="flex flex-col gap-2">
          <Badge variant="info" className="self-center lg:self-start bg-primary-blue/10 text-primary-blue border border-primary-blue/15 shadow-none">
            <span className="flex items-center gap-1.5 text-black">
              <TrendingUp className="w-3.5 h-3.5" />
              For Workshops (B2B Partner Registration)
            </span>
          </Badge>
          <h3 className="font-heading font-black text-2xl md:text-3xl text-neutral-text-dark tracking-tight">
            Become a Verified CarBlink Partner
          </h3>
          <p className="font-body text-sm text-neutral-text-muted max-w-sm">
            Fill your workshop credentials below to register. Account access unlocks after Executive inspection &amp; Super Admin authorization.
          </p>
        </div>

        {/* Benefits Checklist */}
        <div className="flex flex-col items-center lg:items-start gap-2.5">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-success/10 shrink-0">
                <Check className="w-3 h-3 text-success" strokeWidth={3} />
              </div>
              <span className="font-body text-xs md:text-sm text-neutral-text-dark leading-tight">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        {/* Dynamic Partner Registration Form - Exactly matching Dashboard Design */}
        <div className="w-full mt-2 bg-neutral-bg/60 p-4 sm:p-6 rounded-3xl border border-neutral-text-muted/15 shadow-2xs text-left">
          <PartnerRegisterForm 
            showRoleToggle={false} 
            source="become-a-partner-section"
            onSwitchToLogin={() => {
              window.location.href = "/partner-login";
            }}
          />
        </div>
      </div>

      {/* Right Column - Image & Floating Speech Bubble */}
      <div className="relative w-full lg:w-2/5 min-h-[300px] lg:min-h-full shrink-0 overflow-hidden">
        <Image
          src="/images/mechanic-partner.png"
          alt="Become a Partner mechanic"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent lg:from-white/50" />
        <div className="absolute top-4 right-4 lg:-left-4 lg:right-auto lg:top-8 bg-white text-primary-blue text-xs font-heading font-black px-4 py-2 rounded-2xl shadow-lg border border-neutral-text-muted/10 z-20">
          Grow Your Business
          <div className="absolute -bottom-1 left-6 w-2.5 h-2.5 bg-white border-b border-r border-neutral-text-muted/10 transform rotate-45" />
        </div>
      </div>
    </div>
  );
}
