import {
  Car,
  Droplet,
  Snowflake,
  Disc,
  Battery,
  Cpu,
  CircleDot,
  Settings,
  Zap,
  ClipboardCheck,
  Paintbrush,
  Sparkles,
  LucideIcon,
} from "lucide-react";

export interface ServiceData {
  label: string;
  iconName: string;
}

export const SERVICES_LIST: ServiceData[] = [
  { label: "Car Full Service", iconName: "Car" },
  { label: "Oil Change", iconName: "Droplet" },
  { label: "AC Service & Repair", iconName: "Snowflake" },
  { label: "Brake Service", iconName: "CircleDot" },
  { label: "Battery Replacement", iconName: "Battery" },
  { label: "Engine Repair", iconName: "Cpu" },
  { label: "Tyre Change", iconName: "Disc" },
  { label: "Transmission Service", iconName: "Settings" },
  { label: "Electrical Service", iconName: "Zap" },
  { label: "Car Inspection", iconName: "ClipboardCheck" },
  { label: "Dent & Paint", iconName: "Paintbrush" },
  { label: "Detailing & Cleaning", iconName: "Sparkles" },
];

export const iconMap: Record<string, LucideIcon> = {
  Car,
  Droplet,
  Snowflake,
  Disc,
  Battery,
  Cpu,
  CircleDot,
  Settings,
  Zap,
  ClipboardCheck,
  Paintbrush,
  Sparkles,
};