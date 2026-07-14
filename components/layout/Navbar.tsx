"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { MAIN_NAV_LINKS } from "@/lib/constants";


export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary-blue shadow-md shadow-secondary-blue/10 group-hover:scale-105 transition-transform duration-200">
        <span className="text-white font-heading font-black text-sm tracking-tighter">CB</span>
      </div>
      <span className={`font-heading font-bold text-lg sm:text-xl tracking-tight transition-colors duration-150 ${
        light ? "text-white" : "text-primary-navy"
      }`}>
        Car<span>Blink</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white border-b border-neutral-text-muted/10 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {MAIN_NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-heading font-semibold text-sm text-neutral-text-muted hover:text-primary-navy transition-colors duration-150"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="px-6 py-2.5 font-heading font-bold text-sm text-primary-navy border border-primary-navy/20 rounded-full hover:bg-neutral-bg hover:border-primary-navy/80 transition-all duration-200 text-center"
            >
              Login
            </Link>
            <Link
              href="/pricing"
              className="flex items-center gap-2 px-6 py-2.5 font-heading font-bold text-sm text-white bg-primary-orange rounded-full hover:bg-primary-orange-dark hover:shadow-lg hover:shadow-primary-orange/20 transition-all duration-200 text-center"
            >
              Compare Prices
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburguer Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 md:hidden text-neutral-text-muted hover:text-primary-navy hover:bg-neutral-bg rounded-lg transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}

