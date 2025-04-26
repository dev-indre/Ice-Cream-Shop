import "./Components-style/Socials.css";
import Item from "../assets/instagramPhotos/Item.png";
import Item1 from "../assets/instagramPhotos/Item_1.png";
import Item2 from "../assets/instagramPhotos/Item_2.png";
import Item3 from "../assets/instagramPhotos/Item_3.png";
import Item4 from "../assets/instagramPhotos/Item_4.png";

export default function Socials() {
  return (
    <section className="socials">
      <div>
        <h2 className="text-big">
          Follow Us on <span className="text-big icy">Instagram</span>
        </h2>
        <p className="socials-invitation">
          Join our Instagram community for updates, special deals, and more!
        </p>
        <div className="socials-wrapper">
          <div className="pink-bubble"></div>
          <div className="social-images">
            <img src={Item} alt="" />
            <img src={Item1} alt="" />
            <img src={Item2} alt="" />
            <img src={Item3} alt="" />
            <img src={Item4} alt="" />
          </div>
          <div className="purple-bubble"></div>
        </div>
      </div>
    </section>
  );
}
