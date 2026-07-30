"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowRight } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { MAIN_NAV_LINKS } from "@/lib/constants";
import { useAuth } from "@/features/auth/hooks/useAuth";


export function Logo() {
  return (
    <Link href="/" className="flex items-center group">
      <Image
        src="/logo.png"
        alt="Car Blink — One Platform For Every Car Service"
        width={219}
        height={67}
        priority
        className="h-10 sm:h-12 w-auto transition-transform duration-200 group-hover:scale-105"
      />
    </Link>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

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
                className="font-heading font-semibold text-sm text-neutral-text-dark hover:text-primary-blue-dark transition-colors duration-150"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2 font-heading font-semibold text-sm text-neutral-text-dark border border-neutral-text-muted/30 rounded-full hover:bg-neutral-bg hover:border-primary-blue transition-all duration-200">
                  <div className="w-6 h-6 rounded-full bg-primary-blue/10 text-primary-blue flex items-center justify-center font-bold text-xs">
                    {user?.fullName?.charAt(0)?.toUpperCase() || 'U'}
                  </div>
                  <span>{user?.fullName?.split(' ')[0] || 'Profile'}</span>
                </button>
                
                <div className="absolute right-0 mt-2 w-48 bg-white border border-neutral-text-muted/15 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden translate-y-2 group-hover:translate-y-0">
                  <div className="p-3 border-b border-neutral-text-muted/10">
                    <p className="text-sm font-semibold text-neutral-text-dark truncate">{user?.fullName || 'User'}</p>
                    <p className="text-xs text-neutral-text-muted truncate">{user?.email || user?.phone || 'Logged in'}</p>
                  </div>
                  <div className="p-2">
                    <Link
                      href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/customer/dashboard`}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-text-dark hover:bg-neutral-bg hover:text-primary-blue rounded-lg transition-colors"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={logout}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm text-danger hover:bg-danger/5 rounded-lg transition-colors text-left mt-1"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                className="px-5 py-2 font-heading font-semibold text-sm text-neutral-text-dark border border-neutral-text-muted/30 rounded-full hover:bg-neutral-bg hover:border-primary-blue hover:text-primary-blue transition-all duration-200 text-center"
              >
                Login / Sign Up
              </Link>
            )}
            <Link
              href="/quotes"
              className="flex items-center gap-2 px-6 py-2.5 font-heading font-bold text-sm text-white bg-primary-blue rounded-full hover:bg-primary-blue-dark hover:shadow-lg hover:shadow-primary-blue/20 transition-all duration-200 text-center"
            >
              Get Free Quote
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

// let a :string ="ajay";

