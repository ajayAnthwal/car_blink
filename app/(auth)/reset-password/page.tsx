"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { LockKeyhole, ArrowRight, ShieldCheck, Lock } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Badge from "@/components/ui/Badge";
import { Logo } from "@/components/layout/Navbar";
import { fetchApi } from "@/lib/apiClient";

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const initialIdentifier = searchParams.get("identifier") || "";

  const [identifier, setIdentifier] = useState(initialIdentifier);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const res: any = await fetchApi("/auth/reset-password", {
        method: "POST",
        body: JSON.stringify({ identifier, token: otp, newPassword }),
      });

      const serverMsg = res?.message || res?.data?.message || "Password has been reset successfully!";
      setSuccess(serverMsg + " Redirecting to login...");

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err: any) {
      setError(err?.message || "Failed to reset password. Please check your OTP code and try again.");
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
            Create Your New Password <br />
            <span className="text-primary-blue">Set & Secure.</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Enter the 6-digit OTP code sent to your email or phone and specify your new password.
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
              Security Code Verification
            </Badge>
            <h2 className="font-heading font-black text-3xl sm:text-4xl tracking-tight mb-2">
              New Password
            </h2>
            <p className="font-body text-sm text-neutral-text-muted">
              Enter your reset OTP code and your new password.
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
                label="Email or Phone Number"
                type="text"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                readOnly={!!initialIdentifier}
                icon={<LockKeyhole className="h-4 w-4" />}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Input
                  label="6-Digit Reset OTP"
                  type="text"
                  required
                  placeholder="123456"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  icon={<Lock className="h-4 w-4" />}
                />
              </div>

              <div>
                <Input
                  label="New Password"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  icon={<Lock className="h-4 w-4" />}
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              rightIcon={<ArrowRight className="h-4 w-4" />}
              disabled={!otp.trim() || !newPassword.trim() || isLoading}
            >
              {isLoading ? "Resetting Password..." : "Reset Password"}
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

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
