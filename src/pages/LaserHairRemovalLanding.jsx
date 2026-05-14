import HeroSection from "../components/landing/HeroSection";
import PainPoints from "../components/landing/PainPoints";
import TechnologySection from "../components/landing/TechnologySection";
import BenefitsSection from "../components/landing/BenefitsSection";
import ProcessSection from "../components/landing/ProcessSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import PricingSection from "../components/landing/PricingSection";
import FAQSection from "../components/landing/FAQSection";
import ContactFormSection from "../components/landing/ContactFormSection";
import QuickChatCTA from "../components/landing/QuickChatCTA";
import Navbar from "../components/layout/Navbar";

export default function LaserHairRemovalLanding() {
  return (
    <div className="pb-16 sm:pb-0">
      <Navbar />
      <div className="pt-10"></div>
      <HeroSection />
      <PainPoints />
      <TechnologySection />
      <BenefitsSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactFormSection />
      <QuickChatCTA />
    </div>
  );
}
