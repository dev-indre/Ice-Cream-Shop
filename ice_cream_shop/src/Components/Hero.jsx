import Button from "../UI/Button";
import "./Components-style/Hero.css";
import arrow from "../assets/img/arrow_right.png";
import banner_image from "../assets/img/banner-image.png";
import bottom_image from "../assets/img/bottom-banner.png";
import { useNavigate } from "react-router";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero-content background-hero-header ">
        <div className="hero-background"></div>
        <div className="hero-main-content">
          <div className="hero-mid">
            <h1>
              Welcome to The <br />
              <span className="text-big">
                Discover <span className="text-big icy">Sweet</span> Delights!
              </span>
            </h1>
            <p>
              Relish the timeless taste of handcrafted ice cream, made with
              passion and the finest ingredients.
            </p>
            <Button
              background="#683292"
              onClick={() => {
                navigate("/menu");
              }}
            >
              Browse Our Classic Flavors <img src={arrow} alt="arrow-right" />
            </Button>
          </div>

          <div className="hero-image-wrapper">
            <div className="img-background"></div>
            <img src={banner_image} alt="Ice_cream_banner" />
          </div>
        </div>
        <div className="bottom-banner">
          <img src={bottom_image} alt="White_bottom_banner" />
        </div>
      </div>
    </>
  );
}
