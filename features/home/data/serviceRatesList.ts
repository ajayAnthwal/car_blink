export interface ServiceRateRow {
  workshopName: string;
  location: string;
  rating: number;
  reviewCount: string;
  fullServicePrice: string;
  oilChangePrice: string;
}

export const SERVICE_RATES_LIST: ServiceRateRow[] = [
  {
    workshopName: "Elite Auto Service",
    location: "Gurugram, Delhi NCR",
    rating: 4.9,
    reviewCount: "1.2K",
    fullServicePrice: "₹4,500",
    oilChangePrice: "₹1,499",
  },
  {
    workshopName: "German Experts",
    location: "Okhla Phase 2, Delhi",
    rating: 4.8,
    reviewCount: "856",
    fullServicePrice: "₹5,200",
    oilChangePrice: "₹1,799",
  },
  {
    workshopName: "Quick Fit Auto",
    location: "Noida Sector 16",
    rating: 4.9,
    reviewCount: "2.1K",
    fullServicePrice: "₹4,800",
    oilChangePrice: "₹1,599",
  },
  {
    workshopName: "Pro Car Care",
    location: "Vasant Kunj, Delhi",
    rating: 4.7,
    reviewCount: "643",
    fullServicePrice: "₹5,000",
    oilChangePrice: "₹1,699",
  },
];

export interface MapPinPosition {
  top: string;
  left: string;
}

export const MAP_PIN_POSITIONS: MapPinPosition[] = [
  { top: "28%", left: "38%" },
  { top: "48%", left: "62%" },
  { top: "62%", left: "34%" },
  { top: "40%", left: "78%" },
];
