"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
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
      className="group flex items-center gap-2.5 px-3.5 py-3 bg-white border border-neutral-text-muted/10 rounded-xl shadow-sm transition-all duration-200 cursor-pointer"
    >
      {/* Icon Wrapper */}
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-blue/10 shrink-0">
        {Icon && <Icon className="w-4 h-4 text-primary-blue" />}
      </div>

      {/* Service Label */}
      <span className="flex-1 font-heading font-bold text-xs sm:text-sm text-neutral-text-dark tracking-tight text-left leading-tight">
        {label}
      </span>

      {/* Chevron */}
      <ChevronRight className="w-4 h-4 text-neutral-text-muted/50 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:text-primary-blue" />
    </Card>
  );
}