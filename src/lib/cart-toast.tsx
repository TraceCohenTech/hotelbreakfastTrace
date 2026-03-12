'use client';

import { useCart } from './cart-context';

export function CartToast() {
  const { showAddedToast, addedProductName, openCart } = useCart();

  if (!showAddedToast) return null;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[400] animate-fade-in-up">
      <div className="bg-[#1C1C1C] text-white px-5 py-2.5 rounded-full shadow-xl flex items-center gap-3 whitespace-nowrap text-sm">
        <svg className="w-4 h-4 text-[#E8C547]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span className="font-semibold">Added to cart</span>
        {addedProductName && (
          <>
            <span className="w-px h-3 bg-white/20" />
            <span className="text-white/60 max-w-[160px] truncate">{addedProductName}</span>
          </>
        )}
        <button
          onClick={openCart}
          className="ml-1 text-xs font-bold bg-[#E8C547] text-[#1C1C1C] px-3 py-1 rounded-full hover:bg-[#D4B03E] transition-colors"
        >
          View Cart
        </button>
      </div>
    </div>
  );
}
