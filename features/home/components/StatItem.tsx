import React from "react";
import { LucideIcon } from "lucide-react";

interface StatItemProps {
  icon: LucideIcon;
  number: string;
  label: string;
  iconBg: string;
  iconColor: string;
}

export default function StatItem({
  icon: Icon,
  number,
  label,
  iconBg,
  iconColor,
}: StatItemProps) {
  return (
    <div className="flex items-center gap-3.5 p-2 justify-center lg:justify-start">
      {/* Icon Circle */}
      <div className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center shrink-0`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      {/* Stat Numbers */}
      <div className="flex flex-col text-left">
        <span className="font-heading font-black text-2xl text-primary-navy tracking-tight leading-none mb-1.5">
          {number}
        </span>
        <span className="font-body text-xs font-medium text-neutral-text-muted leading-none">
          {label}
        </span>
      </div>
    </div>
  );
}
