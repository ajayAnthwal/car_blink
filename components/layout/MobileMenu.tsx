"use client";

import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { Logo } from "./Navbar";
import { MAIN_NAV_LINKS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-primary-navy/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white p-6 shadow-xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-neutral-text-muted/15">
            {/* Logo */}
            <div className="flex items-center gap-2" onClick={onClose}>
              <Logo />
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-neutral-text-muted hover:text-primary-navy hover:bg-neutral-bg rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-2">
            {MAIN_NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={onClose}
                className="font-heading font-medium text-lg text-neutral-text-dark hover:text-primary-orange transition-colors py-3 block w-full border-b border-neutral-text-muted/5 last:border-b-0"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 mt-auto pt-6 border-t border-neutral-text-muted/15">
          <Link 
            href="/login"
            onClick={onClose}
            className="flex items-center justify-center px-6 py-3 font-heading font-semibold text-primary-navy border-2 border-primary-navy rounded-full hover:bg-neutral-bg transition-all text-center"
          >
            Login
          </Link>
          <Link 
            href="/pricing"
            onClick={onClose}
            className="flex items-center justify-center gap-2 px-6 py-3 font-heading font-semibold text-white bg-primary-orange rounded-full hover:bg-primary-orange-dark transition-all text-center shadow-lg shadow-primary-orange/20"
          >
            Compare Prices
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

