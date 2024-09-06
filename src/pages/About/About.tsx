import React from "react";
import Hero from "../../components/Hero/Hero";
import "./About.css";
import Header from "../../components/Header/Header";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import JuiceImageGrid from "../../components/ImageGrid/JuiceImageGrid";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <div>
      <Header />
      <SectionTitle title={"About Us"} />
      <Hero className={"about-hero"} />
      <SectionTitle title={"Got Da Juice"} />
      <p>
        Welcome to Got Da Juice delicious nutrition that revitalizes the energy
        your body demands. Established in 2021, Got Da Juice is proud to bring a
        new experience filled with high quality all-natural ingredients to the
        heart of Downtown Jersey City. Free of all the things your body doesn’t
        need, and filled with all dat good stuff your body wants Got Da Juice is
        for newcomers and experienced juicers alike. Struggling with a chronic
        disease or beginning a health and wellness journey? Our juice experts
        will provide you with options that will aid in your specific concerns.
        At Got Da Juice, we are not a trend- we are a lifestyle!
      </p>

      <SectionTitle title={"Follow us on"} />
      <JuiceImageGrid />
      <Footer />
    </div>
  );
}

export default About;
