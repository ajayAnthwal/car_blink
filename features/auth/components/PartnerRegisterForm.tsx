"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Wrench, 
  User, 
  Phone, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  FileText,
  Loader2 
} from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { postSendOtp } from "@/services/auth.service";
import { useRegister } from "@/hooks/auth/use-auth";
import { toast } from "sonner";

interface PartnerRegisterFormProps {
  onSwitchToLogin?: () => void;
  showRoleToggle?: boolean;
  onRoleSelectCustomer?: () => void;
  className?: string;
  source?: string;
}

export default function PartnerRegisterForm({
  onSwitchToLogin,
  showRoleToggle = true,
  onRoleSelectCustomer,
  className = "",
  source = "partner-portal"
}: PartnerRegisterFormProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    businessName: "",
    ownerName: "",
    gstNumber: "",
    msmeNumber: "",
    address: "",
  });

  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { mutate: registerUser, isPending: isRegisterPending } = useRegister();

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const clean = value.replace(/[^0-9]/g, "");
      setFormData((prev) => ({ ...prev, [name]: clean.slice(0, 10) }));
    } else if (name === "gstNumber" || name === "msmeNumber") {
      setFormData((prev) => ({ ...prev, [name]: value.toUpperCase() }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setError("");
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const cleanPhone = formData.phone.trim();
    if (cleanPhone.length !== 10 || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      setError("Please enter a valid 10-digit Indian mobile number (starting with 6, 7, 8, or 9)");
      return;
    }

    if (!formData.fullName.trim()) {
      setError("Please enter your full name / contact person name");
      return;
    }

    if (!formData.businessName.trim()) {
      setError("Partner Requirement: Please enter your Workshop / Garage Name.");
      return;
    }

    if (!formData.address.trim()) {
      setError("Partner Requirement: Please enter your Workshop Address.");
      return;
    }

    if (!formData.password || formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setIsLoading(true);
    try {
      await postSendOtp({ identifier: cleanPhone });
      setStep(2);
      setResendTimer(30);
      setCanResend(false);
      toast.success(`6-Digit OTP sent to +91 ${cleanPhone}`);
    } catch (err: any) {
      setError(err?.message || "Failed to send OTP to mobile number. Please check your number.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!canResend || isLoading) return;
    setError("");
    setIsLoading(true);
    try {
      await postSendOtp({ identifier: formData.phone.trim() });
      setResendTimer(30);
      setCanResend(false);
      toast.success("OTP re-sent to mobile number!");
    } catch (err: any) {
      setError(err?.message || "Failed to resend OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyAndRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const cleanOtp = otp.trim();

    if (cleanOtp.length !== 6) {
      setError("Please enter the 6-digit OTP code received on your mobile");
      return;
    }

    setIsLoading(true);
    try {
      const cleanEmail = formData.email && formData.email.trim() ? formData.email.trim() : undefined;
      const payload: any = {
        fullName: formData.fullName.trim(),
        email: cleanEmail,
        phone: formData.phone.trim(),
        password: formData.password,
        role: "PARTNER",
        otp: cleanOtp,
        businessName: formData.businessName.trim(),
        ownerName: (formData.ownerName.trim() || formData.fullName.trim()),
        address: formData.address.trim(),
        gstNumber: formData.gstNumber.trim() ? formData.gstNumber.trim().toUpperCase() : undefined,
        msmeNumber: formData.msmeNumber.trim() ? formData.msmeNumber.trim().toUpperCase() : undefined,
      };

      registerUser(payload, {
        onSuccess: () => {
          setStep(3);
        },
        onError: (err: any) => {
          setError(err?.message || "Incorrect OTP or registration failed. Please try again.");
          setIsLoading(false);
        }
      });
    } catch (err: any) {
      setError(err?.message || "Registration failed. Please try again.");
      setIsLoading(false);
    }
  };

  if (step === 3) {
    return (
      <div className={`bg-white rounded-3xl p-6 sm:p-8 border border-neutral-text-muted/10 text-center space-y-4 shadow-sm ${className}`}>
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center text-success mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-heading font-black text-2xl text-neutral-text-dark">
          Partner Registration Submitted!
        </h3>
        <p className="font-body text-sm text-neutral-text-muted max-w-md mx-auto">
          Welcome to the CarBlink Partner Network! Your workshop profile for <strong className="text-neutral-text-dark">{formData.businessName}</strong> has been created.
        </p>
        <div className="p-4 bg-primary-blue/5 border border-primary-blue/15 rounded-2xl text-xs text-primary-navy text-left space-y-1 max-w-md mx-auto">
          <p className="font-bold flex items-center gap-1.5 text-primary-blue">
            <ShieldCheck className="w-4 h-4" /> Next Steps:
          </p>
          <p className="text-neutral-text-muted">
            • Your account is being reviewed by our City Field Operations team.
          </p>
          <p className="text-neutral-text-muted">
            • You can now log into your Workshop Dashboard using your mobile number and password.
          </p>
        </div>

        <div className="pt-2">
          {onSwitchToLogin ? (
            <Button
              type="button"
              variant="accent"
              size="lg"
              fullWidth
              onClick={onSwitchToLogin}
              className="bg-accent-orange hover:bg-accent-orange/90 text-white font-bold"
            >
              Proceed to Partner Sign In <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          ) : (
            <Link
              href="/partner-login"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-accent-orange hover:bg-accent-orange/90 text-white font-bold text-sm shadow-md transition-all"
            >
              Proceed to Partner Sign In <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full text-left ${className}`}>
      {/* Role Selector Header (Exact match to Dashboard) */}
      {showRoleToggle && step === 1 && (
        <div className="mb-6">
          <label className="block text-xs font-bold text-neutral-text-muted uppercase tracking-wider mb-2.5">
            I am joining as a
          </label>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <button
              type="button"
              onClick={onRoleSelectCustomer || (() => window.location.href = "/register")}
              className="flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl border-2 border-gray-100 bg-white hover:border-gray-200 transition-all group"
            >
              <div className="p-2 rounded-full mb-1.5 bg-gray-100 text-gray-400 group-hover:bg-gray-200 transition-colors">
                <User className="w-5 h-5" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-gray-500">Customer</span>
            </button>

            <button
              type="button"
              className="flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl border-2 border-primary-navy bg-primary-navy/5 shadow-xs transition-all"
            >
              <div className="p-2 rounded-full mb-1.5 bg-primary-navy text-white shadow-xs">
                <Wrench className="w-5 h-5 text-accent-orange" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-primary-navy">Partner (Garage)</span>
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-5 bg-red-50 text-red-600 text-xs sm:text-sm p-3.5 sm:p-4 rounded-xl border border-red-200 font-medium flex items-start gap-2">
          <span className="font-bold shrink-0">!</span>
          <span>{error}</span>
        </div>
      )}

      {step === 1 ? (
        /* STEP 1: PARTNER DETAILS & LEGAL CREDENTIALS */
        <form onSubmit={handleSendOtp} className="space-y-4" autoComplete="off">
          {/* Prevent Chrome/Edge aggressive credential autofill */}
          <input type="text" style={{ display: "none" }} tabIndex={-1} autoComplete="off" readOnly />
          <input type="password" style={{ display: "none" }} tabIndex={-1} autoComplete="off" readOnly />
          <div>
            <label className="block text-xs font-bold text-neutral-text-dark mb-1">
              Contact Person / Owner Full Name <span className="text-red-500">*</span>
            </label>
            <Input
              name="fullName"
              autoComplete="off"
              placeholder="e.g. Ramesh Chandra (Owner)"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="h-11 bg-white border-gray-200 text-sm focus:border-primary-navy"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-neutral-text-dark mb-1">
                Mobile Phone Number <span className="text-red-500">*</span>
              </label>
              <Input
                name="phone"
                type="tel"
                autoComplete="off"
                placeholder="e.g. 9876543210"
                maxLength={10}
                value={formData.phone}
                onChange={handleChange}
                required
                className="h-11 bg-white border-gray-200 text-sm focus:border-primary-navy"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-text-dark mb-1">
                Email Address (Optional)
              </label>
              <Input
                name="email"
                type="email"
                autoComplete="off"
                placeholder="e.g. ramesh@speedxmotors.com"
                value={formData.email}
                onChange={handleChange}
                className="h-11 bg-white border-gray-200 text-sm focus:border-primary-navy"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold text-neutral-text-dark">
                Create Account Password <span className="text-red-500">*</span>
              </label>
              <span className="text-[10px] text-neutral-text-muted">Min 6 characters</span>
            </div>
            <div className="relative">
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                className="h-11 bg-white border-gray-200 text-sm focus:border-primary-navy pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* EXACT CARD FROM SCREENSHOT: Partner Business & Legal Details */}
          <div className="p-4 sm:p-5 bg-[#FAF9F5] border border-amber-200/80 rounded-2xl space-y-3.5 shadow-2xs">
            <div className="flex items-center space-x-2 text-primary-navy font-bold text-xs sm:text-sm border-b border-amber-200/80 pb-2.5">
              <Wrench className="w-4 h-4 text-accent-orange" />
              <span>Partner Business &amp; Legal Details</span>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-neutral-text-dark uppercase tracking-wider mb-1">
                WORKSHOP / GARAGE NAME <span className="text-red-500">*</span>
              </label>
              <Input
                name="businessName"
                placeholder="e.g. SpeedX Motors & Detailing Studio"
                value={formData.businessName}
                onChange={handleChange}
                required
                className="h-11 bg-white border-amber-200/90 text-sm placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-neutral-text-dark uppercase tracking-wider mb-1">
                OWNER / CONTACT PERSON NAME
              </label>
              <Input
                name="ownerName"
                placeholder="e.g. Ramesh Chandra (Owner)"
                value={formData.ownerName}
                onChange={handleChange}
                className="h-11 bg-white border-amber-200/90 text-sm placeholder:text-gray-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-neutral-text-dark uppercase tracking-wider mb-1">
                  GST NUMBER (OPTIONAL)
                </label>
                <Input
                  name="gstNumber"
                  placeholder="E.G. 07AAAAA0000A1Z5"
                  value={formData.gstNumber}
                  onChange={handleChange}
                  className="h-11 bg-white border-amber-200/90 font-mono text-xs uppercase placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-neutral-text-dark uppercase tracking-wider mb-1">
                  MSME / UDYAM NO. (OPTIONAL)
                </label>
                <Input
                  name="msmeNumber"
                  placeholder="E.G. UDYAM-DL-00-0123456"
                  value={formData.msmeNumber}
                  onChange={handleChange}
                  className="h-11 bg-white border-amber-200/90 font-mono text-xs uppercase placeholder:text-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-neutral-text-dark uppercase tracking-wider mb-1">
                WORKSHOP / BUSINESS ADDRESS <span className="text-red-500">*</span>
              </label>
              <textarea
                name="address"
                rows={2}
                placeholder="Complete Workshop Address, Area, Landmark, City, Pincode"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-amber-200/90 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-navy placeholder:text-gray-400"
              />
            </div>
          </div>

          <Button
            type="submit"
            variant="accent"
            size="lg"
            fullWidth
            
            className="w-full h-12 mt-3 text-sm sm:text-base font-bold bg-accent-orange hover:bg-accent-orange/90 text-white rounded-xl shadow-lg shadow-accent-orange/20 transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" /> Sending OTP...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Continue &amp; Send OTP <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            )}
          </Button>
        </form>
      ) : (
        /* STEP 2: 6-DIGIT OTP VERIFICATION */
        <form onSubmit={handleVerifyAndRegister} className="space-y-4">
          <div className="text-center p-4 bg-orange-50/50 border border-accent-orange/20 rounded-2xl mb-2">
            <ShieldCheck className="w-8 h-8 text-accent-orange mx-auto mb-2" />
            <h4 className="font-heading font-bold text-base text-neutral-text-dark">Verify Mobile Number</h4>
            <p className="text-xs text-neutral-text-muted mt-0.5">
              Enter the 6-digit OTP sent to <strong className="text-neutral-text-dark">+91 {formData.phone}</strong>
            </p>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-text-dark mb-1.5 text-center">
              ENTER 6-DIGIT SMS OTP
            </label>
            <input
              type="text"
              name="otp"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
              placeholder="123456"
              required
              className="w-full h-12 bg-white border border-gray-300 rounded-xl text-center text-xl font-bold tracking-[0.35em] text-neutral-text-dark focus:outline-none focus:ring-2 focus:ring-primary-navy"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-neutral-text-muted pt-1">
            <span>Didn't receive code?</span>
            {canResend ? (
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={isLoading}
                className="font-bold text-accent-orange hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" /> Resend OTP
              </button>
            ) : (
              <span className="font-semibold text-gray-400">Resend in {resendTimer}s</span>
            )}
          </div>

          <Button
            type="submit"
            variant="accent"
            size="lg"
            fullWidth
            
            disabled={otp.length < 6 || isLoading || isRegisterPending}
            className="w-full h-12 mt-2 text-sm sm:text-base font-bold bg-accent-orange hover:bg-accent-orange/90 text-white rounded-xl shadow-lg shadow-accent-orange/20 transition-all flex items-center justify-center gap-2"
          >
            {(isLoading || isRegisterPending) ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" /> Verifying &amp; Creating Account...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Verify &amp; Create Partner Account <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            )}
          </Button>

          <button
            type="button"
            onClick={() => setStep(1)}
            className="w-full text-center text-xs font-semibold text-neutral-text-muted hover:text-neutral-text-dark transition-colors pt-2 cursor-pointer"
          >
            ← Change Details / Edit Mobile Number
          </button>
        </form>
      )}

      {/* Footer Switcher */}
      <div className="mt-6 text-center text-sm pt-4 border-t border-gray-100">
        <span className="text-neutral-text-muted text-xs sm:text-sm">Already have an account?</span>
        {onSwitchToLogin ? (
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="ml-1.5 font-bold text-primary-navy hover:text-accent-orange transition-colors text-xs sm:text-sm cursor-pointer underline"
          >
            Sign In
          </button>
        ) : (
          <Link
            href="/partner-login"
            className="ml-1.5 font-bold text-primary-navy hover:text-accent-orange transition-colors text-xs sm:text-sm underline"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
