import Hero from "../components/Hero";
import LifestyleSection from "../components/LifestyleSection";
import SelectedUnitsSection from "../components/SelectedUnitsSection";
import DiscoverSection from "../components/DiscoverSection";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <LifestyleSection />
      <SelectedUnitsSection />
      <DiscoverSection />
    </div>
  );
}
