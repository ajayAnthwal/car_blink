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
  Loader2,
  MapPin,
  Compass,
  AlertCircle
} from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { INDIAN_STATES, getCitiesForState } from "@/config/locations.data";
import { postSendOtp } from "@/services/auth.service";
import { useRegister, getDashboardUrl } from "@/hooks/auth/use-auth";
import { toast } from "sonner";

const STATE_CODES: Record<string, string> = {
  '01': 'Jammu & Kashmir', '02': 'Himachal Pradesh', '03': 'Punjab', '04': 'Chandigarh',
  '05': 'Uttarakhand', '06': 'Haryana', '07': 'Delhi', '08': 'Rajasthan', '09': 'Uttar Pradesh',
  '10': 'Bihar', '11': 'Sikkim', '12': 'Arunachal Pradesh', '13': 'Nagaland', '14': 'Manipur',
  '15': 'Mizoram', '16': 'Tripura', '17': 'Meghalaya', '18': 'Assam', '19': 'West Bengal',
  '20': 'Jharkhand', '21': 'Odisha', '22': 'Chhattisgarh', '23': 'Madhya Pradesh', '24': 'Gujarat',
  '25': 'Daman & Diu', '26': 'Dadra & Nagar Haveli', '27': 'Maharashtra', '28': 'Andhra Pradesh',
  '29': 'Karnataka', '30': 'Goa', '31': 'Lakshadweep', '32': 'Kerala', '33': 'Tamil Nadu',
  '34': 'Puducherry', '35': 'Andaman & Nicobar', '36': 'Telangana', '37': 'Andhra Pradesh', '38': 'Ladakh'
};

