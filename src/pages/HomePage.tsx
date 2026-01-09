import React from 'react';
import Hero from '../components/Hero';
import ReliabilitySection from '../components/ReliabilitySection';
import TestimonialsSection from '../components/TestimonialsSection';
import FeaturedCollection from '../components/FeaturedCollection';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <Hero />
            <ReliabilitySection />
            <TestimonialsSection />
            <FeaturedCollection />
        </div>
    );
};

export default HomePage;
