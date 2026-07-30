import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconClick?: () => void;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className = "", label, icon, rightIcon, onRightIconClick, error, id, ...props },
  ref
) {
  const inputId = id || props.name;

  return (
    <div className="flex flex-col gap-1.5 w-full text-left">
      {label && (
        <label
          htmlFor={inputId}
          className="font-heading font-bold text-xs text-neutral-text-muted"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-text-muted">
            {icon}
          </span>
        )}
        <input
          id={inputId}
          ref={ref}
          className={`w-full ${icon ? "pl-11" : "pl-4"} ${rightIcon ? "pr-11" : "pr-4"} py-3 bg-white border rounded-xl font-body text-sm text-neutral-text-dark placeholder:text-neutral-text-muted/60 focus:outline-none focus:ring-1 transition-colors ${
            error
              ? "border-danger focus:border-danger focus:ring-danger"
              : "border-neutral-text-muted/30 focus:border-primary-blue focus:ring-primary-blue"
          } ${className}`}
          {...props}
        />
        {rightIcon && (
          <button
            type="button"
            onClick={onRightIconClick}
            className={`absolute right-4 top-1/2 -translate-y-1/2 text-neutral-text-muted transition-colors ${onRightIconClick ? "cursor-pointer hover:text-neutral-text-dark" : "pointer-events-none"}`}
          >
            {rightIcon}
          </button>
        )}
      </div>
      {error && (
        <span className="font-body text-xs text-danger">{error}</span>
      )}
    </div>
  );
});

export default Input;
