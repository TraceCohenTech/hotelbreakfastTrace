'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import type { Product } from '@/lib/products';

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetail({ product, relatedProducts }: ProductDetailProps) {
  const { addItem, isConfigured, isLoading } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = async () => {
    if (!isConfigured || !product.variantId) return;
    await addItem(product.variantId);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
              <Image src="/logo-icon.png" alt="Hotel Breakfast" fill className="object-contain" />
            </div>
            <span className="text-sm sm:text-base font-bold tracking-tight text-[#1C1C1C]">
              HOTEL BREAKFAST
            </span>
          </Link>
          <Link
            href="/#shop"
            className="text-sm font-semibold text-[#1C1C1C]/50 hover:text-[#1C1C1C] transition-colors"
          >
            &larr; Back to Shop
          </Link>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-2" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs text-[#1C1C1C]/40">
          <li>
            <Link href="/" className="hover:text-[#1C1C1C] transition-colors">Home</Link>
          </li>
          <li><span className="mx-1">/</span></li>
          <li>
            <Link href="/#shop" className="hover:text-[#1C1C1C] transition-colors">Shop</Link>
          </li>
          <li><span className="mx-1">/</span></li>
          <li className="text-[#1C1C1C] font-medium">{product.name}</li>
        </ol>
      </nav>

      {/* Product Detail */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden bg-[#F5F1EB] relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className={`object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                sizes="(max-width: 1024px) 100vw, 50vw"
                onLoad={() => setImageLoaded(true)}
              />
              {product.tag && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1.5 bg-[#E8C547] text-[#1C1C1C] text-xs font-bold rounded-full">
                    {product.tag}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="text-xs text-[#C4553A] font-semibold uppercase tracking-[0.15em] mb-2">{product.category}</p>
            <h1 className="font-[family-name:var(--font-eb-garamond)] text-3xl sm:text-4xl lg:text-5xl text-[#1C1C1C] mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-bold text-[#1C1C1C]">${product.price}</span>
              <div className="flex items-center gap-1">
                <span className="text-[#E8C547] text-sm">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span className="text-xs text-[#1C1C1C]/40">(2,000+ reviews)</span>
              </div>
            </div>

            <p className="text-[#1C1C1C]/60 text-base leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Color Selector */}
            {product.colors.length > 0 && (
              <div className="mb-5">
                <label className="block text-xs font-semibold text-[#1C1C1C] mb-2 uppercase tracking-wider">
                  Color: <span className="font-normal text-[#1C1C1C]/50">{selectedColor}</span>
                </label>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor === color.name
                          ? 'border-[#1C1C1C] scale-110'
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            <div className="mb-8">
              <label className="block text-xs font-semibold text-[#1C1C1C] mb-2 uppercase tracking-wider">
                Size: <span className="font-normal text-[#1C1C1C]/50">{selectedSize}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                      selectedSize === size
                        ? 'bg-[#1C1C1C] text-white'
                        : 'bg-[#F5F1EB] text-[#1C1C1C] hover:bg-[#E8E4DE]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isLoading || !isConfigured}
              className={`w-full py-4 rounded-full text-base font-bold transition-all ${
                addedToCart
                  ? 'bg-[#3D6B5E] text-white'
                  : 'btn-golden'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Adding...
                </span>
              ) : addedToCart ? (
                'Added to Cart!'
              ) : (
                `Add to Cart — $${product.price}`
              )}
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-black/5">
              {[
                { label: 'Free Shipping', desc: 'On orders $75+' },
                { label: 'Easy Returns', desc: '30-day policy' },
                { label: 'In Stock', desc: 'Ships in 1-3 days' },
              ].map((badge) => (
                <div key={badge.label} className="text-center">
                  <p className="text-xs font-semibold text-[#1C1C1C]">{badge.label}</p>
                  <p className="text-[10px] text-[#1C1C1C]/40">{badge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <section className="mt-20 sm:mt-28">
          <h2 className="font-[family-name:var(--font-eb-garamond)] text-2xl sm:text-3xl text-[#1C1C1C] mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((related) => (
              <Link
                key={related.id}
                href={`/products/${related.handle}`}
                className="group"
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-xl bg-[#F5F1EB] mb-3">
                  <Image
                    src={related.image}
                    alt={related.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {related.tag && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 bg-[#E8C547] text-[#1C1C1C] text-[10px] font-bold rounded-full uppercase tracking-wider">
                        {related.tag}
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-[10px] text-[#1C1C1C]/30 font-semibold uppercase tracking-wider mb-1">{related.category}</p>
                  <h3 className="font-medium text-sm text-[#1C1C1C] mb-1 group-hover:underline">
                    {related.name}
                  </h3>
                  <p className="text-sm text-[#1C1C1C]/50">${related.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 bg-[#1C1C1C] mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <Link href="/" className="inline-flex items-center gap-3 mb-4">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image src="/logo-icon.png" alt="Hotel Breakfast" fill className="object-contain" />
            </div>
            <span className="text-sm font-bold tracking-tight text-white">HOTEL BREAKFAST</span>
          </Link>
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Hotel Breakfast. Because Champagne is a Morning Drink.
          </p>
        </div>
      </footer>
    </div>
  );
}
