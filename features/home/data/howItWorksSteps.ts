// Data structure for How It Works steps

export interface StepData {
  number: number;
  title: string;
  description: string;
  iconName: "Clipboard" | "Mail" | "Scale" | "CalendarCheck";
}

export const HOW_IT_WORKS_STEPS: StepData[] = [
  {
    number: 1,
    title: "Submit Request",
    description: "Tell us about your car and required service in under 30 seconds.",
    iconName: "Clipboard",
  },
  {
    number: 2,
    title: "Get Multiple Quotes",
    description: "We send your request to verified workshops and get the best quotes.",
    iconName: "Mail",
  },
  {
    number: 3,
    title: "Compare Prices",
    description: "Compare prices, ratings, services and choose the best deal.",
    iconName: "Scale",
  },
  {
    number: 4,
    title: "Book Best Deal",
    description: "Book your service and pay securely. It's that simple!",
    iconName: "CalendarCheck",
  },
];
