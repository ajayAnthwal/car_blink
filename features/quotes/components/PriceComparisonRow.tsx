import React from "react";
import { Minus, Equal } from "lucide-react";
import Badge from "@/components/ui/Badge";

interface PriceComparisonRowProps {
  averageMarketPrice: string;
  carblinkBestPrice: string;
  savingsAmount: string;
  savingsPercentage: string;
}

export default function PriceComparisonRow({
  averageMarketPrice,
  carblinkBestPrice,
  savingsAmount,
  savingsPercentage,
}: PriceComparisonRowProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 p-6 bg-primary-navy-light/40 border border-primary-navy-light rounded-2xl w-full">
      {/* Average Market Price */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
        <span className="font-heading font-medium text-xs text-neutral-text-muted">
          Average Market Price
        </span>
        <span className="font-heading font-black text-2xl text-danger tracking-tight">
          {averageMarketPrice}
        </span>
      </div>

      {/* Minus Separator */}
      <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-secondary-blue/10 border border-secondary-blue/20 shrink-0">
        <Minus className="w-4 h-4 text-secondary-blue" />
      </div>

      {/* CarBlink Best Price */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
        <span className="font-heading font-medium text-xs text-neutral-text-muted">
          CarBlink Best Price
        </span>
        <span className="font-heading font-black text-2xl text-success tracking-tight">
          {carblinkBestPrice}
        </span>
      </div>

      {/* Equals Separator */}
      <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-secondary-blue/10 border border-secondary-blue/20 shrink-0">
        <Equal className="w-4 h-4 text-secondary-blue" />
      </div>

      {/* You Save Info */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1.5">
        <span className="font-heading font-medium text-xs text-neutral-text-muted">
          You Save
        </span>
        <span className="font-heading font-black text-2xl text-success tracking-tight">
          {savingsAmount}
        </span>
        <Badge variant="success" className="text-xs py-0.5 px-2">
          Save Upto {savingsPercentage}
        </Badge>
      </div>
    </div>
  );
}
