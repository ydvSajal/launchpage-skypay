import { Hero } from "@/components/landing/hero";
import { StatsSection } from "@/components/landing/stats-section";
import { ProductStack } from "@/components/landing/product-stack";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Faq } from "@/components/landing/faq";
import { WaitlistSection } from "@/components/landing/waitlist-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <ProductStack />
      <HowItWorks />
      <Faq />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
