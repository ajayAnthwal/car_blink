"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
  ChevronRight, 
  Car, 
  Settings, 
  User, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Star,
  MapPin
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const MAKES = ["Toyota", "BMW", "Mercedes", "Audi", "Nissan", "Honda"];
const MODELS = ["Sedan", "SUV", "Hatchback", "Coupe", "Luxury"];

const ALL_SERVICES = [
  { name: "Periodic Service", price: "₹2,499" },
  { name: "Engine Repair", price: "₹4,999" },
  { name: "Dent & Paint", price: "₹5,499" },
  { name: "Car Wash", price: "₹499" },
  { name: "Detailing", price: "₹2,999" },
  { name: "PPF (Paint Protection Film)", price: "₹25,999" },
  { name: "Ceramic Coating", price: "₹14,999" },
  { name: "Tyres", price: "₹5,499" },
  { name: "Battery", price: "₹6,499" },
  { name: "AC Repair", price: "₹1,499" },
  { name: "Suspension", price: "₹3,999" },
  { name: "Insurance Claims", price: "Free assistance" },
  { name: "Clutch Repair", price: "₹5,999" },
  { name: "Brake Service", price: "₹1,299" },
];

function QuotesForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    services: [] as string[],
    name: "",
    phone: "",
  });

  const [availableServices, setAvailableServices] = useState(ALL_SERVICES.map(s => s.name));

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setFormData(prev => ({ ...prev, services: [serviceParam] }));
      
      if (!availableServices.includes(serviceParam)) {
        setAvailableServices(prev => [serviceParam, ...prev]);
      }
    }
  }, [searchParams]);

  const toggleService = (serviceName: string) => {
    setFormData((prev) => {
      const isSelected = prev.services.includes(serviceName);
      if (isSelected) {
        return { ...prev, services: prev.services.filter(s => s !== serviceName) };
      } else {
        return { ...prev, services: [...prev.services, serviceName] };
      }
    });
  };

  const calculateTotalQuote = () => {
    if (formData.services.length === 0) return "---";
    let total = 0;
    let hasFree = false;
    formData.services.forEach(serviceName => {
      const service = ALL_SERVICES.find(s => s.name === serviceName);
      if (service) {
        if (service.price.toLowerCase().includes("free")) {
          hasFree = true;
        } else {
          const num = parseInt(service.price.replace(/[^0-9]/g, ""));
          if (!isNaN(num)) total += num;
        }
      }
    });
    if (total === 0 && hasFree) return "Free";
    return total > 0 ? `₹${total.toLocaleString()}` : "---";
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const updateForm = (key: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-heading font-black text-2xl text-neutral-text-dark mb-2">Select Your Car Make</h2>
            <p className="font-body text-neutral-text-muted mb-6">Choose your vehicle manufacturer to get accurate quotes.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {MAKES.map((make) => (
                <button
                  key={make}
                  onClick={() => updateForm("make", make)}
                  className={`flex flex-col items-center gap-3 p-4 rounded-2xl border-2 transition-all ${
                    formData.make === make
                      ? "border-primary-blue bg-primary-blue/5 text-primary-blue"
                      : "border-neutral-text-muted/10 bg-white text-neutral-text-dark hover:border-primary-blue/30 hover:bg-neutral-bg"
                  }`}
                >
                  <Car className="w-8 h-8 opacity-80" />
                  <span className="font-heading font-bold text-sm">{make}</span>
                </button>
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <Button onClick={nextStep} disabled={!formData.make} rightIcon={<ArrowRight className="w-4 h-4" />}>
                Continue
              </Button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-heading font-black text-2xl text-neutral-text-dark mb-2">Select Car Model</h2>
            <p className="font-body text-neutral-text-muted mb-6">What type of {formData.make} do you drive?</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {MODELS.map((model) => (
                <button
                  key={model}
                  onClick={() => updateForm("model", model)}
                  className={`flex flex-col items-center gap-3 p-4 rounded-2xl border-2 transition-all ${
                    formData.model === model
                      ? "border-primary-blue bg-primary-blue/5 text-primary-blue"
                      : "border-neutral-text-muted/10 bg-white text-neutral-text-dark hover:border-primary-blue/30 hover:bg-neutral-bg"
                  }`}
                >
                  <span className="font-heading font-bold text-sm">{model}</span>
                </button>
              ))}
            </div>
            <div className="mt-8 flex justify-between">
              <Button variant="ghost" onClick={prevStep}>Back</Button>
              <Button onClick={nextStep} disabled={!formData.model} rightIcon={<ArrowRight className="w-4 h-4" />}>
                Continue
              </Button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-heading font-black text-2xl text-neutral-text-dark mb-2">Select Services</h2>
            <p className="font-body text-neutral-text-muted mb-6">What does your {formData.make} {formData.model} need? (Select multiple)</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {availableServices.map((service) => {
                const isSelected = formData.services.includes(service);
                return (
                  <button
                    key={service}
                    onClick={() => toggleService(service)}
                    className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all text-left ${
                      isSelected
                        ? "border-primary-blue bg-primary-blue/5 text-primary-blue"
                        : "border-neutral-text-muted/10 bg-white text-neutral-text-dark hover:border-primary-blue/30 hover:bg-neutral-bg"
                    }`}
                  >
                    <Settings className={`w-5 h-5 ${isSelected ? 'text-primary-blue' : 'text-neutral-text-muted'}`} />
                    <span className="font-heading font-bold text-sm flex-1">{service}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-primary-blue" />}
                  </button>
                );
              })}
            </div>
            <div className="mt-8 flex justify-between">
              <Button variant="ghost" onClick={prevStep}>Back</Button>
              <Button onClick={nextStep} disabled={formData.services.length === 0} rightIcon={<ArrowRight className="w-4 h-4" />}>
                Continue
              </Button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-heading font-black text-2xl text-neutral-text-dark mb-2">Your Details</h2>
            <p className="font-body text-neutral-text-muted mb-6">Where should we send your custom quotation?</p>
            <div className="flex flex-col gap-4 max-w-sm">
              <div>
                <label className="block font-heading font-semibold text-sm text-neutral-text-dark mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => updateForm("name", e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-text-muted/20 bg-neutral-bg focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-all font-body text-sm"
                />
              </div>
              <div>
                <label className="block font-heading font-semibold text-sm text-neutral-text-dark mb-1.5">Phone Number</label>
                <div className="flex">
                  <span className="flex items-center justify-center px-4 bg-neutral-text-muted/5 border border-r-0 border-neutral-text-muted/20 rounded-l-xl text-neutral-text-muted text-sm font-semibold">
                    +91
                  </span>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => updateForm("phone", e.target.value)}
                    placeholder="50 123 4567"
                    className="flex-1 px-4 py-3 rounded-r-xl border border-neutral-text-muted/20 bg-neutral-bg focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-all font-body text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              <Button variant="ghost" onClick={prevStep}>Back</Button>
              <Button 
                onClick={() => {
                  setStep(5);
                }} 
                disabled={!formData.name || !formData.phone}
                variant="accent"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="animate-in fade-in zoom-in-95 duration-500 flex flex-col items-center justify-center text-center py-10">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-6 shadow-inner shadow-success/20">
              <CheckCircle2 className="w-10 h-10 text-success" />
            </div>
            <h2 className="font-heading font-black text-3xl text-neutral-text-dark mb-4">Request Sent Successfully!</h2>
            <p className="font-body text-neutral-text-muted text-lg max-w-md leading-relaxed mb-8">
              Thank you, <span className="font-bold text-neutral-text-dark">{formData.name}</span>. We've received your request for <span className="font-bold text-neutral-text-dark">{formData.services.join(", ")}</span>. Our top-rated workshops are calculating your exact quote and we will contact you on <span className="font-bold text-neutral-text-dark">+91 {formData.phone}</span> shortly.
            </p>
            <Button variant="primary" size="lg" href="/">
              Return to Home
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="bg-neutral-bg min-h-screen pt-24 pb-20">
      <Container>
        <div className="flex items-center gap-2 text-sm font-heading font-semibold text-neutral-text-muted mb-8">
          <Link href="/" className="hover:text-primary-blue transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary-blue">Get Quote</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="bg-white rounded-[2rem] p-6 sm:p-10 border border-neutral-text-muted/10 shadow-sm min-h-[500px] flex flex-col">
              
              {/* Progress Steps */}
              <div className="flex items-center gap-2 mb-10 pb-6 border-b border-neutral-text-muted/10">
                {[
                  { id: 1, icon: Car, label: "Vehicle" },
                  { id: 2, icon: Car, label: "Model" },
                  { id: 3, icon: Settings, label: "Service" },
                  { id: 4, icon: User, label: "Details" }
                ].map((s) => {
                  const isActive = step === s.id;
                  const isPassed = step > s.id;
                  return (
                    <div key={s.id} className="flex items-center">
                      <div className={`flex items-center gap-2 ${isActive || isPassed ? 'text-primary-blue' : 'text-neutral-text-muted/50'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-xs ${
                          isActive ? 'bg-primary-blue text-white shadow-md shadow-primary-blue/20' : 
                          isPassed ? 'bg-primary-blue/10 text-primary-blue' : 
                          'bg-neutral-text-muted/10'
                        }`}>
                          {isPassed ? <CheckCircle2 className="w-4 h-4" /> : s.id}
                        </div>
                        <span className="font-heading font-bold text-xs hidden sm:block">{s.label}</span>
                      </div>
                      {s.id < 4 && (
                        <div className={`w-4 sm:w-8 h-0.5 mx-2 rounded-full ${isPassed ? 'bg-primary-blue/30' : 'bg-neutral-text-muted/10'}`} />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Step Content */}
              <div className="flex-1">
                {renderStep()}
              </div>

            </div>
          </div>

          {/* Right Column: Summary / Trust */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="sticky top-28 flex flex-col gap-6">
              
              {/* Dynamic Summary Card */}
              <div className="bg-gradient-to-br from-primary-navy to-primary-blue-dark rounded-[2rem] p-8 shadow-xl text-white">
                <h3 className="font-heading font-black text-xl mb-6">Your Request</h3>
                
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="font-body text-white/70 text-sm">Vehicle</span>
                    <span className="font-heading font-bold text-right">
                      {formData.make ? `${formData.make} ${formData.model}` : "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="font-body text-white/70 text-sm shrink-0 mr-4">Service(s)</span>
                    <span className="font-heading font-bold text-right text-sm line-clamp-2">
                      {formData.services.length > 0 ? formData.services.join(", ") : "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-body text-white/90 text-sm font-semibold">Estimated Quote</span>
                    <span className="font-heading font-black text-xl text-accent-orange">
                      {calculateTotalQuote()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-[2rem] p-6 border border-neutral-text-muted/10 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-neutral-text-dark">100% Secure</h4>
                    <p className="font-body text-xs text-neutral-text-muted">Your data is safe with us.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 text-accent-orange" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-neutral-text-dark">Top Rated</h4>
                    <p className="font-body text-xs text-neutral-text-muted">4.8/5 average rating.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-blue/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary-blue" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-neutral-text-dark">Local Garages</h4>
                    <p className="font-body text-xs text-neutral-text-muted">Compare best workshops near you.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}

export default function QuotesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-neutral-bg">Loading...</div>}>
      <QuotesForm />
    </Suspense>
  );
}
