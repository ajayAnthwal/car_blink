"use client";

import Image from "next/image";
import { ShieldCheck, FileText, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import LiveQuotes from "@/features/quotes/components/LiveQuotes";
import HeroFeatureBadge from "./HeroFeatureBadge";

const HERO_FEATURES = [
  {
    icon: ShieldCheck,
    title: "Verified Workshops",
    subtitle: "Quality Assured",
  },
  {
    icon: FileText,
    title: "Transparent Pricing",
    subtitle: "No Hidden Charges",
  },
  {
    icon: CheckCircle,
    title: "Easy Online Booking",
    subtitle: "Instant Confirmation",
  },
];

export default function HeroSection() {
  return (
    <section className="relative bg-neutral-hero-bg text-neutral-text-dark overflow-hidden pt-12 pb-24 md:pt-20 md:pb-40">
      {/* Background Car Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero-car.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* Fade so the left-side text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-hero-bg via-neutral-hero-bg/85 to-neutral-hero-bg/30" />
      </div>

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column - Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left gap-6 md:gap-8">
          {/* Badge Tagline */}
          <Badge variant="info" className="bg-white border-primary-blue/20 text-primary-blue shadow-sm">
            <span className="flex items-center gap-2">
              <span className="font-bold">#1 Car Service Comparison Platform in India</span>
              <span className="flex -space-x-2">
                <div className="w-5 h-5 rounded-full bg-gray-200 border border-white" />
                <div className="w-5 h-5 rounded-full bg-gray-300 border border-white" />
                <div className="w-5 h-5 rounded-full bg-gray-400 border border-white" />
              </span>
              <span className="text-neutral-text-dark ml-1">120K+ Happy Customers</span>
            </span>
          </Badge>

          {/* Main Heading */}
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-neutral-text-dark leading-tight tracking-tight max-w-xl">
            Compare <span className="text-primary-blue">Car Service</span> Prices in Minutes
          </h1>

          {/* Subheading Description */}
          <p className="font-body text-base sm:text-lg text-neutral-text-muted leading-relaxed max-w-lg">
            Book the best car service near you at the most competitive prices — Save Time, Save Money.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              href="/quotes"
            >
              Get Free Quote
            </Button>
            <Button
              variant="white"
              size="lg"
              className="w-full sm:w-auto border border-neutral-text-muted/20"
              leftIcon={<div className="w-5 h-5 rounded-full border-2 border-primary-blue flex items-center justify-center pl-0.5"><div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-primary-blue border-b-4 border-b-transparent" /></div>}
              href="/how-it-works"
            >
              Watch How It Works
            </Button>
          </div>

          <div className="text-sm font-medium text-neutral-text-dark mt-2">
            Trusted by <span className="text-primary-blue font-bold">120,000+</span> car owners across India
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

        {/* Right Column - Quote Card & Visual */}
        <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0">

          {/* Main visual wrapper */}
          {/* <div className="relative w-full max-w-lg lg:max-w-md z-20">
            <div className="absolute -top-12 -right-12 hidden md:flex flex-col items-end rotate-12 z-30">
              <span className="font-heading font-medium italic text-neutral-text-dark text-sm mb-1 transform -rotate-12">Start here to compare prices!</span>
              <svg width="40" height="40" viewBox="0 0 60 60" fill="none" stroke="currentColor" className="text-neutral-text-dark" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 10 C 20 40, 40 50, 50 50" />
                <path d="M40 45 L 50 50 L 45 40" />
              </svg>
            </div>

            <LiveQuotes />
          </div> */}

          {/* Blue Car Image (Background for Quote Card) */}
          {/* <div className="absolute -left-32 -bottom-24 w-[140%] z-10 hidden lg:block opacity-90 pointer-events-none">
            <Image
              src="/images/homeheroimage.png"
              alt="Car Blink Hero Car"
              width={800}
              height={500}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div> */}
        </div>
      </Container>
    </section>
  );
}
