import "./Components-style/ProductCard.css";
import { IoCartOutline } from "react-icons/io5";

export default function ProductCard({ name, price, description, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-info">
        <h4>{name}</h4> <p className="product-desc">{description}</p>
        <span className="product-price">
          ${price} <IoCartOutline className="shoping-cart" />
        </span>
      </div>
    </div>
  );
}
