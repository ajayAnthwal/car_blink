import React from "react";
import { Zap, ShieldCheck, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Image from "next/image";

export default function HowItWorksPageHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-navy via-[#0A1A3A] to-primary-blue-dark py-24 md:py-32 overflow-hidden">
      
      {/* Background Graphic Patterns */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 L100,0 L100,100 Z" fill="url(#gradient)" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6 max-w-xl">
          <Badge variant="info" className="bg-white/10 backdrop-blur-md border-white/20 text-white shadow-sm">
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-accent-orange" />
              <span className="font-semibold tracking-wide">Simple. Transparent. Fast.</span>
            </span>
          </Badge>

          <h1 className="font-heading font-black text-5xl sm:text-6xl text-white tracking-tight leading-[1.1]">
            How <span className="text-primary-blue-light">Car Blink</span> Works
          </h1>

          <p className="font-body text-white/70 text-lg sm:text-xl leading-relaxed">
            From request to road-ready — see exactly how we help you compare
            car service prices and book the best deal in four simple steps.
          </p>

          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-success" />
              <span className="text-white/90 font-medium text-sm">Verified Workshops</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent-orange" />
              <span className="text-white/90 font-medium text-sm">Top Rated Service</span>
            </div>
          </div>
        </div>

        {/* Right Floating Mockup */}
        <div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[4/5] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            {/* Mockup Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-blue/20 flex items-center justify-center">
                  <span className="text-white font-bold">CB</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">New Request</span>
                  <span className="text-white/50 text-xs">Toyota Camry 2023</span>
                </div>
              </div>
              <Badge variant="success" className="bg-success/20 text-success border-0">Matched</Badge>
            </div>
            
            {/* Mock Quotes */}
            <div className="flex flex-col gap-3 mt-2">
              {[
                { name: "Elite Auto Service", price: "₹4,500", rating: "4.9" },
                { name: "Pro Car Care", price: "₹5,200", rating: "4.7" }
              ].map((q, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4 flex items-center justify-between border border-white/5">
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm">{q.name}</span>
                    <span className="text-accent-orange text-xs flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 fill-accent-orange" /> {q.rating}
                    </span>
                  </div>
                  <span className="text-white font-black">{q.price}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-auto">
              <button className="w-full py-3 rounded-xl bg-primary-blue hover:bg-primary-blue-dark text-white font-bold transition-colors shadow-lg shadow-primary-blue/30">
                Book Best Quote
              </button>
            </div>
          </div>
          
          {/* Decorative floating elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-orange/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary-blue/30 rounded-full blur-2xl" />
        </div>
      </Container>
    </section>
  );
}
