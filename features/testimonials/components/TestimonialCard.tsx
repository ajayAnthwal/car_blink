import React from "react";
import Card from "@/components/ui/Card";
import Rating from "@/components/ui/Rating";
import Avatar from "@/components/ui/Avatar";
import { TestimonialData } from "../data/testimonialsList";

interface TestimonialCardProps {
  testimonial: TestimonialData;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col justify-between p-6 bg-white border border-neutral-text-muted/15 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 w-full text-left">
      {/* Top Section - Source & Rating */}
      <div className="flex items-center justify-between pb-4 border-b border-neutral-text-muted/10 mb-4">
        {testimonial.source === "google" ? (
          <div className="flex items-center gap-1">
            {/* Google G Logo SVG */}
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span className="font-heading font-black text-xs text-primary-navy">Google</span>
          </div>
        ) : (
          <div className="w-5 h-5 rounded-full bg-primary-blue/10 shrink-0" />
        )}
        <Rating value={testimonial.rating} />
      </div>

      {/* Quote text */}
      <p className="font-body text-sm text-neutral-text-dark/95 leading-relaxed mb-6 italic flex-grow">
        "{testimonial.quote}"
      </p>

      {/* Divider */}
      <div className="border-t border-neutral-text-muted/10 pt-4 mt-auto flex items-center gap-3">
        {/* Avatar Fallback */}
        <Avatar alt={testimonial.name} size="md" />
        <div className="flex flex-col">
          <span className="font-heading font-black text-sm text-primary-navy leading-none mb-1">
            {testimonial.name}
          </span>
          <span className="font-body text-xs text-neutral-text-muted leading-none">
            {testimonial.location}
          </span>
        </div>
      </div>
    </Card>
  );
}
