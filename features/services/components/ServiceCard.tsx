import React from "react";
import { iconMap } from "../data/servicesList";
import Card from "@/components/ui/Card";

interface ServiceCardProps {
  label: string;
  iconName: string;
}

export default function ServiceCard({ label, iconName }: ServiceCardProps) {
  const Icon = iconMap[iconName];

  return (
    <Card 
      hoverable 
      className="flex items-center gap-2.5 sm:gap-4 p-3.5 sm:p-5 bg-white border border-neutral-text-muted/15 rounded-xl shadow-sm transition-all duration-200 cursor-pointer"
    >
      {/* Icon Wrapper */}
      <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary-blue/5 border border-secondary-blue/10 shrink-0">
        {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-blue" />}
      </div>
      
      {/* Service Label */}
      <span className="font-heading font-bold text-sm text-primary-navy tracking-tight text-left leading-tight">
        {label}
      </span>
    </Card>
  );
}
