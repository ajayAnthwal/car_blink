import React from "react";
import Card from "@/components/ui/Card";
import ServiceRateRow from "./ServiceRateRow";
import { SERVICE_RATES_LIST } from "../data/serviceRatesList";

export default function ServiceRatesTable() {
  return (
    <Card className="bg-white border border-neutral-text-muted/15 rounded-2xl p-6 md:p-7 shadow-sm w-full h-full">
      {/* Column headers */}
      <div className="grid grid-cols-3 gap-4 pb-3 border-b border-neutral-text-muted/15">
        <span className="font-heading font-bold text-xs uppercase tracking-wide text-neutral-text-muted text-left">
          Workshop
        </span>
        <span className="font-heading font-bold text-xs uppercase tracking-wide text-neutral-text-muted text-center">
          Full Service
        </span>
        <span className="font-heading font-bold text-xs uppercase tracking-wide text-neutral-text-muted text-center">
          Oil Change
        </span>
      </div>

      {/* Rows */}
      <div className="flex flex-col">
        {SERVICE_RATES_LIST.map((rate, idx) => (
          <ServiceRateRow
            key={rate.workshopName}
            rate={rate}
            isLast={idx === SERVICE_RATES_LIST.length - 1}
          />
        ))}
      </div>
    </Card>
  );
}
