"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import { WORKSHOP_FAQS } from "../data/forWorkshopsPageData";

export default function WorkshopsFAQ() {
  const [openId, setOpenId] = useState<string | null>(WORKSHOP_FAQS[0]?.id ?? null);

  return (
    <section className="bg-neutral-bg py-20 sm:py-24">
      <Container className="max-w-3xl">
        <div>
          <Badge variant="info" className="mb-4">
            FAQs
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-neutral-text-dark tracking-tight">
            Questions, answered
          </h2>
        </div>

        <Card className="mt-10 bg-white border border-neutral-text-muted/15 rounded-2xl p-2 sm:p-4">
          <Accordion>
            {WORKSHOP_FAQS.map((item) => (
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
