"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { TRUST_BADGES_LIST, iconMap } from "../data/trustBadgesList";

export default function TrustBadges() {
  return (
    <section className="py-8 bg-neutral-bg">
      <Container>
        <Card className="w-full bg-white border border-neutral-text-muted/10 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-8 items-center">
          {/* Header with decorative line dividers */}
          <div className="flex items-center justify-center gap-4 w-full">
            <div className="h-px bg-neutral-text-muted/15 flex-grow" />
            <h3 className="font-heading font-black text-xs uppercase tracking-wider text-primary-navy whitespace-nowrap">
              Why You Can Trust Us
            </h3>
            <div className="h-px bg-neutral-text-muted/15 flex-grow" />
          </div>

          {/* Badges Strip List */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-between w-full">
            {TRUST_BADGES_LIST.map((badge, idx) => {
              const Icon = iconMap[badge.iconName];
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 justify-center lg:justify-start"
                >
                  {/* Outline Icon */}
                  {Icon && <Icon className="w-5 h-5 text-primary-navy shrink-0" strokeWidth={2} />}
                  {/* Label */}
                  <span className="font-heading font-bold text-xs text-primary-navy text-left leading-tight">
                    {badge.label}
                  </span>
                </div>
              );
            })}
          </div>
        </Card>
      </Container>
    </section>
  );
}
