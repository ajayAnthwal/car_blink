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
            <Logo />
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
