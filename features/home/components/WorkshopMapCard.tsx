import React from "react";
import { MapPin, Star } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { MAP_PIN_POSITIONS } from "../data/serviceRatesList";

export default function WorkshopMapCard() {
  return (
    <Card className="relative bg-primary-blue/5 border border-neutral-text-muted/15 rounded-2xl p-0 overflow-hidden w-full h-full min-h-[280px]">
      {/* Stylized map background grid */}
      <div className="absolute inset-0 bg-neutral-hero-bg">
        <svg className="absolute inset-0 w-full h-full opacity-40" preserveAspectRatio="none">
          <defs>
            <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2563EB" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#map-grid)" />
        </svg>
        {/* Winding "road" lines for visual texture */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
          <path d="M0 80 C 100 60, 180 140, 280 100 S 400 60, 400 60" stroke="#2563EB" strokeOpacity="0.15" strokeWidth="6" fill="none" />
          <path d="M0 220 C 120 240, 220 180, 320 220 S 400 260, 400 260" stroke="#2563EB" strokeOpacity="0.15" strokeWidth="6" fill="none" />
        </svg>
      </div>

      {/* Map pin markers */}
      {MAP_PIN_POSITIONS.map((pos, idx) => (
        <div
          key={idx}
          className={`absolute -translate-x-1/2 -translate-y-full ${
            idx === 0 ? "z-20" : "z-10"
          }`}
          style={{ top: pos.top, left: pos.left }}
        >
          <div
            className={`flex items-center justify-center w-9 h-9 rounded-full shadow-lg ${
              idx === 0 ? "bg-accent-orange" : "bg-primary-blue"
            }`}
          >
            <MapPin className="w-5 h-5 text-white" fill="white" strokeWidth={0} />
          </div>
        </div>
      ))}

      {/* Expanded info popup for the first pin */}
      <div className="absolute top-4 right-4 z-30 w-56">
        <div className="bg-white rounded-xl shadow-xl border border-neutral-text-muted/10 p-4 flex flex-col gap-1.5">
          <span className="font-heading font-bold text-sm text-neutral-text-dark leading-tight">
            Elite Auto Service
          </span>
          <span className="font-body text-xs text-neutral-text-muted">Gurugram, Delhi NCR</span>
          <span className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-warning fill-warning" />
            <span className="font-body text-xs font-medium text-neutral-text-dark">4.8 (1.2K Reviews)</span>
          </span>
          <span className="font-heading font-bold text-sm text-success mt-1">From ₹4,500</span>
          <Button variant="primary" size="sm" fullWidth className="mt-2 rounded-lg">
            View Profile
          </Button>
        </div>
      </div>
    </Card>
  );
}
