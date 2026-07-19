"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, LogIn, ArrowRight } from "lucide-react";

const inputClasses =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20";

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

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300"
          >
            <span className="text-white font-bold tracking-tight">
              Car<span className="text-orange-500">Blink</span>
            </span>
          </Link>
          <h1 className="mx-auto mt-6 max-w-xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Welcome <span className="text-orange-500">back</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
            Log in to manage your bookings, quotes, and workshop partnerships.
          </p>
        </div>
      </section>

      <section className="-mt-10 pb-20">
        <div className="mx-auto w-full max-w-md px-5 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center rounded-xl border border-orange-200 bg-orange-50 px-6 py-10 text-center">
                <LogIn className="h-10 w-10 text-orange-500" />
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  You're logged in!
                </h3>
                <p className="mt-1 max-w-sm text-sm text-slate-600">
                  Welcome back, {form.email || "driver"}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-orange-600 hover:text-orange-700"
                >
                  Log out
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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

                <Field label="Password">
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="password"
                      name="password"
                      required
                      value={form.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className={`${inputClasses} pl-10`}
                    />
                  </div>
                </Field>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600"
                >
                  Log In
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>
              </form>
            )}

            <p className="mt-6 text-center text-sm text-slate-600">
              Want to partner your workshop?{" "}
              <Link
                href="/partner-signup"
                className="font-semibold text-orange-600 hover:text-orange-700"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
