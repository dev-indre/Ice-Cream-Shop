import "./Components-style/ProductCard.css";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router";

export default function ProductCard({ id, name, price, description, image }) {
  return (
    <Link to={`/products/${id}`} className="product-card">
      <div>
        <img src={image} alt={name} />
        <div className="product-info">
          <h4>{name}</h4> <p className="product-desc">{description}</p>
          <span className="product-price">
            ${price} <IoCartOutline className="shoping-cart" />
          </span>
        </div>
      </div>
    </Link>
  );
}
