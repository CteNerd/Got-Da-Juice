import React from "react";
import "./ProductCard.css";

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  primaryImage: string;
  secondaryImage: string;
}

interface ProductCardProps {
  name: string;
  price: number | string;
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card-image image-container">
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
      <h3 className="product-card-name">{product.name}</h3>
      <p className="product-card-price">{product.price}</p>
    </div>
  );
};

export default ProductCard;
