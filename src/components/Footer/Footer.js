import React, { useState } from "react";
import "./Footer.css";
import Logo from "../../assets/images/Website_Logo.png";

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column logo-column">
          <img src={Logo} alt="Got Da Juice" className="footer-logo" />
        </div>
        <div className={`footer-column ${activeIndex === 0 ? "active" : ""}`}>
          <h4 onClick={() => toggleDropdown(0)}>Shop</h4>
          <ul>
            <li>
              <a href="#juices">Got Da Juices</a>
            </li>
            <li>
              <a href="#reboot">Reboot</a>
            </li>
            <li>
              <a href="#superfood">Got Da Superfood</a>
            </li>
            <li>
              <a href="#superfood">Got Da Immune Booster</a>
            </li>
            <li>
              <a href="#box">Build-a-Box</a>
            </li>
          </ul>
        </div>
        <div className={`footer-column ${activeIndex === 1 ? "active" : ""}`}>
          <h4 onClick={() => toggleDropdown(1)}>Quick Links</h4>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#policy">Privacy Policy</a>
            </li>
            <li>
              <a href="#faq">FAQs</a>
            </li>
            <li>
              <a href="#faq">Disclaimer</a>
            </li>
            <li>
              <a href="#faq">Refund Policy</a>
            </li>
            <li>
              <a href="#faq">Terms of Service</a>
            </li>
            <li>
              <a href="#faq">Manage Subscription</a>
            </li>
          </ul>
        </div>
        <div className={`footer-column ${activeIndex === 2 ? "active" : ""}`}>
          <h4 onClick={() => toggleDropdown(2)}>Our Store</h4>
          <p>309 Pacific Ave, Jersey City, NJ</p>
          <a href="tel:+12012738227" className="phone-number">
            (201) 273-8227
          </a>
          <p>
            <a href="mailto:info@gotdajuicebar.com">info@gotdajuicebar.com</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Got Da Juice 2024</p>
        <div className="footer-icons">
          <a href="#facebook">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#instagram">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#twitter">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
