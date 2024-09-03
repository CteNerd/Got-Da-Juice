import React from 'react';
import './FilterSidebar.css';

const FilterSidebar: React.FC<{ onFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void }> = ({ onFilterChange }) => {
    return (
        <aside className="filter-sidebar">
            <h3>Filters</h3>
            <ul>
                <li>
                    <input 
                        type="checkbox" 
                        id="drinks" 
                        value="drinks" 
                        onChange={onFilterChange} 
                    />
                    <label htmlFor="drinks">Drinks</label>
                </li>
                <li>
                    <input 
                        type="checkbox" 
                        id="food" 
                        value="food" 
                        onChange={onFilterChange} 
                    />
                    <label htmlFor="food">Food</label>
                </li>
                <li>
                    <input 
                        type="checkbox" 
                        id="swag" 
                        value="swag" 
                        onChange={onFilterChange} 
                    />
                    <label htmlFor="swag">Swag</label>
                </li>
                <li>
                    <input 
                        type="checkbox" 
                        id="cleanse" 
                        value="cleanse" 
                        onChange={onFilterChange} 
                    />
                    <label htmlFor="cleanse">Cleanse</label>
                </li>
                <li>
                    <input 
                        type="checkbox" 
                        id="shakes" 
                        value="shakes" 
                        onChange={onFilterChange} 
                    />
                    <label htmlFor="shakes">Shakes</label>
                </li>
                <li>
                    <input 
                        type="checkbox" 
                        id="shots" 
                        value="shots" 
                        onChange={onFilterChange} 
                    />
                    <label htmlFor="shots">Shots</label>
                </li>
            </ul>
        </aside>
    );
};

export default FilterSidebar;
