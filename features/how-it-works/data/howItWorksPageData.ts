import {
  ClipboardList,
  Mail,
  Scale,
  CalendarCheck,
  ShieldCheck,
  Wallet,
  Clock,
  LucideIcon,
} from "lucide-react";

export interface DetailedStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const DETAILED_STEPS: DetailedStep[] = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Submit Your Request",
    description:
      "Tell us your car's make, model, and the service you need. It takes less than 30 seconds — no signup, no hassle.",
    image: "/images/about4.png",
    alt: "Person filling a service request on a phone",
  },
  {
    number: "02",
    icon: Mail,
    title: "Car Blink Get Multiple Quotes",
    description:
      "Verified workshops near you receive your request instantly and send back competitive, transparent quotes within minutes.",
    image: "/images/about3.png",
    alt: "Mechanic reviewing a quote on a tablet in a workshop",
  },
  {
    number: "03",
    icon: Scale,
    title: "Car Blink compares best prices for you",
    description:
      "See every quote side-by-side — price, ratings, services offered, and workshop reviews — and pick what works best for you.",
    image: "/images/rupee_comparison.png",
    alt: "Comparing pricing on a laptop screen",
  },
  {
    number: "04",
    icon: Wallet,
    title: "Customer check the prices and book service",
    description: "and save up to 50 percent.",
    image: "/images/rupee_comparison.png",
    alt: "Customer checking prices",
  },
  {
    number: "05",
    icon: CalendarCheck,
    title: "Book & Save",
    description:
      "Confirm your booking and pay securely through Car Blink. Track your service live and drive away having saved real money.",
    image: "/images/about1.png",
    alt: "Car being serviced in a workshop bay",
  },
];

export interface HowItWorksBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const HOW_IT_WORKS_BENEFITS: HowItWorksBenefit[] = [
  {
    icon: ShieldCheck,
    title: "Verified Workshops Only",
    description:
      "Every workshop on Car Blink is background-checked and quality-assured before it can quote you.",
  },
  {
    icon: Wallet,
    title: "No Hidden Charges",
    description:
      "The price you're quoted is the price you pay. Full transparency, every time.",
  },
  {
    icon: Clock,
    title: "Save Time, Not Just Money",
    description:
      "Skip the phone calls and workshop visits. Compare and book everything from one screen.",
  },
];
