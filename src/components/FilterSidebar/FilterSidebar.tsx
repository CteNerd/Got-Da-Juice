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
                        id="bowls" 
                        value="bowls" 
                        onChange={onFilterChange} 
                    />
                    <label htmlFor="bowls">Bowls</label>
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
            </ul>
        </aside>
    );
};

export default FilterSidebar;
