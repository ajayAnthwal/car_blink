import { ClipboardList, Mail, Scale, CalendarCheck } from "lucide-react";
import Container from "@/components/ui/Container";

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
                  <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center mb-4 relative">
                    <Icon className="w-5 h-5 text-primary-dark" />
                    <span className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-primary-dark text-white text-[11px] flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-500">{step.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-14 bg-primary-dark">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to save on your next car service?
              </h2>
              <p className="text-white/70">
                Get free quotes from verified workshops in under 30 seconds.
              </p>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold px-7 py-3.5 rounded-lg whitespace-nowrap">
              Compare Prices Now
            </button>
          </div>
        </Container>
      </section>
    </>
  );
}