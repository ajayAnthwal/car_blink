import {
  Wrench,
  Cpu,
  Paintbrush,
  Droplets,
  Sparkles,
  Shield,
  Gem,
  Disc,
  Battery,
  Wind,
  Sliders,
  FileText,
  Settings,
  CircleDot,
  MoreHorizontal,
  LucideIcon,
} from "lucide-react";

export interface ServiceData {
  label: string;
  iconName: string;
}

export const SERVICES_LIST: ServiceData[] = [
  { label: "Periodic Service", iconName: "Wrench" },
  { label: "Engine Repair", iconName: "Cpu" },
  { label: "Dent & Paint", iconName: "Paintbrush" },
  { label: "Car Wash", iconName: "Droplets" },
  { label: "Detailing", iconName: "Sparkles" },
  { label: "PPF", iconName: "Shield" },
  { label: "Ceramic Coating", iconName: "Gem" },
  { label: "Tyres", iconName: "Disc" },
  { label: "Battery", iconName: "Battery" },
  { label: "AC Repair", iconName: "Wind" },
  { label: "Suspension", iconName: "Sliders" },
  { label: "Insurance Claims", iconName: "FileText" },
  { label: "Clutch Repair", iconName: "Settings" },
  { label: "Brake Service", iconName: "CircleDot" },
  { label: "More Services", iconName: "MoreHorizontal" },
];

export const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Cpu,
  Paintbrush,
  Droplets,
  Sparkles,
  Shield,
  Gem,
  Disc,
  Battery,
  Wind,
  Sliders,
  FileText,
  Settings,
  CircleDot,
  MoreHorizontal,
};
