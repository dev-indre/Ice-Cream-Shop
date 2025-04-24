import BestSellers from "./Components/BestSellers";
import CategoriesSection from "./Components/CategoriesSection";
import FirstSection from "./Components/FirstSection";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ProductSection from "./Components/ProductSection";
import Reviews from "./Components/Reviews";
import Subscribe from "./Components/Subscribe";
import SummerSpecial from "./Components/SummerSpecial";

export default function App() {
  return (
    <div className="background-hero-header">
      <div className="background-ice-cream">
        <Header />
        <Hero />
        <FirstSection />
        <ProductSection />
        <CategoriesSection />
        <SummerSpecial />
        <BestSellers />
        <Reviews />
        <Subscribe />
      </div>
    </div>
  );
}
