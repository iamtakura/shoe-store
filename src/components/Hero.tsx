import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!heroRef.current) return;
            const { clientX, clientY } = e;
            const x = (window.innerWidth - clientX * 2) / 100;
            const y = (window.innerHeight - clientY * 2) / 100;

            heroRef.current.style.setProperty('--x', `${x}px`);
            heroRef.current.style.setProperty('--y', `${y}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="hero" id="home" ref={heroRef}>
            <div className="hero-content container reveal active">
                <h2 className="hero-subtitle">New Collection 2026</h2>
                <h1 className="hero-title">STEP INTO <br /><span className="outline-text">THE FUTURE</span></h1>
                <p className="hero-desc">Experience the ultimate comfort and style with our latest performance series.</p>
                <button className="cta-button">Shop Now</button>
            </div>
            <div className="hero-image">
                {/* Placeholder for hero image, using a gradient overlay implementation in CSS or background image */}
            </div>
        </section>
    );
};

export default Hero;
