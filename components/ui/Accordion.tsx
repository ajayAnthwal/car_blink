"use client";

import React, { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

export interface AccordionItemProps {
  id: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  showPlusMinus?: boolean;
}

export function AccordionItem({
  id,
  trigger,
  children,
  isOpen = false,
  onToggle,
  showPlusMinus = false,
}: AccordionItemProps) {
  const [localOpen, setLocalOpen] = useState(false);
  const active = onToggle ? isOpen : localOpen;
  const toggle = onToggle ? onToggle : () => setLocalOpen(!localOpen);

  return (
    <div className="border-b border-neutral-text-muted/15 last:border-b-0 w-full">
      <button
        type="button"
        onClick={toggle}
        className="flex items-center justify-between w-full py-4 text-left font-body font-medium text-sm sm:text-base text-neutral-text-dark hover:text-primary-blue-dark transition-colors focus:outline-none"
      >
        <span>{trigger}</span>
        {showPlusMinus ? (
          active ? (
            <Minus className="w-4.5 h-4.5 text-primary-blue shrink-0" strokeWidth={2.5} />
          ) : (
            <Plus className="w-4.5 h-4.5 text-neutral-text-muted shrink-0" strokeWidth={2.5} />
          )
        ) : (
          <ChevronDown
            className={`w-5 h-5 text-neutral-text-muted transition-transform duration-200 shrink-0 ${
              active ? "transform rotate-180" : ""
            }`}
          />
        )}
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          active ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="font-body text-sm text-neutral-text-muted leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Accordion({ children, className = "" }: AccordionProps) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {children}
    </div>
  );
}
