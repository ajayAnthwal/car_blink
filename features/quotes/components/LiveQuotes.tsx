"use client";

import React, { useState } from "react";
import { Car, Settings, Calendar, MapPin, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";

export default function LiveQuotes() {
  const [activeTab, setActiveTab] = useState<"car" | "service">("car");

  return (
    <Card className="flex-1 bg-white border-0 shadow-2xl rounded-3xl p-6 sm:p-8 w-full max-w-md mx-auto relative z-20">
      <h3 className="font-heading font-black text-xl sm:text-2xl text-center text-neutral-text-dark mb-6">
        Get Car Service Quote
      </h3>

      {/* Tabs */}
      <div className="flex bg-neutral-hero-bg rounded-full p-1 mb-6">
        <button
          onClick={() => setActiveTab("car")}
          className={`flex-1 py-2 px-4 rounded-full font-heading font-bold text-sm sm:text-base transition-colors ${
            activeTab === "car"
              ? "bg-primary-blue text-white shadow-md"
              : "text-neutral-text-muted hover:text-primary-blue"
          }`}
        >
          Car Details
        </button>
        <button
          onClick={() => setActiveTab("service")}
          className={`flex-1 py-2 px-4 rounded-full font-heading font-bold text-sm sm:text-base transition-colors ${
            activeTab === "service"
              ? "bg-primary-blue text-white shadow-md"
              : "text-neutral-text-muted hover:text-primary-blue"
          }`}
        >
          Service Type
        </button>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-text-muted z-10 pointer-events-none">
            <Car className="w-5 h-5" />
          </div>
          <Select
            className="pl-12 bg-white border-neutral-text-muted/20"
            options={[
              { value: "", label: "Select Make" },
              { value: "bmw", label: "BMW" },
              { value: "mercedes", label: "Mercedes" },
              { value: "audi", label: "Audi" },
            ]}
          />
        </div>
        
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-text-muted z-10 pointer-events-none">
            <Settings className="w-5 h-5" />
          </div>
          <Select
            className="pl-12 bg-white border-neutral-text-muted/20"
            options={[
              { value: "", label: "Select Model" },
              { value: "5-series", label: "5 Series" },
              { value: "c-class", label: "C-Class" },
            ]}
          />
        </div>

        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-text-muted z-10 pointer-events-none">
            <Calendar className="w-5 h-5" />
          </div>
          <Select
            className="pl-12 bg-white border-neutral-text-muted/20"
            options={[
              { value: "", label: "Select Year" },
              { value: "2023", label: "2023" },
              { value: "2022", label: "2022" },
            ]}
          />
        </div>

        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-text-muted z-10 pointer-events-none">
            <MapPin className="w-5 h-5" />
          </div>
          <Select
            className="pl-12 bg-white border-neutral-text-muted/20"
            options={[
              { value: "", label: "Location" },
              { value: "dubai", label: "Dubai, UAE" },
              { value: "abudhabi", label: "Abu Dhabi, UAE" },
            ]}
          />
        </div>
      </div>

      <Button
        variant="accent"
        size="lg"
        fullWidth
        rightIcon={<ArrowRight className="w-5 h-5" />}
      >
        Compare Prices
      </Button>
      
      <p className="text-center font-body text-xs text-neutral-text-muted mt-4">
        It's free & no hidden charges
      </p>
    </Card>
  );
}
