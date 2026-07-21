import React from "react";
import { ShieldCheck, Zap, Scale, HeartHandshake } from "lucide-react";
import Container from "@/components/ui/Container";

const ABOUT_VALUES = [
  {
    icon: Scale,
    title: "Radical Transparency",
    desc: "We show you exactly what you're paying for. No jargon, no hidden fees, just honest pricing.",
  },
  {
    icon: ShieldCheck,
    title: "Vetted Quality",
    desc: "Every garage undergoes rigorous checks. We only partner with mechanics we'd trust with our own cars.",
  },
  {
    icon: Zap,
    title: "Instant Solutions",
    desc: "We value your time. From quote comparison to booking, everything happens in seconds.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    desc: "We're on your side. If a service doesn't meet our standards, our support team will make it right.",
  },
];

export default function AboutValues() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center mb-16 relative z-10">
          <div className="inline-block px-4 py-1.5 bg-primary-blue/10 border border-primary-blue/20 text-primary-blue font-bold text-sm rounded-full mb-4">
            The Car Blink Standard
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-neutral-text-dark tracking-tight mb-4">
            The principles behind every decision
          </h2>
          <p className="font-body text-neutral-text-muted text-lg max-w-2xl">
            What we stand for, and what you can always expect from us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {ABOUT_VALUES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative flex flex-col items-center text-center p-8 bg-neutral-bg rounded-[2rem] border border-neutral-text-muted/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-blue/10 transition-all duration-500">
                <Icon className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-text-dark mb-3 leading-tight group-hover:text-primary-blue transition-colors">
                {title}
              </h3>
              <p className="font-body text-neutral-text-muted leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
