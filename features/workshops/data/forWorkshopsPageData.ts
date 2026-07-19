import {
  TrendingUp,
  ShieldCheck,
  CreditCard,
  BarChart3,
  Megaphone,
  ClipboardList,
  UserCheck,
  Bell,
  Rocket,
  LucideIcon,
} from "lucide-react";

export interface WorkshopBenefit {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const WORKSHOP_BENEFITS: WorkshopBenefit[] = [
  {
    icon: TrendingUp,
    title: "More Bookings, Every Month",
    desc: "Get matched with car owners actively searching for services in your city — no cold leads.",
  },
  {
    icon: UserCheck,
    title: "Verified Leads Only",
    desc: "Every request comes from a verified CarBlink user, so your team spends time quoting, not filtering spam.",
  },
  {
    icon: CreditCard,
    title: "Zero Setup Cost",
    desc: "Listing your workshop is free. You only pay a small commission when a booking is confirmed.",
  },
  {
    icon: ShieldCheck,
    title: "Secure, On-Time Payouts",
    desc: "Payments are collected upfront and settled to your account within 48 hours of job completion.",
  },
  {
    icon: BarChart3,
    title: "A Dashboard Built for Workshops",
    desc: "Track quotes, bookings, ratings and earnings in one place — on desktop or your phone.",
  },
  {
    icon: Megaphone,
    title: "Marketing, Handled for You",
    desc: "Your workshop gets featured across CarBlink's search, city pages and seasonal campaigns at no extra cost.",
  },
];

export interface WorkshopStep {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const WORKSHOP_STEPS: WorkshopStep[] = [
  {
    icon: ClipboardList,
    title: "Register your workshop",
    desc: "Share your services, pricing and location. Takes about 10 minutes.",
  },
  {
    icon: ShieldCheck,
    title: "Get verified",
    desc: "Our team checks your documents and does a quick quality visit.",
  },
  {
    icon: Bell,
    title: "Start receiving requests",
    desc: "Quotes from car owners near you start landing in your dashboard.",
  },
  {
    icon: Rocket,
    title: "Grow with CarBlink",
    desc: "Convert quotes to bookings and watch your monthly revenue climb.",
  },
];

export interface WorkshopTestimonial {
  quote: string;
  name: string;
  role: string;
}

export const WORKSHOP_TESTIMONIALS: WorkshopTestimonial[] = [
  {
    quote:
      "Since joining CarBlink, our bay utilisation went from 60% to nearly full every weekday. The dashboard makes follow-ups painless.",
    name: "Ravi Malhotra",
    role: "Owner, Malhotra Auto Care",
  },
  {
    quote:
      "No upfront fees, and payouts actually arrive on time. That alone makes CarBlink different from every other platform we tried.",
    name: "Sana Sheikh",
    role: "Manager, QuickFix Garage",
  },
  {
    quote:
      "We picked up 40+ new customers in our first month, most of whom now book directly with us for repeat service.",
    name: "Arvind Nair",
    role: "Founder, Nair Motor Works",
  },
];

export interface WorkshopFaq {
  id: string;
  q: string;
  a: string;
}

export const WORKSHOP_FAQS: WorkshopFaq[] = [
  {
    id: "wf-1",
    q: "Is there any cost to list my workshop on CarBlink?",
    a: "Listing is completely free. On the Starter plan we only charge a small commission on confirmed bookings — you don't pay unless you earn.",
  },
  {
    id: "wf-2",
    q: "How long does verification take?",
    a: "Most workshops are verified within 2–3 business days after documents are submitted and our team completes a short quality check.",
  },
  {
    id: "wf-3",
    q: "How and when do I get paid?",
    a: "Customers pay through CarBlink at the time of booking. Funds are released to your linked bank account within 48 hours of job completion on the Growth plan, or 3–5 business days on Starter.",
  },
  {
    id: "wf-4",
    q: "Can I set my own prices?",
    a: "Yes. You control pricing for every service you list, and you can update it any time from your dashboard.",
  },
  {
    id: "wf-5",
    q: "What if I want to leave the platform?",
    a: "There's no lock-in. You can pause or remove your listing anytime from Settings, with no cancellation fee.",
  },
];
