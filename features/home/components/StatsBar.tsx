"use client";

import { Car, Wrench, MapPin, Coins, Star } from "lucide-react";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import StatItem from "./StatItem";

const STATS_DATA = [
  {
    icon: Car,
    number: "5,000+",
    label: "Cars Compared",
    iconBg: "bg-secondary-blue/5",
    iconColor: "text-secondary-blue",
  },
  {
    icon: Wrench,
    number: "300+",
    label: "Verified Workshops",
    iconBg: "bg-secondary-blue/5",
    iconColor: "text-secondary-blue",
  },
  {
    icon: MapPin,
    number: "25+",
    label: "Cities Covered",
    iconBg: "bg-secondary-blue/5",
    iconColor: "text-secondary-blue",
  },
  {
    icon: Coins,
    number: "₹2Cr+",
    label: "Customer Savings",
    iconBg: "bg-secondary-blue/5",
    iconColor: "text-secondary-blue",
  },
  {
    icon: Star,
    number: "4.8/5",
    label: "Customer Rating",
    iconBg: "bg-secondary-blue/5",
    iconColor: "text-secondary-blue",
  },
];

export default function StatsBar() {
  return (
    <div className="relative z-30 -mt-12 md:-mt-16">
      <Container>
        <Card className="bg-white rounded-2xl shadow-xl border border-neutral-text-muted/10 p-6 md:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-2 lg:divide-x lg:divide-neutral-text-muted/15">
            {STATS_DATA.map((stat, idx) => (
              <div 
                key={idx} 
                className={`${idx > 0 ? "lg:pl-6" : ""} flex items-center justify-center lg:justify-start`}
              >
                <StatItem
                  icon={stat.icon}
                  number={stat.number}
                  label={stat.label}
                  iconBg={stat.iconBg}
                  iconColor={stat.iconColor}
                />
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </div>
  );
}
