import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "info";
  dot?: boolean;
}

export default function Badge({
  className = "",
  variant = "default",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const baseStyles = "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-heading font-semibold rounded-full";
  
  const variants = {
    default: "bg-neutral-bg border border-neutral-text-muted/15 text-neutral-text-muted",
    success: "bg-success/10 text-success border border-success/20",
    info: "bg-primary-blue text-white shadow-sm",
  };

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full ${
          variant === "success" ? "bg-success" : "bg-success"
        }`} />
      )}
      {children}
    </div>
  );
}
