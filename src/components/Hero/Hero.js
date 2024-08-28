import React from 'react';
import './Hero.css';


const Hero = ({heroImg, heroImgTxt = true}) => {

    return (
        <section className={heroImg.includes('Green Juice Blended') ? 'hero-green-juice-blended' : 'hero-juice-set'}>
            <div className="hero-content">
                <h2 style={heroImgTxt ? {display: ''} : {display: 'none'}}>More than a juice bar. A vibrant Jersey City experience.</h2>
                <a style={heroImgTxt ? {display: ''} : {display: 'none'}} href="tel:+12012738227" className="phone-number">(201) 273-8227</a>
                <button className="cta-button">Order Now</button>
            </div>
        </section>
    );
};

export default Hero;
