import "./Components-style/Header.css";
import logo from "../assets/img/logo.png";
import search from "../assets/img/search.png";
import cart from "../assets/img/cart.png";
import Button from "../UI/Button";
import arrow from "../assets/img/arrow_right.png";
import { NavLink } from "react-router";
import { useState } from "react";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <div className="header wrapper">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="Ice_cream_logo" />
          <span className="logo">
            <span className="logo icy">Icy</span>Tales
          </span>
        </div>
        <nav className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <div className="dropdown">
            <span className="dropdown-title" onClick={toggleDropdown}>
              Pages ▾
            </span>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <NavLink to="/menu">Products</NavLink>
                <NavLink to="/products-registration">Create Product</NavLink>
              </div>
            )}
          </div>

          <a href="/blog">Blog</a>
          <a href="/faq">Faq's</a>
        </nav>
        <div className="header-right">
          <div className="header-icons">
            <img src={search} alt="Search_icon" />
            <img src={cart} alt="Cart_logo" />
          </div>
          <Button background="#F83D8E">
            Contact Us <img src={arrow} alt="arrow-right" />
          </Button>
        </div>
      </div>
    </div>
  );
}
