"use client";

import { useState, useEffect, Suspense, useRef } from "react";
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
  MapPin,
  LocateFixed,
  Loader2
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import LocationModal from "@/components/ui/LocationModal";
import { useCreateLead, useCreateBooking, useCreateGarageVehicle, useGetServices } from "@/services/queries";
import { toast } from "sonner";
import { useAuth } from "@/features/auth/hooks/useAuth";
const MAKES = [
  "Maruti Suzuki", "Hyundai", "Tata", "Mahindra", "Kia", 
  "Toyota", "Honda", "MG", "Skoda", "Volkswagen", 
  "Renault", "Nissan", "Ford", "Jeep", "Citroen", 
  "BMW", "Mercedes", "Land Rover", "Audi"
];
const CAR_MODELS_MAP: Record<string, string[]> = {
  "Maruti Suzuki": [
    "Alto", "Alto 800", "Alto K10", "S-Presso", "Celerio", "WagonR", "Swift", 
    "Dzire", "Ignis", "Baleno", "Fronx", "Brezza", "Grand Vitara", "Invicto", 
    "Ertiga", "XL6", "Eeco", "Omni", "Zen", "Ritz", "Ciaz", "S-Cross", "Gypsy", 
    "Esteem", "Jimny", "Other"
  ],
  "Hyundai": [
    "Eon", "Santro", "Grand i10", "Grand i10 Nios", "i10", "i20", "i20 N Line", 
    "Aura", "Xcent", "Accent", "Verna", "Elantra", "Sonata", "Venue", 
    "Venue N Line", "Creta", "Creta N Line", "Alcazar", "Tucson", "Santa Fe", 
    "Ioniq 5", "Kona Electric", "Other"
  ],
  "Tata": [
    "Tiago", "Tiago EV", "Tigor", "Altroz", "Punch", "Punch EV", 
    "Nexon", "Nexon EV", "Curvv", "Curvv EV", "Harrier", "Harrier EV", 
    "Safari", "Nano", "Indica", "Indica Vista", "Indigo", "Indigo CS", 
    "Manza", "Zest", "Bolt", "Sumo", "Sumo Gold", "Safari Storme", 
    "Hexa", "Aria", "Venture", "Winger (passenger/commercial)", 
    "Magic", "Nano GenX", "Other"
  ],
  "Mahindra": [
    "XUV700", "XUV300", "XUV400", "Scorpio", "Scorpio-N", "Scorpio Classic", 
    "Thar", "Thar Roxx", "Bolero", "Bolero Neo", "Bolero Neo+", "Marazzo", 
    "Alturas G4", "KUV100", "TUV300", "Xylo", "Quanto", "NuvoSport", "Verito", 
    "Verito Vibe", "Logan", "Armada", "Commander", "Marshal", "Other"
  ],
  "Kia": [
    "Seltos", "Sonet", "Carens", "Carnival", "EV6", "EV9", "Other"
  ],
  "Toyota": [
    "Glanza", "Urban Cruiser", "Urban Cruiser Hyryder", "Innova", 
    "Innova Crysta", "Innova Hycross", "Fortuner", "Fortuner Legender", 
    "Hilux", "Camry", "Vellfire", "Land Cruiser", "Yaris", "Etios", 
    "Etios Liva", "Corolla Altis", "Qualis", "Other"
  ],
  "Honda": [
    "Brio", "Amaze", "Jazz", "WR-V", "City", "City e:HEV", "Elevate", 
    "BR-V", "CR-V", "Civic", "Accord", "Mobilio", "Other"
  ],
  "MG": [
    "Astor", "Hector", "Hector Plus", "Gloster", "ZS EV", "Comet EV", 
    "Windsor EV", "Other"
  ],
  "Skoda": [
    "Slavia", "Kushaq", "Kodiaq", "Superb", "Octavia", "Rapid", 
    "Fabia", "Yeti", "Laura", "Other"
  ],
  "Volkswagen": [
    "Taigun", "Virtus", "Tiguan", "Polo", "Vento", "Ameo", 
    "Jetta", "Passat", "T-Roc", "Touareg", "Other"
  ],
  "Renault": [
    "Kwid", "Kiger", "Triber", "Duster", "Captur", "Lodgy", 
    "Scala", "Pulse", "Fluence", "Other"
  ],
  "Nissan": [
    "Magnite", "Kicks", "Terrano", "Micra", "Sunny", "Evalia", 
    "Teana", "X-Trail", "Other"
  ],
  "Ford": [
    "Figo", "Aspire", "Freestyle", "EcoSport", "Endeavour", 
    "Mustang", "Fiesta", "Ikon", "Escort", "Fusion", "Other"
  ],
  "Jeep": [
    "Compass", "Meridian", "Wrangler", "Grand Cherokee", "Other"
  ],
  "Citroen": [
    "C3", "eC3", "C3 Aircross", "C5 Aircross", "Basalt", "Other"
  ],
  "BMW": [
    "X1", "X3", "X5", "X7", "3 Series", "5 Series", "7 Series", "Z4", "Other"
  ],
  "Mercedes": [
    "A-Class", "C-Class", "E-Class", "S-Class", "GLA", "GLC", "GLE", "GLS", "Other"
  ],
  "Land Rover": [
    "Range Rover", "Range Rover Sport", "Range Rover Evoque", "Discovery", "Discovery Sport", "Defender", "Other"
  ],
  "Audi": [
    "A3", "A4", "A6", "A8", "Q3", "Q5", "Q7", "Q8", "e-tron", "Other"
  ]
};

