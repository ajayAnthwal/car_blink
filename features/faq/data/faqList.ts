export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_LIST: FAQItemData[] = [
  {
    id: "faq-1",
    question: "How does Car Blink work?",
    answer: "Car Blink allows you to compare car service quotes from top verified workshops in your city. Just choose your car, select the required service, and get live workshop offers.",
  },
  {
    id: "faq-2",
    question: "Is Car Blink free to use?",
    answer: "Yes! Car Blink is 100% free to use. There are no hidden service charges, booking fees, or price markup.",
  },
  {
    id: "faq-3",
    question: "Are the workshops verified?",
    answer: "Absolutely. We perform strict quality checks on tools, mechanic expertise, and user reviews before onboarding any workshop.",
  },
  {
    id: "faq-4",
    question: "Can I pay online?",
    answer: "Yes, you can pay online securely using UPI, Credit/Debit cards, or Net Banking after your service is completed.",
  },
];
