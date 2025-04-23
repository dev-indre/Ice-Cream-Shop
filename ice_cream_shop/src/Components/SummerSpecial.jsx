import "./Components-style/SummerSpecials.css";
import Button from "../UI/Button";
import arrow from "../assets/img/arrow_right.png";
import discountBadge from "../assets/img/discount-orange.png";
import dotedArrow from "../assets/img/dotedarrow.png";

export default function SummerSpecial() {
  return (
    <section className="purple-section">
      <div className="discount">
        <img src={dotedArrow} alt="doted-arrow" className="doted-arrow" />
        <img
          src={discountBadge}
          alt="discount-badge"
          className="discount-badge"
        />
      </div>
      <div className="purple-box">
        <h2 className="text-big white-text">Summer Special!</h2>
        <p className="purple-paragraph">Buy One Sundae, Get One 50% Off!</p>
        <div className="btn-box">
          <Button background="#f83d8e">
            Get This Deal <img src={arrow} alt="arrow-right" />
          </Button>
          <p className="code">Use code: SUMMER50 at checkout.</p>
        </div>
      </div>
      <div className="ice-cream-cone"></div>
    </section>
  );
}
