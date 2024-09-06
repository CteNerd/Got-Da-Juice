import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";
import PaginationControls from "../PaginationControl/PaginationControl";
import BlackMamba from "../../assets/images/Black Mamba.png";
import BlackMambaProfile from "../../assets/images/Black Mamba (profile).png";
import BeetJuice from "../../assets/images/Beet Juice (Profile).png";
import BeetsByDre from "../../assets/images/Beets By Dre.png";
import AlmondMylk from "../../assets/images/AlmonMylk.png";
import AlmondMylkProfile from "../../assets/images/Almond Mylk (Profile).png";
import BerryBlast from "../../assets/images/Berry Blast.png";
import BerryBlastIngredients from "../../assets/images/Berry_Blast Ingredients.png";
import BlueDream from "../../assets/images/Blue Dream.png";
import CrazyGreens from "../../assets/images/Crazy Greens.png";
import CrazyGreensNutrition from "../../assets/images/CrazyGreens Nutrition.png";
import BlackTee from "../../assets/images/Black Tee.png";
import GreenTee from "../../assets/images/Green Tee.png";
import EnergyBites from "../../assets/images/Energy Bites.png";
import EnergyBitesIngredients from "../../assets/images/Energy_Bites Ingredients.png";
import FujiGoddess from "../../assets/images/Fuji Goddess (profile).png";
import FujiGoddessLabel from "../../assets/images/Fuji Goddess Nutrition.png";
import GreenGlowUp from "../../assets/images/Green Glow Up.png";
import GreenJuiceReboot from "../../assets/images/Green Juice Reboot.png";
import IrieVibez from "../../assets/images/Irie Vibes.png";
import MasonJar from "../../assets/images/Mason Jar.png";
import MasonJar2 from "../../assets/images/Mason Jar - 2.png";
import MixTape from "../../assets/images/Mixtape.png";
import OgCrunch from "../../assets/images/OG Crunch.png";
import OgCrunchIngridients from "../../assets/images/OG_Crunch_1.png";
import OldKayne from "../../assets/images/Old Kayne (Profile).png";
import OldKaynex2 from "../../assets/images/Old Kaynex2.png";
import OldKayneWellnessKit from "../../assets/images/Old Kayne Wellness Kit.png";
import VinylSticker from "../../assets/images/Vinyl Sticker.png";
import SeaMoss from "../../assets/images/seamoss.png";
import Reboot from "../../assets/images/Signature Reboot Cleanse.png";
import StrawberrySlammin from "../../assets/images/Strawberry Slammin.png";
import TheClassic from "../../assets/images/The Classic.png";
import ThisIshBananasIngridients from "../../assets/images/This_Ish_Bananas.png";
import ThisIshBananas from "../../assets/images/This Ish Bananas.png";
import ToteBag from "../../assets/images/Tote Bag.png";
import ToteBag2 from "../../assets/images/Tote Bag - 2.png";
import TropicThunder from "../../assets/images/Tropic Thunder.png";
import TropicThunderIngridients from "../../assets/images/Tropic_THUNDER_1.png";
import TropicSunrise from "../../assets/images/Tropical Sunrise.png";
import TropicSunriseIngridients from "../../assets/images/Tropical_Sunrise.png";
import GotDaJuiceTee from "../../assets/images/Got Da Juice Tee.png";
import GotDaJuiceSweatTee from "../../assets/images/Got Da Juice Sweat Tee.png";
import GotDaJuiceSweatTee2 from "../../assets/images/Got Da Juice Sweat Tee - 2.png";
import VanillaProteinPowerhouse from "../../assets/images/Vanilla Protein Powerhouse - 2.png";
import VanillaProteinPowerhouseIngridients from "../../assets/images/Vanilla_Protein_Power_house_1.png";
import PageNavigationControls from "../PageNavigationControls/PageNavigationControls";

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  primaryImage: string;
  secondaryImage: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Almond Mylk",
    price: "$10.00",
    category: "drinks",
    primaryImage: AlmondMylk,
    secondaryImage: AlmondMylkProfile,
  },
  {
    id: 2,
    name: "Beets by Dre",
    price: "$10.00",
    category: "drinks",
    primaryImage: BeetJuice,
    secondaryImage: BeetsByDre,
  },
  {
    id: 3,
    name: "Berry Blast",
    price: "$10.00",
    category: "shakes",
    primaryImage: BerryBlast,
    secondaryImage: BerryBlastIngredients,
  },
  {
    id: 4,
    name: "Black Mamba",
    price: "$10.00",
    category: "drinks",
    primaryImage: BlackMamba,
    secondaryImage: BlackMambaProfile,
  },
  {
    id: 5,
    name: "Blue Dream",
    price: "$4.50",
    category: "shots",
    primaryImage: BlueDream,
    secondaryImage: BlueDream,
  },
  {
    id: 6,
    name: "Crazy Greens",
    price: "$11.00",
    category: "drinks",
    primaryImage: CrazyGreens,
    secondaryImage: CrazyGreensNutrition,
  },
  {
    id: 7,
    name: "Crewneck Sweatshirt",
    price: "$39.55",
    category: "swag",
    primaryImage: BlackTee,
    secondaryImage: GreenTee,
  },
  {
    id: 8,
    name: "Energy Bites",
    price: "$7.00",
    category: "food",
    primaryImage: EnergyBites,
    secondaryImage: EnergyBitesIngredients,
  },
  {
    id: 9,
    name: "Fuji Goddess",
    price: "$10.00",
    category: "drinks",
    primaryImage: FujiGoddess,
    secondaryImage: FujiGoddessLabel,
  },
  {
    id: 10,
    name: "Green Glow Up",
    price: "$10.00",
    category: "shakes",
    primaryImage: GreenGlowUp,
    secondaryImage: GreenGlowUp,
  },
  {
    id: 11,
    name: "Green Juice Reboot",
    price: "$55.00",
    category: "cleanse",
    primaryImage: GreenJuiceReboot,
    secondaryImage: CrazyGreens,
  },
  {
    id: 12,
    name: "Green Magic",
    price: "$10.00",
    category: "drinks",
    primaryImage: AlmondMylk,
    secondaryImage: AlmondMylkProfile,
  },
  {
    id: 13,
    name: "Irie Vibez",
    price: "$10.00",
    category: "drinks",
    primaryImage: IrieVibez,
    secondaryImage: IrieVibez,
  },
  {
    id: 14,
    name: "Mason Jar",
    price: "$18.28",
    category: "swag",
    primaryImage: MasonJar,
    secondaryImage: MasonJar2,
  },
  {
    id: 15,
    name: "Mixtape",
    price: "$13.00",
    category: "food",
    primaryImage: MixTape,
    secondaryImage: MixTape,
  },
  {
    id: 16,
    name: "OG Crunch",
    price: "$13.00",
    category: "food",
    primaryImage: OgCrunch,
    secondaryImage: OgCrunchIngridients,
  },
  {
    id: 17,
    name: "Old Kanye",
    price: "$5.00",
    category: "shots",
    primaryImage: OldKayne,
    secondaryImage: OldKaynex2,
  },
  {
    id: 18,
    name: "Old Kayne Wellness Kit",
    price: "$33.00",
    category: "cleanse",
    primaryImage: OldKayneWellnessKit,
    secondaryImage: OldKayne,
  },
  {
    id: 19,
    name: "Round Vinyl Stickers",
    price: "$4.23",
    category: "swag",
    primaryImage: VinylSticker,
    secondaryImage: VinylSticker,
  },
  {
    id: 20,
    name: "Sea Moss",
    price: "$35.00",
    category: "food",
    primaryImage: SeaMoss,
    secondaryImage: SeaMoss,
  },
  {
    id: 21,
    name: "Signature Reboot Cleanse",
    price: "$55.00",
    category: "cleanse",
    primaryImage: Reboot,
    secondaryImage: Reboot,
  },
  {
    id: 22,
    name: "Strawberry Slammin",
    price: "$10.00",
    category: "shakes",
    primaryImage: StrawberrySlammin,
    secondaryImage: StrawberrySlammin,
  },
  {
    id: 23,
    name: "The Classic",
    price: "$10.00",
    category: "drinks",
    primaryImage: TheClassic,
    secondaryImage: TheClassic,
  },
  {
    id: 24,
    name: "This Ish Bananas!",
    price: "$13.00",
    category: "food",
    primaryImage: ThisIshBananas,
    secondaryImage: ThisIshBananasIngridients,
  },
  {
    id: 25,
    name: "Tote Bag",
    price: "$20.00",
    category: "swag",
    primaryImage: ToteBag,
    secondaryImage: ToteBag2,
  },
  {
    id: 26,
    name: "Tropic Thunder",
    price: "$10.00",
    category: "food",
    primaryImage: TropicThunder,
    secondaryImage: TropicThunderIngridients,
  },
  {
    id: 27,
    name: "Tropical Sunrise",
    price: "$10.00",
    category: "shakes",
    primaryImage: TropicSunrise,
    secondaryImage: TropicSunriseIngridients,
  },
  {
    id: 28,
    name: "Unisex Got Da Juice Tee",
    price: "$30.85",
    category: "swag",
    primaryImage: GotDaJuiceTee,
    secondaryImage: GotDaJuiceSweatTee,
  },
  {
    id: 29,
    name: "Unisex Moisture Wicking Tee",
    price: "$38.55",
    category: "swag",
    primaryImage: GotDaJuiceSweatTee,
    secondaryImage: GotDaJuiceSweatTee2,
  },
  {
    id: 30,
    name: "Vanilla Protein Powerhouse",
    price: "$10.00",
    category: "shakes",
    primaryImage: VanillaProteinPowerhouse,
    secondaryImage: VanillaProteinPowerhouseIngridients,
  },
  // Add more products as needed
];

const ProductGrid = ({ filters }: { filters: string[] }) => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleItemsPerPageChange = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredProducts =
    filters.length > 0
      ? products.filter((product) => filters.includes(product.category))
      : products;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className="product-grid-container">
      <div className="product-grid">
        {paginatedProducts.slice(0, itemsPerPage).map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            product={product}
          />
        ))}
      </div>
      <PaginationControls
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
      <PageNavigationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductGrid;
