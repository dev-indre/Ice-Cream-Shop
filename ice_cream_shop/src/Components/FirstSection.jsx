import "./Components-style/FirstSection.css";
import girl_photo from "../assets/img/Girl.png";
import Button from "../UI/Button";
import arrow from "../assets/img/arrow_right.png";

export default function FirstSection() {
  return (
    <div className="container">
      <div className="girl_image">
        <img src={girl_photo} alt="girl_with_ice_cream" />
      </div>
      <div className="text-first-section">
        <h3 className="text-big">
          Relive the Sweet Memories of Classic{" "}
          <span className="text-big icy">Ice Creams</span>
        </h3>
        <p className="first-parag">
          From rich chocolate fudge to creamy vanilla sundaes, discover our menu
          of classic ice cream creations.
        </p>
        <Button background="#F83D8E">
          Explore Our Menu <img src={arrow} alt="arrow-right" />
        </Button>
      </div>
    </div>
  );
}
