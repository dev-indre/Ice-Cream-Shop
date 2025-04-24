import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Components-style/ProductSection.css";

export default function BestSellers() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/api/products") // gauti duomenis i korteles
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error:", err));
  }, []);
  console.log(products);
  return (
    <section className="best-sellers-section">
      <h2 className="text-big">
        Our <span className="text-big icy">Best</span> Sellers
      </h2>
      <p className="describtion">
        Discover the favorites that keep our customers coming back for more.
      </p>
      <div className="product-grid">
        {products.slice(0, 4).map((prod) => (
          <ProductCard
            key={prod.id}
            name={prod.name}
            image={prod.ProductImages?.[0]?.image_url}
            price={prod.price}
            description={prod.description}
          />
        ))}
      </div>
    </section>
  );
}
