"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import LocationModal from "@/components/ui/LocationModal";
import { LocateFixed, MapPin, Loader2, ArrowLeft, KeyRound } from "lucide-react";
import { useCreateLead, useSendLeadOtp } from "@/services/queries";
import { toast } from "sonner";

export default function HeroForm() {
  const [step, setStep] = useState<'FORM' | 'OTP'>('FORM');
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    carDetails: "",
    address: "",
    query: "",
  });
  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);

  const { mutateAsync: sendOtp, isPending: isSendingOtp } = useSendLeadOtp();
  const { mutateAsync: createLead, isPending: isSubmitting } = useCreateLead();

  useEffect(() => {
    let timer: any;
    if (step === 'OTP' && resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(timer);
  }, [step, resendTimer]);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = formData.number.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }
    try {
      const res = await sendOtp({ phone: formData.number });
      toast.success(res?.message || "OTP sent successfully to your mobile number!");
      setStep('OTP');
      setResendTimer(30);
      setCanResend(false);
    } catch (err: any) {
      toast.error(err.message || "Failed to send OTP. Please check your phone number.");
    }
  };

  const handleResendOtp = async () => {
    if (!canResend) return;
    try {
      const res = await sendOtp({ phone: formData.number });
      toast.success("OTP re-sent successfully!");
      setResendTimer(30);
      setCanResend(false);
    } catch (err: any) {
      toast.error(err.message || "Failed to resend OTP.");
    }
  };

  const handleVerifyAndSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.trim().length < 6) {
      toast.error("Please enter the 6-digit OTP code");
      return;
    }
    try {
      await createLead({
        name: formData.name,
        phone: formData.number,
        source: 'QUICK_CALLBACK',
        vehicleBrand: formData.carDetails,
        city: formData.address,
        message: formData.query,
        otp: otp.trim(),
      });
      toast.success("Query Submitted Successfully! We will contact you soon.");
      setFormData({ name: "", number: "", carDetails: "", address: "", query: "" });
      setOtp("");
      setStep('FORM');
    } catch (err: any) {
      toast.error(err.message || "Invalid OTP code. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border border-neutral-text-muted/10 w-full max-w-md mx-auto relative z-20">
      <div className="mb-6">
        <h3 className="font-heading font-bold text-2xl text-neutral-text-dark">
          Get a Quick Callback
        </h3>
        <p className="text-sm text-neutral-text-muted mt-1">
          {step === 'FORM'
            ? "Provide your details and we'll fetch the best prices for you."
            : `Enter the 6-digit OTP sent to +91 ${formData.number.replace(/[^0-9]/g, '').slice(-10)}`}
        </p>
      </div>

      {step === 'FORM' ? (
        <form onSubmit={handleSendOtp} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-text-dark mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="number" className="block text-sm font-medium text-neutral-text-dark mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div>
            <label htmlFor="carDetails" className="block text-sm font-medium text-neutral-text-dark mb-1">
              Car Details
            </label>
            <input
              type="text"
              id="carDetails"
              name="carDetails"
              value={formData.carDetails}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
              placeholder="e.g., Hyundai Creta 2022"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="address" className="block text-sm font-medium text-neutral-text-dark">
                Address / Location
              </label>
              <button
                type="button"
                onClick={() => setShowMapModal(true)}
                className="flex items-center gap-1.5 text-xs font-semibold text-primary-blue hover:text-primary-blue-dark transition-colors"
              >
                <LocateFixed className="w-3.5 h-3.5" />
                Select on Map
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
                placeholder="e.g., Cyber City, Gurgaon or House No, Sector..."
              />
              <MapPin className="w-4 h-4 text-neutral-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label htmlFor="query" className="block text-sm font-medium text-neutral-text-dark mb-1">
              Query / Message
            </label>
            <textarea
              id="query"
              name="query"
              value={formData.query}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all resize-none"
              placeholder="Type your query here..."
            ></textarea>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full mt-2"
            disabled={isSendingOtp}
          >
            {isSendingOtp ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" /> Sending OTP...
              </span>
            ) : (
              "Submit Query"
            )}
          </Button>
        </form>
      ) : (
        <form onSubmit={handleVerifyAndSubmit} className="flex flex-col gap-5 py-2">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
            <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-2 text-primary-blue">
              <KeyRound className="w-6 h-6 text-primary-blue" />
            </div>
            <p className="text-sm font-medium text-gray-700">Verify Mobile Number</p>
            <p className="text-xs text-gray-500 mt-1">
              OTP sent to <span className="font-semibold text-gray-900">+91 {formData.number}</span>
            </p>
            <button
              type="button"
              onClick={() => setStep('FORM')}
              className="text-xs font-semibold text-primary-blue hover:underline mt-2 inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3 h-3" /> Edit Number
            </button>
          </div>

          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-neutral-text-dark mb-2 text-center">
              Enter 6-Digit OTP
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
              required
              autoFocus
              className="w-full text-center text-2xl font-bold tracking-widest px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
              placeholder="• • • • • •"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Didn't receive code?</span>
            {canResend ? (
              <button
                type="button"
                onClick={handleResendOtp}
                className="font-semibold text-primary-blue hover:underline"
              >
                Resend OTP
              </button>
            ) : (
              <span className="font-medium text-gray-400">Resend in {resendTimer}s</span>
            )}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full mt-1"
            disabled={isSubmitting || otp.length < 6}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" /> Verifying Lead...
              </span>
            ) : (
              "Verify & Submit Query"
            )}
          </Button>

          <button
            type="button"
            onClick={() => setStep('FORM')}
            className="text-xs text-center text-gray-500 hover:text-gray-700"
          >
            Cancel & Go Back
          </button>
        </form>
      )}

      <LocationModal
        isOpen={showMapModal}
        onClose={() => setShowMapModal(false)}
        onConfirm={(locStr) => {
          setFormData((prev) => ({ ...prev, address: locStr }));
        }}
      />
    </div>
  );
}

