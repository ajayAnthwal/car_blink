"use client";
import {
  Target,
  ShieldCheck,
  Handshake,
  Sparkles,
  ArrowRight,
  Linkedin,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Static content                                                    */
/* ------------------------------------------------------------------ */

const STATS = [
  { value: "300+", label: "Verified Workshops" },
  { value: "50,000+", label: "Bookings Delivered" },
  { value: "25+", label: "Cities Covered" },
  { value: "4.8/5", label: "Customer Rating" },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Trust First",
    desc: "Every workshop on CarBlink is verified before it ever shows up in your search results.",
  },
  {
    icon: Sparkles,
    title: "Transparency Always",
    desc: "No hidden charges, no inflated quotes — the price you see is the price you pay.",
  },
  {
    icon: Handshake,
    title: "Fair to Both Sides",
    desc: "We build tools that help car owners save money and workshops grow, without pitting one against the other.",
  },
  {
    icon: Target,
    title: "Customer Obsessed",
    desc: "From booking to follow-up, every decision starts with what makes the experience better for you.",
  },
];

const TIMELINE = [
  {
    year: "2021",
    title: "CarBlink is founded",
    desc: "Started in Delhi with a simple idea: make car servicing as easy to compare as flight tickets.",
  },
  {
    year: "2022",
    title: "50 workshops onboarded",
    desc: "Our first verified workshop network goes live across Delhi NCR.",
  },
  {
    year: "2023",
    title: "Expanded to 10 cities",
    desc: "Crossed 10,000 bookings and launched insurance claim assistance.",
  },
  {
    year: "2025",
    title: "300+ workshops, 25+ cities",
    desc: "CarBlink becomes one of India's most trusted car service comparison platforms.",
  },
];

const TEAM = [
  { name: "Ananya Kapoor", role: "Co-Founder & CEO", initials: "AK" },
  { name: "Rohan Verma", role: "Co-Founder & CTO", initials: "RV" },
  { name: "Meera Iyer", role: "Head of Partnerships", initials: "MI" },
  { name: "Kabir Singh", role: "Head of Operations", initials: "KS" },
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

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-[#0B1220]">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        <Container className="relative py-20 text-center sm:py-24">
          <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-orange-400 ring-1 ring-white/10">
            About CarBlink
          </span>
          <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl">
            Car care shouldn't be a
            <span className="text-orange-500"> guessing game</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            We're building India's most trusted way to find, compare and
            book car services — connecting car owners with verified
            workshops, one honest quote at a time.
          </p>
        </Container>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="border-b border-slate-200 bg-white py-12">
        <Container className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      {/* ---------------- MISSION ---------------- */}
      <section className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Our Mission</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Making every car service decision transparent
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Millions of car owners overpay or get poor service simply
              because they can't compare their options. On the other side,
              great workshops struggle to find customers beyond their
              immediate neighbourhood.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              CarBlink closes that gap. We verify every workshop on our
              platform, surface real prices upfront, and let customers pick
              based on quality and cost — not guesswork.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              What we're working toward
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="text-orange-500">—</span>
                Verified workshops in every major Indian city by 2027
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500">—</span>
                Zero-wait insurance claim assistance nationwide
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500">—</span>
                A five-minute path from "my car needs work" to a booked slot
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* ---------------- VALUES ---------------- */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>What We Stand For</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              The principles behind every decision
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
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

      {/* ---------------- TIMELINE ---------------- */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Our Journey</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              From an idea to India's car service network
            </h2>
          </div>

          <div className="mt-12 space-y-8 border-l border-slate-200 pl-8">
            {TIMELINE.map((t) => (
              <div key={t.year} className="relative">
                <span className="absolute -left-[38px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-orange-500 bg-white" />
                <p className="text-sm font-semibold text-orange-600">
                  {t.year}
                </p>
                <h3 className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">
                  {t.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- TEAM ---------------- */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              The people behind CarBlink
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <div
                key={m.name}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0B1220] text-sm font-semibold text-white">
                  {m.initials}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-slate-900">
                  {m.name}
                </h3>
                <p className="mt-0.5 text-xs text-slate-500">{m.role}</p>
                <div className="mt-3 flex justify-center">
                  <Linkedin className="h-4 w-4 text-slate-400" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="bg-[#0B1220] py-16 sm:py-20">
        <Container className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Want to be part of the journey?
            </h2>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">
              We're always looking for people who care about doing right
              by customers.
            </p>
          </div>
          <button className="inline-flex flex-shrink-0 items-center gap-2 rounded-lg bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600">
            View Open Roles
            <ArrowRight className="h-4 w-4" />
          </button>
        </Container>
      </section>
    </div>
  );
}