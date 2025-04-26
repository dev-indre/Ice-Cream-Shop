import "./Components-style/Footer.css";
import { MdLocationOn } from "react-icons/md";
import { IoIosMailOpen } from "react-icons/io";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/img/logo.png";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="logo-container-footer">
          <div className="logo-flex">
            <img src={logo} alt="Ice_cream_logo" />
            <span className="logo-footer">
              <span className="logo icy">Icy </span>Tales
            </span>
          </div>
        </div>
        <div>
          <p className="navigation">Navigation</p>
          <div className="navigation-links">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Prodects</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="block-first">
          <div className="footer-item">
            <MdLocationOn className="footer-icon" />
            <div>
              <p className="contact-header">Address:</p>
              <p className="contact-items">
                121 King Street Melbourne, 3000, Australia
              </p>
            </div>
          </div>
          <div className="footer-item">
            <IoIosMailOpen className="footer-icon" />
            <div>
              <p className="contact-header">Email:</p>
              <p className="contact-items">info@example.com</p>
            </div>
          </div>
        </div>
        <div className="block-second">
          <div className="footer-item">
            <FaPhoneAlt className="phone" />
            <div>
              <p className="contact-header">+123456780123</p>
              <p className="contact-items">Got Questions? Call us 24/7</p>
            </div>
          </div>
          <div className="footer-item">
            <FaFacebookF className="footer-icon" />
            <FaInstagram className="footer-icon" />
            <FaXTwitter className="footer-icon" />
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright © 2024 BlackRise Themes Inc. All rights reserved.
      </div>
    </>
  );
}
