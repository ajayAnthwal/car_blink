import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export default function Card({
  className = "",
  hoverable = false,
  children,
  ...props
}: CardProps) {
  const baseStyles = "bg-white rounded-2xl shadow-sm border border-neutral-text-muted/15 p-6";
  const hoverStyles = hoverable ? "hover:shadow-md hover:border-neutral-text-muted/30 transition-all duration-200" : "";
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  );
}
