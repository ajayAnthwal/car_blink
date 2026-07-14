"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { LIVE_QUOTES_LIST } from "../data/liveQuotesList";

export default function LiveQuotes() {
  return (
    <Card className="flex-1 bg-white border border-neutral-text-muted/15 rounded-3xl p-6 shadow-md w-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-neutral-text-muted/15 mb-6">
        <div className="flex flex-col text-left">
          <h3 className="font-heading font-black text-xl text-primary-navy">
            Live Quotes
          </h3>
          <span className="font-body text-xs text-neutral-text-muted">
            Real quotes from real workshops
          </span>
        </div>
        <Link
          href="/quotes"
          className="flex items-center gap-1 font-heading font-bold text-xs text-secondary-blue hover:underline"
        >
          View All
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Quotes List */}
      <div className="flex flex-col">
        {LIVE_QUOTES_LIST.map((quote, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-4 border-b border-neutral-text-muted/10 last:border-b-0 transition-colors duration-150"
          >
            {/* Left Column: Image + Info */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-neutral-bg border border-neutral-text-muted/10 flex items-center justify-center shrink-0">
                <Image
                  src={quote.carImage}
                  alt={quote.carName}
                  width={48}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-heading font-black text-sm text-primary-navy leading-none mb-1">
                  {quote.carName}
                </span>
                <span className="font-body text-xs text-neutral-text-muted leading-tight">
                  {quote.serviceType}
                </span>
                <span className="font-body text-xs text-neutral-text-muted/75 leading-tight">
                  {quote.location}
                </span>
              </div>
            </div>

            {/* Right Column: Pricing & Savings */}
            <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="font-body text-xs text-neutral-text-muted line-through w-12 text-left sm:text-right">
                  {quote.originalPrice}
                </span>
                <span className="font-heading font-black text-sm text-success w-16 text-left sm:text-right">
                  {quote.discountedPrice}
                </span>
              </div>
              
              <Badge variant="success" className="text-xs py-1 px-2.5">
                Save {quote.savings}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
