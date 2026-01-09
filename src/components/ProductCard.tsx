import React from 'react';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addItem } = useCart();

    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <button
                    className="add-to-cart-btn"
                    onClick={() => addItem(product)}
                >
                    Add to Cart
                </button>
            </div>
            <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <span className="product-price">${product.price.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default ProductCard;
