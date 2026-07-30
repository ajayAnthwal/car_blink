"use client";

import Link from "next/link";
import { ArrowLeft, Home, Search, Clock } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { Logo } from "@/components/layout/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-bg font-body text-neutral-text-dark flex flex-col items-center justify-center relative overflow-hidden">
      {/* ---------------- BACKGROUND GRADIENTS ---------------- */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary-blue/5 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-20 h-64 w-64 rounded-full bg-accent-orange/5 blur-3xl" />

      <Container className="relative z-10 flex flex-col items-center text-center px-4">
        {/* LOGO */}
        <div className="mb-12">
          <Logo />
        </div>

        {/* COMING SOON ICON & TEXT */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-primary-blue/10 rounded-full">
            <Clock className="w-16 h-16 text-primary-blue" />
          </div>
        </div>
        
        <h1 className="font-heading font-black text-5xl md:text-7xl leading-tight tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-accent-orange select-none">
          Coming Soon
        </h1>

        {/* CONTENT */}
        <h2 className="mt-4 font-heading font-bold text-xl sm:text-2xl text-neutral-text-dark">
          We're working on something awesome!
        </h2>
        
        <p className="mt-4 font-body text-base sm:text-lg text-neutral-text-muted max-w-md mx-auto leading-relaxed">
          The page you are looking for is currently under construction. Stay tuned, it will be live very soon.
        </p>

        {/* ACTIONS */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Button
            href="/"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto min-w-[160px]"
            leftIcon={<Home className="w-5 h-5" />}
          >
            Back to Home
          </Button>
        </div>

        {/* HELP TEXT */}
        <p className="mt-12 text-sm text-neutral-text-muted/60">
          Need help? <Link href="/contact" className="text-primary-blue hover:underline">Contact Support</Link>
        </p>
      </Container>
    </div>
  );
}
