import React, { useState } from 'react';
import './Menu.css';
import Header from '../../components/Header/Header';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import ProductGrid from '../../components/ProductGrid/ProductGrid';

function Menu () {
    const [filters, setFilters] = useState<string[]>([]);

    const handleFilterChange = (e: { target: { value: any; }; }) => {
        const value = e.target.value;
        setFilters((prevFilters) =>
            prevFilters.includes(value)
                ? prevFilters.filter((filter) => filter !== value)
                : [...prevFilters, value]
        );
    };
    
    return (
        <div>
            <Header />
            <SectionTitle title={'Products'} />
            <div className="products-content">
                <FilterSidebar onFilterChange={handleFilterChange} />
                <ProductGrid filters={filters} />
            </div>
        </div>
    )
}

export default Menu;