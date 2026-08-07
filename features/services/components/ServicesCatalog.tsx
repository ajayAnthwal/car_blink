"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  Search,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

import * as LucideIcons from "lucide-react";

type Category = "All" | string;

import { useGetServices, ServiceItem } from "@/services/queries";

export default function ServicesCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const { data, isLoading, error } = useGetServices();

  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const services = data?.services || [];
  const categories = data?.categories || ["All"];

  const filteredServices = services.filter((service: ServiceItem) => {
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    const matchesSearch = !query || service.name.toLowerCase().includes(query.toLowerCase()) || service.description.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (isLoading) {
    return <div className="py-20 text-center">Loading services...</div>;
  }
  if (error) {
    return <div className="py-20 text-center text-red-500">Failed to load services.</div>;
  }

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
        <div className="flex gap-3 overflow-x-auto pb-4 mb-10 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full font-heading text-sm font-bold border-2 transition-all duration-300 shrink-0 ${
                activeCategory === category
                  ? "bg-primary-blue text-white border-primary-blue shadow-md shadow-primary-blue/20"
                  : "bg-white text-neutral-text-muted border-neutral-text-muted/10 hover:border-primary-blue/30 hover:text-primary-blue hover:bg-primary-blue/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredServices.map((service: ServiceItem) => {
              // @ts-ignore
              const Icon = LucideIcons[service.icon] || LucideIcons.Wrench;
              return (
                <Card
                  key={service.name}
                  className="group flex flex-col bg-white border border-neutral-text-muted/10 rounded-[2rem] p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-blue/10 hover:border-primary-blue/30"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-blue/5 flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-inner">
                    <Icon className="w-7 h-7 text-primary-blue group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-heading font-black text-xl text-neutral-text-dark mb-2 group-hover:text-primary-blue transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="font-body text-sm text-neutral-text-muted leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-text-muted/10">
                    <div className="flex flex-col">
                      <span className="font-body text-[11px] font-bold uppercase tracking-wider text-neutral-text-muted/70 mb-0.5">
                        Estimated
                      </span>
                      <span className="font-heading font-black text-lg text-neutral-text-dark">
                        {service.priceFrom}
                      </span>
                      <span className="text-[10px] text-neutral-text-muted mt-1">*T&C Apply</span>
                    </div>
                    <Link 
                      href={`/services/${service.slug || service.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} 
                      className="inline-flex items-center justify-center px-4 py-2 rounded-full font-heading text-xs font-bold bg-primary-blue/10 text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all duration-300"
                    >
                      Compare Now
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-24 px-4 bg-white border border-neutral-text-muted/10 rounded-[2rem]">
            <div className="w-20 h-20 bg-neutral-text-muted/5 rounded-full flex items-center justify-center mb-6">
              <Search className="w-10 h-10 text-neutral-text-muted/50" />
            </div>
            <h3 className="font-heading font-black text-2xl text-neutral-text-dark mb-2">
              No services found
            </h3>
            <p className="font-body text-neutral-text-muted max-w-md mx-auto mb-8 leading-relaxed">
              We couldn't find any services matching <span className="font-semibold text-neutral-text-dark">"{query}"</span>. Try checking for typos or searching with different keywords.
            </p>
            {query && (
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-heading text-sm font-bold bg-primary-blue text-white hover:bg-primary-blue-dark transition-all duration-300 shadow-md shadow-primary-blue/20"
              >
                Clear Search
              </Link>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
