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
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
                  <div className="w-11 h-11 rounded-lg bg-primary-blue/10 flex items-center justify-center mb-4 relative">
                    <Icon className="w-5 h-5 text-primary-blue" />
                    <span className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-primary-blue text-white text-[11px] flex items-center justify-center font-heading font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-neutral-text-dark mb-1">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-neutral-text-muted">{step.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-14 bg-primary-navy">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="font-heading font-black text-2xl md:text-3xl text-white mb-2">
                Ready to save on your next car service?
              </h2>
              <p className="font-body text-white/70">
                Get free quotes from verified workshops in under 30 seconds.
              </p>
            </div>
            <Button
              variant="accent"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="shrink-0"
            >
              Compare Prices Now
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
