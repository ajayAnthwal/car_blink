"use client";

import { useState } from "react";
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
    priceFrom: "₹1,499",
    category: "Maintenance",
    icon: Wrench,
  },
  {
    name: "Engine Repair",
    description: "Diagnostics and repair for engine noise, leaks & performance.",
    priceFrom: "₹2,999",
    category: "Repair",
    icon: Cog,
  },
  {
    name: "Dent & Paint",
    description: "Dent removal and panel repainting with colour-match guarantee.",
    priceFrom: "₹3,499",
    category: "Cosmetic",
    icon: PaintBucket,
  },
  {
    name: "Car Wash",
    description: "Exterior foam wash, interior vacuuming & tyre shine.",
    priceFrom: "₹299",
    category: "Maintenance",
    icon: Droplets,
  },
  {
    name: "Detailing",
    description: "Deep interior & exterior detailing to restore that new-car feel.",
    priceFrom: "₹1,999",
    category: "Cosmetic",
    icon: Sparkles,
  },
  {
    name: "PPF (Paint Protection Film)",
    description: "Long-lasting film that shields your paint from scratches.",
    priceFrom: "₹15,999",
    category: "Cosmetic",
    icon: ShieldCheck,
  },
  {
    name: "Ceramic Coating",
    description: "Glass-like shine with lasting protection from the elements.",
    priceFrom: "₹8,999",
    category: "Cosmetic",
    icon: CircleDot,
  },
  {
    name: "Tyres",
    description: "Genuine tyre brands with free fitting & wheel balancing.",
    priceFrom: "₹3,499 / tyre",
    category: "Maintenance",
    icon: Disc3,
  },
  {
    name: "Battery",
    description: "Doorstep battery replacement with warranty, top brands.",
    priceFrom: "₹4,499",
    category: "Maintenance",
    icon: BatteryCharging,
  },
  {
    name: "AC Repair",
    description: "Gas top-up, compressor & cooling system diagnostics.",
    priceFrom: "₹999",
    category: "Repair",
    icon: Wind,
  },
  {
    name: "Suspension",
    description: "Shock absorbers, struts & suspension noise fixes.",
    priceFrom: "₹2,499",
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
    priceFrom: "₹3,999",
    category: "Repair",
    icon: Settings2,
  },
  {
    name: "Brake Service",
    description: "Brake pad replacement, disc skimming & fluid change.",
    priceFrom: "₹899",
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
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Browse Our Services
            </h2>
            <p className="text-neutral-500 mt-1 text-sm md:text-base">
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
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-colors shrink-0 ${
                activeCategory === category
                  ? "bg-primary-dark text-white border-primary-dark"
                  : "bg-white text-neutral-600 border-neutral-200 hover:border-primary-dark"
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
              <div
                key={service.name}
                className="group bg-white rounded-xl border border-neutral-200 p-5 flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-orange-50 transition-colors">
                  <Icon className="w-5 h-5 text-primary-dark group-hover:text-orange-500 transition-colors" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1.5">
                  {service.name}
                </h3>
                <p className="text-sm text-neutral-500 mb-4 flex-1">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                  <div>
                    <span className="text-xs text-neutral-400 block">
                      Starting at
                    </span>
                    <span className="font-semibold text-neutral-900">
                      {service.priceFrom}
                    </span>
                  </div>
                  <button className="flex items-center gap-1 text-sm font-medium text-orange-500 hover:text-orange-600">
                    Get Quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}