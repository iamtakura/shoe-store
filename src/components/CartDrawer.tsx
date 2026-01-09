import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

const CartDrawer: React.FC = () => {
    const { items, isOpen, toggleCart, removeItem, total } = useCart();
    const navigate = useNavigate();

    return (
        <>
            <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={toggleCart} />
            <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2>Your Cart</h2>
                    <button className="close-btn" onClick={toggleCart}>&times;</button>
                </div>

                <div className="cart-items">
                    {items.length === 0 ? (
                        <p className="empty-cart-msg">Your cart is empty.</p>
                    ) : (
                        items.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-img" />
                                <div className="cart-item-details">
                                    <h4>{item.name}</h4>
                                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                                    <p className="cart-item-qty">Qty: {item.quantity}</p>
                                </div>
                                <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
                            </div>
                        ))
                    )}
                </div>

                <div className="cart-footer">
                    <div className="cart-total">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <button
                        className="checkout-btn"
                        disabled={items.length === 0}
                        onClick={() => {
                            toggleCart();
                            navigate('/checkout');
                        }}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;
