import { ShieldCheck, Sparkles, Handshake, Target, LucideIcon } from "lucide-react";

export interface AboutStat {
  value: string;
  label: string;
}

export const ABOUT_STATS: AboutStat[] = [
  { value: "2,500+", label: "Verified Workshops" },
  { value: "120K+", label: "Happy Customers" },
  { value: "25+", label: "Cities Covered" },
  { value: "4.8/5", label: "Average Rating" },
];

export interface AboutValue {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const ABOUT_VALUES: AboutValue[] = [
  {
    icon: ShieldCheck,
    title: "Trust First",
    desc: "Every workshop on Car Blink is verified before it ever shows up in your search results.",
  },
  {
    icon: Sparkles,
    title: "Transparency Always",
    desc: "No hidden charges, no inflated quotes — the price you see is the price you pay.",
  },
  {
    icon: Handshake,
    title: "Fair To Both Sides",
    desc: "We build tools that help car owners save money and workshops grow, without pitting one against the other.",
  },
  {
    icon: Target,
    title: "Customer Obsessed",
    desc: "From booking to follow-up, every decision starts with what makes the experience better for you.",
  },
];

export interface AboutJourneyStep {
  year: string;
  title: string;
  desc: string;
}

export const ABOUT_JOURNEY: AboutJourneyStep[] = [
  {
    year: "2021",
    title: "Car Blink is founded",
    desc: "Started with a simple idea: make car servicing as easy to compare as flight tickets.",
  },
  {
    year: "2022",
    title: "First 100 workshops onboarded",
    desc: "Our first verified workshop network goes live, bringing transparent pricing to local car owners.",
  },
  {
    year: "2023",
    title: "Crossed 25,000 bookings",
    desc: "Expanded into new cities and launched instant price comparison across every major service type.",
  },
  {
    year: "2025",
    title: "2,500+ workshops, 120K+ customers",
    desc: "Car Blink becomes one of the region's most trusted car service comparison platforms.",
  },
];

export interface AboutTeamMember {
  name: string;
  role: string;
}

export const ABOUT_TEAM: AboutTeamMember[] = [
  { name: "Ananya Kapoor", role: "Co-Founder & CEO" },
  { name: "Rohan Verma", role: "Co-Founder & CTO" },
  { name: "Meera Iyer", role: "Head of Partnerships" },
  { name: "Kabir Singh", role: "Head of Operations" },
];

export interface AboutMissionPoint {
  text: string;
}

export const ABOUT_MISSION_POINTS: AboutMissionPoint[] = [
  { text: "Verified workshops in every major city" },
  { text: "Zero-wait insurance claim assistance" },
  { text: "A 5-minute path from search to booked slot" },
];
