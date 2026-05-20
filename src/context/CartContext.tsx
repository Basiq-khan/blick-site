import { createContext, useContext, useState, type ReactNode } from "react";
import type { Product } from "../data/products";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOption?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, option?: string) => void;
  removeFromCart: (id: string, option?: string) => void;
  updateQuantity: (id: string, qty: number, option?: string) => void;
  clearCart: () => void;
  cartItemsCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, option?: string) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedOption === option
      );
      if (existingIdx > -1) {
        const newCart = [...prev];
        newCart[existingIdx].quantity += 1;
        return newCart;
      }
      return [...prev, { product, quantity: 1, selectedOption: option }];
    });
  };

  const removeFromCart = (id: string, option?: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.product.id === id && item.selectedOption === option))
    );
  };

  const updateQuantity = (id: string, qty: number, option?: string) => {
    if (qty <= 0) {
      removeFromCart(id, option);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === id && item.selectedOption === option
          ? { ...item, quantity: qty }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartItemsCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
