import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CartProvider, useCart } from './CartContext';
import type { ReactNode } from 'react';

// Wrapper for the provider
const wrapper = ({ children }: { children: ReactNode }) => (
    <CartProvider>{children}</CartProvider>
);

const mockProduct = {
    id: 1,
    name: 'Test Shoe',
    price: 100,
    image: 'test.jpg',
    category: 'Running'
};

describe('CartContext', () => {
    it('should start with an empty cart', () => {
        const { result } = renderHook(() => useCart(), { wrapper });
        expect(result.current.items).toEqual([]);
        expect(result.current.total).toBe(0);
        expect(result.current.itemCount).toBe(0);
    });

    it('should add items to cart', () => {
        const { result } = renderHook(() => useCart(), { wrapper });

        act(() => {
            result.current.addItem(mockProduct);
        });

        expect(result.current.items).toHaveLength(1);
        expect(result.current.items[0].quantity).toBe(1);
        expect(result.current.total).toBe(100);
    });

    it('should increment quantity for existing items', () => {
        const { result } = renderHook(() => useCart(), { wrapper });

        act(() => {
            result.current.addItem(mockProduct);
            result.current.addItem(mockProduct);
        });

        expect(result.current.items).toHaveLength(1);
        expect(result.current.items[0].quantity).toBe(2);
        expect(result.current.total).toBe(200);
    });

    it('should remove items from cart', () => {
        const { result } = renderHook(() => useCart(), { wrapper });

        act(() => {
            result.current.addItem(mockProduct);
            result.current.removeItem(mockProduct.id);
        });

        expect(result.current.items).toHaveLength(0);
        expect(result.current.total).toBe(0);
    });
});
