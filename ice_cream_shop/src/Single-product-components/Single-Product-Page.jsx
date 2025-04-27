import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Button from "../UI/Button";
import "./Single-product-styles/Single-Product-Page.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import arrow from "../assets/img/arrow_right.png";
import FadeLoader from "react-spinners/FadeLoader";
import ProductCard from "../Components/ProductCard";

export default function SingleProductPage() {
  const { id } = useParams(); // gauti vieno produkto id atvaizdavimui puslapyje
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  useEffect(() => {
    fetch(`/api/products`) // sufetchinti produktu sarasui, random pasirinkimas 4 isskyrus dabar rodoma
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((p) => p.id !== Number(id));
        const randomProducts = filtered.slice(0, 4);
        setRelatedProducts(randomProducts);
      })
      .catch((err) => console.error("Error fetching related products:", err));
  }, [id]);

  if (!product) {
    return <FadeLoader color="#f83d8e9c" margin={2} className="fade-loader" />;
  }

  return (
    <>
      <Header />

      <section className="single-product">
        <div className="product-details">
          <img
            src={product.ProductImages?.[0]?.image_url}
            alt={product.name}
            className="product-image"
          />
          <div className="info">
            <h2>{product.name}</h2>
            {product.price && (
              <p className="price">${Number(product.price).toFixed(2)}</p>
            )}
            <p className="description">{product.description}</p>

            {/* Spalvos parinkimas */}
            <div className="product-options">
              <h4>Color:</h4>
              <div className="color-options">
                <span
                  className={`color-circle red ${
                    selectedColor === "red" ? "active" : ""
                  }`}
                  onClick={() => setSelectedColor("red")}
                ></span>
                <span
                  className={`color-circle green ${
                    selectedColor === "green" ? "active" : ""
                  }`}
                  onClick={() => setSelectedColor("green")}
                ></span>
                <span
                  className={`color-circle brown ${
                    selectedColor === "brown" ? "active" : ""
                  }`}
                  onClick={() => setSelectedColor("brown")}
                ></span>
              </div>
            </div>

            {/* Ledu dydis */}
            <div className="product-options">
              <h4>Size:</h4>
              <div className="size-options">
                <button
                  className={`size-button ${
                    selectedSize === "S" ? "active" : ""
                  }`}
                  onClick={() => setSelectedSize("S")}
                >
                  S
                </button>
                <button
                  className={`size-button ${
                    selectedSize === "M" ? "active" : ""
                  }`}
                  onClick={() => setSelectedSize("M")}
                >
                  M
                </button>
                <button
                  className={`size-button ${
                    selectedSize === "L" ? "active" : ""
                  }`}
                  onClick={() => setSelectedSize("L")}
                >
                  L
                </button>
              </div>
            </div>

            {/* kiekio pasirinkimas */}
            <div className="quantity-selector">
              <button
                className="quantity-button"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span className="quantity-number">{quantity}</span>
              <button
                className="quantity-button"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <Button background="#f83d8e">
              Add {quantity} to Cart <img src={arrow} alt="arrow-right" />
            </Button>
          </div>
        </div>
      </section>

      <section className="related-products wrapper">
        <h2 className="text-big">
          Related <span className="text-big icy">Products</span>
        </h2>
        <p className="related-desc">Choose from some of related products</p>
        <div className="related-grid">
          {relatedProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              id={prod.id}
              name={prod.name}
              description={prod.description}
              price={prod.price}
              image={prod.ProductImages?.[0]?.image_url}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
