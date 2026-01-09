import React from 'react';
import type { Product } from '../data/products';
import ProductCard from './ProductCard';
import './ProductGrid.css';

interface ProductGridProps {
    products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
    return (
        <section className="product-grid-section" id="shop">
            <div className="container">
                <h2 className="section-title">Latest Drops</h2>
                <div className="product-grid">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
