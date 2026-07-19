"use client";

import { Car, Wrench, MapPin, Star } from "lucide-react";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import StatItem from "./StatItem";

const STATS_DATA = [
  {
    icon: Star,
    number: "120K+",
    label: "Happy Customers",
    iconBg: "bg-primary-blue/10",
    iconColor: "text-primary-blue",
  },
  {
    icon: Wrench,
    number: "2,500+",
    label: "Verified Workshops",
    iconBg: "bg-primary-blue/10",
    iconColor: "text-primary-blue",
  },
  {
    icon: Car,
    number: "50+",
    label: "Car Brands",
    iconBg: "bg-primary-blue/10",
    iconColor: "text-primary-blue",
  },
  {
    icon: Star,
    number: "98%",
    label: "Customer Satisfaction",
    iconBg: "bg-primary-blue/10",
    iconColor: "text-primary-blue",
  },
  {
    icon: MapPin,
    number: "UAE Wide",
    label: "Coverage",
    iconBg: "bg-primary-blue/10",
    iconColor: "text-primary-blue",
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
