import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const { itemCount, toggleCart } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <h1>SNEAKER<span className="accent">HEAD</span></h1>
                </div>
                <nav className="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
                <button className="cart-icon" onClick={toggleCart}>
                    <span>Cart ({itemCount})</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
