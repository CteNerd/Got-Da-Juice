import React from 'react';
import './Hero.css';
import GreenJuiceBlended from '../../assets/images/Green Juice Blended.png';

console.log(GreenJuiceBlended); 


const Hero = ({heroImgTxt = true, displayCtaBtn = false, className, displayHeroTxt = false}) => {

    return (
        <section className={`${className} hero`}>
            <div className="hero-text" style={displayHeroTxt ? {display: ''} : {display: 'none'}}>
                <h1 style={heroImgTxt ? {display: ''} : {display: 'none'}}>More than a juice bar. A vibrant Jersey City experience.</h1>
                <a style={heroImgTxt ? {display: ''} : {display: 'none'}} href="tel:+12012738227" className="phone-number">(201) 273-8227</a>
                <button style={displayCtaBtn ? {display: ''} : {display: 'none'}} className="cta-button">Order Now</button>
            </div>
        </section>
    );
};

export default Hero;
