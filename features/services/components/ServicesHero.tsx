import { Search } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function ServicesHero() {
  return (
    <section className="bg-primary-navy text-white py-14 md:py-20">
      <Container>
        <div className="max-w-2xl">
          <Badge variant="info" className="bg-white/10 text-accent-orange border border-white/10 shadow-none mb-4">
            Complete Car Care, One Platform
          </Badge>

          <h1 className="font-heading font-black text-3xl md:text-5xl text-white leading-tight mb-4 tracking-tight">
            All Car Services,{" "}
            <span className="text-accent-orange">Compared &amp; Verified</span>
          </h1>

          <p className="font-body text-white/70 text-base md:text-lg mb-8 leading-relaxed">
            From periodic servicing to major repairs — find verified
            workshops near you, compare real prices instantly, and book the
            best deal in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 bg-white rounded-xl p-2 shadow-lg">
            <div className="flex items-center gap-2 flex-1 px-3">
              <Search className="w-5 h-5 text-neutral-text-muted shrink-0" />
              <input
                type="text"
                placeholder="Search a service e.g. Brake Service, AC Repair..."
                className="w-full py-2.5 font-body text-sm text-neutral-text-dark placeholder:text-neutral-text-muted focus:outline-none bg-transparent"
              />
            </div>
            <Button variant="primary" size="md" className="shrink-0">
              Search
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 font-body text-sm text-white/60">
            <span>2,500+ Verified Workshops</span>
            <span>25+ Cities Covered</span>
            <span>4.8/5 Customer Rating</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
