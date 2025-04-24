import Button from "../UI/Button";
import arrow from "../assets/img/arrow_right.png";
import "./Components-style/Subscribe.css";

export default function Subscribe() {
  return (
    <section className="subscribe">
      <div>
        <h2 className="text-big">
          Sign up For <span className="text-big icy">Exclusive Deals</span> and
          Updates
        </h2>
        <p className="discount-subscribe">
          Get 10% off your next order and stay updated with our latest offers.
        </p>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter Your Email Address" />
          <Button background="#f83d8e">
            Subscribe <img src={arrow} alt="arrow-right" />
          </Button>
        </div>
        <div className="subscribe-agree">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">
            I agree to the <a href="#">Privacy Policy</a>
          </label>
        </div>
      </div>
    </section>
  );
}
