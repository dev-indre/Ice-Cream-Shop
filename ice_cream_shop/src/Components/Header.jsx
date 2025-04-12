import "./Components-style/Header.css";
import logo from "../assets/img/logo.png";
import search from "../assets/img/search.png";
import cart from "../assets/img/cart.png";
import Button from "../UI/Button";
import arrow from "../assets/img/arrow_right.png"


export default function Header() {
  return <div className="header wrapper">
        <div className="header">
            <a href="#"><img src={logo} alt="Ice_cream_logo"/></a>
            <span className="logo"><span className="logo icy">Icy</span>Tales</span>
            <nav className="links">
                <a href="#"><span className="icy">Home</span></a>
                <a href="#">About Us</a>
                <a href="#">Pages</a>
                <a href="#">Blog</a>
                <a href="#">Faq's</a>
            </nav>
            <div className="header-right">
                <div className="header-icons">
                    <img src={search} alt="Search_icon" />
                    <img src={cart} alt="Cart_logo" />
                </div>
                <Button background="#F83D8E">Contact Us <img src={arrow} alt="arrow-right" /></Button>
            </div>
        </div>
  </div>
}
