import BestSellers from "../Components/BestSellers";
import CategoriesSection from "../Components/CategoriesSection";
import FirstSection from "../Components/FirstSection";
import Hero from "../Components/Hero";
import ProductSection from "../Components/ProductSection";
import Reviews from "../Components/Reviews";
import Socials from "../Components/Socials";
import Subscribe from "../Components/Subscribe";
import SummerSpecial from "../Components/SummerSpecial";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FirstSection />
      <ProductSection />
      <CategoriesSection />
      <SummerSpecial />
      <BestSellers />
      <Reviews />
      <Subscribe />
      <Socials />
    </>
  );
}
