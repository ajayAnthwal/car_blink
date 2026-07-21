"use client";

import React, { useState } from "react";
import { CheckCircle2, X, ArrowRight, Wallet, Wrench } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { OWNER_FEATURES, WORKSHOP_PLANS } from "../data/pricingPageData";

export default function PricingContent() {
  const [audience, setAudience] = useState<"owners" | "workshops">("owners");
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <>
      {/* Audience toggle */}
      <div className="flex justify-center -mt-8 relative z-10">
        <div className="inline-flex rounded-xl border border-neutral-text-muted/15 bg-white p-1 shadow-lg shadow-black/5">
          <button
            onClick={() => setAudience("owners")}
            className={`flex items-center gap-2 rounded-lg px-5 py-2.5 font-heading text-sm font-semibold transition ${
              audience === "owners"
                ? "bg-primary-blue text-white"
                : "text-neutral-text-muted hover:text-neutral-text-dark"
            }`}
          >
            <Wallet className="h-4 w-4" />
            For Car Owners
          </button>
          <button
            onClick={() => setAudience("workshops")}
            className={`flex items-center gap-2 rounded-lg px-5 py-2.5 font-heading text-sm font-semibold transition ${
              audience === "workshops"
                ? "bg-primary-blue text-white"
                : "text-neutral-text-muted hover:text-neutral-text-dark"
            }`}
          >
            <Wrench className="h-4 w-4" />
            For Workshops
          </button>
        </div>
      </div>

      {/* Car owners */}
      {audience === "owners" && (
        <section className="py-16 sm:py-20">
          <Container className="max-w-2xl">
            <Card className="rounded-2xl border-2 border-primary-blue bg-white p-8 text-center shadow-lg shadow-primary-blue/10 sm:p-12">
              <Badge variant="success" className="bg-success/10 text-success border-success/20">
                Always Free
              </Badge>
              <p className="mt-5 font-heading font-black text-5xl text-neutral-text-dark">
                ₹0
              </p>
              <p className="mt-1 font-body text-sm !text-black">
                No subscription, no booking fee, no fine print.
              </p>

              <ul className="mt-8 space-y-3 text-left">
                {OWNER_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                    <span className="font-body text-sm text-neutral-text-dark sm:text-base">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant="primary"
                size="lg"
                href="/quotes"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="mt-9 w-full sm:w-auto"
              >
                Compare Prices Now
              </Button>
            </Card>
          </Container>
        </section>
      )}

      {/* Workshops */}
      {audience === "workshops" && (
        <section className="py-16 sm:py-20">
          <Container>
            {/* billing toggle */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 rounded-lg border border-neutral-text-muted/15 bg-white p-1">
                <button
                  onClick={() => setBilling("monthly")}
                  className={`rounded-md px-4 py-2 font-heading text-sm font-semibold transition ${
                    billing === "monthly"
                      ? "bg-primary-navy text-white"
                      : "text-neutral-text-muted"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBilling("yearly")}
                  className={`flex items-center gap-2 rounded-md px-4 py-2 font-heading text-sm font-semibold transition ${
                    billing === "yearly"
                      ? "bg-primary-navy text-white"
                      : "text-neutral-text-muted"
                  }`}
                >
                  Yearly
                  <span className="rounded-full bg-accent-orange/10 px-2 py-0.5 text-[10px] font-bold text-accent-orange">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {WORKSHOP_PLANS.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl p-8 ${
                    plan.highlighted
                      ? "border-2 border-accent-orange bg-primary-navy text-white shadow-xl shadow-accent-orange/10 lg:-translate-y-3"
                      : "border border-neutral-text-muted/15 bg-white"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 right-8 rounded-full bg-accent-orange px-3 py-1 font-heading text-xs font-bold text-white">
                      Most Popular
                    </span>
                  )}

                  <h3
                    className={`font-heading text-lg font-bold ${
                      plan.highlighted ? "text-black" : "!text-neutral-text-dark"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`mt-1 font-body text-sm ${
                      plan.highlighted ? "text-black" : "text-neutral-text-muted"
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="font-heading font-black text-3xl text-black">
                      {plan.price[billing]}
                    </span>
                    <span
                      className={`font-body text-sm ${
                        plan.highlighted ? "text-white/50" : "text-neutral-text-muted"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f.label} className="flex items-start gap-2 font-body text-sm">
                        {f.included ? (
                          <CheckCircle2
                            className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                              plan.highlighted ? "text-accent-orange" : "text-success"
                            }`}
                          />
                        ) : (
                          <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-text-muted/40" />
                        )}
                        <span
                          className={
                            f.included
                              ? plan.highlighted
                                ? "text-black"
                                : "text-neutral-text-dark"
                              : "text-neutral-text-muted/60 line-through"
                          }
                        >
                          {f.label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.highlighted ? "accent" : "primary"}
                    size="md"
                    fullWidth
                    className="mt-8"
                  >
                    {plan.cta}
                  </Button>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
