"use client";

import React from "react";
import { AccordionItem } from "@/components/ui/Accordion";
import { FAQItemData } from "../data/faqList";

interface FaqAccordionItemProps {
  faq: FAQItemData;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FaqAccordionItem({
  faq,
  isOpen,
  onToggle,
}: FaqAccordionItemProps) {
  return (
    <AccordionItem
      id={faq.id}
      trigger={faq.question}
      isOpen={isOpen}
      onToggle={onToggle}
      showPlusMinus
    >
      <p>{faq.answer}</p>
    </AccordionItem>
  );
}
