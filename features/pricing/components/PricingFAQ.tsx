"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import { PRICING_FAQS } from "../data/pricingPageData";

export default function PricingFAQ() {
  const [openId, setOpenId] = useState<string | null>(PRICING_FAQS[0]?.id ?? null);

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="max-w-3xl">
        <div className="text-center">
          <Badge variant="info" className="mb-4">
            FAQs
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-neutral-text-dark tracking-tight">
            Pricing questions, answered
          </h2>
        </div>

        <Card className="mt-10 bg-neutral-bg border border-neutral-text-muted/15 rounded-2xl p-2 sm:p-4">
          <Accordion>
            {PRICING_FAQS.map((item) => (
              <AccordionItem
                key={item.id}
                id={item.id}
                trigger={item.q}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
                showPlusMinus
              >
                <p>{item.a}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </Container>
    </section>
  );
}
