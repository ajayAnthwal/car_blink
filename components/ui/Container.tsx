import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  clean?: boolean;
}

export default function Container({
  className = "",
  clean = false,
  children,
  ...props
}: ContainerProps) {
  const baseStyles = clean ? "" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
  return (
    <div className={`${baseStyles} ${className}`} {...props}>
      {children}
    </div>
  );
}
