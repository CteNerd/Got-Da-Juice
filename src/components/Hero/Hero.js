import React from 'react';
import './Hero.css';


const Hero = ({heroImg, heroImgTxt = true}) => {

    return (
        <section className={'hero'}>
            <div className="hero-text">
                <h1 style={heroImgTxt ? {display: ''} : {display: 'none'}}>More than a juice bar. A vibrant Jersey City experience.</h1>
                <a style={heroImgTxt ? {display: ''} : {display: 'none'}} href="tel:+12012738227" className="phone-number">(201) 273-8227</a>
                <button className="cta-button">Order Now</button>
            </div>
        </section>
    );
};

export default Hero;
