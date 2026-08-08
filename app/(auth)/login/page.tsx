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
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-neutral-bg font-body text-neutral-text-dark antialiased">
      {/* ---------------- LEFT SIDE: VISUAL ---------------- */}
      <section className="relative hidden lg:flex flex-col justify-center overflow-hidden bg-primary-navy p-12 xl:p-20 text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-blue/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent-orange/20 blur-3xl" />

        <div className="relative z-10 max-w-lg">
          <Logo />
          <h1 className="mt-12 font-heading font-black text-4xl leading-[1.1] sm:text-5xl tracking-tight">
            Manage your car’s needs <br />
            <span className="text-primary-blue">all in one place.</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Join over 100,000 car owners who trust Car Blink to handle their vehicle’s maintenance, quotes, and service records effortlessly.
          </p>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-primary-navy bg-white/10 backdrop-blur-md flex items-center justify-center font-bold text-xs text-white">
                  CB
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-white/80">Trusted by 100k+ users</p>
          </div>
        </div>
      </section>

      {/* ---------------- RIGHT SIDE: FORM ---------------- */}
      <section className="flex flex-col justify-center p-6 sm:p-12 lg:p-16">
        <div className="w-full max-w-md mx-auto">
          {/* Mobile Logo */}
          <div className="mb-8 flex justify-center lg:hidden">
            <Logo />
          </div>

          <div className="mb-10 text-center lg:text-left">
            <Badge variant="info" className="bg-primary-blue/5 border-none !text-primary-blue shadow-none mb-4 inline-flex">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
              Secure Login
            </Badge>
            <h2 className="font-heading font-black text-3xl sm:text-4xl tracking-tight mb-3">
              Welcome back
            </h2>
            <p className="font-body text-base text-neutral-text-muted">
              Log in to manage your bookings, quotes, and vehicle details.
            </p>
          </div>

          <div className="flex bg-neutral-200/50 rounded-xl p-1 mb-8">
            <button
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${loginMethod === "phone" ? "bg-white text-primary-blue shadow-sm" : "text-neutral-text-muted hover:text-neutral-text-dark"
                }`}
              onClick={() => { setLoginMethod("phone"); setStep(1); }}
            >
              Mobile Number
            </button>
            <button
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${loginMethod === "email" ? "bg-white text-primary-blue shadow-sm" : "text-neutral-text-muted hover:text-neutral-text-dark"
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
                  <div className="text-center lg:text-left mb-4">
                    <p className="text-sm text-neutral-text-muted">OTP sent to +91 {form.phone}</p>
                    <button type="button" onClick={() => setStep(1)} className="text-xs font-semibold text-primary-blue hover:underline mt-1">Change Number</button>
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
                    className="text-xs font-bold text-primary-orange hover:text-primary-orange-dark transition-colors"
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
          <p className="font-body mt-8 text-center lg:text-left text-sm text-neutral-text-muted">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-heading font-semibold text-primary-blue hover:text-primary-blue-dark transition-colors"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
