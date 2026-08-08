"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  CheckCircle2,
  ArrowRight,
  Wrench,
  Lock,
  User
} from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import { Logo } from "@/components/layout/Navbar";



import { useRegister } from "@/hooks/auth/use-auth";
import { RegisterFormData, registerSchema } from "@/lib/validation/register.schema";

export default function RegisterView() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      role: "CUSTOMER"
    }
  });

  const { mutate: registerUser, isPending, isSuccess } = useRegister();

  const onSubmit = (data: RegisterFormData) => {
    console.log("✅ Register Form Data:", data);
    registerUser(data);
  };

  const handleAnotherRegistration = () => {
    reset();
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-neutral-bg font-body text-neutral-text-dark antialiased">
      {/* ---------------- LEFT SIDE: VISUAL ---------------- */}
      <section className="relative hidden lg:flex flex-col justify-center overflow-hidden bg-primary-navy p-12 xl:p-20 text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-blue/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent-orange/20 blur-3xl" />

        <div className="relative z-10 max-w-lg">
          <Logo />
          <h1 className="mt-12 font-heading font-black text-4xl leading-[1.1] sm:text-5xl tracking-tight">
            Join the future of <br />
            <span className="text-primary-blue">car maintenance.</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Create your account today to easily book services, manage quotes, and keep track of your vehicle's health in one place.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="font-heading font-black text-2xl text-white">100k+</p>
              <p className="mt-1 font-body text-xs text-white/60">Happy Car Owners</p>
            </div>
            <div>
              <p className="font-heading font-black text-2xl text-white">2.5k+</p>
              <p className="mt-1 font-body text-xs text-white/60">Verified Workshops</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- RIGHT SIDE: FORM ---------------- */}
      <section className="flex flex-col justify-center p-6 sm:p-12 lg:p-16 max-h-screen overflow-y-auto">
        <div className="w-full max-w-md mx-auto py-8">
          {/* Mobile Logo */}
          <div className="mb-8 flex justify-center lg:hidden">
            <Logo />
          </div>

          <div className="mb-10 text-center lg:text-left">
            <Badge variant="info" className="bg-primary-blue/5 border-none !text-primary-blue shadow-none mb-4 inline-flex">
              <User className="w-3.5 h-3.5 mr-1.5" />
              Customer Registration
            </Badge>
            <h2 className="font-heading font-black text-3xl sm:text-4xl tracking-tight mb-3">
              Create an account
            </h2>
            <p className="font-body text-base text-neutral-text-muted">
              Get started by filling out your details below.
            </p>
          </div>

          {isSuccess ? (
            /* ================= SUCCESS ================= */
            <div className="flex flex-col items-center lg:items-start rounded-2xl border border-primary-blue/15 bg-primary-blue/5 px-6 py-10 text-center lg:text-left">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-blue/10">
                <CheckCircle2 className="h-7 w-7 text-primary-blue" />
              </div>

              <h3 className="mt-5 font-heading text-xl font-black text-neutral-text-dark">
                Registration successful!
              </h3>

              <p className="mt-2 max-w-sm font-body text-base text-neutral-text-muted">
                Your account has been created successfully. Welcome to Car Blink!
              </p>

              <Button
                type="button"
                variant="outline"
                className="mt-8 w-full"
                onClick={handleAnotherRegistration}
              >
                Create another account
              </Button>
            </div>
          ) : (
            /* ================= FORM ================= */
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Rahul Kumar"
                  icon={<User className="h-4 w-4" />}
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="rahul@example.com"
                  icon={<Mail className="h-4 w-4" />}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="9876543210"
                  icon={<Phone className="h-4 w-4" />}
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <Input
                  label="Password"
                  type="password"
                  placeholder="StrongPassword123!"
                  icon={<Lock className="h-4 w-4" />}
                  {...register("password")}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                )}
              </div>

              <input type="hidden" value="CUSTOMER" {...register("role")} />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={isPending}
                rightIcon={!isPending ? <ArrowRight className="h-4 w-4" /> : undefined}
                className="mt-2"
              >
                {isPending ? "Creating Account..." : "Create Account"}
              </Button>
            </form>
          )}

          <p className="mt-8 text-center lg:text-left font-body text-sm text-neutral-text-muted">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-heading font-semibold text-primary-blue hover:text-primary-blue-dark transition-colors"
            >
              Log in
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
