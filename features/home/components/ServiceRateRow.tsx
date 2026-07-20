import React from "react";
import { Star, MapPin } from "lucide-react";
import { ServiceRateRow as ServiceRateRowData } from "../data/serviceRatesList";

interface ServiceRateRowProps {
  rate: ServiceRateRowData;
  isLast: boolean;
}

export default function ServiceRateRow({ rate, isLast }: ServiceRateRowProps) {
  return (
    <div className="grid grid-cols-3 items-center gap-4 p-6 hover:bg-neutral-bg/50 transition-colors cursor-pointer group">
      <div className="flex flex-col text-left">
        <span className="font-heading font-black text-lg text-neutral-text-dark leading-tight group-hover:text-primary-blue transition-colors">
          {rate.workshopName}
        </span>
        <div className="flex items-center gap-3 mt-1.5">
          <span className="flex items-center gap-1 bg-warning/10 px-2 py-0.5 rounded-full">
            <Star className="w-3 h-3 text-warning fill-warning" />
            <span className="font-body font-bold text-xs text-warning-dark">
              {rate.rating}
            </span>
          </span>
          <span className="font-body text-xs text-neutral-text-muted">
            ({rate.reviewCount} reviews)
          </span>
        </div>
      </div>
      
      <div className="flex justify-center items-center">
        <span className="inline-block font-heading font-bold text-lg text-neutral-text-dark bg-primary-blue/5 text-primary-blue px-4 py-1.5 rounded-full border border-primary-blue/10">
          {rate.fullServicePrice}
        </span>
      </div>
      
      <div className="flex justify-center items-center">
        <span className="inline-block font-heading font-bold text-lg text-neutral-text-dark bg-accent-orange/5 text-accent-orange px-4 py-1.5 rounded-full border border-accent-orange/10">
          {rate.oilChangePrice}
        </span>
      </div>
    </div>
  );
}
