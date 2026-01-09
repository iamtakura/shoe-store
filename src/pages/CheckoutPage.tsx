import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
    const { items, total } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate order placement
        alert('Order placed successfully! Redirecting to home...');
        navigate('/');
        window.location.reload(); // Simple reload to clear state/mock fresh start
    };

    if (items.length === 0) {
        return (
            <div className="checkout-empty">
                <h2>Your cart is empty</h2>
                <Link to="/" className="continue-shopping">Continue Shopping</Link>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <div className="container checkout-container">
                <div className="checkout-form-section">
                    <h2>Shipping & Payment</h2>
                    <form onSubmit={handleSubmit} className="checkout-form">
                        <div className="form-group-row">
                            <input
                                type="text" name="firstName" placeholder="First Name"
                                value={formData.firstName} onChange={handleChange} required
                            />
                            <input
                                type="text" name="lastName" placeholder="Last Name"
                                value={formData.lastName} onChange={handleChange} required
                            />
                        </div>
                        <input
                            type="email" name="email" placeholder="Email Address"
                            value={formData.email} onChange={handleChange} required
                        />
                        <input
                            type="text" name="address" placeholder="Address"
                            value={formData.address} onChange={handleChange} required
                        />
                        <div className="form-group-row">
                            <input
                                type="text" name="city" placeholder="City"
                                value={formData.city} onChange={handleChange} required
                            />
                            <input
                                type="text" name="zip" placeholder="ZIP Code"
                                value={formData.zip} onChange={handleChange} required
                            />
                        </div>

                        <h3 className="payment-title">Payment Details</h3>
                        <input
                            type="text" name="cardNumber" placeholder="Card Number"
                            value={formData.cardNumber} onChange={handleChange} required
                        />
                        <div className="form-group-row">
                            <input
                                type="text" name="expiry" placeholder="MM/YY"
                                value={formData.expiry} onChange={handleChange} required
                            />
                            <input
                                type="text" name="cvv" placeholder="CVV"
                                value={formData.cvv} onChange={handleChange} required
                            />
                        </div>

                        <button type="submit" className="place-order-btn">Place Order (${total.toFixed(2)})</button>
                    </form>
                </div>

                <div className="order-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-items">
                        {items.map(item => (
                            <div key={item.id} className="summary-item">
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <p className="summary-name">{item.name}</p>
                                    <p className="summary-price">${item.price.toFixed(2)} x {item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="summary-total">
                        <p>Subtotal: <span>${total.toFixed(2)}</span></p>
                        <p>Shipping: <span>Free</span></p>
                        <p className="total-final">Total: <span>${total.toFixed(2)}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
