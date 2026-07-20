"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Wrench,
  Cog,
  PaintBucket,
  Droplets,
  Sparkles,
  ShieldCheck,
  CircleDot,
  Disc3,
  BatteryCharging,
  Wind,
  SlidersHorizontal,
  FileText,
  Settings2,
  Disc,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

type Category = "All" | "Maintenance" | "Repair" | "Cosmetic" | "Insurance & Claims";

interface ServiceItem {
  name: string;
  description: string;
  priceFrom: string;
  category: Exclude<Category, "All">;
  icon: LucideIcon;
}

const categories: Category[] = [
  "All",
  "Maintenance",
  "Repair",
  "Cosmetic",
  "Insurance & Claims",
];

const services: ServiceItem[] = [
  {
    name: "Periodic Service",
    description: "Complete health checkup, oil change & multi-point inspection.",
    priceFrom: "₹2,499",
    category: "Maintenance",
    icon: Wrench,
  },
  {
    name: "Engine Repair",
    description: "Diagnostics and repair for engine noise, leaks & performance.",
    priceFrom: "₹4,999",
    category: "Repair",
    icon: Cog,
  },
  {
    name: "Dent & Paint",
    description: "Dent removal and panel repainting with colour-match guarantee.",
    priceFrom: "₹5,499",
    category: "Cosmetic",
    icon: PaintBucket,
  },
  {
    name: "Car Wash",
    description: "Exterior foam wash, interior vacuuming & tyre shine.",
    priceFrom: "₹499",
    category: "Maintenance",
    icon: Droplets,
  },
  {
    name: "Detailing",
    description: "Deep interior & exterior detailing to restore that new-car feel.",
    priceFrom: "₹2,999",
    category: "Cosmetic",
    icon: Sparkles,
  },
  {
    name: "PPF (Paint Protection Film)",
    description: "Long-lasting film that shields your paint from scratches.",
    priceFrom: "₹25,999",
    category: "Cosmetic",
    icon: ShieldCheck,
  },
  {
    name: "Ceramic Coating",
    description: "Glass-like shine with lasting protection from the elements.",
    priceFrom: "₹14,999",
    category: "Cosmetic",
    icon: CircleDot,
  },
  {
    name: "Tyres",
    description: "Genuine tyre brands with free fitting & wheel balancing.",
    priceFrom: "₹5,499 / tyre",
    category: "Maintenance",
    icon: Disc3,
  },
  {
    name: "Battery",
    description: "Doorstep battery replacement with warranty, top brands.",
    priceFrom: "₹6,499",
    category: "Maintenance",
    icon: BatteryCharging,
  },
  {
    name: "AC Repair",
    description: "Gas top-up, compressor & cooling system diagnostics.",
    priceFrom: "₹1,499",
    category: "Repair",
    icon: Wind,
  },
  {
    name: "Suspension",
    description: "Shock absorbers, struts & suspension noise fixes.",
    priceFrom: "₹3,999",
    category: "Repair",
    icon: SlidersHorizontal,
  },
  {
    name: "Insurance Claims",
    description: "Cashless claim assistance across all major insurers.",
    priceFrom: "Free assistance",
    category: "Insurance & Claims",
    icon: FileText,
  },
  {
    name: "Clutch Repair",
    description: "Clutch plate, pressure plate & release bearing service.",
    priceFrom: "₹5,999",
    category: "Repair",
    icon: Settings2,
  },
  {
    name: "Brake Service",
    description: "Brake pad replacement, disc skimming & fluid change.",
    priceFrom: "₹1,299",
    category: "Maintenance",
    icon: Disc,
  },
];

export default function ServicesCatalog() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <section className="py-16 bg-neutral-bg">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="font-heading font-black text-2xl md:text-3xl text-neutral-text-dark tracking-tight">
              Browse Our Services
            </h2>
            <p className="font-body text-neutral-text-muted mt-1 text-sm md:text-base">
              Pick a service and get quotes from verified workshops near you.
            </p>
          </div>
        </div>

        {/* Category filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-4 py-2 rounded-full font-heading text-sm font-semibold border transition-colors shrink-0 ${
                activeCategory === category
                  ? "bg-primary-blue text-white border-primary-blue"
                  : "bg-white text-neutral-text-muted border-neutral-text-muted/25 hover:border-primary-blue hover:text-primary-blue"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.name}
                hoverable
                className="group flex flex-col bg-white border border-neutral-text-muted/15 rounded-2xl p-5"
              >
                <div className="w-11 h-11 rounded-lg bg-primary-blue/10 flex items-center justify-center mb-4 group-hover:bg-accent-orange/10 transition-colors">
                  <Icon className="w-5 h-5 text-primary-blue group-hover:text-accent-orange transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-neutral-text-dark mb-1.5">
                  {service.name}
                </h3>
                <p className="font-body text-sm text-neutral-text-muted mb-4 flex-1">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-neutral-text-muted/10">
                  <div>
                    <span className="font-body text-xs text-neutral-text-muted block">
                      Starting at
                    </span>
                    <span className="font-heading font-bold text-neutral-text-dark">
                      {service.priceFrom}
                    </span>
                  </div>
                  <Link href={`/services/${service.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="flex items-center gap-1 font-heading text-sm font-bold text-primary-blue hover:text-primary-blue-dark transition-colors">
                    Get Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
