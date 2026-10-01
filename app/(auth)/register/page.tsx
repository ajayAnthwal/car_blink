"use client";

import { Suspense } from "react";
import RegisterView from "@/features/auth/components/register-view";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <RegisterView />
    </Suspense>
  );
}
