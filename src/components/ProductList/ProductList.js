import React from 'react';
import './ProductList.css';

const ProductList = ({ products }) => {
    const [activeTab, setActiveTab] = React.useState('Best Sellers');

    const tabs = ['Best Sellers', 'Got Da Juice', 'Immune System Boost', 'Reboot'];

    const filteredProducts = React.useMemo(() => {
        if (activeTab === 'Best Sellers') {
            return products.slice(0, 4); // Show initial 4 products for Best Sellers
        }
        return products.filter(product => product.categories.includes(activeTab));
    }, [products, activeTab]);

    return (
        <div className="product-list">
            <div className="tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`tablinks ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="product-grid">
                {filteredProducts.map((product, index) => (
                    <div key={index} className="product-item">
                        <div className="image-container">
                            <img src={product.primaryImage} alt={product.name} className="primary-image" />
                            <img src={product.secondaryImage} alt={product.name} className="secondary-image" />
                        </div>
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
            <button className="load-more">See All</button>
        </div>
    );
};

export default ProductList;
