'use client';

import Image from 'next/image';
import { useCart, CartLine } from './cart-context';

export function CartDrawer() {
  const { cart, isCartOpen, closeCart, updateItem, removeItem, isLoading, getCheckoutUrl, isConfigured } = useCart();

  const lines: CartLine[] = cart?.lines?.edges?.map(e => e.node) || [];
  const subtotal = cart?.cost?.subtotalAmount?.amount
    ? parseFloat(cart.cost.subtotalAmount.amount)
    : 0;
  const checkoutUrl = getCheckoutUrl();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 z-[301] w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-black/10">
          <h2 className="text-xl font-black text-[#1a1a1a]">
            Your Cart {cart?.totalQuantity ? `(${cart.totalQuantity})` : ''}
          </h2>
          <button
            onClick={closeCart}
            className="w-10 h-10 rounded-full hover:bg-[#FFF6E1] flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Not configured message */}
        {!isConfigured && (
          <div className="flex-1 flex items-center justify-center p-6">
            <div className="text-center">
              <span className="text-5xl mb-4 block">🔧</span>
              <p className="font-bold text-[#1a1a1a] mb-2">Shopify Not Connected</p>
              <p className="text-[#1a1a1a]/60 text-sm">
                Add your Storefront API token to <code className="bg-[#FFF6E1] px-2 py-0.5 rounded text-xs">.env.local</code> to enable the cart.
              </p>
            </div>
          </div>
        )}

        {/* Empty cart */}
        {isConfigured && lines.length === 0 && (
          <div className="flex-1 flex items-center justify-center p-6">
            <div className="text-center">
              <span className="text-5xl mb-4 block">🛒</span>
              <p className="font-bold text-[#1a1a1a] mb-2">Your cart is empty</p>
              <p className="text-[#1a1a1a]/60 text-sm mb-6">Add some items to get started.</p>
              <button
                onClick={closeCart}
                className="px-6 py-3 bg-gradient-to-r from-[#334FB4] to-[#4A6BD4] text-white font-bold rounded-full"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}

        {/* Cart items */}
        {isConfigured && lines.length > 0 && (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {isLoading && (
                <div className="absolute inset-0 bg-white/50 z-10 flex items-center justify-center">
                  <div className="w-8 h-8 border-3 border-[#334FB4] border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              {lines.map((line) => {
                const image = line.merchandise.product.images.edges[0]?.node;
                const options = line.merchandise.selectedOptions
                  .filter(o => o.value !== 'Default Title')
                  .map(o => o.value)
                  .join(' / ');

                return (
                  <div key={line.id} className="flex gap-4">
                    {/* Item image */}
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-[#FFF6E1]">
                      {image && (
                        <Image
                          src={image.url}
                          alt={image.altText || line.merchandise.product.title}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>

                    {/* Item details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-[#1a1a1a] text-sm truncate">
                        {line.merchandise.product.title}
                      </h3>
                      {options && (
                        <p className="text-[#1a1a1a]/50 text-xs mt-0.5">{options}</p>
                      )}
                      <p className="font-black text-[#1a1a1a] mt-1">
                        ${parseFloat(line.merchandise.price.amount).toFixed(2)}
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => {
                            if (line.quantity === 1) {
                              removeItem(line.id);
                            } else {
                              updateItem(line.id, line.quantity - 1);
                            }
                          }}
                          className="w-7 h-7 rounded-full bg-[#FFF6E1] flex items-center justify-center text-sm font-bold hover:bg-[#334FB4] hover:text-white transition-colors"
                          disabled={isLoading}
                        >
                          -
                        </button>
                        <span className="text-sm font-bold w-4 text-center">{line.quantity}</span>
                        <button
                          onClick={() => updateItem(line.id, line.quantity + 1)}
                          className="w-7 h-7 rounded-full bg-[#FFF6E1] flex items-center justify-center text-sm font-bold hover:bg-[#334FB4] hover:text-white transition-colors"
                          disabled={isLoading}
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(line.id)}
                          className="ml-auto text-[#1a1a1a]/30 hover:text-[#A42325] transition-colors"
                          disabled={isLoading}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer with checkout */}
            <div className="border-t border-black/10 p-6 space-y-4">
              {/* Free shipping progress */}
              {subtotal < 75 && (
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-[#1a1a1a]/60">
                      Add <span className="font-bold text-[#334FB4]">${(75 - subtotal).toFixed(2)}</span> for free shipping
                    </span>
                    <span className="text-[#1a1a1a]/40">${subtotal.toFixed(2)} / $75</span>
                  </div>
                  <div className="h-2 bg-[#FFF6E1] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#334FB4] to-[#7A9E7E] rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((subtotal / 75) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              )}
              {subtotal >= 75 && (
                <p className="text-center text-sm font-bold text-[#7A9E7E]">
                  🎉 You qualify for free shipping!
                </p>
              )}

              <div className="flex justify-between items-center">
                <span className="text-[#1a1a1a]/60">Subtotal</span>
                <span className="text-xl font-black text-[#1a1a1a]">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#1a1a1a]/40 text-center">
                Shipping & taxes calculated at checkout
              </p>
              <a
                href={checkoutUrl || '#'}
                className="block w-full py-4 bg-gradient-to-r from-[#334FB4] to-[#4A6BD4] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-center text-lg"
              >
                Checkout — ${subtotal.toFixed(2)}
              </a>
              <button
                onClick={closeCart}
                className="w-full py-3 text-[#334FB4] font-bold text-sm hover:text-[#1a1a1a] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
