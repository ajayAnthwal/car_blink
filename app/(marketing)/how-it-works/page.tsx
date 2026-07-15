// import Image from "next/image";
import Link from "next/link";
import {
  ClipboardList,
  Mail,
  Scale,
  CalendarCheck,
  ShieldCheck,
  IndianRupee,
  Clock,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";

// NOTE: Header and Footer are assumed to already be rendered from the root
// layout (same as your Home page), so they are not imported here again.
// If your layout doesn't do that, just wrap this page's return value with
// <Header /> ... <Footer />.

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Submit Your Request",
    description:
      "Tell us your car's make, model, and the service you need. It takes less than 30 seconds — no signup, no hassle.",
    image:
      "#",
    alt: "Person filling a service request on a phone",
  },
  {
    number: "02",
    icon: Mail,
    title: "Get Multiple Quotes",
    description:
      "Verified workshops near you receive your request instantly and send back competitive, transparent quotes within minutes.",
    image:
      "#",
    alt: "Mechanic reviewing a quote on a tablet in a workshop",
  },
  {
    number: "03",
    icon: Scale,
    title: "Compare Prices",
    description:
      "See every quote side-by-side — price, ratings, services offered, and workshop reviews — and pick what works best for you.",
    image:
      "#",
    alt: "Comparing pricing on a laptop screen",
  },
  {
    number: "04",
    icon: CalendarCheck,
    title: "Book & Save",
    description:
      "Confirm your booking and pay securely through CarBlink. Track your service live and drive away having saved real money.",
    image:
      "#",
    alt: "Car being serviced in a workshop bay",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Verified Workshops Only",
    description:
      "Every workshop on CarBlink is background-checked and quality-assured before it can quote you.",
  },
  {
    icon: IndianRupee,
    title: "No Hidden Charges",
    description:
      "The price you're quoted is the price you pay. Full transparency, every time.",
  },
  {
    icon: Clock,
    title: "Save Time, Not Just Money",
    description:
      "Skip the phone calls and workshop visits. Compare and book everything from one screen.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="bg-[#0B1230] text-white">
        <Container className="py-16 md:py-24 text-center">
          <span className="inline-block text-xs md:text-sm font-medium text-orange-400 bg-orange-400/10 rounded-full px-4 py-1 mb-5">
            Simple. Transparent. Fast.
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            How <span className="text-orange-500">CarBlink</span> Works
          </h1>
          <p className="mt-5 text-slate-300 max-w-xl mx-auto text-sm md:text-base">
            From request to road-ready — see exactly how we help you compare
            car service prices and book the best deal in four simple steps.
          </p>
        </Container>
      </section>

      {/* Section 2: Detailed steps (alternating layout) */}
      <section className="bg-white">
        <Container className="py-16 md:py-24 space-y-16 md:space-y-24">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const reversed = index % 2 === 1;
            return (
              <div
                key={step.number}
                className={`flex flex-col ${
                  reversed ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-8 md:gap-14`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                   
  <img
    src={step.image}
    alt={step.alt}
    className="w-full h-full object-cover"
  />

                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <span className="text-5xl font-bold text-orange-500/20">
                    {step.number}
                  </span>
                  <div className="flex items-center gap-3 mt-2 mb-3">
                    <div className="bg-orange-500/10 text-orange-500 rounded-xl p-2.5">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#0B1230]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      {/* Section 3: Why it works / benefits */}
      <section className="bg-neutral-bg">
        <Container className="py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1230]">
              Why It Works So Well
            </h2>
            <p className="text-slate-500 mt-3 text-sm md:text-base max-w-lg mx-auto">
              Thousands of car owners trust CarBlink because we take the
              guesswork out of car servicing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-white rounded-2xl p-6 shadow-sm text-center"
                >
                  <div className="bg-orange-500/10 text-orange-500 rounded-xl p-3 inline-flex mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-semibold text-[#0B1230] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Section 4: CTA */}
      <section className="bg-[#0B1230]">
        <Container className="py-14 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Ready to save on your next car service?
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                Get multiple quotes from verified workshops in minutes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/compare"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-medium px-6 py-3 rounded-xl text-sm"
              >
                Compare Prices Now <ArrowRight size={16} />
              </Link>
              <Link
                href="/become-a-partner"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 transition-colors text-white font-medium px-6 py-3 rounded-xl text-sm border border-white/20"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}