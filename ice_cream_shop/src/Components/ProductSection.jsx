import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Components-style/ProductSection.css";

export default function ProductSection() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products") // gauti duomenis i korteles
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error:", err));
  }, []);
  return (
    <section className="product-section">
      <h2 className="text-big">
        Our <span className="text-big icy">Classic</span>Classic Favorites
      </h2>
      <p className="describtion">
        Check out our top products that our customers love.
      </p>
      <div className="product-grid">
        {products.map((prod) => (
          <ProductCard
            key={prod.id}
            name={prod.name}
            image={prod.image_url}
            price={prod.price}
            description={prod.description}
          />
        ))}
      </div>
    </section>
  );
}
