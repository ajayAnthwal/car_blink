import React from "react";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { ABOUT_STATS } from "../data/aboutContent";

export default function AboutStats() {
  return (
    <div className="relative z-30 -mt-14 md:-mt-20">
      <Container>
        <Card className="bg-white rounded-2xl shadow-xl border border-neutral-text-muted/10 p-6 md:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:divide-x lg:divide-neutral-text-muted/15">
            {ABOUT_STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className={`${idx > 0 ? "lg:pl-8" : ""} flex flex-col items-center lg:items-start text-center lg:text-left`}
              >
                <span className="font-heading font-black text-2xl sm:text-3xl text-primary-navy tracking-tight leading-none mb-1.5">
                  {stat.value}
                </span>
                <span className="font-body text-xs sm:text-sm font-medium text-neutral-text-muted leading-none">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </div>
  );
}