export function validateGSTIN(gstin: string): { isValid: boolean; message?: string; stateName?: string } {
  const clean = (gstin || '').trim().toUpperCase();
  if (!clean) return { isValid: false, message: 'GST Number is required for workshop registration.' };
  if (clean.length !== 15) return { isValid: false, message: `GST Number must be exactly 15 characters (entered ${clean.length}/15).` };
  
  const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
  if (!gstRegex.test(clean)) {
    return { isValid: false, message: 'Invalid GSTIN format (e.g. 05AAAAA0000A1Z5).' };
  }

  const stateCode = clean.substring(0, 2);
  const stateName = STATE_CODES[stateCode];
  if (!stateName && stateCode !== '97' && stateCode !== '99') {
    return { isValid: false, message: `Invalid State Code '${stateCode}' in GST Number.` };
  }

  return { isValid: true, stateName: stateName || 'Active Territory' };
}


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
  const [registeredPartnerToken, setRegisteredPartnerToken] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    // Partner Specific Structured Fields (Matching Dashboard & Backend)
    businessName: "",
    workshopName: "",
    ownerName: "",
    businessType: "Proprietorship",
    addressLine: "",
    city: "",
    state: "",
    pincode: "",
    latitude: "",
    longitude: "",
    gstNumber: "",
    msmeNumber: "",
  });

  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [resendCount, setResendCount] = useState(0);
  const [isLocating, setIsLocating] = useState(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const clean = value.replace(/[^0-9]/g, "");
      setFormData((prev) => ({ ...prev, [name]: clean.slice(0, 10) }));
    } else if (name === "pincode") {
      const clean = value.replace(/[^0-9]/g, "");
      setFormData((prev) => ({ ...prev, [name]: clean.slice(0, 6) }));
    } else if (name === "gstNumber" || name === "msmeNumber") {
      setFormData((prev) => ({ ...prev, [name]: value.toUpperCase() }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setError("");
  };

  // Browser Geolocation map pin picker (HTML5 Web API)
  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser. Please enter coordinates manually.");
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude.toFixed(6);
        const lng = position.coords.longitude.toFixed(6);
        setFormData((prev) => ({
          ...prev,
          latitude: lat,
          longitude: lng,
        }));
        setIsLocating(false);
        setError("");
        toast.success(`GPS Location pinned: ${lat}, ${lng}`);
      },
      (geoError) => {
        setIsLocating(false);
        setError("Could not retrieve your exact GPS location. Please enter latitude and longitude manually.");
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
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
      setError("Please enter Contact Person / Owner Full Name");
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setError("Partner Requirement: Please enter a valid Email Address.");
      return;
    }

    if (!formData.password || formData.password.length < 8) {
      setError("Partner Requirement: Password must be at least 8 characters long.");
      return;
    }

    const wName = (formData.workshopName || formData.businessName).trim();
    if (!wName) {
      setError("Partner Requirement: Please enter your Workshop / Garage Name.");
      return;
    }

    if (!formData.businessType) {
      setError("Partner Requirement: Please select your Business Type.");
      return;
    }

    if (!formData.addressLine.trim()) {
      setError("Partner Requirement: Please enter your Workshop Street Address.");
      return;
    }

    if (!formData.city.trim()) {
      setError("Partner Requirement: Please enter your City.");
      return;
    }

    if (!formData.state.trim()) {
      setError("Partner Requirement: Please enter your State.");
      return;
    }

    if (!formData.pincode.trim() || !/^[1-9][0-9]{5}$/.test(formData.pincode.trim())) {
      setError("Partner Requirement: Please enter a valid 6-digit PIN code.");
      return;
    }

    const lat = parseFloat(formData.latitude);
    const lng = parseFloat(formData.longitude);
    if (isNaN(lat) || lat < -90 || lat > 90 || isNaN(lng) || lng < -180 || lng > 180) {
      setError("Partner Requirement: Please set an exact Google Maps location pin (valid Lat -90..90 and Lng -180..180). Click 'Pin Current GPS Location' button.");
      return;
    }

    const gstCheck = validateGSTIN(formData.gstNumber);
    if (!gstCheck.isValid) {
      setError(`Partner Requirement: ${gstCheck.message}`);
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
    if (resendCount >= 3) {
      setError("Maximum OTP resend limit reached. Please wait before requesting another OTP.");
      return;
    }
    setError("");
    setIsLoading(true);
    try {
      await postSendOtp({ identifier: formData.phone.trim() });
      setResendTimer(30);
      setCanResend(false);
      setResendCount((prev) => prev + 1);
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
    const gstCheckVerify = validateGSTIN(formData.gstNumber);
    if (!gstCheckVerify.isValid) {
      setError(`Partner Requirement: ${gstCheckVerify.message}`);
      return;
    }

    if (cleanOtp.length !== 6) {
      setError("Please enter the 6-digit OTP code received on your mobile");
      return;
    }

    setIsLoading(true);
    try {
      const wName = (formData.workshopName || formData.businessName || formData.fullName).trim();
      const fullAddr = `${formData.addressLine.trim()}, ${formData.city.trim()}, ${formData.state.trim()} - ${formData.pincode.trim()}`;
      
      const payload: any = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        password: formData.password,
        role: "PARTNER",
        otp: cleanOtp,
        workshopName: wName,
        businessName: wName,
        ownerName: (formData.ownerName.trim() || formData.fullName.trim()),
        businessType: formData.businessType,
        addressLine: formData.addressLine.trim(),
        city: formData.city.trim(),
        state: formData.state.trim(),
        pincode: formData.pincode.trim(),
        businessAddress: fullAddr,
        address: fullAddr,
        latitude: parseFloat(formData.latitude),
        longitude: parseFloat(formData.longitude),
        gstNumber: formData.gstNumber.trim() ? formData.gstNumber.trim().toUpperCase() : undefined,
        msmeNumber: formData.msmeNumber.trim() ? formData.msmeNumber.trim().toUpperCase() : undefined,
      };

      registerUser(payload, {
        onSuccess: (res: any) => {
          const t = res?.data?.tokens?.accessToken || res?.tokens?.accessToken || res?.token || res?.data?.token;
          if (t) setRegisteredPartnerToken(t);
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

  const dashboardUrl = getDashboardUrl();

  if (step === 3) {
    const workshopDisplayName = formData.workshopName || formData.businessName || "Your Workshop";
    const effectiveToken = registeredPartnerToken || (typeof window !== 'undefined' ? (window.localStorage.getItem('car_blink_access_token') || window.localStorage.getItem('carBlink_token') || '') : '');
    const targetKycUrl = effectiveToken ? `${dashboardUrl}/login?token=${encodeURIComponent(effectiveToken)}&redirect=/partner/kyc` : `${dashboardUrl}/partner/kyc`;
    return (
      <div className={`bg-white rounded-3xl p-6 sm:p-8 border border-neutral-text-muted/10 text-center space-y-5 shadow-sm ${className}`}>
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center text-success mx-auto">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>
        <div>
          <h3 className="font-heading font-black text-2xl text-neutral-text-dark">
            Partner Registration Submitted!
          </h3>
          <p className="font-body text-sm text-neutral-text-muted max-w-md mx-auto mt-1">
            Welcome to the CarBlink Partner Network! Workshop profile for <strong className="text-neutral-text-dark">{workshopDisplayName}</strong> has been created.
          </p>
        </div>

        <div className="p-4 bg-primary-navy/5 border border-primary-navy/15 rounded-2xl text-xs text-primary-navy text-left space-y-2 max-w-md mx-auto">
          <p className="font-bold flex items-center gap-1.5 text-primary-navy text-sm">
            <ShieldCheck className="w-4 h-4 text-accent-orange" /> Next Steps:
          </p>
          <p className="text-neutral-text-muted flex items-start gap-1.5">
            <span className="text-accent-orange font-bold">•</span>
            <span>Complete your <strong>KYC verification</strong> (Aadhaar / Workshop photos) in your dashboard to start receiving jobs.</span>
          </p>
          <p className="text-neutral-text-muted flex items-start gap-1.5">
            <span className="text-accent-orange font-bold">•</span>
            <span>You can log in anytime using your phone <strong>+91 {formData.phone}</strong> and password.</span>
          </p>
        </div>

        <div className="pt-2 space-y-2.5 max-w-md mx-auto">
          <a
            href={targetKycUrl}
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-accent-orange hover:bg-accent-orange/90 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            Proceed to Workshop Dashboard &amp; Complete KYC <ArrowRight className="w-4 h-4" />
          </a>
          {onSwitchToLogin ? (
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-xs text-neutral-text-muted hover:text-neutral-text-dark font-medium underline block mx-auto cursor-pointer"
            >
              Or Sign In to Partner Portal
            </button>
          ) : (
            <Link
              href="/partner-login"
              className="text-xs text-neutral-text-muted hover:text-neutral-text-dark font-medium underline block mx-auto"
            >
              Or Sign In to Partner Portal
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full text-left ${className}`}>
      {/* Role Selector Header */}
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
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {step === 1 ? (
        /* STEP 1: PARTNER DETAILS & LEGAL CREDENTIALS */
        <form onSubmit={handleSendOtp} className="space-y-4" autoComplete="off">
          {/* Prevent Chrome/Edge aggressive credential autofill */}
          <input type="text" style={{ display: "none" }} tabIndex={-1} autoComplete="off" readOnly />
          <input type="password" style={{ display: "none" }} tabIndex={-1} autoComplete="off" readOnly />

          {/* Contact Person / Owner Name */}
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

          {/* Mobile & Email */}
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
                Email Address <span className="text-red-500">*</span>
              </label>
              <Input
                name="email"
                type="email"
                autoComplete="off"
                placeholder="e.g. ramesh@speedxmotors.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-11 bg-white border-gray-200 text-sm focus:border-primary-navy"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold text-neutral-text-dark">
                Create Account Password <span className="text-red-500">*</span>
              </label>
              <span className="text-[10px] text-neutral-text-muted">Min 8 characters</span>
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
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* PARTNER BUSINESS & PHYSICAL LOCATION DETAILS CARD */}
          <div className="p-4 sm:p-5 bg-[#FAF9F5] border border-amber-200/80 rounded-2xl space-y-3.5 shadow-2xs">
            <div className="flex items-center space-x-2 text-primary-navy font-bold text-xs sm:text-sm border-b border-amber-200/80 pb-2.5">
              <Wrench className="w-4 h-4 text-accent-orange" />
              <span>Partner Business &amp; Location Details</span>
            </div>

            {/* Workshop Name & Business Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-neutral-text-dark uppercase tracking-wider mb-1">
                  WORKSHOP / GARAGE NAME <span className="text-red-500">*</span>
                </label>
                <Input
                  name="businessName"
                  placeholder="e.g. SpeedX Motors & Detailing Studio"
                  value={formData.businessName}
                  onChange={(e) => {
                    const val = e.target.value;
                    setFormData(prev => ({ ...prev, businessName: val, workshopName: val }));
                  }}
                  required
                  className="h-11 bg-white border-amber-200/90 text-sm placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-neutral-text-dark uppercase tracking-wider mb-1">
                  BUSINESS TYPE <span className="text-red-500">*</span>
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-3 bg-white border border-amber-200/90 rounded-xl text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-navy"
                >
                  <option value="Proprietorship">Proprietorship (Sole Owner)</option>
                  <option value="Partnership">Partnership Firm</option>
                  <option value="LLP">Limited Liability Partnership (LLP)</option>
                  <option value="Company">Company (Pvt Ltd / Ltd)</option>
                  <option value="Other">Other Enterprise</option>
                </select>
              </div>
            </div>

            {/* Street Address */}
            <div>
              <label className="block text-[11px] font-bold text-neutral-text-dark uppercase tracking-wider mb-1">
                WORKSHOP STREET ADDRESS <span className="text-red-500">*</span>
              </label>
              <Input
                name="addressLine"
                placeholder="Shop/Plot No, Street, Industrial Area / Landmark"
                value={formData.addressLine}
                onChange={handleChange}
                required
                className="h-11 bg-white border-amber-200/90 text-sm placeholder:text-gray-400"
              />
            </div>

            {/* City, State, PIN - Dynamic State & City Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
              <div>
                <label className="block text-[11px] font-bold text-neutral-text-dark uppercase tracking-wider mb-1">
                  STATE <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="state"
                    value={formData.state}
                    onChange={(e) => {
                      const newState = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        state: newState,
                        city: "",
                      }));
                      setError("");
                    }}
                    required
                    className="w-full h-11 px-3 py-2 bg-white border border-amber-200/90 rounded-xl text-xs font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue appearance-none transition-all cursor-pointer shadow-xs"
                  >
                    <option value="">Select State</option>
                    {INDIAN_STATES.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-400">
                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-neutral-text-dark uppercase tracking-wider mb-1">
                  CITY <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    disabled={!formData.state}
                    className={`w-full h-11 px-3 py-2 bg-white border border-amber-200/90 rounded-xl text-xs font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue appearance-none transition-all cursor-pointer shadow-xs ${
                      !formData.state ? "bg-gray-50 text-gray-400 cursor-not-allowed opacity-75" : ""
                    }`}
                  >
                    <option value="">{formData.state ? "Select City" : "Select State First"}</option>
                    {getCitiesForState(formData.state).map((ct) => (
                      <option key={ct} value={ct}>
                        {ct}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-400">
                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-neutral-text-dark uppercase tracking-wider mb-1">
                  PIN CODE <span className="text-red-500">*</span>
                </label>
                <Input
                  name="pincode"
                  placeholder="6 digits"
                  maxLength={6}
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  className="h-11 bg-white border-amber-200/90 text-xs font-mono placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Google Maps Location Coordinates Pin */}
            <div className="p-3.5 bg-white border border-amber-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent-orange" />
                  Exact Google Maps Coordinates Pin <span className="text-red-500">*</span>
                </span>
                <button
                  type="button"
                  onClick={handleDetectLocation}
                  disabled={isLocating}
                  className="text-xs font-bold text-accent-orange hover:text-primary-navy inline-flex items-center gap-1.5 transition-colors cursor-pointer bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-200"
                >
                  <Compass className={`w-3.5 h-3.5 ${isLocating ? "animate-spin" : ""}`} />
                  {isLocating ? "Detecting GPS..." : "📍 Pin Current GPS Location"}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[10px] font-semibold text-gray-500 mb-0.5">Latitude (-90 to 90)</label>
                  <Input
                    name="latitude"
                    type="number"
                    step="any"
                    placeholder="e.g. 28.535517"
                    value={formData.latitude}
                    onChange={handleChange}
                    required
                    className="h-9 bg-slate-50 border-gray-200 text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-500 mb-0.5">Longitude (-180 to 180)</label>
                  <Input
                    name="longitude"
                    type="number"
                    step="any"
                    placeholder="e.g. 77.391026"
                    value={formData.longitude}
                    onChange={handleChange}
                    required
                    className="h-9 bg-slate-50 border-gray-200 text-xs font-mono"
                  />
                </div>
              </div>
              <p className="text-[10px] text-gray-400">
                Exact coordinates ensure precision dispatch in CarBlink's automated assignment engine.
              </p>
            </div>

            {/* Mandatory GST & Optional MSME */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-[11px] font-bold text-neutral-text-dark uppercase tracking-wider">
                    GST NUMBER <span className="text-red-500">*</span>
                  </label>
                  {formData.gstNumber.trim().length > 0 && (
                    <span className="text-[10px] font-mono font-semibold text-gray-500">
                      {formData.gstNumber.trim().length}/15
                    </span>
                  )}
                </div>
                <div className="relative">
                  <Input
                    name="gstNumber"
                    placeholder="E.G. 05AAAAA0000A1Z5"
                    value={formData.gstNumber}
                    maxLength={15}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9a-zA-Z]/g, '').toUpperCase();
                      setFormData((prev) => ({ ...prev, gstNumber: val }));
                    }}
                    required
                    className={`h-10 bg-white font-mono text-xs uppercase pr-8 transition-colors ${
                      formData.gstNumber.trim().length === 15
                        ? validateGSTIN(formData.gstNumber).isValid
                          ? 'border-emerald-500 focus:border-emerald-600 focus:ring-emerald-200'
                          : 'border-red-500 focus:border-red-600 focus:ring-red-200'
                        : 'border-amber-200/90'
                    }`}
                  />
                  {formData.gstNumber.trim().length === 15 && (
                    <div className="absolute right-2.5 top-1/2 -translate-y-1/2">
                      {validateGSTIN(formData.gstNumber).isValid ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                  )}
                </div>
                {formData.gstNumber.trim().length > 0 && (
                  <div className="mt-1">
                    {validateGSTIN(formData.gstNumber).isValid ? (
                      <p className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Valid GSTIN ({validateGSTIN(formData.gstNumber).stateName})
                      </p>
                    ) : formData.gstNumber.trim().length === 15 ? (
                      <p className="text-[10px] text-red-500 font-medium">
                        {validateGSTIN(formData.gstNumber).message}
                      </p>
                    ) : (
                      <p className="text-[10px] text-gray-400">
                        Enter 15-character official GST Number
                      </p>
                    )}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-[11px] font-bold text-neutral-text-dark uppercase tracking-wider mb-1">
                  MSME / UDYAM NO. <span className="text-gray-400 font-normal">(OPTIONAL)</span>
                </label>
                <Input
                  name="msmeNumber"
                  placeholder="E.G. UDYAM-DL-00-0123456"
                  value={formData.msmeNumber}
                  onChange={handleChange}
                  className="h-10 bg-white border-amber-200/90 font-mono text-xs uppercase placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>

          <Button
            type="submit"
            variant="accent"
            size="lg"
            fullWidth
            className="w-full h-12 mt-3 text-sm sm:text-base font-bold bg-accent-orange hover:bg-accent-orange/90 text-white rounded-xl shadow-lg shadow-accent-orange/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
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
            className="w-full h-12 mt-2 text-sm sm:text-base font-bold bg-accent-orange hover:bg-accent-orange/90 text-white rounded-xl shadow-lg shadow-accent-orange/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
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
