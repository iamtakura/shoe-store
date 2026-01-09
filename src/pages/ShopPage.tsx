import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './ShopPage.css';

const ShopPage: React.FC = () => {
    // Logic to simulate filtering for specific sections
    const newArrivals = products.slice(0, 4); // First 4 as new
    const favorites = products.filter(p => p.price > 190).slice(0, 4); // Expensive ones as favorites
    const onSpecial = products.filter(p => p.price < 100); // Cheaper ones as special

    const Section = ({ title, items }: { title: string, items: typeof products }) => (
        <section className="shop-section">
            <div className="container">
                <h2 className="section-header">{title}</h2>
                <div className="product-grid">
                    {items.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );

    return (
        <div className="shop-page">
            <div className="shop-hero">
                <h1>Full Collection</h1>
            </div>
            <Section title="New Arrivals" items={newArrivals} />
            <Section title="Favourites" items={favorites} />
            <Section title="On Special" items={onSpecial} />
        </div>
    );
};

export default ShopPage;
