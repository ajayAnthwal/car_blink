"use client";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Static content                                                    */
/* ------------------------------------------------------------------ */

const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 98765 43210", "Mon–Sat, 9am – 8pm"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["support@carblink.in", "We reply within 24 hours"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["4th Floor, DLF Cyber City", "Gurugram, Haryana 122002"],
  },
  {
    icon: Clock,
    title: "Support Hours",
    lines: ["Mon – Sat: 9:00am – 8:00pm", "Sunday: 10:00am – 4:00pm"],
  },
];

const TOPICS = [
  "General Enquiry",
  "Booking Support",
  "Become a Workshop Partner",
  "Insurance Claim Help",
  "Feedback",
];

const FAQS = [
  {
    q: "How quickly will I get a response?",
    a: "Our team typically replies within 24 hours on business days. For urgent booking issues, calling our support line gets you a faster answer.",
  },
  {
    q: "I want to partner my workshop — who do I contact?",
    a: "Select 'Become a Workshop Partner' in the form below, or reach out directly to partnerships@carblink.in.",
  },
  {
    q: "Do you have offices outside Gurugram?",
    a: "Our head office is in Gurugram, but our support and operations team covers all 25+ cities we operate in.",
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputClasses =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20";

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: TOPICS[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-[#0B1220]">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        <Container className="relative py-20 text-center sm:py-24">
          <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-orange-400 ring-1 ring-white/10">
            Contact Us
          </span>
          <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl">
            We'd love to <span className="text-orange-500">hear from you</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Questions about a booking, a workshop partnership, or just
            feedback — our team is one message away.
          </p>
        </Container>
      </section>

      {/* ---------------- CONTACT INFO CARDS ---------------- */}
      <section className="-mt-10 pb-4">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_INFO.map(({ icon: Icon, title, lines }) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-slate-900">
                  {title}
                </h3>
                <div className="mt-1.5 space-y-0.5">
                  {lines.map((l) => (
                    <p key={l} className="text-sm text-slate-600">
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- FORM + MAP ---------------- */}
      <section className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Send us a message
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Fill in the form and our team will get back to you within
                24 hours.
              </p>

              {submitted ? (
                <div className="mt-8 flex flex-col items-center rounded-xl border border-orange-200 bg-orange-50 px-6 py-10 text-center">
                  <CheckCircle2 className="h-10 w-10 text-orange-500" />
                  <h3 className="mt-4 text-base font-semibold text-slate-900">
                    Message sent!
                  </h3>
                  <p className="mt-1 max-w-sm text-sm text-slate-600">
                    Thanks for reaching out — someone from our team will
                    reply to {form.email || "your email"} shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        topic: TOPICS[0],
                        message: "",
                      });
                    }}
                    className="mt-6 text-sm font-semibold text-orange-600 hover:text-orange-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Full Name">
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Aditya Sharma"
                        className={inputClasses}
                      />
                    </Field>
                    <Field label="Phone Number">
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={inputClasses}
                      />
                    </Field>
                  </div>

                  <Field label="Email Address">
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClasses}
                    />
                  </Field>

                  <Field label="What's this about?">
                    <select
                      name="topic"
                      value={form.topic}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      {TOPICS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Message">
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      className={`${inputClasses} resize-none`}
                    />
                  </Field>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600 sm:w-auto"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* map / office */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="flex h-56 items-center justify-center bg-slate-100">
                <div className="text-center">
                  <MapPin className="mx-auto h-8 w-8 text-slate-400" />
                  <p className="mt-2 text-sm text-slate-500">
                    Map preview
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-sm font-semibold text-slate-900">
                  CarBlink Head Office
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  4th Floor, DLF Cyber City, Gurugram, Haryana 122002
                </p>
                <p className="mt-4 text-sm font-semibold text-slate-900">
                  Nearest Metro
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Cyber City Rapid Metro Station — 5 min walk
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <div className="text-center">
            <Eyebrow>FAQs</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Before you write in
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
    </div>
  );
}