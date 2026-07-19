import React from "react";

export default function StepArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="40"
      height="24"
      viewBox="0 0 40 24"
      fill="none"
      className={`text-primary-blue/40 ${className}`}
    >
      <path
        d="M2 4C14 4 12 20 38 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 4"
        strokeLinecap="round"
      />
      <path
        d="M31 10L38 14L32 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}