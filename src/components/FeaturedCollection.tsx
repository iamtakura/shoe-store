import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './FeaturedCollection.css';
const FeaturedCollection: React.FC = () => {
    // Select 4 distinct visually appealing products for the collage
    const featuredProducts = [
        products[0], // Jordan 1 Chicago
        products[15], // Off-White
        products[12], // Salomon
        products[4]   // Air Max 95
    ];
    return (
        <section className="featured-section">
            <div className="container">
                <div className="featured-grid">
                    {featuredProducts.map((product, index) => (
                        <div key={product.id} className={`featured-item item-${index + 1} reveal`}>
                            <img
                                src={product.image}
                                alt={product.name}
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="featured-overlay">
                                <h3>{product.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="featured-cta">
                    <Link to="/shop" className="btn-primary animate-btn">
                        SHOP NOW
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default FeaturedCollection;
