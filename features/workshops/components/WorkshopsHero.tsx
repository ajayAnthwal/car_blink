import React from "react";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const STATS = [
  { value: "2,500+", label: "Verified Workshops" },
  { value: "120K+", label: "Bookings Delivered" },
  { value: "25+", label: "Cities Covered" },
  { value: "4.8/5", label: "Average Partner Rating" },
];

export default function WorkshopsHero() {
  return (
    <section className="relative overflow-hidden bg-primary-navy">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-orange/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary-blue/20 blur-3xl" />

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* Left copy */}
          <div>
            <Badge variant="info" className="bg-white/5 text-accent-orange border border-white/10 shadow-none">
              Built for Workshop Owners
            </Badge>

            <h1 className="mt-5 font-heading font-black text-4xl leading-[1.1] text-white sm:text-5xl tracking-tight">
              Fill Every Bay.
              <br />
              <span className="text-accent-orange">Grow Every Month.</span>
            </h1>

            <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-white/70 sm:text-lg">
              Join 2,500+ verified workshops getting a steady stream of
              genuine service requests from car owners near you — with
              zero setup cost and payouts you can count on.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/register" variant="accent" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Become a Partner
              </Button>
              <Button
                href="https://car-blink-dashboard.vercel.app/login"
                variant="ghost"
                size="lg"
                className="bg-white/5 text-white hover:bg-white/10 hover:text-white border border-white/15"
              >
                Partner Login
              </Button>
            </div>

            <p className="mt-4 font-body text-xs text-white/50">
              No credit card required · Verification in 2–3 business days
            </p>
          </div>

          {/* Right stat card */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
              <div className="grid grid-cols-2 gap-6">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p className="font-heading font-black text-2xl text-white sm:text-3xl">
                      {s.value}
                    </p>
                    <p className="mt-1 font-body text-xs text-white/50 sm:text-sm">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5">
                <div className="flex -space-x-2">
                  {["RM", "SS", "AN", "PK"].map((i) => (
                    <span
                      key={i}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary-navy bg-accent-orange font-heading text-[10px] font-bold text-white"
                    >
                      {i}
                    </span>
                  ))}
                </div>
                <p className="font-body text-xs text-white/70">
                  Joined by workshop owners across 25+ cities
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
