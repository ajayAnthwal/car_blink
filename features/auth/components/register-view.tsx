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
            <Wrench className="w-3.5 h-3.5" />
            Workshop Partners
          </Badge>
          <h1 className="font-heading font-black text-3xl sm:text-4xl leading-tight tracking-tight mt-5 max-w-lg mx-auto">
            Become a <span className="text-primary-blue">workshop partner</span>
          </h1>
          <p className="font-body text-sm sm:text-base text-neutral-text-muted leading-relaxed mt-3 max-w-sm mx-auto">
            Join 300+ verified workshops and grow your business with
            steady, qualified bookings.
          </p>
        </Container>
      </section>

      {/* ================= FORM ================= */}

      <section className="relative z-20 -mt-16 pb-24">
        <Container className="max-w-lg">
          <Card className="p-6 sm:p-8">
            {isSuccess ? (
              /* ================= SUCCESS ================= */

              <div className="flex flex-col items-center rounded-2xl border border-primary-blue/15 bg-primary-blue/5 px-6 py-10 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-blue/10">
                  <CheckCircle2 className="h-7 w-7 text-primary-blue" />
                </div>

                <h3 className="mt-4 font-heading text-base font-bold text-neutral-text-dark">
                  Registration successful!
                </h3>

                <p className="mt-1 max-w-sm font-body text-sm text-neutral-text-muted">
                  Your account has been created successfully. Welcome to Car
                  Blink!
                </p>

                <Button
                  type="button"
                  variant="link"
                  className="mt-6"
                  onClick={handleAnotherRegistration}
                >
                  Create another account
                </Button>
              </div>
            ) : (
              /* ================= FORM ================= */

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Full Name */}

                <div>
                  <Input
                    label="Full Name"
                    type="text"
                    placeholder="Rahul Kumar"
                    icon={<User className="h-4 w-4" />}
                    {...register("fullName")}
                  />

                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Email */}

                <div>
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="rahul@example.com"
                    icon={<Mail className="h-4 w-4" />}
                    {...register("email")}
                  />

                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}

                <div>
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="9876543210"
                    icon={<Phone className="h-4 w-4" />}
                    {...register("phone")}
                  />

                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Password */}

                <div>
                  <Input
                    label="Password"
                    type="password"
                    placeholder="StrongPassword123!"
                    icon={<Lock className="h-4 w-4" />}
                    {...register("password")}
                  />

                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Role */}

                <input type="hidden" value="CUSTOMER" {...register("role")} />

                {/* Submit */}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isPending}
                  rightIcon={
                    !isPending ? <ArrowRight className="h-4 w-4" /> : undefined
                  }
                >
                  {isPending ? "Creating Account..." : "Create Account"}
                </Button>
              </form>
            )}

            {/* Login */}

            <p className="mt-6 text-center font-body text-sm text-neutral-text-muted">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-heading font-semibold text-primary-blue hover:text-primary-blue-dark"
              >
                Log in
              </Link>
            </p>
          </Card>
        </Container>
      </section>
    </div>
  );
}
