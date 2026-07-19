// Data structure for How It Works steps

export interface StepData {
  number: number;
  title: string;
  description: string;
  iconName: "Car" | "FileSearch" | "Calendar";
}

export const HOW_IT_WORKS_STEPS: StepData[] = [
  {
    number: 1,
    title: "Enter Your Car Details",
    description: "Select your car make, model and service type",
    iconName: "Car",
  },
  {
    number: 2,
    title: "Compare Prices",
    description: "See real-time prices from verified workshops near you",
    iconName: "FileSearch",
  },
  {
    number: 3,
    title: "Choose & Book",
    description: "Pick the best deal and book your service",
    iconName: "Calendar",
  },
];
