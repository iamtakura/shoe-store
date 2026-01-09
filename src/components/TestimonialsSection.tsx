import React, { useState, useEffect } from 'react';
import './TestimonialsSection.css';

interface Testimonial {
    id: number;
    name: string;
    text: string;
    location: string;
}

const testimonials: Testimonial[] = [
    { id: 1, name: "Sarah J.", text: "The quality is unmatched. Legit check passed immediately.", location: "New York, USA" },
    { id: 2, name: "Kenji T.", text: "Fastest shipping I've experienced for imports.", location: "Tokyo, Japan" },
    { id: 3, name: "Lucas M.", text: "Finally found the colorway I've been hunting for years.", location: "Paris, France" },
    { id: 4, name: "Chloe B.", text: "Packaging was pristine. 10/10 would buy again.", location: "London, UK" },
    { id: 5, name: "Michael R.", text: "Customer service helped me size perfectly.", location: "Berlin, Germany" },
    { id: 6, name: "David K.", text: "A curated selection that actually matters.", location: "Sydney, Australia" }
];

const TestimonialsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 className="section-title">Client Love</h2>
                <div className="testimonial-carousel">
                    {testimonials.map((t, index) => (
                        <div
                            key={t.id}
                            className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
                            style={{ transform: `translateX(-${currentIndex * 0}%)` }} // Simple fade logic for now
                        >
                            <p className="testimonial-text">"{t.text}"</p>
                            <div className="testimonial-author">
                                <strong>{t.name}</strong>
                                <span>{t.location}</span>
                            </div>
                        </div>
                    ))}
                    <div className="carousel-indicators">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
