import React from "react";
import Image from "next/image";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg";
}

export default function Avatar({
  src,
  alt,
  size = "md",
  className = "",
  ...props
}: AvatarProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  };

  const monogram = alt
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className={`relative shrink-0 rounded-full overflow-hidden bg-primary-blue/10 border border-neutral-text-muted/10 flex items-center justify-center font-heading font-bold text-primary-blue ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50px, 100px"
        />
      ) : (
        <span>{monogram || "U"}</span>
      )}
    </div>
  );
}
