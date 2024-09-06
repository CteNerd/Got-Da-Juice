import React from "react";
import ProductList from "./ProductList";
import JuiceDeliveryBox from "../../assets/images/Juice Delivery Box.jpg";
import GreenMagic from "../../assets/images/Green Magic.jpg";
import BlackMamba from "../../assets/images/Black Mamba.jpg";
import FujiGoddess from "../../assets/images/Fuji Goddess.jpg";
import CrazyGreens from "../../assets/images/Crazy Greens.jpg";
import BlueDream from "../../assets/images/Blue Dream.png";
import OldKayneWellnessKit from "../../assets/images/Old Kayne Wellness Kit.jpg";
import OldKayneProfile from "../../assets/images/Old Kayne (Profile).png";
import OldKayne from "../../assets/images/Old Kayne.jpg";
import OldKaynex2 from "../../assets/images/Old Kaynex2.jpg";
import GreenJuiceReboot from "../../assets/images/Green Juice Reboot.jpg";
import FujiGoddessProfile from "../../assets/images/Fuji Goddess (profile).jpg";
import GreenMagicNutrition from "../../assets/images/Green Magic Nutrition.png";
import BlackMagicProfile from "../../assets/images/Black Mamba (profile).png";
import FujiGoddessNutrition from "../../assets/images/Fuji Goddess Nutrition.jpg";
import JuiceSetProfile from "../../assets/images/The Juice Set (Profile).jpg";
import GreenJuiceBlended from "../../assets/images/Green Juice Blended.png";

export default {
  title: "Components/ProductList",
  component: ProductList,
  argTypes: {},
};

const Template = (args) => <ProductList {...args} />;

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

export const Primary = Template.bind({});
Primary.args = {
  products: products,
};

export const Secondary = Template.bind({});
Secondary.args = {
  products: products,
};
