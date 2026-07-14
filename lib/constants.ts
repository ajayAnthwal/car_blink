export interface NavLink {
  name: string;
  href: string;
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Services", href: "/services" },
  { name: "For Workshops", href: "/for-workshops" },
  { name: "Pricing", href: "/pricing" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const FOOTER_SERVICES_LINKS: NavLink[] = [
  { name: "Periodic Service", href: "/services" },
  { name: "Engine Repair", href: "/services" },
  { name: "Dent & Paint", href: "/services" },
  { name: "Car Wash", href: "/services" },
  { name: "Detailing", href: "/services" },
  { name: "View All Services", href: "/services" },
];

export const FOOTER_WORKSHOPS_LINKS: NavLink[] = [
  { name: "Become a Partner", href: "/partner-signup" },
  { name: "Partner Login", href: "/login" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Pricing", href: "/pricing" },
  { name: "Success Stories", href: "/" },
];

export const FOOTER_COMPANY_LINKS: NavLink[] = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
  { name: "Press Kit", href: "/" },
];

export const FOOTER_SUPPORT_LINKS: NavLink[] = [
  { name: "Help Center", href: "/" },
  { name: "Privacy Policy", href: "/" },
  { name: "Terms of Service", href: "/" },
  { name: "Refund Policy", href: "/" },
];
