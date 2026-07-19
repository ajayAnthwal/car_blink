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
    location: "Al Quoz, Dubai",
    rating: 4.9,
    reviewCount: "1.2K",
    fullServicePrice: "AED 620",
    oilChangePrice: "AED 199",
  },
  {
    workshopName: "German Experts",
    location: "Sheikh Zayed Rd",
    rating: 4.8,
    reviewCount: "856",
    fullServicePrice: "AED 690",
    oilChangePrice: "AED 219",
  },
  {
    workshopName: "Quick Fit Auto",
    location: "Deira",
    rating: 4.9,
    reviewCount: "2.1K",
    fullServicePrice: "AED 650",
    oilChangePrice: "AED 205",
  },
  {
    workshopName: "Pro Car Care",
    location: "Dubai Marina",
    rating: 4.7,
    reviewCount: "643",
    fullServicePrice: "AED 680",
    oilChangePrice: "AED 210",
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
