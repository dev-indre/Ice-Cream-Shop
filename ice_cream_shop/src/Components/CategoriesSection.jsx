import "./Components-style/CategoriesSection.css";
import CategoryCard from "./CategoryCard";
import { useEffect, useState } from "react";

export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch categories");
        return res.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
      });
  }, []);

  return (
    <section className="categories-section">
      <h2 className="text-big">
        Explore Our <span className="text-big icy">Categories</span>
      </h2>
      <p className="describtion-cat">
        Browse through our different categories to find your favorite ice cream
        treats.
      </p>
      <div className="category-grid">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} title={cat.name} image={cat.image_url} />
        ))}
      </div>
    </section>
  );
}
