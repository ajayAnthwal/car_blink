"use client";
import { useState } from "react";
import {
  Wrench,
  TrendingUp,
  ShieldCheck,
  CreditCard,
  BarChart3,
  Megaphone,
  ClipboardList,
  UserCheck,
  Bell,
  Rocket,
  Star,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Static content — swap with API data whenever you're ready         */
/* ------------------------------------------------------------------ */

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "More Bookings, Every Month",
    desc: "Get matched with car owners actively searching for services in your city — no cold leads.",
  },
  {
    icon: UserCheck,
    title: "Verified Leads Only",
    desc: "Every request comes from a verified CarBlink user, so your team spends time quoting, not filtering spam.",
  },
  {
    icon: CreditCard,
    title: "Zero Setup Cost",
    desc: "Listing your workshop is free. You only pay a small commission when a booking is confirmed.",
  },
  {
    icon: ShieldCheck,
    title: "Secure, On-Time Payouts",
    desc: "Payments are collected upfront and settled to your account within 48 hours of job completion.",
  },
  {
    icon: BarChart3,
    title: "A Dashboard Built for Workshops",
    desc: "Track quotes, bookings, ratings and earnings in one place — on desktop or your phone.",
  },
  {
    icon: Megaphone,
    title: "Marketing, Handled for You",
    desc: "Your workshop gets featured across CarBlink's search, city pages and seasonal campaigns at no extra cost.",
  },
];

const STEPS = [
  {
    icon: ClipboardList,
    title: "Register your workshop",
    desc: "Share your services, pricing and location. Takes about 10 minutes.",
  },
  {
    icon: ShieldCheck,
    title: "Get verified",
    desc: "Our team checks your documents and does a quick quality visit.",
  },
  {
    icon: Bell,
    title: "Start receiving requests",
    desc: "Quotes from car owners near you start landing in your dashboard.",
  },
  {
    icon: Rocket,
    title: "Grow with CarBlink",
    desc: "Convert quotes to bookings and watch your monthly revenue climb.",
  },
];

const STATS = [
  { value: "300+", label: "Verified Workshops" },
  { value: "50,000+", label: "Bookings Delivered" },
  { value: "25+", label: "Cities Covered" },
  { value: "4.8/5", label: "Average Partner Rating" },
];

const TESTIMONIALS = [
  {
    quote:
      "Since joining CarBlink, our bay utilisation went from 60% to nearly full every weekday. The dashboard makes follow-ups painless.",
    name: "Ravi Malhotra",
    role: "Owner, Malhotra Auto Care, Delhi",
  },
  {
    quote:
      "No upfront fees, and payouts actually arrive on time. That alone makes CarBlink different from every other platform we tried.",
    name: "Sana Sheikh",
    role: "Manager, QuickFix Garage, Pune",
  },
  {
    quote:
      "We picked up 40+ new customers in our first month, most of whom now book directly with us for repeat service.",
    name: "Arvind Nair",
    role: "Founder, Nair Motor Works, Bengaluru",
  },
];

const PLANS = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    tagline: "For workshops just getting started with online leads.",
    features: [
      "Listing on CarBlink search",
      "Up to 20 leads / month",
      "Standard dashboard access",
      "Payout in 3–5 business days",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹1,499",
    period: "/month",
    tagline: "For workshops ready to scale bookings city-wide.",
    features: [
      "Priority placement in search",
      "Unlimited leads",
      "Advanced dashboard + analytics",
      "Payout in 48 hours",
      "Dedicated partner support",
    ],
    cta: "Choose Growth",
    highlighted: true,
  },
];

const FAQS = [
  {
    q: "Is there any cost to list my workshop on CarBlink?",
    a: "Listing is completely free. On the Starter plan we only charge a small commission on confirmed bookings — you don't pay unless you earn.",
  },
  {
    q: "How long does verification take?",
    a: "Most workshops are verified within 2–3 business days after documents are submitted and our team completes a short quality check.",
  },
  {
    q: "How and when do I get paid?",
    a: "Customers pay through CarBlink at the time of booking. Funds are released to your linked bank account within 48 hours of job completion on the Growth plan, or 3–5 business days on Starter.",
  },
  {
    q: "Can I set my own prices?",
    a: "Yes. You control pricing for every service you list, and you can update it any time from your dashboard.",
  },
  {
    q: "What if I want to leave the platform?",
    a: "There's no lock-in. You can pause or remove your listing anytime from Settings, with no cancellation fee.",
  },
];

