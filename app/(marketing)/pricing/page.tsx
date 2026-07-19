"use client";
import { useState } from "react";
import {
  CheckCircle2,
  X,
  ArrowRight,
  Wallet,
  Wrench,
  ChevronDown,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Static content                                                    */
/* ------------------------------------------------------------------ */

const OWNER_FEATURES = [
  "Compare quotes from verified workshops",
  "Book any service — no platform fee",
  "Secure, protected payments",
  "Ratings & reviews on every workshop",
  "24/7 support for booking issues",
];

const WORKSHOP_PLANS = [
  {
    name: "Starter",
    price: { monthly: "Free", yearly: "Free" },
    period: "forever",
    tagline: "For workshops just getting started with online leads.",
    features: [
      { label: "Listing on CarBlink search", included: true },
      { label: "Up to 20 leads / month", included: true },
      { label: "Standard dashboard access", included: true },
      { label: "Payout in 3–5 business days", included: true },
      { label: "Priority placement in search", included: false },
      { label: "Advanced analytics", included: false },
      { label: "Dedicated partner support", included: false },
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Growth",
    price: { monthly: "₹1,499", yearly: "₹1,199" },
    period: "/month",
    tagline: "For workshops ready to scale bookings city-wide.",
    features: [
      { label: "Listing on CarBlink search", included: true },
      { label: "Unlimited leads", included: true },
      { label: "Advanced dashboard + analytics", included: true },
      { label: "Payout in 48 hours", included: true },
      { label: "Priority placement in search", included: true },
      { label: "Featured in city campaigns", included: true },
      { label: "Dedicated partner support", included: true },
    ],
    cta: "Choose Growth",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", yearly: "Custom" },
    period: "pricing",
    tagline: "For multi-branch workshop chains and franchises.",
    features: [
      { label: "Everything in Growth", included: true },
      { label: "Multi-branch management", included: true },
      { label: "Custom commission rates", included: true },
      { label: "API access", included: true },
      { label: "Account manager", included: true },
      { label: "Custom reporting", included: true },
      { label: "SLA-backed support", included: true },
    ],
    cta: "Talk to Sales",
    highlighted: false,
  },
];

const FAQS = [
  {
    q: "Is CarBlink really free for car owners?",
    a: "Yes. Comparing quotes and booking a service through CarBlink costs nothing extra — you pay the workshop's quoted price, with no hidden platform fee.",
  },
  {
    q: "How does CarBlink make money?",
    a: "We charge workshops a small commission on confirmed bookings, plus optional subscription plans like Growth for workshops that want more visibility and leads.",
  },
  {
    q: "Can I switch between workshop plans anytime?",
    a: "Yes, you can upgrade, downgrade or cancel your plan anytime from your partner dashboard — changes apply from the next billing cycle.",
  },
  {
    q: "Is there a contract or lock-in period?",
    a: "No lock-in on Starter or Growth. Enterprise plans include a custom agreement tailored to your workshop chain's needs.",
  },
];

/* ------------------------------------------------------------------ */
/*  Small building blocks                                             */
/* ------------------------------------------------------------------ */

function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold tracking-wide text-orange-600 ring-1 ring-orange-200">
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PricingPage() {
  const [audience, setAudience] = useState("owners"); // "owners" | "workshops"
  const [billing, setBilling] = useState("monthly"); // "monthly" | "yearly"
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-[#0B1220]">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        <Container className="relative py-20 text-center sm:py-24">
          <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-orange-400 ring-1 ring-white/10">
            Pricing
          </span>
          <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl">
            Simple pricing, <span className="text-orange-500">no surprises</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Free forever for car owners. Flexible plans for workshops that
            want to grow. No hidden fees, ever.
          </p>

          {/* audience toggle */}
          <div className="mx-auto mt-9 inline-flex rounded-lg border border-white/10 bg-white/5 p-1">
            <button
              onClick={() => setAudience("owners")}
              className={`flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition ${
                audience === "owners"
                  ? "bg-orange-500 text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Wallet className="h-4 w-4" />
              For Car Owners
            </button>
            <button
              onClick={() => setAudience("workshops")}
              className={`flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition ${
                audience === "workshops"
                  ? "bg-orange-500 text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Wrench className="h-4 w-4" />
              For Workshops
            </button>
          </div>
        </Container>
      </section>

      {/* ---------------- CAR OWNERS ---------------- */}
      {audience === "owners" && (
        <section className="py-20 sm:py-24">
          <Container className="max-w-2xl">
            <div className="rounded-2xl border-2 border-orange-500 bg-white p-8 text-center shadow-lg shadow-orange-500/10 sm:p-12">
              <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600 ring-1 ring-orange-200">
                Always Free
              </span>
              <p className="mt-5 text-5xl font-extrabold text-slate-900">
                ₹0
              </p>
              <p className="mt-1 text-sm text-slate-500">
                No subscription, no booking fee, no fine print.
              </p>

              <ul className="mt-8 space-y-3 text-left">
                {OWNER_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" />
                    <span className="text-sm text-slate-700 sm:text-base">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="group mt-9 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600 sm:w-auto sm:px-10">
                Compare Prices Now
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
            </div>
          </Container>
        </section>
      )}

      {/* ---------------- WORKSHOPS ---------------- */}
      {audience === "workshops" && (
        <section className="py-20 sm:py-24">
          <Container>
            {/* billing toggle */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-1">
                <button
                  onClick={() => setBilling("monthly")}
                  className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                    billing === "monthly"
                      ? "bg-slate-900 text-white"
                      : "text-slate-600"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBilling("yearly")}
                  className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition ${
                    billing === "yearly"
                      ? "bg-slate-900 text-white"
                      : "text-slate-600"
                  }`}
                >
                  Yearly
                  <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-bold text-orange-600">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {WORKSHOP_PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border p-8 ${
                    plan.highlighted
                      ? "border-orange-500 bg-[#0B1220] text-white shadow-xl shadow-orange-500/10 lg:-translate-y-3"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 right-8 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  )}

                  <h3
                    className={`text-lg font-semibold ${
                      plan.highlighted ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`mt-1 text-sm ${
                      plan.highlighted ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold">
                      {plan.price[billing]}
                    </span>
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {plan.price[billing] !== "Free" &&
                      plan.price[billing] !== "Custom"
                        ? plan.period
                        : plan.price[billing] === "Free"
                        ? plan.period
                        : plan.period}
                    </span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li
                        key={f.label}
                        className="flex items-start gap-2 text-sm"
                      >
                        {f.included ? (
                          <CheckCircle2
                            className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                              plan.highlighted
                                ? "text-orange-400"
                                : "text-orange-500"
                            }`}
                          />
                        ) : (
                          <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-300" />
                        )}
                        <span
                          className={
                            f.included
                              ? plan.highlighted
                                ? "text-slate-200"
                                : "text-slate-600"
                              : "text-slate-400 line-through"
                          }
                        >
                          {f.label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`mt-8 w-full rounded-lg px-5 py-3 text-sm font-semibold transition ${
                      plan.highlighted
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ---------------- FAQ ---------------- */}
      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <div className="text-center">
            <Eyebrow>FAQs</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Pricing questions, answered
            </h2>
          </div>

          <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-slate-50">
            {FAQS.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={item.q}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-sm font-semibold text-slate-900 sm:text-base">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 flex-shrink-0 text-slate-500 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="bg-[#0B1220] py-16 sm:py-20">
        <Container className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Still have questions?
            </h2>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">
              Our team is happy to walk you through the right plan for you.
            </p>
          </div>
          <button className="inline-flex flex-shrink-0 items-center gap-2 rounded-lg bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600">
            Contact Sales
            <ArrowRight className="h-4 w-4" />
          </button>
        </Container>
      </section>
    </div>
  );
}