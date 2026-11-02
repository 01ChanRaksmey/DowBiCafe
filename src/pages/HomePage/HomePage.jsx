
import AboutSection from "./AboutSection.jsx";
import HeroSection from "./HeroSection.jsx";
import PopularSection from "./PopularSection.jsx";
import CafeHighlightsSection from "./CafeHighlightsSection.jsx";

const HomePage = () => {
  return (
    <div className="px-4 py-8 md:px-8 lg:py-12">
      <HeroSection />
      <PopularSection />
      <AboutSection />
      <CafeHighlightsSection />
    </div>
  )
}

export default HomePage