export const DUMMY_SERVICES: Record<string, any> = {
  "periodic-service": {
    name: "Periodic Service",
    description: "Complete health checkup, oil change & multi-point inspection to keep your car running smooth and efficient.",
    priceFrom: "₹2,499",
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
    priceFrom: "₹4,999",
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
    priceFrom: "₹5,499",
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
  }
};
