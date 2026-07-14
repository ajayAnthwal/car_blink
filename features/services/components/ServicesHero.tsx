import { Search } from "lucide-react";
import Container from "@/components/ui/Container";

export default function ServicesHero() {
  return (
    <section className="bg-slate-900 text-white py-14 md:py-20">
      <Container>
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-medium text-orange-400 bg-white/10 px-3 py-1 rounded-full mb-4">
            Complete Car Care, One Platform
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            All Car Services,{" "}
            <span className="text-orange-400">Compared &amp; Verified</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg mb-8">
            From periodic servicing to major repairs — find verified
            workshops near you, compare real prices instantly, and book the
            best deal in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 bg-white rounded-xl p-2 shadow-lg">
            <div className="flex items-center gap-2 flex-1 px-3">
              <Search className="w-5 h-5 text-neutral-400 shrink-0" />
              <input
                type="text"
                placeholder="Search a service e.g. Brake Service, AC Repair..."
                className="w-full py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none bg-transparent"
              />
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white text-sm font-semibold px-6 py-3 rounded-lg shrink-0">
              Search
            </button>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm text-white/60">
            <span>300+ Verified Workshops</span>
            <span>25+ Cities Covered</span>
            <span>4.8/5 Customer Rating</span>
          </div>
        </div>
      </Container>
    </section>
  );
}