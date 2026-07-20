import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronRight, Clock, ShieldCheck, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { DUMMY_SERVICES } from "@/lib/dummy-services";

export default function ServiceDetailsPage({ params }: { params: { id: string } }) {
  let service = DUMMY_SERVICES[params.id];

  if (!service) {
    const formattedName = params.id
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
      
    service = {
      name: formattedName,
      description: `Comprehensive ${formattedName.toLowerCase()} performed by certified experts to ensure maximum performance and reliability.`,
      priceFrom: "₹2,999",
      category: "Auto Service",
      heroImage: "/images/hero-car.png",
      inclusions: [
        "Complete System Diagnostics",
        "Multi-point Inspection",
        "Expert Consultation",
        "Premium Parts Guarantee",
        "Labor and Installation",
        "Final Quality Check"
      ],
      faqs: [
        { q: `How long does a ${formattedName.toLowerCase()} take?`, a: "Most services are completed on the same day. Our team will provide an exact time estimate upon inspection." },
        { q: "Do you offer a warranty?", a: "Yes, we provide up to 6 months warranty on all our services and replacement parts." }
      ]
    };
  }

  return (
    <div className="bg-neutral-bg min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-neutral-hero-bg text-neutral-text-dark overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={service.heroImage}
            alt={service.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-right opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-hero-bg via-neutral-hero-bg/90 to-neutral-hero-bg/40" />
        </div>
        <Container className="relative z-10">
          <div className="flex items-center gap-2 text-sm font-heading font-semibold text-neutral-text-muted mb-6">
            <Link href="/" className="hover:text-primary-blue transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-primary-blue transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary-blue">{service.name}</span>
          </div>

          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-white border border-primary-blue/20 text-primary-blue text-xs font-bold rounded-full mb-4 shadow-sm">
              {service.category}
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-neutral-text-dark tracking-tight mb-6">
              {service.name}
            </h1>
            <p className="font-body text-lg text-neutral-text-muted leading-relaxed mb-8 max-w-lg">
              {service.description}
            </p>
            <div className="flex items-center gap-6 text-sm font-medium text-neutral-text-dark">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-blue" />
                Same Day Delivery*
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-success" />
                Warranty Included
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">

          {/* Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* What's Included */}
            <div className="bg-white rounded-[2rem] p-8 border border-neutral-text-muted/10 shadow-sm">
              <h2 className="font-heading font-black text-2xl text-neutral-text-dark mb-6">What's Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.inclusions.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-success" />
                    </div>
                    <span className="font-body text-neutral-text-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-[2rem] p-8 border border-neutral-text-muted/10 shadow-sm">
              <h2 className="font-heading font-black text-2xl text-neutral-text-dark mb-6">Why Book With Car Blink?</h2>
              <div className="flex flex-col gap-5">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-blue/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-neutral-text-dark mb-1">100% Verified Workshops</h3>
                    <p className="font-body text-sm text-neutral-text-muted">Every garage goes through a 25-point quality check before onboarding.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent-orange/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent-orange" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-neutral-text-dark mb-1">Free Pickup & Drop</h3>
                    <p className="font-body text-sm text-neutral-text-muted">Enjoy contactless car pickup and drop-off from your home or office.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-[2rem] p-8 border border-neutral-text-muted/10 shadow-sm">
              <h2 className="font-heading font-black text-2xl text-neutral-text-dark mb-6">Frequently Asked Questions</h2>
              <div className="flex flex-col gap-6">
                {service.faqs.map((faq: any, idx: number) => (
                  <div key={idx}>
                    <h3 className="font-heading font-bold text-neutral-text-dark mb-2 text-lg">{faq.q}</h3>
                    <p className="font-body text-neutral-text-muted leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA (Sticky) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-[2rem] p-8 border border-neutral-text-muted/10 shadow-lg shadow-neutral-text-muted/5">
              <h3 className="font-heading font-black text-2xl text-neutral-text-dark mb-2">Get Free Quote</h3>
              <p className="font-body text-sm text-neutral-text-muted mb-6">Starting price for {service.name}.</p>

              <div className="flex items-end gap-2 mb-8">
                <span className="font-heading font-black text-4xl text-primary-blue">{service.priceFrom}</span>
              </div>

              <div className="flex flex-col gap-3">
                <Button variant="primary" size="lg" fullWidth rightIcon={<ArrowRight className="w-5 h-5" />} href={`/quotes?service=${encodeURIComponent(service.name)}`}>
                  Request a Quote
                </Button>
                <Button variant="outline" size="lg" fullWidth href="https://wa.me/919876543210">
                  Chat on WhatsApp
                </Button>
              </div>

              <p className="font-body text-xs text-center text-neutral-text-muted mt-6">
                No credit card required. Final price may vary by car model.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}
