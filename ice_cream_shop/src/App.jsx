import FirstSection from "./Components/FirstSection";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ProductSection from "./Components/ProductSection";

export default function App() {
  return (
    <div className="background-hero-header">
      <div className="background-ice-cream">
        <Header />
        <Hero />
        <FirstSection />
        <ProductSection />
      </div>
    </div>
  );
}
