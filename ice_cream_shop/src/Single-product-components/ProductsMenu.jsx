import { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import "./Single-product-styles/ProductsMenu.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Button from "../UI/Button";

export default function ProductsMenu() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));

    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error loading categories:", err));
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((prod) => prod.category_id === selectedCategory);

  const getCategoryCount = (categoryId) => {
    return products.filter((prod) => prod.category_id === categoryId).length;
  };

  return (
    <>
      <Header />
      <div className="menu-section">
        <h2 className="text-big">
          Our <span className="text-big icy">Menu</span>
        </h2>
        <p className="products-description">
          Browse through all our delicious ice cream treats!
        </p>
      </div>
      <section className="products-page wrapper">
        {/* kategoriju atvaizdavimas */}

        <div className="categories-bar">
          <Button
            className={selectedCategory === "all" ? "active" : ""}
            onClick={() => setSelectedCategory("all")}
          >
            All ({products.length})
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat.id}
              className={selectedCategory === cat.id ? "active" : ""}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name} ({getCategoryCount(cat.id)})
            </Button>
          ))}
        </div>

        {/* produktai: */}

        <div className="products-grid">
          {filteredProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              id={prod.id}
              name={prod.name}
              price={prod.price}
              description={prod.description}
              image={prod.ProductImages?.[0]?.image_url}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
