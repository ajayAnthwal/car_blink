"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, LogOut, ArrowRight, ShieldCheck, Phone, Eye, EyeOff } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import { Logo } from "@/components/layout/Navbar";
import { useLogin, useSendOtp, useVerifyOtp } from "@/hooks/auth/use-auth";

export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState<"phone" | "email">("phone");
  const [form, setForm] = useState({ phone: "", otp: "", email: "", password: "" });
  const [step, setStep] = useState<1 | 2>(1);
  const [showPassword, setShowPassword] = useState(false);

  const { mutate: login, isPending: isLoginPending } = useLogin();
  const { mutate: sendOtp, isPending: isSendOtpPending } = useSendOtp();
  const { mutate: verifyOtp, isPending: isVerifyOtpPending } = useVerifyOtp();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSendOtp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.phone.length >= 10) {
      sendOtp(
        { identifier: form.phone },
        { onSuccess: () => setStep(2) }
      );
    }
  }

  function handleVerifyOtp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.otp.length === 6) {
      verifyOtp({ identifier: form.phone, otp: form.otp });
    }
  }

  function handleEmailLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login({ email: form.email, password: form.password });
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
          <Badge variant="info" className="bg-white border border-primary-blue/20 !text-primary-blue shadow-sm mx-auto mt-6">
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
            <div className="flex bg-neutral-bg rounded-xl p-1 mb-6">
              <button
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  loginMethod === "phone" ? "bg-white text-primary-blue shadow-sm" : "text-neutral-text-muted hover:text-neutral-text-dark"
                }`}
                onClick={() => { setLoginMethod("phone"); setStep(1); }}
              >
                Mobile Number
              </button>
              <button
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  loginMethod === "email" ? "bg-white text-primary-blue shadow-sm" : "text-neutral-text-muted hover:text-neutral-text-dark"
                }`}
                onClick={() => setLoginMethod("email")}
              >
                Email
              </button>
            </div>

            {loginMethod === "phone" ? (
              <div>
                {step === 1 ? (
                  <form onSubmit={handleSendOtp} className="space-y-5">
                    <Input
                      label="Mobile Number"
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="98765 43210"
                      maxLength={10}
                      icon={<Phone className="h-4 w-4" />}
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      rightIcon={<ArrowRight className="h-4 w-4" />}
                      disabled={form.phone.length < 10 || isSendOtpPending}
                    >
                      {isSendOtpPending ? "Sending OTP..." : "Send OTP"}
                    </Button>
                  </form>
                ) : (
                  <form onSubmit={handleVerifyOtp} className="space-y-5">
                    <div className="text-center mb-4">
                      <p className="text-sm text-neutral-text-muted">OTP sent to +91 {form.phone}</p>
                      <button type="button" onClick={() => setStep(1)} className="text-xs text-primary-blue hover:underline">Change Number</button>
                    </div>
                    <Input
                      label="Enter 6-digit OTP"
                      type="text"
                      name="otp"
                      required
                      value={form.otp}
                      onChange={handleChange}
                      placeholder="123456"
                      maxLength={6}
                      icon={<Lock className="h-4 w-4" />}
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      rightIcon={<ArrowRight className="h-4 w-4" />}
                      disabled={form.otp.length < 6 || isVerifyOtpPending}
                    >
                      {isVerifyOtpPending ? "Verifying..." : "Verify OTP & Login"}
                    </Button>
                  </form>
                )}
              </div>
            ) : (
              <form onSubmit={handleEmailLogin} className="space-y-5">
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  icon={<Mail className="h-4 w-4" />}
                />
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold font-heading text-neutral-text-muted">Password</label>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://car-blink-dashboard.vercel.app'}/forgot-password`}
                      className="text-xs font-bold text-primary-orange hover:text-primary-orange-dark"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    value={form.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    icon={<Lock className="h-4 w-4" />}
                    rightIcon={showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    onRightIconClick={() => setShowPassword(!showPassword)}
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                  disabled={!form.email || !form.password || isLoginPending}
                >
                  {isLoginPending ? "Logging in..." : "Log in"}
                </Button>
              </form>
            )}

            <p className="font-body mt-6 text-center text-sm text-neutral-text-muted">
              Want to partner your workshop?{" "}
              <Link
                href="/register"
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
