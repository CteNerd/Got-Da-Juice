import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/images/Website_Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <a href="/">
          <img src={Logo} alt="Logo" className="logo" />
        </a>
      </div>
      <div
        className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="https://www.toasttab.com/got-da-juice-309-pacific-ave/rewardsLookup">
              Juice Club
            </a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div
        className={`overlay ${isMenuOpen ? "overlay-active" : ""}`}
        onClick={toggleMenu}
      ></div>
    </header>
  );
};

export default Header;
