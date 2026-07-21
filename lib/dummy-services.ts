export const DUMMY_SERVICES: Record<string, any> = {
  "periodic-service": {
    name: "Periodic Service",
    description: "Complete health checkup, oil change & multi-point inspection to keep your car running smooth and efficient.",
    priceFrom: "₹2,499 - ₹4,999",
    category: "Maintenance",
    heroImage: "/images/hero-car.png",
    inclusions: [
      "Engine Oil Replacement",
      "Oil Filter Replacement",
      "Air Filter Cleaning",
      "Coolant Top-up",
      "Brake Fluid Top-up",
      "Wiper Fluid Replacement",
      "Heater/Spark Plugs Checking",
      "Car Wash & Interior Vacuum",
    ],
    faqs: [
      { q: "How long does a periodic service take?", a: "Typically, it takes about 3-4 hours depending on the condition of your car." },
      { q: "Do I get a warranty?", a: "Yes, we provide a 1-month warranty on labor and parts replaced." }
    ]
  },
  "engine-repair": {
    name: "Engine Repair",
    description: "Diagnostics and repair for engine noise, leaks & performance.",
    priceFrom: "₹4,999 - ₹12,000",
    category: "Repair",
    heroImage: "/images/homeheroimage.png",
    inclusions: [
      "Engine Scanning & Diagnostics",
      "Leak Inspection",
      "Noise Diagnosis",
      "Spark Plug Check",
      "Timing Belt Check",
    ],
    faqs: [
      { q: "Will I know the cost before repair?", a: "Absolutely. We diagnose first and provide a detailed quotation before any work begins." }
    ]
  },
  "dent-paint": {
    name: "Dent & Paint",
    description: "Dent removal and panel repainting with colour-match guarantee.",
    priceFrom: "₹2,500 - ₹5,499",
    category: "Cosmetic",
    heroImage: "/images/hero-car.png",
    inclusions: [
      "Grade-A Primer",
      "Premium Paint Match",
      "Clear Coat Application",
      "Polishing & Buffing",
      "100% Color Match Guarantee"
    ],
    faqs: [
      { q: "Does the paint match exactly?", a: "Yes, we use computerized color mixing for a 100% factory match." }
    ]
  },
  "car-wash": {
    name: "Car Wash",
    description: "Premium doorstep wash with waterless tech, interior vacuuming & tyre shine.",
    priceFrom: "₹499 - ₹999",
    category: "Doorstep Service",
    heroImage: "/images/hero-car.png",
    inclusions: [
      "Exterior Waterless Wash",
      "Interior Vacuuming",
      "Dashboard Polishing",
      "Tyre Cleaning & Shine",
      "Glass Cleaning"
    ],
    faqs: [
      { q: "Do I need to provide water?", a: "No, we use a specialized waterless wash technology." },
      { q: "How long does it take?", a: "A complete wash takes around 45-60 minutes." }
    ]
  },
  "detailing": {
    name: "Detailing",
    description: "Deep interior cleaning, exterior rubbing, polishing, and waxing to restore your car's showroom shine.",
    priceFrom: "₹2,999 - ₹5,999",
    category: "Cosmetic",
    heroImage: "/images/hero-car.png",
    inclusions: [
      "Interior Vacuuming & Dry Cleaning",
      "Exterior Wash & Rubbing",
      "Machine Polishing & Waxing",
      "Dashboard & Trim Dressing",
      "Tyre & Alloy Cleaning"
    ],
    faqs: [
      { q: "How often should I get my car detailed?", a: "We recommend professional detailing every 4-6 months to maintain the paint and interior." }
    ]
  },
  "ppf": {
    name: "PPF (Paint Protection Film)",
    description: "High-quality, self-healing TPU film application to protect your car from scratches and stone chips.",
    priceFrom: "₹25,000 - ₹85,000",
    category: "Cosmetic",
    heroImage: "/images/homeheroimage.png",
    inclusions: [
      "Complete Exterior Washing & Decontamination",
      "Paint Correction (If needed)",
      "Premium TPU PPF Installation",
      "Edge Wrapping for Seamless Look",
      "Final Inspection & Curing"
    ],
    faqs: [
      { q: "What is the warranty on PPF?", a: "Our PPF comes with a 5 to 7-year warranty against yellowing, bubbling, and peeling." }
    ]
  },
  "ceramic-coating": {
    name: "Ceramic Coating",
    description: "9H Nano Ceramic Coating for long-lasting gloss, hydrophobic effect, and UV protection.",
    priceFrom: "₹14,999 - ₹35,000",
    category: "Cosmetic",
    heroImage: "/images/hero-car.png",
    inclusions: [
      "Deep Exterior Cleaning",
      "Multi-stage Paint Correction",
      "Surface Prep & Degreasing",
      "9H Ceramic Coating Application",
      "Infrared Curing"
    ],
    faqs: [
      { q: "Does it protect against scratches?", a: "It protects against minor swirl marks and environmental damage, but it's not scratch-proof like PPF." }
    ]
  },
  "tyres": {
    name: "Tyres",
    description: "Tyre replacement, wheel alignment, and balancing services with top brands.",
    priceFrom: "₹3,499 - ₹8,499",
    category: "Maintenance",
    heroImage: "/images/homeheroimage.png",
    inclusions: [
      "Tyre Inspection & Replacement",
      "Computerized Wheel Balancing",
      "Laser Wheel Alignment",
      "Nitrogen Gas Filling",
      "Old Tyre Disposal"
    ],
    faqs: [
      { q: "Which brands do you offer?", a: "We offer all major brands like Michelin, Bridgestone, MRF, CEAT, and Apollo." }
    ]
  },
  "battery": {
    name: "Battery",
    description: "Doorstep battery replacement with genuine OEM and branded batteries.",
    priceFrom: "₹4,499 - ₹8,999",
    category: "Doorstep Service",
    heroImage: "/images/hero-car.png",
    inclusions: [
      "Battery Health Check",
      "Alternator Voltage Test",
      "New Battery Installation",
      "Terminal Cleaning & Greasing",
      "Old Battery Exchange"
    ],
    faqs: [
      { q: "Do you buy back the old battery?", a: "Yes, the quoted price usually includes an exchange discount for your old battery." }
    ]
  },
  "ac-repair": {
    name: "AC Repair",
    description: "Complete AC diagnostics, gas top-up, and cooling coil repair.",
    priceFrom: "₹1,499 - ₹4,499",
    category: "Repair",
    heroImage: "/images/homeheroimage.png",
    inclusions: [
      "AC Gas Refill / Top-up",
      "Condenser Cleaning",
      "AC Filter Cleaning or Replacement",
      "Compressor Oil Top-up",
      "Leakage Testing"
    ],
    faqs: [
      { q: "Why is my AC not cooling enough?", a: "It could be low refrigerant gas, a clogged filter, or a compressor issue. We'll diagnose it thoroughly." }
    ]
  },
  "suspension": {
    name: "Suspension",
    description: "Shocker replacement, steering rack repair, and suspension overhaul.",
    priceFrom: "₹3,999 - ₹9,999",
    category: "Repair",
    heroImage: "/images/hero-car.png",
    inclusions: [
      "Complete Suspension Inspection",
      "Shock Absorber Check/Replace",
      "Link Rods & Bushes Check",
      "Steering Rack Diagnosis",
      "Post-repair Test Drive"
    ],
    faqs: [
      { q: "How do I know my suspension is bad?", a: "If you hear clunking noises over bumps, or experience a bumpy/unstable ride, it's time for an inspection." }
    ]
  },
  "insurance-claims": {
    name: "Insurance Claims",
    description: "Cashless garage network for hassle-free insurance claims and repairs.",
    priceFrom: "Free assistance",
    category: "Support",
    heroImage: "/images/homeheroimage.png",
    inclusions: [
      "Claim Filing Assistance",
      "Surveyor Coordination",
      "Cashless Repair Processing",
      "Document Verification",
      "Delivery Post-Approval"
    ],
    faqs: [
      { q: "Do you support my insurance provider?", a: "We work with almost all major insurance providers in India for cashless settlements." }
    ]
  },
  "clutch-repair": {
    name: "Clutch Repair",
    description: "Clutch plate, pressure plate, and release bearing replacement for smooth shifting.",
    priceFrom: "₹4,999 - ₹9,999",
    category: "Repair",
    heroImage: "/images/hero-car.png",
    inclusions: [
      "Clutch Assembly Inspection",
      "Clutch Plate Replacement",
      "Pressure Plate Replacement",
      "Flywheel Facing (if needed)",
      "Gearbox Oil Top-up"
    ],
    faqs: [
      { q: "When should I replace my clutch?", a: "If you experience a 'hard' clutch, slipping gears, or poor pickup, it might need replacement." }
    ]
  },
  "brake-service": {
    name: "Brake Service",
    description: "Brake pad replacement, disc skimming, and brake fluid change for ultimate safety.",
    priceFrom: "₹1,299 - ₹3,499",
    category: "Maintenance",
    heroImage: "/images/homeheroimage.png",
    inclusions: [
      "Brake Pad Inspection & Replacement",
      "Brake Disc Skimming / Turning",
      "Caliper Pin Greasing",
      "Brake Fluid Top-up",
      "Braking Efficiency Test"
    ],
    faqs: [
      { q: "Why do my brakes squeak?", a: "Squeaking is usually caused by worn-out brake pads or dust. We recommend getting them checked immediately for safety." }
    ]
  }
};
