"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { KeyRound, ArrowRight, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Badge from "@/components/ui/Badge";
import { Logo } from "@/components/layout/Navbar";
import { fetchApi } from "@/lib/apiClient";

export default function ForgotPasswordPage() {
  const [identifier, setIdentifier] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleInputChange = (val: string) => {
    setError("");
    const isEmail = val.includes("@");
    if (!isEmail && /^\d+$/.test(val)) {
      if (val.length > 10) {
        val = val.slice(0, 10);
      }
    }
    setIdentifier(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setError("");
    setSuccess("");

    const rawInput = identifier.trim();
    if (!rawInput) {
      setError("Please enter your registered mobile number or email address.");
      return;
    }

    const isEmail = rawInput.includes('@');

    if (isEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(rawInput)) {
        setError("Please enter a valid email address (e.g. name@example.com)");
        return;
      }
    } else {
      if (/[^\d]/.test(rawInput)) {
        setError("Mobile number must contain 10 digits only. Letters are not allowed.");
        return;
      }
      if (rawInput.length !== 10) {
        setError("Mobile number must be exactly 10 digits (e.g. 9876543210)");
        return;
      }
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(rawInput)) {
        setError("Please enter a valid 10-digit Indian mobile number (starting with 6, 7, 8, or 9)");
        return;
      }
    }

    const cleanInput = isEmail ? rawInput.toLowerCase() : rawInput;

    setIsLoading(true);

    try {
      const res: any = await fetchApi("/auth/forgot-password", {
        method: "POST",
        body: JSON.stringify({ identifier: cleanInput }),
      });

      const serverMsg = res?.message || res?.data?.message || "Reset OTP code sent successfully.";
      setSuccess(serverMsg);

      setTimeout(() => {
        router.push(`/reset-password?identifier=${encodeURIComponent(cleanInput)}`);
      }, 1200);
    } catch (err: any) {
      setError(err?.message || "Failed to send reset code. Please check your mobile number or email.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-neutral-bg font-body text-neutral-text-dark antialiased">
      <section className="relative hidden lg:flex flex-col justify-center overflow-hidden bg-primary-navy p-12 xl:p-20 text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-blue/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent-orange/20 blur-3xl" />

        <div className="relative z-10 max-w-lg">
          <Logo />
          <h1 className="mt-12 font-heading font-black text-4xl leading-[1.1] sm:text-5xl tracking-tight">
            Reset Your Password <br />
            <span className="text-primary-blue">Securely & Quickly.</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Enter your registered email or mobile number to receive a verification OTP code.
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center p-6 sm:p-12 lg:p-16">
        <div className="w-full max-w-md mx-auto">
          <div className="mb-8 flex justify-center lg:hidden">
            <Logo />
          </div>

          <div className="mb-8 text-center lg:text-left">
            <Badge variant="info" className="bg-primary-blue/5 border-none !text-primary-blue shadow-none mb-4 inline-flex">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
              Password Reset
            </Badge>
            <h2 className="font-heading font-black text-3xl sm:text-4xl tracking-tight mb-2">
              Forgot Password?
            </h2>
            <p className="font-body text-sm text-neutral-text-muted">
              Enter your email or phone number to receive a 6-digit OTP code.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-50 text-red-600 text-sm p-4 rounded-xl border border-red-200 font-medium">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-50 text-green-700 text-sm p-4 rounded-xl border border-green-200 font-medium">
                {success}
              </div>
            )}

            <div>
              <Input
                label="Email Address or Phone Number"
                type="text"
                required
                value={identifier}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="e.g. name@example.com or 9876543210"
                icon={<KeyRound className="h-4 w-4" />}
                error={error}
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              rightIcon={<ArrowRight className="h-4 w-4" />}
              disabled={!identifier.trim() || isLoading}
            >
              {isLoading ? "Sending OTP..." : "Send Reset Code"}
            </Button>
          </form>

          <div className="mt-8 text-center lg:text-left">
            <Link
              href="/login"
              className="font-heading font-bold text-sm text-primary-orange hover:text-accent-orange transition-colors"
            >
              ← Back to Sign In
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
