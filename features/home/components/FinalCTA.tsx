import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const TRUST_POINTS = ["Verified Workshops", "No Hidden Charges", "100% Free to Use"];

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="bg-neutral-hero-bg rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden">
          {/* Left content */}
          <div className="flex flex-col items-start text-left z-10 max-w-xl">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-neutral-text-dark tracking-tight leading-tight mb-3">
              Ready to Save on Your Next Car Service?
            </h2>
            <p className="font-body text-neutral-text-muted text-base sm:text-lg mb-6">
              Join 120,000+ smart car owners who already trust Car Blink.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8">
              {TRUST_POINTS.map((point) => (
                <span key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                  <span className="font-body text-sm font-medium text-neutral-text-dark">
                    {point}
                  </span>
                </span>
              ))}
            </div>

            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Get Free Quote Now
            </Button>
          </div>

          {/* Right image */}
          <div className="relative z-10 w-full max-w-sm lg:max-w-md shrink-0">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/homeheroimage.png"
                alt="Save on your next car service"
                fill
                className="object-contain drop-shadow-xl"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
