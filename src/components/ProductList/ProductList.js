import React, { useEffect, useState } from "react";
import "./ProductList.css";

const ProductList = ({ products }) => {
  const [activeTab, setActiveTab] = useState("Best Sellers");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const tabs = [
    "Best Sellers",
    "Got Da Juice",
    "Immune System Boost",
    "Reboot",
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredProducts = React.useMemo(() => {
    if (activeTab === "Best Sellers") {
      return products.slice(0, 4); // Show initial 4 products for Best Sellers
    }
    return products.filter((product) => product.categories.includes(activeTab));
  }, [products, activeTab]);

  return (
    <div className="product-list">
      <div className="tabs">
        {windowWidth > 768 ? (
          tabs.map((tab) => (
            <button
              key={tab}
              className={`tablinks ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))
        ) : (
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="tab-dropdown"
          >
            {tabs.map((tab) => (
              <option key={tab} value={tab}>
                {tab}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="product-list-grid">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-item">
            <div className="image-container">
              <img
                src={product.primaryImage}
                alt={product.name}
                className="primary-image"
              />
              <img
                src={product.secondaryImage}
                alt={product.name}
                className="secondary-image"
              />
            </div>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
      <a href="/menu">
        <button className="load-more">See All</button>
      </a>
    </div>
  );
};

export default ProductList;
