import { Lock, UserCheck, Award, FileCheck, Scale, Headphones, LucideIcon } from "lucide-react";

export interface TrustBadgeData {
  label: string;
  iconName: "Lock" | "UserCheck" | "Award" | "FileCheck" | "Scale" | "Headphones";
}

export const TRUST_BADGES_LIST: TrustBadgeData[] = [
  { label: "Secure Payments", iconName: "Lock" },
  { label: "Verified Partners", iconName: "UserCheck" },
  { label: "ISO Certified", iconName: "Award" },
  { label: "Service Warranty", iconName: "FileCheck" },
  { label: "Transparent Pricing", iconName: "Scale" },
  { label: "24/7 Support", iconName: "Headphones" },
];

export const iconMap: Record<string, LucideIcon> = {
  Lock,
  UserCheck,
  Award,
  FileCheck,
  Scale,
  Headphones,
};
