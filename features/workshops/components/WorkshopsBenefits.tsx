import React from "react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { WORKSHOP_BENEFITS } from "../data/forWorkshopsPageData";

export default function WorkshopsBenefits() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <div className="max-w-2xl">
          <Badge variant="info" className="mb-4">
            Why Partner With Us
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-neutral-text-dark tracking-tight">
            Everything a workshop needs to grow online
          </h2>
          <p className="mt-3 font-body text-neutral-text-muted">
            Skip the ad spend and word-of-mouth guesswork. CarBlink brings
            demand, tools and trust to your workshop — all in one place.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WORKSHOP_BENEFITS.map(({ icon: Icon, title, desc }) => (
            <Card
              key={title}
              hoverable
              className="bg-white border border-neutral-text-muted/15 rounded-2xl p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-blue/10 text-primary-blue transition group-hover:bg-primary-blue group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading font-bold text-base text-neutral-text-dark">
                {title}
              </h3>
              <p className="mt-1.5 font-body text-sm leading-relaxed text-neutral-text-muted">
                {desc}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
