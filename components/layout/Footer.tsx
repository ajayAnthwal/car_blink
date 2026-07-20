"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { Logo } from "./Navbar";
import {
  FOOTER_SERVICES_LINKS,
  FOOTER_WORKSHOPS_LINKS,
  FOOTER_COMPANY_LINKS,
  FOOTER_SUPPORT_LINKS,
} from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-navy text-white pt-16 pb-8 border-t border-primary-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 pb-12 border-b border-primary-navy-light">
          
          {/* Logo & Description */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2 flex flex-col gap-6">
            <Logo light />
            <p className="font-body text-sm leading-relaxed text-neutral-text-muted max-w-xs">
              India's leading car service comparison platform connecting car owners with verified workshops.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link href="#" className="w-9 h-9 rounded-full bg-primary-navy-light border border-primary-navy-light flex items-center justify-center hover:bg-primary-blue hover:border-primary-blue transition-all duration-200" aria-label="Facebook">
                <Facebook className="w-4 h-4 text-neutral-text-muted hover:text-white" />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-primary-navy-light border border-primary-navy-light flex items-center justify-center hover:bg-primary-blue hover:border-primary-blue transition-all duration-200" aria-label="Instagram">
                <Instagram className="w-4 h-4 text-neutral-text-muted hover:text-white" />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-primary-navy-light border border-primary-navy-light flex items-center justify-center hover:bg-primary-blue hover:border-primary-blue transition-all duration-200" aria-label="YouTube">
                <Youtube className="w-4 h-4 text-neutral-text-muted hover:text-white" />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-primary-navy-light border border-primary-navy-light flex items-center justify-center hover:bg-primary-blue hover:border-primary-blue transition-all duration-200" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-neutral-text-muted hover:text-white" />
              </Link>
            </div>
          </div>

          {/* Services Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-md text-white">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_SERVICES_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-body text-sm text-neutral-text-muted hover:text-white transition-colors duration-150">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Workshops Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-md text-white">For Workshops</h3>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_WORKSHOPS_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-body text-sm text-neutral-text-muted hover:text-white transition-colors duration-150">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-md text-white">Company</h3>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-body text-sm text-neutral-text-muted hover:text-white transition-colors duration-150">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links & Subscribe */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-md text-white">Support</h3>
            <ul className="flex flex-col gap-2.5 mb-2">
              {FOOTER_SUPPORT_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-body text-sm text-neutral-text-muted hover:text-white transition-colors duration-150">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="w-full lg:w-auto flex flex-col md:flex-row items-start md:items-center justify-between lg:justify-start gap-8 lg:gap-12 lg:col-span-6 w-full">
            {/* Newsletter Subscription Card in Footer (matching mockup visually) */}
            <div className="w-full bg-primary-navy-light border border-primary-navy-light rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex flex-col gap-1">
                <h4 className="font-heading font-bold text-lg text-white">Subscribe to Newsletter</h4>
                <p className="font-body text-sm text-neutral-text-muted">Get the latest tips and offers.</p>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full md:w-64 px-4 py-2.5 bg-primary-navy border border-primary-navy-light rounded-lg text-white placeholder-neutral-text-muted/40 focus:outline-none focus:border-primary-blue transition-colors text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 bg-primary-blue hover:bg-blue-600 transition-all font-heading font-bold text-sm text-white rounded-lg whitespace-nowrap shadow-md shadow-primary-blue/10"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-12 pt-8 border-t border-primary-navy-light text-center">
          <p className="font-body text-xs text-neutral-text-muted">
            &copy; {currentYear} Car Blink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
