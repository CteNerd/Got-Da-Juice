import React from 'react';
import './Header.css';
import Logo from '../../assets/images/Website_Logo.png'

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="dropdown">
                    <a className="menu-text" href='/'>Home</a>
                </div>
                <div className="dropdown">
                    <span className="menu-text">Menu</span>
                    <div className="dropdown-content">
                        <a href="#menu1">All</a>
                        <a href="#menu2">Menu 2</a>
                    </div>
                </div>
                <img src={Logo} alt="Logo" className="logo" />
                <div className="dropdown">
                    <a className="menu-text" href='https://www.toasttab.com/got-da-juice-309-pacific-ave/rewardsLookup'>Juice Club</a>
                </div>
                <div className="dropdown">
                    <span href="#more">More</span>
                    <div className="dropdown-content">
                        <a href="#club1">Blog</a>
                        <a href="#club2">About Us</a>
                        <a href="#club2">Contact Us</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
