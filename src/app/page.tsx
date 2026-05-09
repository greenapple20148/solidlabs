import { HeroSection } from "@/components/home/HeroSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { CapabilitySection } from "@/components/home/CapabilitySection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <CapabilitiesSection />
      <ServicesSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <TechStackSection />
      <CapabilitySection />
      <ContactSection />
    </div>
  );
}
