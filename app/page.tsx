import HeroSection from "@/features/home/components/HeroSection";
import StatsBar from "@/features/home/components/StatsBar";
import HowItWorks from "@/features/home/components/HowItWorks";
import ServicesGrid from "@/features/services/components/ServicesGrid";
import SavingsCalculator from "@/features/quotes/components/SavingsCalculator";
import WhyChooseUs from "@/features/home/components/WhyChooseUs";
import LiveQuotes from "@/features/quotes/components/LiveQuotes";
import PartnerCTA from "@/features/workshops/components/PartnerCTA";
import Testimonials from "@/features/testimonials/components/Testimonials";
import TrustBadges from "@/features/home/components/TrustBadges";
import FAQSection from "@/features/faq/components/FAQSection";
import BlogPreview from "@/features/blog/components/BlogPreview";
import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <HowItWorks />
      <ServicesGrid />
      <SavingsCalculator />
      <WhyChooseUs />
      
      {/* Live Quotes & Partner CTA Row */}
      <section className="py-16 bg-neutral-bg">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <LiveQuotes />
          <PartnerCTA />
        </Container>
      </section>

      <Testimonials />
      <TrustBadges />

      {/* FAQ & Blog Row */}
      <section className="py-16 bg-neutral-bg">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <FAQSection className="lg:col-span-5" />
          <BlogPreview className="lg:col-span-7" />
        </Container>
      </section>
    </>
  );
}


