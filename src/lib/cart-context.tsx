'use client';

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import {
  Cart,
  CartLine,
  createCart,
  addToCart as shopifyAddToCart,
  updateCartItem,
  removeFromCart as shopifyRemoveFromCart,
  isShopifyConfigured,
} from './shopify';

interface CartContextType {
  cart: Cart | null;
  cartCount: number;
  isCartOpen: boolean;
  isLoading: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (variantId: string, quantity?: number, productName?: string) => Promise<void>;
  updateItem: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
  getCheckoutUrl: () => string | null;
  isConfigured: boolean;
  showAddedToast: boolean;
  addedProductName: string;
}

const CartContext = createContext<CartContextType | null>(null);

const CART_ID_KEY = 'shopify_cart_id';

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showAddedToast, setShowAddedToast] = useState(false);
  const [addedProductName, setAddedProductName] = useState('');
  const configured = isShopifyConfigured();

  // Restore cart ID from localStorage on mount
  useEffect(() => {
    if (!configured) return;
    const savedCartId = localStorage.getItem(CART_ID_KEY);
    if (savedCartId) {
      // We could fetch the cart here, but Shopify doesn't have a simple "get cart" query
      // The cart will be refreshed on the next add/update/remove action
    }
  }, [configured]);

  const saveCart = useCallback((newCart: Cart) => {
    setCart(newCart);
    localStorage.setItem(CART_ID_KEY, newCart.id);
  }, []);

  const triggerToast = useCallback((productName: string) => {
    setAddedProductName(productName);
    setShowAddedToast(true);
    setTimeout(() => setShowAddedToast(false), 3000);
  }, []);

  const addItem = useCallback(async (variantId: string, quantity = 1, productName?: string) => {
    if (!configured) return;
    setIsLoading(true);
    try {
      let updatedCart: Cart;
      if (cart?.id) {
        updatedCart = await shopifyAddToCart(cart.id, variantId, quantity);
      } else {
        updatedCart = await createCart(variantId, quantity);
      }
      saveCart(updatedCart);
      setIsCartOpen(true);
      if (productName) triggerToast(productName);
    } catch (error) {
      console.error('Failed to add item to cart:', error);
      // If cart is stale, create a new one
      try {
        const newCart = await createCart(variantId, quantity);
        saveCart(newCart);
        setIsCartOpen(true);
        if (productName) triggerToast(productName);
      } catch (retryError) {
        console.error('Failed to create new cart:', retryError);
      }
    } finally {
      setIsLoading(false);
    }
  }, [cart, configured, saveCart, triggerToast]);

  const updateItem = useCallback(async (lineId: string, quantity: number) => {
    if (!configured || !cart?.id) return;
    setIsLoading(true);
    try {
      const updatedCart = await updateCartItem(cart.id, lineId, quantity);
      saveCart(updatedCart);
    } catch (error) {
      console.error('Failed to update cart item:', error);
    } finally {
      setIsLoading(false);
    }
  }, [cart, configured, saveCart]);

  const removeItem = useCallback(async (lineId: string) => {
    if (!configured || !cart?.id) return;
    setIsLoading(true);
    try {
      const updatedCart = await shopifyRemoveFromCart(cart.id, [lineId]);
      saveCart(updatedCart);
    } catch (error) {
      console.error('Failed to remove cart item:', error);
    } finally {
      setIsLoading(false);
    }
  }, [cart, configured, saveCart]);

  const getCheckoutUrl = useCallback(() => {
    return cart?.checkoutUrl || null;
  }, [cart]);

  const cartLines: CartLine[] = cart?.lines?.edges?.map(e => e.node) || [];

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount: cart?.totalQuantity || 0,
        isCartOpen,
        isLoading,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        addItem,
        updateItem,
        removeItem,
        getCheckoutUrl,
        isConfigured: configured,
        showAddedToast,
        addedProductName,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export type { CartLine };
