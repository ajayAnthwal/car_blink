import React from "react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { ABOUT_VALUES } from "../data/aboutContent";

export default function AboutValues() {
  return (
    <section className="py-20 md:py-28 bg-neutral-bg">
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="info" className="mb-4">
            The CarBlink Standard
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-neutral-text-dark tracking-tight mb-3">
            The principles behind every decision
          </h2>
          <p className="font-body text-neutral-text-muted max-w-md">
            What we stand for, and what you can always expect from us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_VALUES.map(({ icon: Icon, title, desc }) => (
            <Card
              key={title}
              hoverable
              className="flex flex-col items-center text-center p-6 pt-8 bg-white border border-neutral-text-muted/15 rounded-2xl h-full"
            >
              <div className="w-16 h-16 rounded-full bg-primary-blue/10 flex items-center justify-center mb-4">
                <Icon className="w-7 h-7 text-primary-blue" />
              </div>
              <h3 className="font-heading font-bold text-base text-neutral-text-dark mb-1.5 leading-tight">
                {title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-neutral-text-muted leading-relaxed">
                {desc}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
