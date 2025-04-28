import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductCard from "../Components/ProductCard";
import "./pages-styles/ProductsCreation.css";
import { useState, useEffect } from "react";
import Button from "../UI/Button";
import ProductCreationForm from "../Components/ProductCreationForm";

export default function ProductsCreation() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  // turimu produktu gavimas:
  async function fetchProducts() {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  }
  async function fetchCategories() {
    try {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  }

  // trinimui:
  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchProducts();
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product", error);
    }
  }

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category_id === Number(selectedCategory))
    : products;

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <section className="create-product-page">
      <aside className="categories-sidebar">
        <h3>Categories</h3>
        <ul>
          <li
            className={selectedCategory === null ? "active" : ""}
            onClick={() => {
              setSelectedCategory(null);
              setCurrentPage(1);
            }}
          >
            All Products
          </li>
          {categories.map((cat) => (
            <li
              key={cat.id}
              className={selectedCategory === cat.id ? "active" : ""}
              onClick={() => {
                setSelectedCategory(cat.id);
                setCurrentPage(1);
              }}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </aside>

      <div className="product-main-content">
        <h2>Create New Product</h2>
        <ProductCreationForm
          categories={categories}
          onProductCreated={fetchProducts}
        />
        <h3>
          Products{" "}
          {selectedCategory &&
            `(Category: ${
              categories.find((c) => c.id === selectedCategory)?.name
            })`}
        </h3>

        <div className="product-grid">
          {currentProducts.length > 0 ? (
            currentProducts.map((prod) => (
              <div key={prod.id} className="product-card-container">
                <ProductCard
                  id={prod.id}
                  name={prod.name}
                  image={prod.ProductImages?.[0]?.image_url}
                  price={prod.price}
                  description={prod.description}
                />
                <Button
                  background="#ff0e0ea8"
                  onClick={() => handleDelete(prod.id)}
                >
                  Delete
                </Button>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>

        <div className="pagination">
          <Button
            background="#f83d8e"
            disabled={currentPage <= 1}
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
              }
            }}
          >
            <FaArrowLeft className="arrow-left" />
            Previous
          </Button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <Button
            background="#f83d8e"
            disabled={currentPage >= totalPages}
            onClick={() => {
              if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
              }
            }}
          >
            Next <FaArrowRight className="arrow-right" />
          </Button>
        </div>
      </div>
    </section>
  );
}
