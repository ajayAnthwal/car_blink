import React from "react";
import { Star } from "lucide-react";
import { ServiceRateRow as ServiceRateRowData } from "../data/serviceRatesList";

interface ServiceRateRowProps {
  rate: ServiceRateRowData;
  isLast: boolean;
}

export default function ServiceRateRow({ rate, isLast }: ServiceRateRowProps) {
  return (
    <div
      className={`grid grid-cols-3 items-center gap-4 py-4 ${
        isLast ? "" : "border-b border-neutral-text-muted/10"
      }`}
    >
      <div className="flex flex-col text-left">
        <span className="font-heading font-bold text-sm text-neutral-text-dark leading-tight">
          {rate.workshopName}
        </span>
        <span className="flex items-center gap-1 mt-1">
          <Star className="w-3 h-3 text-warning fill-warning" />
          <span className="font-body text-xs text-neutral-text-muted">
            {rate.rating} ({rate.reviewCount})
          </span>
        </span>
      </div>
      <span className="font-heading font-bold text-sm text-neutral-text-dark text-center">
        {rate.fullServicePrice}
      </span>
      <span className="font-heading font-bold text-sm text-neutral-text-dark text-center">
        {rate.oilChangePrice}
      </span>
    </div>
  );
}
