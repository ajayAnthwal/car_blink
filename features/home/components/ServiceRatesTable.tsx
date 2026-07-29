"use client";

import React from "react";
import Card from "@/components/ui/Card";
import ServiceRateRow from "./ServiceRateRow";
import { useGetTopWorkshops } from "@/services/queries";
import { Loader2 } from "lucide-react";

export default function ServiceRatesTable() {
  const { data: topWorkshops = [], isLoading } = useGetTopWorkshops();
  return (
    <div className="bg-white rounded-[2rem] border border-neutral-text-muted/10 shadow-lg shadow-neutral-text-muted/5 overflow-hidden h-full">
      {/* Header */}
      <div className="bg-primary-navy p-6 grid grid-cols-3 gap-4 text-white">
        <span className="font-heading font-black tracking-wide text-sm text-left">
          Top Workshops
        </span>
        <span className="font-heading font-bold text-xs uppercase tracking-wide text-white/80 text-center">
          Periodic Service
        </span>
        <span className="font-heading font-bold text-xs uppercase tracking-wide text-white/80 text-center">
          Engine Repair
        </span>
      </div>

      {/* Rows */}
      <div className="flex flex-col divide-y divide-neutral-text-muted/10 relative min-h-[200px]">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary-blue/50" />
          </div>
        ) : topWorkshops.length === 0 ? (
          <div className="flex items-center justify-center h-[200px] text-neutral-text-muted text-sm">
            No top workshops available.
          </div>
        ) : (
          topWorkshops.map((partner: any, idx: number) => {
            const rowData = {
              workshopName: partner.businessName || "Car Blink Partner",
              rating: partner.rating || 4.5,
              reviewCount: partner.totalReviews || 12,
              fullServicePrice: partner.basePrice ? `₹${partner.basePrice}` : "₹2,499",
              oilChangePrice: partner.oilChangePrice ? `₹${partner.oilChangePrice}` : "₹1,299",
            };
            return (
              <ServiceRateRow
                key={partner._id || idx}
                rate={rowData as any}
                isLast={idx === topWorkshops.length - 1}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
