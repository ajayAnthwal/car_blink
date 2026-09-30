"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, TrendingUp, Send, Loader2, CheckCircle2, ShieldCheck, Wrench, Lock, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Input from "@/components/ui/Input";
import { postSendOtp, postRegister } from "@/services/auth.service";
import { toast } from "sonner";

const BENEFITS = [
  "Receive High Quality Leads Daily",
  "Increase Your Workshop Revenue",
  "Zero Marketing Cost",
  "Easy Dashboard & Management",
];

export default function PartnerCTA() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    ownerName: "",
    phone: "",
    email: "",
    gstNumber: "",
    msmeNumber: "",
    address: "",
    password: "",
  });
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const clean = value.replace(/[^0-9]/g, "");
      setForm((prev) => ({ ...prev, [name]: clean.slice(0, 10) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanPhone = form.phone.trim();
    if (cleanPhone.length !== 10 || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      toast.error("Please enter a valid 10-digit Indian mobile number");
      return;
    }

    if (!form.fullName.trim()) {
      toast.error("Please enter Contact Person Name");
      return;
    }

    if (!form.businessName.trim()) {
      toast.error("Please enter Workshop / Garage Business Name");
      return;
    }

    if (!form.address.trim()) {
      toast.error("Please enter Workshop Address");
      return;
    }

    if (!form.password || form.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    setIsLoading(true);
    try {
      await postSendOtp({ identifier: cleanPhone });
      setStep(2);
      toast.success(`6-Digit OTP sent successfully to +91 ${cleanPhone}`);
    } catch (err: any) {
      toast.error(err?.message || "Failed to send OTP. Please check mobile number.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyAndRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanOtp = otp.trim();
    if (cleanOtp.length !== 6) {
      toast.error("Please enter the 6-digit OTP code received on SMS");
      return;
    }

    setIsLoading(true);
    try {
      const payload: any = {
        fullName: form.fullName.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || undefined,
        password: form.password,
        role: "PARTNER",
        otp: cleanOtp,
        businessName: form.businessName.trim(),
        ownerName: (form.ownerName.trim() || form.fullName.trim()),
        address: form.address.trim(),
        gstNumber: form.gstNumber.trim().toUpperCase() || undefined,
        msmeNumber: form.msmeNumber.trim().toUpperCase() || undefined,
      };

      await postRegister(payload);
      setStep(3);
      toast.success("Partner Application registered & OTP verified!");
    } catch (err: any) {
      toast.error(err?.message || "OTP verification or registration failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 bg-white rounded-3xl relative overflow-hidden flex flex-col lg:flex-row justify-between items-stretch w-full border border-neutral-text-muted/10 shadow-xl shadow-primary-blue/5 min-h-[420px]">
      {/* Background Decorative Glow */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-accent-orange/5 rounded-full blur-3xl pointer-events-none" />

      {/* Left Column - Content */}
      <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col gap-6 items-center text-center lg:items-start lg:text-left relative z-10">
        <div className="flex flex-col gap-2">
          <Badge variant="info" className="self-center lg:self-start bg-primary-blue/10 text-primary-blue border border-primary-blue/15 shadow-none">
            <span className="flex items-center gap-1.5 text-black">
              <TrendingUp className="w-3.5 h-3.5" />
              For Workshops (B2B Partner Registration)
            </span>
          </Badge>
          <h3 className="font-heading font-black text-2xl md:text-3xl text-neutral-text-dark tracking-tight">
            Become a Verified CarBlink Partner
          </h3>
          <p className="font-body text-sm text-neutral-text-muted max-w-sm">
            Fill your workshop credentials below to register. Account access unlocks after Executive inspection & Super Admin authorization.
          </p>
        </div>

        {/* Benefits Checklist */}
        <div className="flex flex-col items-center lg:items-start gap-2.5">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-success/10 shrink-0">
                <Check className="w-3 h-3 text-success" strokeWidth={3} />
              </div>
              <span className="font-body text-xs md:text-sm text-neutral-text-dark leading-tight">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        {/* Dynamic Partner Registration Form */}
        <div className="w-full mt-2 bg-neutral-bg p-5 rounded-2xl border border-neutral-text-muted/10 text-left">
          {step === 3 ? (
            <div className="flex flex-col items-center justify-center py-6 text-center space-y-3">
              <div className="w-14 h-14 bg-success/10 rounded-full flex items-center justify-center text-success mb-1">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-bold text-xl text-neutral-text-dark">Partner Registration Submitted & OTP Verified!</h4>
              <p className="font-body text-xs text-neutral-text-muted max-w-md">
                Your workshop application has been received. Field Executive inspection & Super Admin KYC authorization are currently underway.
              </p>
              <div className="pt-2">
                <a
                  href="http://localhost:3000/login"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-blue text-white font-bold text-xs shadow-md hover:bg-blue-700 transition-colors"
                >
                  Proceed to Partner Login <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ) : step === 1 ? (
            /* STEP 1: PRE-OTP PARTNER DETAILS FORM */
            <form onSubmit={handleSendOtp} className="space-y-3.5">
              <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                <span className="text-xs font-bold text-primary-blue uppercase tracking-wider flex items-center gap-1.5">
                  <Wrench className="w-4 h-4" /> Step 1: Workshop & Legal Credentials
                </span>
                <span className="text-[10px] bg-primary-blue/10 text-primary-blue font-bold px-2 py-0.5 rounded">Pre-OTP Form</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Workshop / Garage Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="businessName"
                    placeholder="e.g. Apex Motors & Detailing"
                    value={form.businessName}
                    onChange={handleChange}
                    required
                    className="bg-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Owner / Contact Person Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="fullName"
                    placeholder="e.g. Rajesh Kumar"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    className="bg-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Mobile Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="phone"
                    placeholder="e.g. 9876543210"
                    maxLength={10}
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="bg-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Business Email (Optional)
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="e.g. contact@apexmotors.com"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    GST Number (Optional)
                  </label>
                  <Input
                    name="gstNumber"
                    placeholder="e.g. 07AAAAA0000A1Z5"
                    value={form.gstNumber}
                    onChange={handleChange}
                    className="bg-white font-mono text-xs uppercase"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    MSME / Udyam No. (Optional)
                  </label>
                  <Input
                    name="msmeNumber"
                    placeholder="e.g. UDYAM-DL-00-123456"
                    value={form.msmeNumber}
                    onChange={handleChange}
                    className="bg-white font-mono text-xs uppercase"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                  Workshop Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  rows={2}
                  placeholder="Complete Workshop Address, Area, City, Pincode"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                  Set Account Password <span className="text-red-500">*</span>
                </label>
                <Input
                  name="password"
                  type="password"
                  placeholder="Minimum 6 characters"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="bg-white text-xs"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={isLoading}
                className="w-full font-heading font-bold mt-2"
                rightIcon={isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              >
                {isLoading ? "Sending OTP..." : "Continue & Send Mobile Verification OTP"}
              </Button>
            </form>
          ) : (
            /* STEP 2: OTP VERIFICATION */
            <form onSubmit={handleVerifyAndRegister} className="space-y-4 py-2">
              <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                <span className="text-xs font-bold text-primary-blue uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Step 2: Verify Mobile OTP
                </span>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-[10px] text-gray-500 underline hover:text-gray-900"
                >
                  Edit Details
                </button>
              </div>

              <p className="text-xs text-gray-600">
                Enter the 6-digit OTP code sent to <strong className="text-gray-900 font-mono">+91 {form.phone}</strong>:
              </p>

              <Input
                name="otp"
                placeholder="Enter 6-digit OTP code"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, "").slice(0, 6))}
                required
                className="bg-white text-center font-mono text-lg tracking-widest h-12"
              />

              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={isLoading || otp.trim().length !== 6}
                className="w-full font-heading font-bold bg-emerald-600 hover:bg-emerald-700 text-white"
                rightIcon={isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
              >
                {isLoading ? "Verifying & Creating Partner Account..." : "Verify OTP & Complete Registration"}
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* Right Column - Image & Floating Speech Bubble */}
      <div className="relative w-full lg:w-2/5 min-h-[240px] lg:min-h-full shrink-0 overflow-hidden">
        <Image
          src="/images/mechanic-partner.png"
          alt="Become a Partner mechanic"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent lg:from-white/50" />
        <div className="absolute top-4 right-4 lg:-left-4 lg:right-auto lg:top-8 bg-white text-primary-blue text-xs font-heading font-black px-4 py-2 rounded-2xl shadow-lg border border-neutral-text-muted/10 z-20">
          Grow Your Business
          <div className="absolute -bottom-1 left-6 w-2.5 h-2.5 bg-white border-b border-r border-neutral-text-muted/10 transform rotate-45" />
        </div>
      </div>
    </div>
  );
}
