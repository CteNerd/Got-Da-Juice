import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';
import PaginationControls from '../PaginationControl/PaginationControl';
import BlackMamba from '../../assets/images/Black Mamba.jpg'
import BlackMambaProfile from '../../assets/images/Black Mamba (profile).png'
import BeetJuice from '../../assets/images/Beet Juice (Profile).png'
import BeetsByDre from '../../assets/images/Beets By Dre.png'
import AlmondMylk from '../../assets/images/AlmonMylk.png';
import AlmondMylkProfile from '../../assets/images/Almond Mylk (Profile).png';
import BerryBlast from '../../assets/images/Berry Blast.png';
import BerryBlastIngredients from '../../assets/images/Berry_Blast Ingredients.png';
import BlueDream from '../../assets/images/Blue Dream.png';
import CrazyGreens from '../../assets/images/Crazy Greens.jpg';
import CrazyGreensNutrition from '../../assets/images/CrazyGreens Nutrition.png';
import BlackTee from '../../assets/images/Black Tee.png';
import GreenTee from '../../assets/images/Green Tee.png';
import EnergyBites from '../../assets/images/Energy Bites.png';
import EnergyBitesIngredients from '../../assets/images/Energy_Bites Ingredients.png';
import FujiGoddess from '../../assets/images/Fuji Goddess (profile).png';
import FujiGoddessLabel from '../../assets/images/Fuji Goddess Nutrition.png';
import GreenGlowUp from '../../assets/images/Green Glow Up.png';
import GreenJuiceReboot from '../../assets/images/Green Juice Reboot.png';
import PageNavigationControls from '../PageNavigationControls/PageNavigationControls';

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
        name: 'Almond Mylk',
        price: '$10.00',
        category: 'drinks',
        primaryImage: AlmondMylk,
        secondaryImage: AlmondMylkProfile
    },
    {
        id: 2,
        name: 'Beets by Dre',
        price: '$10.00',
        category: 'drinks',
        primaryImage: BeetJuice,
        secondaryImage: BeetsByDre
    },
    {
        id: 3,
        name: 'Berry Blast',
        price: '$10.00',
        category: 'drinks',
        primaryImage: BerryBlast,
        secondaryImage: BerryBlastIngredients
    },
    {
        id: 4,
        name: 'Black Mamba',
        price: '$10.00',
        category: 'drinks',
        primaryImage: BlackMamba,
        secondaryImage: BlackMambaProfile
    },
    {
        id: 5,
        name: 'Blue Dream',
        price: '$4.50',
        category: 'drinks',
        primaryImage: BlueDream,
        secondaryImage: BlueDream
    },
    {
        id: 6,
        name: 'Crazy Greens',
        price: '$11.00',
        category: 'drinks',
        primaryImage: CrazyGreens,
        secondaryImage: CrazyGreensNutrition
    },
    {
        id: 7,
        name: 'Crewneck Sweatshirt',
        price: '$39.55',
        category: 'swag',
        primaryImage: BlackTee,
        secondaryImage: GreenTee
    },
    {
        id: 8,
        name: 'Energy Bites',
        price: '$7.00',
        category: 'bowl',
        primaryImage: EnergyBites,
        secondaryImage: EnergyBitesIngredients
    },
    {
        id: 9,
        name: 'Fuji Goddess',
        price: '$10.00',
        category: 'drinks',
        primaryImage: FujiGoddess,
        secondaryImage: FujiGoddessLabel
    },
    {
        id: 10,
        name: 'Green Glow Up',
        price: '$10.00',
        category: 'drinks',
        primaryImage: GreenGlowUp,
        secondaryImage: GreenGlowUp
    },
    {
        id: 11,
        name: 'Green Juice Reboot',
        price: '$55.00',
        category: 'drinks',
        primaryImage: GreenJuiceReboot,
        secondaryImage: CrazyGreens
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

    const filteredProducts = filters.length > 0 
        ? products.filter(product => filters.includes(product.category))
        : products;

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
    
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
