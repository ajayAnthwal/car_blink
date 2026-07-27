import HeroSection from "@/features/home/components/HeroSection";
import StatsBar from "@/features/home/components/StatsBar";
import HowItWorks from "@/features/home/components/HowItWorks";
import ServicesGrid from "@/features/services/components/ServicesGrid";
import SavingsBanner from "@/features/home/components/SavingsBanner";
import WhyChooseUs from "@/features/home/components/WhyChooseUs";
import PartnerCTA from "@/features/workshops/components/PartnerCTA";
import ServiceRatesSection from "@/features/home/components/ServiceRatesSection";
import Testimonials from "@/features/testimonials/components/Testimonials";
import TrustBadges from "@/features/home/components/TrustBadges";
import FAQSection from "@/features/faq/components/FAQSection";
import BlogPreview from "@/features/blog/components/BlogPreview";
import FinalCTA from "@/features/home/components/FinalCTA";
import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <HowItWorks />
      <StatsBar />
      <ServicesGrid />
      <SavingsBanner />

      {/* Partner CTA */}
      <section className="pb-16 md:pb-20 bg-white">
        <Container>
          <PartnerCTA />
        </Container>
      </section>

      <ServiceRatesSection />
      <Testimonials />
      <TrustBadges />

      {/* FAQ & Blog Row */}
      <section className="py-16 bg-neutral-bg">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <FAQSection className="lg:col-span-5" />
          <BlogPreview className="lg:col-span-7" />
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
