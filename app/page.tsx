import Hero from "../components/Hero";
import LifestyleSection from "../components/LifestyleSection";
import SelectedUnitsSection from "../components/SelectedUnitsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import DiscoverSection from "../components/DiscoverSection";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <LifestyleSection />
      <SelectedUnitsSection />
      <DiscoverSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
}
