export const OWNER_FEATURES: string[] = [
  "Compare quotes from verified workshops",
  "Book any service — no platform fee",
  "Secure, protected payments",
  "Ratings & reviews on every workshop",
  "24/7 support for booking issues",
];

export interface PlanFeature {
  label: string;
  included: boolean;
}

export interface WorkshopPlan {
  name: string;
  price: { monthly: string; yearly: string };
  period: string;
  tagline: string;
  features: PlanFeature[];
  cta: string;
  highlighted: boolean;
}

export const WORKSHOP_PLANS: WorkshopPlan[] = [
  {
    name: "Starter",
    price: { monthly: "Free", yearly: "Free" },
    period: "forever",
    tagline: "For workshops just getting started with online leads.",
    features: [
      { label: "Listing on Car Blink search", included: true },
      { label: "Up to 20 leads / month", included: true },
      { label: "Standard dashboard access", included: true },
      { label: "Payout in 3–5 business days", included: true },
      { label: "Priority placement in search", included: false },
      { label: "Advanced analytics", included: false },
      { label: "Dedicated partner support", included: false },
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Growth",
    price: { monthly: "₹2,499", yearly: "₹1,999" },
    period: "/month",
    tagline: "For workshops ready to scale bookings city-wide.",
    features: [
      { label: "Listing on Car Blink search", included: true },
      { label: "Unlimited leads", included: true },
      { label: "Advanced dashboard + analytics", included: true },
      { label: "Payout in 48 hours", included: true },
      { label: "Priority placement in search", included: true },
      { label: "Featured in city campaigns", included: true },
      { label: "Dedicated partner support", included: true },
    ],
    cta: "Choose Growth",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", yearly: "Custom" },
    period: "pricing",
    tagline: "For multi-branch workshop chains and franchises.",
    features: [
      { label: "Everything in Growth", included: true },
      { label: "Multi-branch management", included: true },
      { label: "Custom commission rates", included: true },
      { label: "API access", included: true },
      { label: "Account manager", included: true },
      { label: "Custom reporting", included: true },
      { label: "SLA-backed support", included: true },
    ],
    cta: "Talk to Sales",
    highlighted: false,
  },
];

export interface PricingFaq {
  id: string;
  q: string;
  a: string;
}

export const PRICING_FAQS: PricingFaq[] = [
  {
    id: "pf-1",
    q: "Is Car Blink really free for car owners?",
    a: "Yes. Comparing quotes and booking a service through Car Blink costs nothing extra — you pay the workshop's quoted price, with no hidden platform fee.",
  },
  {
    id: "pf-2",
    q: "How does Car Blink make money?",
    a: "We charge workshops a small commission on confirmed bookings, plus optional subscription plans like Growth for workshops that want more visibility and leads.",
  },
  {
    id: "pf-3",
    q: "Can I switch between workshop plans anytime?",
    a: "Yes, you can upgrade, downgrade or cancel your plan anytime from your partner dashboard — changes apply from the next billing cycle.",
  },
  {
    id: "pf-4",
    q: "Is there a contract or lock-in period?",
    a: "No lock-in on Starter or Growth. Enterprise plans include a custom agreement tailored to your workshop chain's needs.",
  },
];