const ALL_SERVICES = [
  { name: "Periodic Service", price: "₹2,499 - ₹4,999" },
  { name: "Engine Repair", price: "₹4,999 - ₹12,000" },
  { name: "Dent & Paint", price: "₹2,500 - ₹5,499" },
  { name: "Car Wash", price: "₹499 - ₹999" },
  { name: "Detailing", price: "₹2,999 - ₹5,999" },
  { name: "PPF (Paint Protection Film)", price: "₹25,000 - ₹85,000" },
  { name: "Ceramic Coating", price: "₹14,999 - ₹35,000" },
  { name: "Tyres", price: "₹3,499 - ₹8,499" },
  { name: "Battery", price: "₹4,499 - ₹8,999" },
  { name: "AC Repair", price: "₹1,499 - ₹4,499" },
  { name: "Suspension", price: "₹3,999 - ₹9,999" },
  { name: "Insurance Claims", price: "Free assistance" },
  { name: "Clutch Repair", price: "₹4,999 - ₹9,999" },
  { name: "Brake Service", price: "₹1,299 - ₹3,499" },
];

function QuotesForm() {
  const searchParams = useSearchParams();
  const { user, isAuthenticated } = useAuth();
  const [step, setStep] = useState(1);
  const [isLocating, setIsLocating] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);
  const { mutateAsync: createLead, isPending: isSubmittingLead } = useCreateLead();
  const { mutateAsync: createBooking, isPending: isSubmittingBooking } = useCreateBooking();
  const { mutateAsync: createGarageVehicle } = useCreateGarageVehicle();
  const { data: servicesData } = useGetServices();
  
  const isSubmitting = isSubmittingLead || isSubmittingBooking;

  const [formData, setFormData] = useState({
    make: "",
    model: "",
    fuelType: "",
    services: [] as string[],
    name: "",
    phone: "",
    location: "",
    address: "",
    vehicleNumber: "",
    otherServiceDetails: "",
    otherModelDetails: "",
  });

  const fuelTypeRef = useRef<HTMLHeadingElement>(null);
  const continueBtnRef = useRef<HTMLDivElement>(null);

  const [availableServices, setAvailableServices] = useState(ALL_SERVICES.map(s => s.name));

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: user.fullName || prev.name,
        phone: user.phone || prev.phone,
      }));
    }
  }, [user]);

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
    let minTotal = 0;
    let maxTotal = 0;
    let hasFree = false;
    
    formData.services.forEach(serviceName => {
      const service = ALL_SERVICES.find(s => s.name === serviceName);
      if (service) {
        if (service.price.toLowerCase().includes("free")) {
          hasFree = true;
        } else {
          // Extract ranges like ₹2,499 - ₹4,999
          const parts = service.price.split("-");
          if (parts.length === 2) {
            const min = parseInt(parts[0].replace(/[^0-9]/g, ""));
            const max = parseInt(parts[1].replace(/[^0-9]/g, ""));
            if (!isNaN(min)) minTotal += min;
            if (!isNaN(max)) maxTotal += max;
          } else {
            const num = parseInt(service.price.replace(/[^0-9]/g, ""));
            if (!isNaN(num)) {
              minTotal += num;
              maxTotal += num;
            }
          }
        }
      }
    });
    
    if (minTotal === 0 && maxTotal === 0 && hasFree) return "Free";
    
    if (minTotal > 0 && maxTotal > minTotal) {
      return `₹${minTotal.toLocaleString()} - ₹${maxTotal.toLocaleString()}`;
    } else if (minTotal > 0) {
      return `₹${minTotal.toLocaleString()}`;
    }
    
    return "---";
  };

  const detectLocation = () => {
    if ("geolocation" in navigator) {
      setIsLocating(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=14&addressdetails=1`);
            const data = await response.json();
            
            if (data && data.address) {
              const city = data.address.city || data.address.town || data.address.state_district || data.address.state;
              const area = data.address.suburb || data.address.neighbourhood || data.address.residential || "";
              const locationStr = area ? `${area}, ${city}` : city || "Location found";
              updateForm("location", locationStr);
            } else {
              updateForm("location", `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
            }
          } catch (error) {
            console.error("Error fetching location details:", error);
          } finally {
            setIsLocating(false);
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          toast.error("Please allow location access to auto-detect.");
          setIsLocating(false);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      toast.error("Location detection is not supported by your browser.");
    }
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
            <div className="mt-8 md:mt-8 fixed md:static bottom-0 left-0 w-full p-4 md:p-0 bg-white md:bg-transparent border-t md:border-0 border-neutral-text-muted/10 z-50 flex justify-end shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:shadow-none">
              <Button className="w-full md:w-auto" onClick={nextStep} disabled={!formData.make} rightIcon={<ArrowRight className="w-4 h-4" />}>
                Continue
              </Button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-heading font-black text-2xl text-neutral-text-dark mb-2">Select Car Model & Fuel</h2>
            <p className="font-body text-neutral-text-muted mb-6">What type of {formData.make} do you drive and its fuel type?</p>
            
            <h3 className="font-heading font-semibold text-lg text-primary-blue bg-primary-blue/10 inline-block px-4 py-1.5 rounded-lg mb-4">Car Model</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
              {(CAR_MODELS_MAP[formData.make] || ["Other"]).map((model) => (
                <button
                  key={model}
                  onClick={() => {
                    updateForm("model", model);
                    setTimeout(() => {
                      fuelTypeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }}
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

            {formData.model === "Other" && (
              <div className="mb-8 animate-in fade-in duration-300">
                <input
                  type="text"
                  placeholder="Please specify your car model..."
                  value={formData.otherModelDetails}
                  onChange={(e) => updateForm("otherModelDetails", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-primary-blue/30 bg-primary-blue/5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue/50 transition-all font-body text-sm"
                />
              </div>
            )}

            <h3 ref={fuelTypeRef} className={`font-heading font-semibold text-lg text-primary-blue bg-primary-blue/10 inline-block px-4 py-1.5 rounded-lg mb-4 ${formData.model === "Other" ? "mt-4" : "mt-8"}`}>Fuel Type</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["Petrol", "Diesel", "CNG", "EV"].map((fuel) => (
                <button
                  key={fuel}
                  onClick={() => {
                    updateForm("fuelType", fuel);
                    setTimeout(() => {
                      continueBtnRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 100);
                  }}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all ${
                    formData.fuelType === fuel
                      ? "border-primary-blue bg-primary-blue/5 text-primary-blue"
                      : "border-neutral-text-muted/10 bg-white text-neutral-text-dark hover:border-primary-blue/30 hover:bg-neutral-bg"
                  }`}
                >
                  <span className="font-heading font-bold text-sm">{fuel}</span>
                </button>
              ))}
            </div>

            <div ref={continueBtnRef} className="mt-8 md:mt-8 fixed md:static bottom-0 left-0 w-full p-4 md:p-0 bg-white md:bg-transparent border-t md:border-0 border-neutral-text-muted/10 z-50 flex justify-between gap-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:shadow-none">
              <Button className="flex-1 md:flex-none" variant="ghost" onClick={prevStep}>Back</Button>
              <Button className="flex-1 md:flex-none" onClick={nextStep} disabled={!formData.model || (formData.model === "Other" && !formData.otherModelDetails) || !formData.fuelType} rightIcon={<ArrowRight className="w-4 h-4" />}>
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
              
              {/* Other Option */}
              <button
                onClick={() => toggleService("Other")}
                className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all text-left ${
                  formData.services.includes("Other")
                    ? "border-primary-blue bg-primary-blue/5 text-primary-blue"
                    : "border-neutral-text-muted/10 bg-white text-neutral-text-dark hover:border-primary-blue/30 hover:bg-neutral-bg"
                }`}
              >
                <Settings className={`w-5 h-5 ${formData.services.includes("Other") ? 'text-primary-blue' : 'text-neutral-text-muted'}`} />
                <span className="font-heading font-bold text-sm flex-1">Other</span>
                {formData.services.includes("Other") && <CheckCircle2 className="w-4 h-4 text-primary-blue" />}
              </button>
            </div>
            
            {formData.services.includes("Other") && (
              <div className="mt-4 animate-in fade-in duration-300">
                <input
                  type="text"
                  placeholder="Please specify what service you need..."
                  value={formData.otherServiceDetails}
                  onChange={(e) => updateForm("otherServiceDetails", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-primary-blue/30 bg-primary-blue/5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue/50 transition-all font-body text-sm"
                />
              </div>
            )}

            <div className="mt-8 md:mt-8 fixed md:static bottom-0 left-0 w-full p-4 md:p-0 bg-white md:bg-transparent border-t md:border-0 border-neutral-text-muted/10 z-50 flex justify-between gap-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:shadow-none">
              <Button className="flex-1 md:flex-none" variant="ghost" onClick={prevStep}>Back</Button>
              <Button className="flex-1 md:flex-none" onClick={nextStep} disabled={formData.services.length === 0} rightIcon={<ArrowRight className="w-4 h-4" />}>
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
            <div className="flex flex-col gap-4 max-w-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    <span className="flex items-center justify-center px-3 bg-neutral-text-muted/5 border border-r-0 border-neutral-text-muted/20 rounded-l-xl text-neutral-text-muted text-sm font-semibold">
                      +91
                    </span>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => updateForm("phone", e.target.value)}
                      placeholder="98765 43210"
                      className="flex-1 px-4 py-3 min-w-0 rounded-r-xl border border-neutral-text-muted/20 bg-neutral-bg focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-all font-body text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-heading font-semibold text-sm text-neutral-text-dark mb-1.5">Vehicle Number</label>
                  <input 
                    type="text" 
                    value={formData.vehicleNumber}
                    onChange={(e) => updateForm("vehicleNumber", e.target.value)}
                    placeholder="DL 01 AB 1234"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-text-muted/20 bg-neutral-bg focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-all font-body text-sm"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block font-heading font-semibold text-sm text-neutral-text-dark">Current Location</label>
                    <button 
                      type="button"
                      onClick={() => setShowMapModal(true)}
                      className="flex items-center gap-1.5 text-xs font-semibold text-primary-blue hover:text-primary-blue-dark transition-colors"
                    >
                      <LocateFixed className="w-3.5 h-3.5" />
                      Select on Map
                    </button>
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={formData.location}
                      onChange={(e) => updateForm("location", e.target.value)}
                      onClick={() => setShowMapModal(true)}
                      placeholder="e.g. Connaught Place, New Delhi"
                      readOnly
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-text-muted/20 bg-neutral-bg focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-all font-body text-sm cursor-pointer"
                    />
                    <MapPin className="w-4 h-4 text-neutral-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block font-heading font-semibold text-sm text-neutral-text-dark mb-1.5">Full Address</label>
                <textarea 
                  value={formData.address}
                  onChange={(e) => updateForm("address", e.target.value)}
                  placeholder="Flat No, Building, Street..."
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-text-muted/20 bg-neutral-bg focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-all font-body text-sm resize-none"
                />
              </div>
            </div>
            <div className="mt-8 md:mt-8 fixed md:static bottom-0 left-0 w-full p-4 md:p-0 bg-white md:bg-transparent border-t md:border-0 border-neutral-text-muted/10 z-50 flex justify-between gap-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:shadow-none">
              <Button className="flex-1 md:flex-none" variant="ghost" onClick={prevStep}>Back</Button>
              <Button 
                className="flex-1 md:flex-none"
                onClick={async () => {
                  try {
                    if (isAuthenticated) {
                      // Authenticated Flow
                      // 1. Create Garage Vehicle
                      const vehicleRes = await createGarageVehicle({
                        brand: formData.make,
                        model: formData.model === "Other" ? formData.otherModelDetails : formData.model,
                        registrationNumber: formData.vehicleNumber,
                        fuelType: formData.fuelType,
                        year: new Date().getFullYear(), // Default
                      });
                      
                      const vehicleId = vehicleRes?.data?._id || vehicleRes?._id;
                      
                      // Match service to get ID
                      const allMasterServices = servicesData?.services || [];
                      const firstServiceName = formData.services[0];
                      const matchedService = allMasterServices.find((s: any) => s.name === firstServiceName);
                      const serviceId = matchedService?._id || "64f1a2b3c4d5e6f7a8b9c0d2"; // Dummy valid fallback

                      // 2. Create Booking
                      await createBooking({
                        vehicleId,
                        serviceId,
                        cityId: "64f1a2b3c4d5e6f7a8b9c0d3", // Valid hex to bypass CastError
                        description: `Location: ${formData.location} | Services: ${formData.services.join(", ")} | Other Details: ${formData.otherServiceDetails} | Fuel: ${formData.fuelType} | Address: ${formData.address}`,
                        preferredDate: new Date().toISOString(),
                      });
                      setStep(5);
                    } else {
                      // Guest Flow
                      await createLead({
                        name: formData.name,
                        phone: formData.phone,
                        source: 'WEBSITE_QUOTE',
                        vehicleBrand: formData.make,
                        vehicleModel: formData.model === "Other" ? formData.otherModelDetails : formData.model,
                        city: formData.location,
                        message: `Services: ${formData.services.join(", ")} | Fuel: ${formData.fuelType} | Vehicle No: ${formData.vehicleNumber} | Other: ${formData.otherServiceDetails} | Address: ${formData.address}`,
                      });
                      setStep(5);
                    }
                    toast.success("Query Submitted Successfully! We will contact you soon.");
                  } catch (err: any) {
                    toast.error(err.message || "Failed to submit quote request. Please try again.");
                  }
                }} 
                disabled={!formData.name || !formData.phone || !formData.location || !formData.address || !formData.vehicleNumber || isSubmitting}
                variant="accent"
                rightIcon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
              >
                {isSubmitting ? "Submitting..." : (isAuthenticated ? "Book Now" : "Get Quotes Now")}
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
            <h2 className="font-heading font-black text-3xl text-neutral-text-dark mb-4">{isAuthenticated ? "Booking Confirmed!" : "Request Sent Successfully!"}</h2>
            <p className="font-body text-neutral-text-muted text-lg max-w-md leading-relaxed mb-8">
              {isAuthenticated ? (
                <>Thank you, <span className="font-bold text-neutral-text-dark">{formData.name}</span>. Your booking for <span className="font-bold text-neutral-text-dark">{formData.services.join(", ")}</span> has been created. Partners are now bidding on your request.</>
              ) : (
                <>Thank you, <span className="font-bold text-neutral-text-dark">{formData.name}</span>. We've received your request for <span className="font-bold text-neutral-text-dark">{formData.services.join(", ")}</span>. Our top-rated workshops are calculating your exact quote and we will contact you on <span className="font-bold text-neutral-text-dark">+91 {formData.phone}</span> shortly.</>
              )}
            </p>
            <div className="max-w-md mx-auto">
              <Button variant="primary" size="lg" href={isAuthenticated ? `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/customer/dashboard` : "/"}>
                {isAuthenticated ? "Go to Dashboard" : "Return to Home"}
              </Button>
            </div>
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
          <div className="lg:col-span-8 order-2 lg:order-1 mb-20 md:mb-0">
            <div className="bg-white rounded-[2rem] p-6 pb-24 md:pb-10 sm:p-10 shadow-xl shadow-primary-blue/5 border border-neutral-text-muted/10">
              
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
                      {formData.services.length > 0 ? formData.services.map(s => s === "Other" && formData.otherServiceDetails ? `Other (${formData.otherServiceDetails})` : s).join(", ") : "Not selected"}
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
      <LocationModal 
        isOpen={showMapModal} 
        onClose={() => setShowMapModal(false)} 
        onConfirm={(locStr) => {
          updateForm("location", locStr);
        }} 
      />
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
