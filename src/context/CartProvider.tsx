"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { CartItem } from '@/lib/types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('baebow_cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('baebow_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemToAdd: Omit<CartItem, 'quantity'>) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.id === itemToAdd.id && item.size === itemToAdd.size
      );
      if (existingItem) {
        return prevItems.map(item =>
          item.id === itemToAdd.id && item.size === itemToAdd.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...itemToAdd, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string, size: string) => {
    setCartItems(prevItems => prevItems.filter(item => !(item.id === id && item.size === size)));
  };

  const updateQuantity = (id: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, size);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id && item.size === size ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, totalPrice }}>
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
