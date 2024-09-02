import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/images/Website_Logo.png'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="logo-container">
                <img src={Logo} alt="Logo" className="logo" />
            </div>
            <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#juice-club">Juice Club</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className={`overlay ${isMenuOpen ? 'overlay-active' : ''}`} onClick={toggleMenu}></div>
        </header>
    );
};

export default Header;
