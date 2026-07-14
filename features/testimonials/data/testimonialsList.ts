export interface TestimonialData {
  name: string;
  location: string;
  quote: string;
  rating: number;
  source: "google" | "other";
}

export const TESTIMONIALS_LIST: TestimonialData[] = [
  {
    name: "Rahul Sharma",
    location: "Mumbai",
    quote: "Saved ₹2,500 on my car service. The process was so easy and workshops were professional.",
    rating: 5,
    source: "google",
  },
  {
    name: "Priya Verma",
    location: "Pune",
    quote: "Got multiple quotes within 2 minutes. Best platform for car services!",
    rating: 5,
    source: "google",
  },
  {
    name: "Amit Kumar",
    location: "Bangalore",
    quote: "Very transparent pricing and excellent customer support. Highly recommended!",
    rating: 5,
    source: "google",
  },
  {
    name: "Neha Singh",
    location: "Delhi",
    quote: "Finally a platform that actually helps us customers save money and time.",
    rating: 5,
    source: "google",
  },
];
