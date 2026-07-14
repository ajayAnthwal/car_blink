import React from "react";
import { LucideIcon } from "lucide-react";

interface HeroFeatureBadgeProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export default function HeroFeatureBadge({
  icon: Icon,
  title,
  subtitle,
}: HeroFeatureBadgeProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-navy-light border border-primary-navy-light shrink-0">
        <Icon className="w-5 h-5 text-primary-orange" />
      </div>
      <div className="flex flex-col text-left">
        <span className="font-heading font-bold text-sm text-white">{title}</span>
        <span className="font-body text-xs text-neutral-text-muted">{subtitle}</span>
      </div>
    </div>
  );
}
