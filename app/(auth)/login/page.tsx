"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, LogOut, ArrowRight, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import { Logo } from "@/components/layout/Navbar";

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
    <div className="min-h-screen bg-neutral-bg font-body text-neutral-text-dark antialiased">
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-neutral-hero-bg pt-14 pb-28 md:pt-16 md:pb-36">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-blue/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent-orange/10 blur-3xl" />

        <Container className="relative z-10 text-center">
          <div className="flex justify-center">
            <Logo />
          </div>
          <Badge variant="info" className="bg-white border border-primary-blue/20 text-primary-blue shadow-sm mx-auto mt-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            Secure Login
          </Badge>
          <h1 className="font-heading font-black text-3xl sm:text-4xl leading-tight tracking-tight mt-5 max-w-md mx-auto">
            Welcome <span className="text-primary-blue">back</span>
          </h1>
          <p className="font-body text-sm sm:text-base text-neutral-text-muted leading-relaxed mt-3 max-w-sm mx-auto">
            Log in to manage your bookings, quotes, and workshop
            partnerships.
          </p>
        </Container>
      </section>

      {/* ---------------- FORM CARD ---------------- */}
      <section className="-mt-16 pb-24 relative z-20">
        <Container className="max-w-md">
          <Card className="p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center rounded-2xl border border-primary-blue/15 bg-primary-blue/5 px-6 py-10 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-blue/10">
                  <ShieldCheck className="h-7 w-7 text-primary-blue" />
                </div>
                <h3 className="font-heading font-bold mt-4 text-base text-neutral-text-dark">
                  You&apos;re logged in!
                </h3>
                <p className="font-body mt-1 max-w-sm text-sm text-neutral-text-muted">
                  Welcome back, {form.email || "driver"}.
                </p>
                <Button
                  variant="link"
                  leftIcon={<LogOut className="h-3.5 w-3.5" />}
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Log out
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  icon={<Mail className="h-4 w-4" />}
                />

                <Input
                  label="Password"
                  type="password"
                  name="password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  icon={<Lock className="h-4 w-4" />}
                />

                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center gap-2 font-body text-neutral-text-muted">
                    <input
                      type="checkbox"
                      className="h-3.5 w-3.5 rounded border-neutral-text-muted/40 text-primary-blue focus:ring-primary-blue"
                    />
                    Remember me
                  </label>
                  <Link
                    href="/contact"
                    className="font-heading font-semibold text-primary-blue hover:text-primary-blue-dark"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Log In
                </Button>
              </form>
            )}

            <p className="font-body mt-6 text-center text-sm text-neutral-text-muted">
              Want to partner your workshop?{" "}
              <Link
                href="/partner-signup"
                className="font-heading font-semibold text-primary-blue hover:text-primary-blue-dark"
              >
                Sign up here
              </Link>
            </p>
          </Card>
        </Container>
      </section>
    </div>
  );
}
