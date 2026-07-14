"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import PriceComparisonRow from "./PriceComparisonRow";

const CAR_OPTIONS = [
  { value: "honda-city", label: "Honda City" },
  { value: "maruti-swift", label: "Maruti Swift" },
  { value: "hyundai-creta", label: "Hyundai Creta" },
];

const SERVICE_OPTIONS = [
  { value: "periodic-service", label: "Periodic Service" },
  { value: "engine-repair", label: "Engine Repair" },
  { value: "dent-paint", label: "Dent & Paint" },
];

const LOCATION_OPTIONS = [
  { value: "mumbai", label: "Mumbai" },
  { value: "pune", label: "Pune" },
  { value: "bangalore", label: "Bangalore" },
];

// Mock database for savings calculation
const MOCK_SAVINGS_DB: Record<string, { market: string; best: string; save: string; percent: string }> = {
  "honda-city_periodic-service": { market: "₹7,299", best: "₹4,999", save: "₹2,300", percent: "35%" },
  "honda-city_engine-repair": { market: "₹18,500", best: "₹12,400", save: "₹6,100", percent: "33%" },
  "honda-city_dent-paint": { market: "₹9,800", best: "₹6,500", save: "₹3,300", percent: "34%" },
  "maruti-swift_periodic-service": { market: "₹4,500", best: "₹2,999", save: "₹1,501", percent: "33%" },
  "maruti-swift_engine-repair": { market: "₹12,000", best: "₹7,999", save: "₹4,001", percent: "33%" },
  "maruti-swift_dent-paint": { market: "₹6,500", best: "₹4,200", save: "₹2,300", percent: "35%" },
  "hyundai-creta_periodic-service": { market: "₹8,500", best: "₹5,800", save: "₹2,700", percent: "31%" },
  "hyundai-creta_engine-repair": { market: "₹22,000", best: "₹14,999", save: "₹7,001", percent: "32%" },
  "hyundai-creta_dent-paint": { market: "₹11,500", best: "₹7,800", save: "₹3,700", percent: "32%" },
};

export default function SavingsCalculator() {
  const [car, setCar] = useState("honda-city");
  const [service, setService] = useState("periodic-service");
  const [location, setLocation] = useState("mumbai");
  const [calcKey, setCalcKey] = useState("honda-city_periodic-service");

  const handleCalculate = () => {
    setCalcKey(`${car}_${service}`);
  };

  const savingsData = MOCK_SAVINGS_DB[calcKey] || MOCK_SAVINGS_DB["honda-city_periodic-service"];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="bg-primary-navy rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-secondary-blue/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-between gap-10">
            {/* Left Column - Form */}
            <div className="flex-1 flex flex-col gap-6 items-start">
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-left tracking-tight">
                See How Much <span className="text-success">You Can Save</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
                <Select
                  label="Select Your Car"
                  options={CAR_OPTIONS}
                  value={car}
                  onChange={(e) => setCar(e.target.value)}
                />
                <Select
                  label="Select Service"
                  options={SERVICE_OPTIONS}
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                />
                <Select
                  label="Your Location"
                  options={LOCATION_OPTIONS}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                
                {/* Button container */}
                <div className="flex items-end w-full mt-2 md:mt-0">
                  <Button
                    variant="primary"
                    fullWidth
                    onClick={handleCalculate}
                    className="py-3.5 rounded-xl font-heading font-bold text-sm bg-primary-orange hover:bg-primary-orange-dark text-white border-0"
                  >
                    Calculate Savings
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Results Display */}
            <div className="flex-1 flex flex-col justify-center items-center lg:items-end gap-3 text-right">
              {/* Reusable Price Comparison Row Component */}
              <PriceComparisonRow
                averageMarketPrice={savingsData.market}
                carblinkBestPrice={savingsData.best}
                savingsAmount={savingsData.save}
                savingsPercentage={savingsData.percent}
              />
              
              <span className="font-body text-xs text-neutral-text-muted mt-2 italic text-center lg:text-right w-full">
                *Prices are average estimates. Actual prices may vary.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
