import { BsArrowRightCircleFill } from "react-icons/bs";
import "./Components-style/CategoryCard.css";

export default function CategoryCard({ title, image }) {
  return (
    <div className="category-card">
      <img src={image} alt={title} />
      <h4>
        {title} <BsArrowRightCircleFill className="pink-arrow" />
      </h4>
    </div>
  );
}
