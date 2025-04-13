import "./Components-style/ProductCard.css";

export default function ProductCard({ name, price, description, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-info">
        <h4>{name}</h4> <p className="product-desc">{description}</p>
        <span className="product-price">${price}</span>
      </div>
    </div>
  );
}
