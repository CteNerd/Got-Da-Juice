import React from "react";
import "./ProductShowcase.css";

export type Product = {
  name: string;
  image: string;
};

const ProductShowcase: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="product-showcase">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProductShowcase;
