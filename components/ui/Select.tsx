import React from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
}

export default function Select({
  className = "",
  label,
  options,
  ...props
}: SelectProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full text-left">
      {label && (
        <label className="font-heading font-bold text-xs text-neutral-text-muted">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={`w-full px-4 py-3 bg-white border border-neutral-text-muted/30 rounded-xl font-body text-sm text-neutral-text-dark focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-colors appearance-none cursor-pointer ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-white text-neutral-text-dark">
              {opt.label}
            </option>
          ))}
        </select>
        {/* Custom arrow indicator */}
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-text-muted">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
