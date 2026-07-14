export interface LiveQuoteItem {
  carName: string;
  serviceType: string;
  location: string;
  originalPrice: string;
  discountedPrice: string;
  savings: string;
  carImage: string;
}

export const LIVE_QUOTES_LIST: LiveQuoteItem[] = [
  {
    carName: "Honda City",
    serviceType: "Periodic Service",
    location: "Mumbai",
    originalPrice: "₹7,200",
    discountedPrice: "₹4,850",
    savings: "₹2,350",
    carImage: "/images/hero-car.png",
  },
  {
    carName: "Maruti Swift",
    serviceType: "AC Repair",
    location: "Pune",
    originalPrice: "₹3,500",
    discountedPrice: "₹2,400",
    savings: "₹1,100",
    carImage: "/images/hero-car.png",
  },
  {
    carName: "Hyundai Creta",
    serviceType: "Dent & Paint",
    location: "Bangalore",
    originalPrice: "₹16,000",
    discountedPrice: "₹11,200",
    savings: "₹4,800",
    carImage: "/images/hero-car.png",
  },
];
