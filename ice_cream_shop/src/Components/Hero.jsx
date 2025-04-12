import Button from "../UI/Button";
import "./Components-style/Hero.css";
import arrow from "../assets/img/arrow_right.png";
import banner_image from "../assets/img/banner-image.png"

export default function Hero() {
  return <>
      <div className="wrapper hero">
          <div className="hero-mid">
              <h1>Welcome to The <br/>
              <span className="text-big">Discover <span className="text-big icy">Sweet</span> Delights!</span>
              </h1>
              <p>Relish the timeless taste of handcrafted ice cream, made with passion and the finest ingredients.</p>
              <Button background="#683292">Browse Our Classic Flavors <img src={arrow} alt="arrow-right"/></Button>
         
          <div className="img-background">
            <img src={banner_image} alt="Ice_cream_banner" />
          </div>
          </div>
      </div>
  </>
}
