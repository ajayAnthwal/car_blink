"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const inputClasses =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </span>
      {children}
    </label>
  );
}

export default function PartnerSignupPage() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    city: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
      <section className="relative overflow-hidden bg-[#0B1220]">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-6xl px-5 py-16 text-center sm:px-6 lg:px-8 sm:py-20">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-orange-400 hover:text-orange-300"
          >
            <span className="text-white font-bold tracking-tight">
              Car<span className="text-orange-500">Blink</span>
            </span>
          </Link>
          <h1 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Become a <span className="text-orange-500">workshop partner</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
            Join 300+ verified workshops and grow your business with steady,
            qualified bookings.
          </p>
        </div>
      </section>

      <section className="-mt-10 pb-20">
        <div className="mx-auto w-full max-w-lg px-5 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center rounded-xl border border-orange-200 bg-orange-50 px-6 py-10 text-center">
                <CheckCircle2 className="h-10 w-10 text-orange-500" />
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  Application received!
                </h3>
                <p className="mt-1 max-w-sm text-sm text-slate-600">
                  Thanks for applying, {form.name || "partner"}. Our team will
                  reach out to {form.email || "you"} shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      business: "",
                      email: "",
                      phone: "",
                      city: "",
                    });
                  }}
                  className="mt-6 text-sm font-semibold text-orange-600 hover:text-orange-700"
                >
                  Submit another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Field label="Contact Name">
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Rahul Verma"
                    className={inputClasses}
                  />
                </Field>

                <Field label="Workshop / Business Name">
                  <div className="relative">
                    <Building2 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      name="business"
                      required
                      value={form.business}
                      onChange={handleChange}
                      placeholder="SpeedFix Garage"
                      className={`${inputClasses} pl-10`}
                    />
                  </div>
                </Field>

                <Field label="Email Address">
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`${inputClasses} pl-10`}
                    />
                  </div>
                </Field>

                <Field label="Phone Number">
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`${inputClasses} pl-10`}
                    />
                  </div>
                </Field>

                <Field label="City">
                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      name="city"
                      required
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Gurugram"
                      className={`${inputClasses} pl-10`}
                    />
                  </div>
                </Field>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600"
                >
                  Apply to Partner
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>
              </form>
            )}

            <p className="mt-6 text-center text-sm text-slate-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-orange-600 hover:text-orange-700"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
