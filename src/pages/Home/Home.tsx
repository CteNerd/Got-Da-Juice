import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProductShowcase from "../../components/ProductShowcase/ProductShowcase";
import ProductList from "../../components/ProductList/ProductList";
import FeatureIcons from "../../components/FeatureIcons/FeatureIcons";
import Testimonials from "../../components/Carousel/TestimonialCarousel";
import Footer from "../../components/Footer/Footer";
import JuiceImageGrid from "../../components/ImageGrid/JuiceImageGrid";
import JuiceDeliveryBox from "../../assets/images/Signature Reboot Cleanse.png";
import GreenMagic from "../../assets/images/Green Magic.png";
import BlackMamba from "../../assets/images/Black Mamba.png";
import FujiGoddess from "../../assets/images/Fuji Goddess.png";
import CrazyGreens from "../../assets/images/Crazy Greens.png";
import BlueDream from "../../assets/images/Blue Dream.png";
import OldKayneWellnessKit from "../../assets/images/Old Kayne Wellness Kit.png";
import OldKayneProfile from "../../assets/images/Old Kayne (Profile).png";
import OldKayne from "../../assets/images/Old Kayne.png";
import OldKaynex2 from "../../assets/images/Old Kaynex2.png";
import GreenJuiceReboot from "../../assets/images/Green Juice Reboot.png";
import FujiGoddessProfile from "../../assets/images/Fuji Goddess (profile).png";
import GreenMagicNutrition from "../../assets/images/Green Magic Nutrition.png";
import BlackMagicProfile from "../../assets/images/Black Mamba (profile).png";
import FujiGoddessNutrition from "../../assets/images/Fuji Goddess Nutrition.png";
import JuiceSetProfile from "../../assets/images/The Juice Set (Profile).png";
import GreenJuiceBlended from "../../assets/images/Green Juice Blended.png";
import "./Home.css";

function Home() {
  const products = [
    {
      primaryImage: JuiceDeliveryBox,
      secondaryImage: FujiGoddessProfile,
      name: "Signature Reboot Cleanse",
      price: 55,
      categories: ["Best Sellers", "Reboot"],
    },
    {
      primaryImage: GreenMagic,
      secondaryImage: GreenMagicNutrition,
      name: "Green Magic",
      price: 10,
      categories: ["Best Sellers", "Got Da Juice"],
    },
    {
      primaryImage: BlackMamba,
      secondaryImage: BlackMagicProfile,
      name: "Black Mamba",
      price: 10,
      categories: ["Best Sellers", "Got Da Juice"],
    },
    {
      primaryImage: FujiGoddess,
      secondaryImage: FujiGoddessNutrition,
      name: "Fuji Goddess",
      price: 10,
      categories: ["Best Sellers", "Got Da Juice"],
    },
    {
      primaryImage: CrazyGreens,
      secondaryImage: FujiGoddessNutrition,
      name: "Crazy Greens",
      price: 11,
      categories: ["Got Da Juice"],
    },
    {
      primaryImage: OldKayneProfile,
      secondaryImage: OldKayne,
      name: "Old Kayne",
      price: 5,
      categories: ["Immune System Boost"],
    },
    {
      primaryImage: OldKayneWellnessKit,
      secondaryImage: OldKaynex2,
      name: "Old Kayne Welness Kit",
      price: 33,
      categories: ["Immune System Boost", "Reboot"],
    },
    {
      primaryImage: BlueDream,
      secondaryImage: BlueDream,
      name: "Blue Dream",
      price: 4.5,
      categories: ["Immune System Boost", "Reboot"],
    },
    {
      primaryImage: GreenJuiceReboot,
      secondaryImage: CrazyGreens,
      name: "Green Juice Reboot",
      price: 55,
      categories: ["Reboot"],
    },
  ];

  return (
    <div className="App">
      <Header />
      <Hero className="first-hero" displayCtaBtn={true} displayHeroTxt={true} />
      <SectionTitle title="We Got Da Juices" />
      <JuiceImageGrid />
      <SectionTitle title="Shop Our Juices" />
      <ProductList products={products} />
      <Hero className="second-hero" heroImgTxt={false} />
      <FeatureIcons />
      <SectionTitle title="What Our Customers Say" />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
