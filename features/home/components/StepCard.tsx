import React from "react";
import { Car, FileSearch, Calendar, LucideIcon } from "lucide-react";
import Card from "@/components/ui/Card";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  iconName: "Car" | "FileSearch" | "Calendar";
}

const iconMap: Record<string, LucideIcon> = {
  Car: Car,
  FileSearch: FileSearch,
  Calendar: Calendar,
};

export default function StepCard({
  number,
  title,
  description,
  iconName,
}: StepCardProps) {
  const Icon = iconMap[iconName] || Car;

  return (
    <Card className="relative flex flex-col items-center text-center p-6 pt-8 bg-white border border-neutral-text-muted/15 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 h-full w-full">
      {/* Step Number Badge (Floating top-left) */}
      <div className="absolute left-4 top-4 flex items-center justify-center w-6 h-6 rounded-full bg-primary-blue/10">
        <span className="font-heading font-bold text-xs text-primary-blue">
          {number}
        </span>
      </div>

      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-primary-blue/10 flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-primary-blue" />
      </div>

      {/* Text Content */}
      <h3 className="font-heading font-bold text-base text-neutral-text-dark mb-1.5 leading-tight">
        {title}
      </h3>
      <p className="font-body text-xs sm:text-sm text-neutral-text-muted leading-relaxed">
        {description}
      </p>
    </Card>
  );
}