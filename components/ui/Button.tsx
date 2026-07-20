import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "white" | "ghost" | "link" | "accent";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
}

export default function Button({
  className = "",
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  href,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-heading font-bold rounded-full transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary-blue hover:bg-primary-blue-dark text-white shadow-md shadow-primary-blue/15 hover:shadow-lg hover:shadow-primary-blue/20",
    accent: "bg-accent-orange hover:bg-accent-orange/90 text-white shadow-md shadow-accent-orange/15 hover:shadow-lg hover:shadow-accent-orange/20",
    outline: "border-2 border-primary-blue/20 hover:border-primary-blue text-primary-blue bg-transparent",
    white: "bg-white hover:bg-neutral-bg text-primary-blue-dark shadow-md shadow-black/5 hover:shadow-lg",
    ghost: "bg-transparent hover:bg-neutral-bg text-primary-blue",
    link: "bg-transparent text-primary-blue hover:underline p-0 rounded-none",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...props}
    >
      {leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
    </button>
  );
}
