"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { X } from "lucide-react";

const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (location: string, lat: number, lng: number) => void;
}

export default function LocationModal({ isOpen, onClose, onConfirm }: LocationModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-text-dark shadow-xl hover:bg-neutral-bg z-[10000] border border-neutral-text-muted/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <MapComponent 
          onClose={onClose} 
          onConfirm={(loc, lat, lng) => {
            onConfirm(loc, lat, lng);
            onClose();
          }} 
        />
      </div>
    </div>
  );
}
