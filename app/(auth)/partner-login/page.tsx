"use client";

import { toast } from "sonner";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Mail, Lock, ArrowRight, ShieldCheck, Phone, Eye, EyeOff, Wrench } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Input from "@/components/ui/Input";
import { Logo } from "@/components/layout/Navbar";
import { usePartnerLogin, useSendOtp, usePartnerVerifyOtp } from "@/hooks/auth/use-auth";
import PartnerRegisterForm from "@/features/auth/components/PartnerRegisterForm";

function PartnerLoginPageContent() {
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("mode") === "register" ? "register" : "login";

  const [viewMode, setViewMode] = useState<"login" | "register">(initialMode);
  const [loginMethod, setLoginMethod] = useState<"phone" | "email">("phone");
  const [form, setForm] = useState({ phone: "", otp: "", email: "", password: "" });
  const [step, setStep] = useState<1 | 2>(1);
  const [showPassword, setShowPassword] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    const modeParam = searchParams.get("mode");
    if (modeParam === "register") {
      setViewMode("register");
    } else if (modeParam === "login") {
      setViewMode("login");
    }
  }, [searchParams]);

  useEffect(() => {
    let timer: any;
    if (step === 2 && resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(timer);
  }, [step, resendTimer]);

  const handleResendOtp = () => {
    if (!canResend) return;
    sendOtp(
      { identifier: form.phone },
      {
        onSuccess: () => {
          toast.success("OTP re-sent successfully!");
          setResendTimer(30);
          setCanResend(false);
        },
      }
    );
  };

  const { mutate: login, isPending: isLoginPending } = usePartnerLogin();
  const { mutate: sendOtp, isPending: isSendOtpPending } = useSendOtp();
  const { mutate: verifyOtp, isPending: isVerifyOtpPending } = usePartnerVerifyOtp();

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
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-orange/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary-blue/20 blur-3xl" />
        
        <div className="relative z-10 max-w-lg">
          <Logo />
          <h1 className="mt-12 font-heading font-black text-4xl leading-[1.1] sm:text-5xl tracking-tight">
            Grow your workshop <br />
            <span className="text-accent-orange">with Car Blink.</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            {viewMode === "register"
              ? "Register your workshop today to receive genuine service requests, verified customers, and reliable payouts."
              : "Log in to manage your workshop, respond to quotes, and connect with thousands of car owners in your area."}
          </p>
          
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="font-heading font-black text-2xl text-accent-orange">2.5k+</p>
              <p className="mt-1 font-body text-xs text-white/60">Verified Workshops</p>
            </div>
            <div>
              <p className="font-heading font-black text-2xl text-accent-orange">100%</p>
              <p className="mt-1 font-body text-xs text-white/60">Direct Customer Quotes</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- RIGHT SIDE: PORTAL ---------------- */}
      <section className="flex flex-col justify-center p-6 sm:p-12 lg:p-16 min-h-screen">
        <div className="w-full max-w-md mx-auto py-6">
          {/* Mobile Logo */}
          <div className="mb-6 flex justify-center lg:hidden">
            <Logo />
          </div>

          {/* Portal Switcher Tabs: Sign In vs Register Workshop */}
          <div className="flex bg-neutral-200/70 p-1 rounded-2xl mb-6 shadow-2xs">
            <button
              type="button"
              onClick={() => setViewMode("login")}
              className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                viewMode === "login" 
                  ? "bg-white text-primary-navy shadow-sm" 
                  : "text-neutral-text-muted hover:text-neutral-text-dark"
              }`}
            >
              Partner Sign In
            </button>
            <button
              type="button"
              onClick={() => setViewMode("register")}
              className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                viewMode === "register" 
                  ? "bg-white text-accent-orange shadow-sm" 
                  : "text-neutral-text-muted hover:text-neutral-text-dark"
              }`}
            >
              Register Workshop
            </button>
          </div>

          {viewMode === "register" ? (
            /* ================= VIEW: PARTNER REGISTRATION FORM ================= */
            <div className="animate-in fade-in duration-200">
              <div className="mb-6 text-center lg:text-left">
                <Badge variant="info" className="bg-accent-orange/10 border-none text-accent-orange shadow-none mb-3 inline-flex font-bold">
                  <Wrench className="w-3.5 h-3.5 mr-1.5" />
                  Workshop Partner Registration
                </Badge>
                <h2 className="font-heading font-black text-2xl sm:text-3xl tracking-tight mb-2 text-neutral-text-dark">
                  Join CarBlink Network
                </h2>
                <p className="font-body text-xs sm:text-sm text-neutral-text-muted">
                  Register your workshop below. Complete verification with SMS OTP.
                </p>
              </div>

              <PartnerRegisterForm
                showRoleToggle={false}
                source="partner-login-portal"
                onSwitchToLogin={() => setViewMode("login")}
              />
            </div>
          ) : (
            /* ================= VIEW: PARTNER SIGN IN ================= */
            <div className="animate-in fade-in duration-200">
              <div className="mb-6 text-center lg:text-left">
                <Badge variant="info" className="bg-accent-orange/5 border-none text-accent-orange shadow-none mb-3 inline-flex">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
                  Partner Portal
                </Badge>
                <h2 className="font-heading font-black text-2xl sm:text-3xl tracking-tight mb-2">
                  Workshop Login
                </h2>
                <p className="font-body text-xs sm:text-sm text-neutral-text-muted">
                  Welcome back! Please enter your details to sign in.
                </p>
              </div>

              <div className="flex bg-neutral-200/50 rounded-xl p-1 mb-6">
                <button
                  type="button"
                  className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                    loginMethod === "phone" ? "bg-white text-accent-orange shadow-sm font-bold" : "text-neutral-text-muted hover:text-neutral-text-dark"
                  }`}
                  onClick={() => { setLoginMethod("phone"); setStep(1); }}
                >
                  Mobile Number
                </button>
                <button
                  type="button"
                  className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                    loginMethod === "email" ? "bg-white text-accent-orange shadow-sm font-bold" : "text-neutral-text-muted hover:text-neutral-text-dark"
                  }`}
                  onClick={() => setLoginMethod("email")}
                >
                  Email
                </button>
              </div>

              {loginMethod === "phone" ? (
                <div>
                  {step === 1 ? (
                    <form onSubmit={handleSendOtp} className="space-y-4">
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
                        variant="accent"
                        size="lg"
                        fullWidth
                        rightIcon={<ArrowRight className="h-4 w-4" />}
                        disabled={form.phone.length < 10 || isSendOtpPending}
                      >
                        {isSendOtpPending ? "Sending OTP..." : "Send OTP"}
                      </Button>
                    </form>
                  ) : (
                    <form onSubmit={handleVerifyOtp} className="space-y-4">
                      <div className="text-center lg:text-left mb-3">
                        <p className="text-sm text-neutral-text-muted">OTP sent to +91 {form.phone}</p>
                        <button type="button" onClick={() => setStep(1)} className="text-xs font-semibold text-accent-orange hover:underline mt-1 cursor-pointer">Change Number</button>
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
                      <div className="flex items-center justify-between text-xs text-neutral-text-muted mt-2">
                        <span>Didn't receive OTP?</span>
                        {canResend ? (
                          <button
                            type="button"
                            onClick={handleResendOtp}
                            disabled={isSendOtpPending}
                            className="font-bold text-accent-orange hover:underline cursor-pointer disabled:opacity-50"
                          >
                            {isSendOtpPending ? "Resending..." : "Resend OTP"}
                          </button>
                        ) : (
                          <span className="font-semibold text-neutral-text-muted">Resend OTP in {resendTimer}s</span>
                        )}
                      </div>
                      <Button
                        type="submit"
                        variant="accent"
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
                <form onSubmit={handleEmailLogin} className="space-y-4">
                  <Input
                    label="Email or Mobile Number"
                    type="text"
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
                        href="/forgot-password"
                        className="text-xs font-bold text-accent-orange hover:text-accent-orange/80 transition-colors"
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
                    variant="accent"
                    size="lg"
                    fullWidth
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                    disabled={!form.email || !form.password || isLoginPending}
                  >
                    {isLoginPending ? "Logging in..." : "Log in"}
                  </Button>
                </form>
              )}

              {/* REPLACED DASHBOARD LINK: Now toggles locally to Register view */}
              <p className="font-body mt-6 text-center lg:text-left text-xs sm:text-sm text-neutral-text-muted">
                Not a partner yet?{" "}
                <button
                  type="button"
                  onClick={() => setViewMode("register")}
                  className="font-heading font-bold text-accent-orange hover:text-accent-orange/80 transition-colors cursor-pointer underline"
                >
                  Apply here / Register Workshop
                </button>
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function PartnerLoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <PartnerLoginPageContent />
    </Suspense>
  );
}
