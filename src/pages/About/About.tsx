import React from 'react';
import Hero from '../../components/Hero/Hero';
import './About.css';
import Header from '../../components/Header/Header';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

function About() {
    return (
        <div>
            <Header />
            <SectionTitle title={'About Us'} />
            <Hero className={'about-hero'}/>
        </div>
    )
}

export default About;