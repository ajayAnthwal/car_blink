"use client";

import { Car, Wrench, MapPin, Star, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";

const STATS_DATA = [
  {
    icon: Star,
    number: "120K+",
    label: "Happy Customers",
    iconColor: "text-accent-orange",
  },
  {
    icon: Wrench,
    number: "2,500+",
    label: "Verified Workshops",
    iconColor: "text-primary-blue-light",
  },
  {
    icon: Car,
    number: "50+",
    label: "Car Brands",
    iconColor: "text-primary-blue",
  },
  {
    icon: ShieldCheck,
    number: "98%",
    label: "Satisfaction Rate",
    iconColor: "text-success",
  },
  {
    icon: MapPin,
    number: "India Wide",
    label: "Service Coverage",
    iconColor: "text-accent-orange",
  },
];

export default function StatsBar() {
  return (
    <div className="relative z-30 -mt-16 md:-mt-24 mb-16 px-4">
      <Container>
        <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-primary-blue/10 border border-white p-6 md:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-4 lg:divide-x lg:divide-neutral-text-muted/15">
            {STATS_DATA.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={idx} 
                  className={`${idx > 0 ? "lg:pl-6" : ""} flex flex-col items-center lg:items-start text-center lg:text-left gap-3`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-neutral-text-muted/10 ${stat.iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-heading font-black text-2xl text-neutral-text-dark leading-none mb-1">
                      {stat.number}
                    </div>
                    <div className="font-body text-sm font-semibold text-neutral-text-muted">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
