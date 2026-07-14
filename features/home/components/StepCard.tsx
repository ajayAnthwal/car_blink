import React from "react";
import { Clipboard, Mail, Scale, CalendarCheck, LucideIcon } from "lucide-react";
import Card from "@/components/ui/Card";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  iconName: "Clipboard" | "Mail" | "Scale" | "CalendarCheck";
}

const iconMap: Record<string, LucideIcon> = {
  Clipboard: Clipboard,
  Mail: Mail,
  Scale: Scale,
  CalendarCheck: CalendarCheck,
};

export default function StepCard({
  number,
  title,
  description,
  iconName,
}: StepCardProps) {
  const Icon = iconMap[iconName] || Clipboard;

  return (
    <Card className="flex-1 relative flex flex-col items-center text-center p-6 md:p-8 bg-white border border-neutral-text-muted/15 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 max-w-sm w-full">
      {/* Step Number Circle */}
      <div className="absolute top-4 left-4 flex items-center justify-center w-6 h-6 rounded-full bg-secondary-blue/10 border border-secondary-blue/20">
        <span className="font-heading font-bold text-xs text-secondary-blue">
          {number}
        </span>
      </div>

      {/* Icon Circle */}
      <div className="w-16 h-16 rounded-2xl bg-secondary-blue/5 flex items-center justify-center border border-secondary-blue/10 mb-6 mt-2">
        <Icon className="w-8 h-8 text-secondary-blue" />
      </div>

      {/* Text Content */}
      <h3 className="font-heading font-bold text-lg text-primary-navy mb-3 leading-snug">
        {title}
      </h3>
      <p className="font-body text-sm text-neutral-text-muted leading-relaxed">
        {description}
      </p>
    </Card>
  );
}