/* ------------------------------------------------------------------ */
/*  Small building blocks                                             */
/* ------------------------------------------------------------------ */

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold tracking-wide text-orange-600 ring-1 ring-orange-200">
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ForWorkshopsPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-[#0B1220]">
        {/* ambient glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        <Container className="relative py-20 sm:py-24 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            {/* left copy */}
            <div>
              <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-orange-400 ring-1 ring-white/10">
                Built for Workshop Owners
              </span>

              <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl">
                Fill Every Bay.
                <br />
                <span className="text-orange-500">Grow Every Month.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Join 300+ verified workshops getting a steady stream of
                genuine service requests from car owners near you — with
                zero setup cost and payouts you can count on.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="group inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600">
                  Become a Partner
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>
                <button className="rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Partner Login
                </button>
              </div>

              <p className="mt-4 text-xs text-slate-400">
                No credit card required · Verification in 2–3 business days
              </p>
            </div>

            {/* right stat card */}
            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
                <div className="grid grid-cols-2 gap-6">
                  {STATS.map((s) => (
                    <div key={s.label}>
                      <p className="text-2xl font-extrabold text-white sm:text-3xl">
                        {s.value}
                      </p>
                      <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5">
                  <div className="flex -space-x-2">
                    {["RM", "SS", "AN", "PK"].map((i) => (
                      <span
                        key={i}
                        className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0B1220] bg-orange-500 text-[10px] font-semibold text-white"
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-300">
                    Joined by workshop owners across 25+ cities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- WHY PARTNER ---------------- */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Why Partner With Us</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Everything a workshop needs to grow online
            </h2>
            <p className="mt-3 text-slate-600">
              Skip the ad spend and word-of-mouth guesswork. CarBlink brings
              demand, tools and trust to your workshop — all in one place.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Getting Started</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Four steps to your first booking
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="relative">
                {i < STEPS.length - 1 && (
                  <div className="absolute left-6 top-12 hidden h-px w-full bg-slate-200 lg:block" />
                )}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#0B1220] text-white">
                  <Icon className="h-5 w-5" />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Partner Stories</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Workshops that grew with CarBlink
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="flex gap-0.5 text-orange-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                  "{t.quote}"
                </p>
                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-sm font-semibold text-slate-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- PRICING ---------------- */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Simple Pricing</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Pick a plan that fits your workshop
            </h2>
            <p className="mt-3 text-slate-600">
              Start free, upgrade whenever you're ready for more volume.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:max-w-3xl">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "border-orange-500 bg-[#0B1220] text-white shadow-xl shadow-orange-500/10"
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
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                          plan.highlighted ? "text-orange-400" : "text-orange-500"
                        }`}
                      />
                      <span
                        className={
                          plan.highlighted ? "text-slate-200" : "text-slate-600"
                        }
                      >
                        {f}
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

      {/* ---------------- FAQ ---------------- */}
      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <div>
            <Eyebrow>FAQs</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Questions, answered
            </h2>
          </div>

          <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
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
      <section className="bg-[#0B1220] py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-center justify-between gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center sm:p-14 lg:flex-row lg:text-left">
            <div>
              <div className="flex justify-center lg:justify-start">
                <Wrench className="h-9 w-9 text-orange-500" />
              </div>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                Ready to fill your bays with real bookings?
              </h2>
              <p className="mt-2 max-w-lg text-sm text-slate-300 sm:text-base">
                Register your workshop today — it's free, and most workshops
                get verified within 2–3 business days.
              </p>
            </div>
            <button className="group inline-flex flex-shrink-0 items-center gap-2 rounded-lg bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600">
              Become a Partner
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
}