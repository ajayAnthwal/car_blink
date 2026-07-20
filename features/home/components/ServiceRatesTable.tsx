import React from "react";
import Card from "@/components/ui/Card";
import ServiceRateRow from "./ServiceRateRow";
import { SERVICE_RATES_LIST } from "../data/serviceRatesList";

export default function ServiceRatesTable() {
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
      <div className="flex flex-col divide-y divide-neutral-text-muted/10">
        {SERVICE_RATES_LIST.map((rate, idx) => (
          <ServiceRateRow
            key={rate.workshopName}
            rate={rate}
            isLast={idx === SERVICE_RATES_LIST.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
