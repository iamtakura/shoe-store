import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../data/products';

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    isOpen: boolean;
    total: number;
    addItem: (product: Product) => void;
    removeItem: (productId: number) => void;
    toggleCart: () => void;
    itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>(() => {
        const savedItems = localStorage.getItem('cartItems');
        return savedItems ? JSON.parse(savedItems) : [];
    });
    const [isOpen, setIsOpen] = useState(false);
    const [total, setTotal] = useState(0);
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(items));
        const newTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotal(newTotal);
        const newCount = items.reduce((count, item) => count + item.quantity, 0);
        setItemCount(newCount);
    }, [items]);

    const addItem = (product: Product) => {
        setItems(currentItems => {
            const existingItem = currentItems.find(item => item.id === product.id);
            if (existingItem) {
                return currentItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...currentItems, { ...product, quantity: 1 }];
        });
        setIsOpen(true); // Auto-open cart on add
    };

    const removeItem = (productId: number) => {
        setItems(currentItems => currentItems.filter(item => item.id !== productId));
    };

    const toggleCart = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <CartContext.Provider value={{ items, isOpen, total, addItem, removeItem, toggleCart, itemCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
