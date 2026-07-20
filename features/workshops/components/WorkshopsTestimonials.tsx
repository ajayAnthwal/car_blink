import React from "react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Rating from "@/components/ui/Rating";
import { WORKSHOP_TESTIMONIALS } from "../data/forWorkshopsPageData";

export default function WorkshopsTestimonials() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <div className="max-w-2xl">
          <Badge variant="info" className="mb-4">
            Partner Stories
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-neutral-text-dark tracking-tight">
            Workshops that grew with Car Blink
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {WORKSHOP_TESTIMONIALS.map((t) => (
            <Card
              key={t.name}
              className="flex flex-col bg-white border border-neutral-text-muted/15 rounded-2xl p-6"
            >
              <Rating value={5} />
              <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-neutral-text-dark">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 border-t border-neutral-text-muted/10 pt-4">
                <p className="font-heading font-bold text-sm text-neutral-text-dark">
                  {t.name}
                </p>
                <p className="font-body text-xs text-neutral-text-muted">{t.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
