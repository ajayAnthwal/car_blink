"use client";

import Image from "next/image";
import { ShieldCheck, FileText, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import HeroFeatureBadge from "./HeroFeatureBadge";

interface QuoteCardData {
  id: string;
  name: string;
  price: string;
  logoLetter: string;
  logoBg: string;
}

const HERO_FEATURES = [
  {
    icon: ShieldCheck,
    title: "100% Free",
    subtitle: "No Hidden Charges",
  },
  {
    icon: FileText,
    title: "Multiple Quotes",
    subtitle: "Best Price Guarantee",
  },
  {
    icon: CheckCircle,
    title: "Verified Workshops",
    subtitle: "Quality Assured",
  },
];

const LIVE_QUOTES: QuoteCardData[] = [
  {
    id: "1",
    name: "Star Auto Care",
    price: "₹4,999",
    logoLetter: "S",
    logoBg: "bg-primary-orange",
  },
  {
    id: "2",
    name: "QuickFix Garage",
    price: "₹5,800",
    logoLetter: "Q",
    logoBg: "bg-secondary-blue",
  },
  {
    id: "3",
    name: "Auto Hub",
    price: "₹5,250",
    logoLetter: "A",
    logoBg: "bg-success",
  },
];

export default function HeroSection() {
  return (
    <section className="relative bg-primary-navy text-white overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
      {/* Background Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column - Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left gap-6 md:gap-8">
          {/* Badge Tagline */}
          <Badge variant="default" dot className="bg-primary-navy-light border-primary-navy-light">
            <span className="text-white">India's Smartest Car Service Comparison Platform</span>
          </Badge>

          {/* Main Heading */}
          <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white leading-tight tracking-tight max-w-xl">
            Compare Car Service Prices in Minutes
          </h1>

          {/* Subheading Description */}
          <p className="font-body text-base sm:text-lg text-neutral-text-muted leading-relaxed max-w-lg">
            Get multiple quotes from verified workshops and choose the best deal that saves your time and money.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Compare Prices Now
            </Button>
            <Button
              variant="white"
              size="lg"
              className="w-full sm:w-auto"
            >
              Become a Partner
            </Button>
          </div>

          {/* Hero Feature Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-neutral-text-muted/20 w-full">
            {HERO_FEATURES.map((feature, idx) => (
              <HeroFeatureBadge
                key={idx}
                icon={feature.icon}
                title={feature.title}
                subtitle={feature.subtitle}
              />
            ))}
          </div>
        </div>

        {/* Right Column - Visual mockup / Car + Smartphone */}
        <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
          {/* Main visual wrapper */}
          <div className="relative w-full max-w-lg md:max-w-xl h-80 sm:h-96 lg:h-auto lg:aspect-video flex items-center justify-center">
            
            {/* Map Pin background decoration */}
            <div className="absolute top-10 right-24 sm:right-28 w-12 h-12 rounded-full bg-secondary-blue/20 flex items-center justify-center border border-secondary-blue/30 animate-pulse">
              <MapPin className="w-6 h-6 text-secondary-blue" />
            </div>

            {/* Blue Car Image */}
            <div className="absolute left-0 bottom-4 w-4/5 z-20 hover:scale-102 transition-transform duration-300">
              <Image
                src="/images/homeheroimage.png"
                alt="Carblink Hero Car"
                width={600}
                height={400}
                className="object-contain"
                priority
              />
            </div>

            {/* Smartphone Mockup */}
            <div className="absolute right-0 top-0 w-64 bg-primary-navy-light rounded-3xl p-2 border-4 border-primary-navy-light/60 shadow-2xl z-30 transform scale-75 sm:scale-90 lg:scale-100 origin-top-right transition-transform duration-300">
              <div className="relative w-full bg-primary-navy rounded-2xl overflow-hidden p-4 flex flex-col gap-4 text-left">
                {/* Live Quotes App Header */}
                <div className="flex items-center justify-between pb-2 border-b border-neutral-text-muted/15">
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-xs text-white">Live Quotes</span>
                    <span className="font-body text-xs text-neutral-text-muted">Real-time updates</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-success/10 px-2 py-0.5 rounded-full border border-success/20">
                    <span className="w-1.5 h-1.5 bg-success rounded-full animate-ping" />
                    <span className="text-xs font-heading font-semibold text-success">Live</span>
                  </div>
                </div>

                {/* Floating quotes cards inside app list */}
                <div className="flex flex-col gap-2.5">
                  {LIVE_QUOTES.map((quote) => (
                    <div
                      key={quote.id}
                      className="bg-primary-navy-light border border-neutral-text-muted/15 rounded-xl p-2 flex items-center justify-between gap-3 shadow-sm hover:border-primary-navy-light/50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-full ${quote.logoBg} flex items-center justify-center shrink-0`}>
                          <span className="text-white font-heading font-bold text-xs">{quote.logoLetter}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-heading font-bold text-xs text-white leading-none mb-1">
                            {quote.name}
                          </span>
                          <span className="font-body text-xs text-neutral-text-muted leading-none">
                            Verified Partner
                          </span>
                        </div>
                      </div>
                      <span className="font-heading font-bold text-xs text-neutral-text-muted">
                        {quote.price}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Best Price Chat Bubble Card inside app */}
                <div className="bg-success rounded-2xl p-3 flex flex-col gap-1 shadow-md shadow-success/20 mt-2">
                  <span className="font-heading font-bold text-xs text-primary-navy uppercase tracking-wider leading-none">
                    Best Price
                  </span>
                  <div className="flex items-end justify-between">
                    <span className="font-heading font-black text-lg text-primary-navy leading-none">
                      ₹4,999
                    </span>
                    <span className="bg-white/20 text-primary-navy font-heading font-bold text-xs px-2 py-0.5 rounded-full">
                      Save ₹2,300
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkmark badge decoration floating on the side */}
            <div className="absolute right-48 sm:right-56 lg:right-64 bottom-10 bg-secondary-blue/90 w-10 h-10 rounded-full flex items-center justify-center border border-white/10 shadow-lg shadow-secondary-blue/30 z-30 animate-bounce">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
