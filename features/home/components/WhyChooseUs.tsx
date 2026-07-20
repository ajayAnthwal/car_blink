"use client";

import React from "react";
import { ShieldCheck, MapPin, Zap, Clock, ThumbsUp, Wrench } from "lucide-react";
import Container from "@/components/ui/Container";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-neutral-bg overflow-hidden relative">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-3xl md:text-5xl text-neutral-text-dark tracking-tight mb-4">
            Why Choose <span className="text-primary-blue">Car Blink</span>?
          </h2>
          <p className="font-body text-neutral-text-muted text-lg">
            We're transforming how India maintains its cars. Transparent, fast, and highly reliable.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          
          {/* Large Hero Feature (Spans 2 cols, 2 rows) */}
          <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-navy to-primary-blue-dark p-8 shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-primary-blue/40 transition-colors duration-700" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-6">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-black text-3xl text-white mb-3">100% Verified Workshops</h3>
                <p className="font-body text-white/70 text-lg max-w-sm leading-relaxed">
                  Every garage on our platform undergoes a strict 50-point quality check to ensure your car is in the best hands.
                </p>
              </div>
            </div>
          </div>

          {/* Medium Feature (Spans 2 cols, 1 row) */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm border border-neutral-text-muted/10 hover:shadow-xl hover:shadow-primary-blue/5 transition-all duration-500 hover:-translate-y-1">
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-accent-orange/10 flex items-center justify-center border border-accent-orange/20">
                  <Zap className="w-6 h-6 text-accent-orange" />
                </div>
                <h3 className="font-heading font-black text-xl text-neutral-text-dark">Instant Quotes</h3>
              </div>
              <p className="font-body text-neutral-text-muted leading-relaxed">
                Compare real-time prices from multiple garages in under 30 seconds. No more calling around for estimates.
              </p>
            </div>
          </div>

          {/* Small Feature (Spans 1 col, 1 row) */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-blue-light/10 to-transparent p-6 shadow-sm border border-primary-blue/10 hover:border-primary-blue/30 transition-all duration-500 hover:-translate-y-1">
            <div className="relative z-10 h-full flex flex-col justify-center text-center items-center">
              <MapPin className="w-8 h-8 text-primary-blue mb-4 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-heading font-black text-lg text-neutral-text-dark mb-2">Local & Reliable</h3>
              <p className="font-body text-neutral-text-muted text-sm">Find top-rated mechanics right in your neighborhood.</p>
            </div>
          </div>

          {/* Small Feature (Spans 1 col, 1 row) */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-sm border border-neutral-text-muted/10 hover:shadow-xl hover:shadow-primary-blue/5 transition-all duration-500 hover:-translate-y-1">
            <div className="relative z-10 h-full flex flex-col justify-center text-center items-center">
              <Clock className="w-8 h-8 text-neutral-text-dark mb-4 group-hover:-rotate-12 transition-transform duration-500" />
              <h3 className="font-heading font-black text-lg text-neutral-text-dark mb-2">Time Saving</h3>
              <p className="font-body text-neutral-text-muted text-sm">Book online instantly and skip the waiting queues.</p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
