"use client";

import React, { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import { ChevronLeft, ChevronRight, Sparkles, ExternalLink, Tag } from "lucide-react";

export default function PromotionalAdsBanner({ placement = "HOME_HERO" }: { placement?: string }) {
  const [ads, setAds] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchAds() {
      const apiBase = (process.env.NEXT_PUBLIC_API_URL || "https://api.carblink.in/api").replace(/\/+$/, "");
      const urlsToTry = [
        `${apiBase}/master-data/ads?placement=${placement}`,
        `${apiBase}/ads?placement=${placement}`,
        `${apiBase}/master-data/ads`,
        `${apiBase}/ads`,
        `http://localhost:8000/api/master-data/ads`,
      ];

      for (const url of urlsToTry) {
        try {
          const res = await fetch(url);
          if (res.ok) {
            const data = await res.json();
            const payload = data?.data || data;
            const list = Array.isArray(payload) ? payload : (Array.isArray(payload?.docs) ? payload.docs : []);
            if (list.length > 0) {
              setAds(list);
              setLoading(false);
              return;
            }
          }
        } catch (err) {
          // Continue to next fallback URL
        }
      }
      setLoading(false);
    }
    fetchAds();
  }, [placement]);

  useEffect(() => {
    if (!ads || ads.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ads.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [ads]);

  if (loading || !ads || ads.length === 0) {
    return null;
  }

  const currentAd = ads[currentIndex];

  // Helper to format redirect URL safely without causing 404s
  const getSafeRedirectUrl = (url?: string) => {
    if (!url || url.trim() === "" || url.trim() === "#") {
      return "/quotes";
    }
    const trimmed = url.trim();
    if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
      return trimmed;
    }
    if (trimmed.startsWith("/")) {
      return trimmed;
    }
    return `/${trimmed}`;
  };

  const targetLink = getSafeRedirectUrl(currentAd.redirectUrl || currentAd.targetUrl);
  const isExternal = targetLink.startsWith("http://") || targetLink.startsWith("https://");

  return (
    <section className="py-12 bg-slate-900 text-white relative overflow-hidden my-6 border-y border-slate-800">
      <Container>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/20 border border-orange-500/30 text-orange-400 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-orange-400">
                Exclusive Deals & Offers
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                Live Promotional Campaigns
              </h2>
            </div>
          </div>

          {ads.length > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + ads.length) % ads.length)}
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors border border-slate-700 cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % ads.length)}
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors border border-slate-700 cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-950 shadow-2xl border border-slate-800/80 min-h-[300px] sm:min-h-[360px] md:min-h-[400px] flex items-center group">
          <div className="absolute inset-0 z-0">
            <img
              src={currentAd.imageUrl}
              alt={currentAd.title}
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 brightness-90"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1000&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-2xl text-white space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-black uppercase tracking-wider backdrop-blur-md">
              <Tag className="w-3.5 h-3.5 text-orange-400" /> Special Website Offer
            </div>

            <h3 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-[1.1] drop-shadow-md">
              {currentAd.title}
            </h3>

            {currentAd.subtitle && (
              <p className="font-body text-slate-300 text-base sm:text-lg font-medium leading-relaxed line-clamp-2">
                {currentAd.subtitle}
              </p>
            )}

            <div className="pt-2">
              <a
                href={targetLink}
                target={isExternal ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm transition-all shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5"
              >
                Explore Offer Now <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {ads.length > 1 && (
            <div className="absolute bottom-6 right-8 z-20 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-800">
              {ads.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? "w-8 bg-orange-500" : "w-2.5 bg-slate-600 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
