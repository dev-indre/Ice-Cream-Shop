import "./Components-style/Reviews.css";
import { LiaStarSolid } from "react-icons/lia";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import person1 from "../assets/reviewImg/person1.png";
import person2 from "../assets/reviewImg/person2.png";
import person3 from "../assets/reviewImg/person3.png";
import person4 from "../assets/reviewImg/person4.png";
import { useState } from "react";

const people = [person1, person2, person3, person4];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + people.length) % people.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % people.length);
  };
  return (
    <section className="reviews">
      <div>
        <h2 className="text-big">
          Hear From Our <span className="text-big icy">Happy</span> Fans
        </h2>
        <div className="stars">
          <LiaStarSolid />
          <LiaStarSolid />
          <LiaStarSolid />
          <LiaStarSolid />
          <LiaStarSolid />
        </div>
        <p className="big-review">
          “Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia
          voluptas aspernatur aur odit aut fugit, sed neatae vitae dicta
          ripiscing elit, sed do euismod tempor incidunt labore aredolore magna
          aliqua ut enim ad minim adipiscing elit, sed do euismod tempor
          incidunt labore minima veniam.”
        </p>
        <p className="icy customer-name">Fergus Douchebag</p>
        <p className="customer">Happy Customer</p>
        <div className="avatar-slider">
          <button className="slider-arrow left" onClick={prevSlide}>
            <FaArrowLeft />
          </button>
          <div className="avatar-list">
            {people.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`person-${i + 1}`}
                className={i === index ? "active-avatar" : ""}
              />
            ))}
          </div>
          <button className="slider-arrow right" onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
