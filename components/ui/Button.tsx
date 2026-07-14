import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "white" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function Button({
  className = "",
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-heading font-bold rounded-full transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary-orange hover:bg-primary-orange-dark text-white shadow-md shadow-primary-orange/15 hover:shadow-lg hover:shadow-primary-orange/20",
    outline: "border-2 border-primary-navy/20 hover:border-primary-navy text-primary-navy bg-transparent",
    white: "bg-white hover:bg-neutral-bg text-primary-navy shadow-md shadow-black/5 hover:shadow-lg",
    ghost: "bg-transparent hover:bg-neutral-bg text-primary-navy",
    link: "bg-transparent text-secondary-blue hover:underline p-0 rounded-none",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
    </button>
  );
}
