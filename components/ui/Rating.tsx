import React from "react";
import { Star } from "lucide-react";

export interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
}

export default function Rating({
  value,
  max = 5,
  className = "",
  ...props
}: RatingProps) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} {...props}>
      {Array.from({ length: max }).map((_, idx) => {
        const starValue = idx + 1;
        const isFilled = starValue <= value;

        return (
          <Star
            key={idx}
            className={`w-4 h-4 ${
              isFilled
                ? "text-warning fill-warning"
                : "text-neutral-text-muted/20"
            }`}
          />
        );
      })}
    </div>
  );
}
