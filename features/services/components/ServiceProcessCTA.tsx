import { ClipboardList, Mail, Scale, CalendarCheck, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const steps = [
  {
    icon: ClipboardList,
    title: "Select a Service",
    description: "Choose the service your car needs from the list above.",
  },
  {
    icon: Mail,
    title: "Get Multiple Quotes",
    description: "We send your request to verified workshops near you.",
  },
  {
    icon: Scale,
    title: "Compare Prices",
    description: "Compare prices, ratings and reviews side by side.",
  },
  {
    icon: CalendarCheck,
    title: "Book Best Deal",
    description: "Book your service and pay securely. That simple.",
  },
];

export default function ServiceProcessCTA() {
  return (
    <>
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-[100px] pointer-events-none" />
        
        <Container className="relative z-10 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl md:text-5xl text-neutral-text-dark tracking-tight mb-4">
              How to Book Your Service
            </h2>
            <p className="font-body text-neutral-text-muted text-lg max-w-2xl mx-auto">
              Follow these simple steps to get your car serviced by top-rated professionals.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-neutral-text-muted/10 via-primary-blue/30 to-neutral-text-muted/10 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative group bg-white lg:bg-transparent rounded-2xl p-6 lg:p-0 shadow-lg lg:shadow-none border lg:border-none border-neutral-text-muted/10 transition-transform duration-300 hover:-translate-y-2 lg:hover:-translate-y-0 text-center lg:text-left">
                    
                    <div className="flex flex-col items-center lg:items-start">
                      {/* Step Icon & Number */}
                      <div className="relative mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-white shadow-xl shadow-primary-blue/10 flex items-center justify-center border-2 border-primary-blue/5 group-hover:border-primary-blue/30 transition-colors duration-300 relative z-10">
                          <Icon className="w-7 h-7 text-primary-blue group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent-orange text-white text-sm flex items-center justify-center font-heading font-black shadow-lg shadow-accent-orange/30 z-20 border-2 border-white">
                          {index + 1}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:pr-4">
                        <h3 className="font-heading font-bold text-xl text-neutral-text-dark mb-2">
                          {step.title}
                        </h3>
                        <p className="font-body text-sm text-neutral-text-muted leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Floating Overlapping CTA Banner */}
      <section className="relative -mb-16 pt-10 z-20 px-4 sm:px-6">
        <Container className="max-w-5xl">
          <div className="relative bg-gradient-to-r from-primary-navy to-primary-blue-dark rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-primary-blue/30 overflow-hidden border border-white/10">
            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent-orange/20 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="max-w-xl">
                <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-3 tracking-tight">
                  Ready to save on your next car service?
                </h2>
                <p className="font-body text-white/70 text-lg">
                  Get free quotes from verified workshops in under 30 seconds.
                </p>
              </div>
              <Button
                variant="accent"
                size="lg"
                href="/quotes"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="shrink-0 font-bold px-8 py-4 shadow-lg shadow-accent-orange/25 hover:scale-105 transition-transform duration-300"
              >
                Compare Prices Now
              </Button>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Spacer to account for overlapping CTA banner */}
      <div className="h-24 bg-white" />
    </>
  );
}
