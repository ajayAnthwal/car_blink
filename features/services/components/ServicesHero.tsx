import React from "react";
import { Search, Star, MapPin, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function ServicesHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-navy via-[#0A1A3A] to-primary-blue-dark py-20 md:py-32 overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-blue/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-orange/10 rounded-full blur-[100px] mix-blend-screen opacity-50" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          <Badge variant="info" className="bg-white/10 backdrop-blur-md border-white/20 text-accent-orange shadow-sm mb-6">
            <span className="font-semibold tracking-wide flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Complete Car Care, One Platform
            </span>
          </Badge>

          <h1 className="font-heading font-black text-4xl md:text-6xl text-white leading-[1.1] mb-6 tracking-tight">
            All Car Services,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-primary-blue-light">
              Compared & Verified
            </span>
          </h1>

          <p className="font-body text-white/70 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl">
            From periodic servicing to major repairs — find verified workshops near you, 
            compare real prices instantly, and book the best deal in minutes.
          </p>

          {/* Elevated Search Bar */}
          <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-2xl shadow-primary-blue/20 flex flex-col sm:flex-row gap-2 transition-transform duration-300 hover:scale-[1.02]">
            <div className="flex items-center gap-3 flex-1 px-4 py-2 sm:py-0">
              <Search className="w-6 h-6 text-white/50 shrink-0" />
              <input
                type="text"
                placeholder="Search a service e.g. Brake Service, AC Repair..."
                className="w-full font-body text-base text-white placeholder:text-white/50 focus:outline-none bg-transparent"
              />
            </div>
            <Button variant="accent" size="lg" className="shrink-0 w-full sm:w-auto font-bold px-8 shadow-lg shadow-accent-orange/20">
              Search
            </Button>
          </div>

          {/* Trust Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-10 font-body text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span className="font-medium">2,500+ Verified Workshops</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary-blue-light" />
              <span className="font-medium">25+ Cities in India</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-accent-orange text-accent-orange" />
              <span className="font-medium">4.8/5 Customer Rating</span>
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
