"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Accordion from "@/components/ui/Accordion";
import FaqAccordionItem from "./FaqAccordionItem";
import { FAQ_LIST } from "../data/faqList";

interface FAQSectionProps {
  className?: string;
}

export default function FAQSection({ className = "" }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Card className={`bg-white border border-neutral-text-muted/15 rounded-3xl p-6 shadow-md w-full flex flex-col justify-between ${className}`}>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-text-muted/15 mb-6">
          <h3 className="font-heading font-black text-xl text-primary-navy">
            Frequently Asked Questions
          </h3>
          <Link
            href="/faq"
            className="flex items-center gap-1 font-heading font-bold text-xs text-primary-blue hover:underline"
          >
            View All
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Accordion List */}
        <Accordion className="w-full">
          {FAQ_LIST.map((faq) => (
            <FaqAccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </Accordion>
      </div>
    </Card>
  );
}
