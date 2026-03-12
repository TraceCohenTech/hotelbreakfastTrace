'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { getProducts, type ShopifyProduct } from '@/lib/shopify';

// Product data from Hotel Breakfast
const products = [
  {
    id: 1,
    handle: "the-crewneck-pullover",
    name: "The Crewneck Pullover",
    description: "Cotton-rich fabric sweatshirt with vintage wash and retro vibe. Your new Sunday morning essential.",
    price: 76,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/3262399543692142814_2048.jpg",
    tag: "Bestseller",
    category: "Apparel",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Navy", hex: "#334FB4" },
      { name: "Cream", hex: "#FFF6E1" },
      { name: "Burgundy", hex: "#A42325" }
    ],
    variantId: "gid://shopify/ProductVariant/47282976063742"
  },
  {
    id: 2,
    handle: "the-pocket-tee",
    name: "The Pocket Tee",
    description: "Ring-spun cotton fabric unisex shirt with vintage aesthetic and pocket detail.",
    price: 42,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/1591691027165322782_2048.jpg",
    tag: "Essential",
    category: "Apparel",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Sage", hex: "#7A9E7E" }
    ],
    variantId: "gid://shopify/ProductVariant/47282952405246"
  },
  {
    id: 3,
    handle: "do-not-disturb-oversized-tee",
    name: "Do Not Disturb Oversized Tee",
    description: "Men's Heavy Oversized Tee combining casual elegance with trendy oversized fit.",
    price: 64.99,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/8999220662666491318_2048.jpg",
    tag: "New",
    category: "Apparel",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "White", hex: "#FFFFFF" }
    ],
    variantId: "gid://shopify/ProductVariant/47414586147070"
  },
  {
    id: 4,
    handle: "breakfast-travel-oversized-tee",
    name: "Breakfast & Travel Oversized Tee",
    description: "Reflecting individuality and comfort with laid-back aesthetic. Made for wanderers.",
    price: 64.99,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/14932325304822957776_2048.jpg",
    tag: "Limited",
    category: "Apparel",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Cream", hex: "#FFF6E1" },
      { name: "Black", hex: "#1a1a1a" }
    ],
    variantId: "gid://shopify/ProductVariant/47204952211710"
  },
  {
    id: 5,
    handle: "the-everyday-tote",
    name: "The Everyday Tote",
    description: "100% organic cotton twill bag with 6-gallon capacity. OEKO-TEX certified for conscious living.",
    price: 42,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/13733165656261452820_2048.jpg",
    tag: "Sustainable",
    category: "Accessories",
    sizes: ["One Size"],
    colors: [
      { name: "Natural", hex: "#F5E6C8" },
      { name: "Black", hex: "#1a1a1a" }
    ],
    variantId: "gid://shopify/ProductVariant/47359996821758"
  },
  {
    id: 6,
    handle: "the-organic-cap",
    name: "The Organic Cap",
    description: "100% organic cotton baseball cap. Unstructured six-panel design for effortless style.",
    price: 35,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/1875496474666638470_2048.jpg",
    tag: "Organic",
    category: "Accessories",
    sizes: ["One Size"],
    colors: [
      { name: "Navy", hex: "#334FB4" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Cream", hex: "#FFF6E1" }
    ],
    variantId: "gid://shopify/ProductVariant/47281022140670"
  },
  {
    id: 7,
    handle: "the-denim-dad-hat",
    name: "The Denim Dad Hat",
    description: "6-panel unstructured denim hat with pigment-dyed finish. Vintage vibes only.",
    price: 52,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/5580959199368031222_2048.jpg",
    tag: "Fan Favorite",
    category: "Accessories",
    sizes: ["One Size"],
    colors: [
      { name: "Denim Blue", hex: "#6B8CAE" },
      { name: "Washed Black", hex: "#3a3a3a" }
    ],
    variantId: "gid://shopify/ProductVariant/47241666658558"
  },
  {
    id: 8,
    handle: "the-sun-hat",
    name: "The Sun Hat",
    description: "Premium bucket hat for beach, festivals, and outdoor adventures. Sun protection with style.",
    price: 35,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/3163221279104308777_2048.jpg",
    tag: "Summer",
    category: "Accessories",
    sizes: ["S/M", "L/XL"],
    colors: [
      { name: "Natural", hex: "#F5E6C8" },
      { name: "Black", hex: "#1a1a1a" }
    ],
    variantId: "gid://shopify/ProductVariant/47209732440318"
  },
  {
    id: 9,
    handle: "terracotta-towel",
    name: "Terracotta Towel",
    description: "Personalized beach towel with polyester mink front and cotton back. 30\"x60\" of luxury.",
    price: 49,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/5885969260573620490_2048.jpg",
    tag: "Hot",
    category: "Beach",
    sizes: ["30x60"],
    colors: [
      { name: "Terracotta", hex: "#E07A5F" }
    ],
    variantId: "gid://shopify/ProductVariant/47435318821118"
  },
  {
    id: 10,
    handle: "turf-towel",
    name: "Turf Towel",
    description: "Vibrant colors, multifunctional for beach, gym, and pool use. Stand out everywhere.",
    price: 49,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/14707760509720742550_2048.jpg",
    tag: "Vibrant",
    category: "Beach",
    sizes: ["30x60"],
    colors: [
      { name: "Green", hex: "#7A9E7E" }
    ],
    variantId: "gid://shopify/ProductVariant/47435314462974"
  },
  {
    id: 11,
    handle: "sun-towel",
    name: "Sun Towel",
    description: "Mink-cotton blend offering ample space for drying off or relaxing on the sand.",
    price: 49,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/665358233442400327_2048.jpg",
    tag: "Luxe",
    category: "Beach",
    sizes: ["30x60"],
    colors: [
      { name: "Sunrise", hex: "#FFB347" }
    ],
    variantId: "gid://shopify/ProductVariant/47435312759038"
  },
  {
    id: 12,
    handle: "the-lounge-towel",
    name: "The Lounge Towel",
    description: "Luxurious beach towel designed for poolside lounging with eye-catching aesthetics.",
    price: 49,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/568868594357841610_2048.jpg",
    tag: "Poolside",
    category: "Beach",
    sizes: ["30x60"],
    colors: [
      { name: "Ocean Blue", hex: "#334FB4" }
    ],
    variantId: "gid://shopify/ProductVariant/47207504969982"
  },
];

const featuredProducts = products.slice(0, 4);
const allCategories = ["All", "Apparel", "Accessories", "Beach"];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Los Angeles",
    quote: "The quality is unmatched. I wear my crewneck every single weekend. It's become my signature look.",
    rating: 5,
    product: "The Crewneck Pullover",
  },
  {
    name: "Marcus T.",
    location: "Miami",
    quote: "These towels are EVERYTHING. Took them to Tulum and got so many compliments. Already ordering more.",
    rating: 5,
    product: "Terracotta Towel",
  },
  {
    name: "Emma K.",
    location: "Brooklyn",
    quote: "Finally a brand that gets it. The aesthetic, the quality, the vibe — chef's kiss.",
    rating: 5,
    product: "The Everyday Tote",
  },
  {
    name: "Jake R.",
    location: "Austin",
    quote: "Got the oversized tee and cap. Haven't taken them off since. This is my new uniform.",
    rating: 5,
    product: "Do Not Disturb Tee",
  },
];

const pressLogos = [
  { name: "Vogue", display: "VOGUE" },
  { name: "GQ", display: "GQ" },
  { name: "Hypebeast", display: "HYPEBEAST" },
  { name: "Highsnobiety", display: "HIGHSNOBIETY" },
  { name: "Complex", display: "COMPLEX" },
];

interface Product {
  id: number;
  handle: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tag: string;
  category: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  variantId?: string;
}

// Rotating announcement messages
const announcements = [
  "FREE SHIPPING ON ORDERS $75+",
  "NEW: THE CREWNECK PULLOVER IS HERE",
  "BECAUSE CHAMPAGNE IS A MORNING DRINK",
];

export default function Home() {
  const { cartCount, addItem, openCart, isConfigured } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shopifyProducts, setShopifyProducts] = useState<ShopifyProduct[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  // Quick View Modal state
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

  // Rotate announcements
  useEffect(() => {
    const interval = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Fetch Shopify products for variant lookup
  useEffect(() => {
    getProducts()
      .then((data) => setShopifyProducts(data))
      .catch(() => {});
  }, []);

  const findVariantId = useCallback(
    (product: Product, size: string, color: string): string | undefined => {
      const shopifyProduct = shopifyProducts.find(
        (sp) => sp.title.toLowerCase() === product.name.toLowerCase()
      );
      if (!shopifyProduct) return product.variantId;

      const matchedVariant = shopifyProduct.variants.edges.find(({ node }) => {
        const options = node.selectedOptions;
        const sizeMatch = options.find(
          (o) => o.name.toLowerCase() === 'size' && o.value.toLowerCase() === size.toLowerCase()
        );
        const colorMatch = options.find(
          (o) => o.name.toLowerCase() === 'color' && o.value.toLowerCase() === color.toLowerCase()
        );
        const hasSizeOption = shopifyProduct.options.some((o) => o.name.toLowerCase() === 'size');
        const hasColorOption = shopifyProduct.options.some((o) => o.name.toLowerCase() === 'color');
        if (hasSizeOption && hasColorOption) return sizeMatch && colorMatch;
        if (hasSizeOption) return sizeMatch;
        if (hasColorOption) return colorMatch;
        return false;
      });

      return matchedVariant ? matchedVariant.node.id : product.variantId;
    },
    [shopifyProducts]
  );

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  const addToCart = useCallback((product?: Product, size?: string, color?: string, variantOverride?: string) => {
    const variantId = variantOverride || product?.variantId;
    if (variantId && isConfigured) {
      addItem(variantId, 1, product?.name);
    } else if (!isConfigured) {
      openCart();
    }
    if (quickViewProduct) {
      setQuickViewProduct(null);
    }
  }, [quickViewProduct, addItem, openCart, isConfigured]);

  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setSelectedSize(product.sizes[0]);
    setSelectedColor(product.colors[0]?.name || '');
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
    setSelectedSize('');
    setSelectedColor('');
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8]">

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          onClick={closeQuickView}
        >
          <div className="absolute inset-0 bg-black/50 animate-fade-in" />
          <div
            className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeQuickView}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square bg-[#F5F1EB]">
                <Image
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  fill
                  className="object-cover"
                />
                {quickViewProduct.tag && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-[#E8C547] text-[#1C1C1C] text-xs font-bold rounded-full">
                      {quickViewProduct.tag}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-8 flex flex-col">
                <p className="text-xs text-[#1C1C1C]/40 font-semibold uppercase tracking-wider mb-2">
                  {quickViewProduct.category}
                </p>
                <h2 className="font-[family-name:var(--font-eb-garamond)] text-2xl md:text-3xl font-semibold text-[#1C1C1C] mb-2">
                  {quickViewProduct.name}
                </h2>
                <p className="text-xl font-bold text-[#1C1C1C] mb-4">${quickViewProduct.price}</p>
                <p className="text-[#1C1C1C]/60 mb-6 text-sm leading-relaxed">
                  {quickViewProduct.description}
                </p>

                {quickViewProduct.colors.length > 0 && (
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-[#1C1C1C] mb-2 uppercase tracking-wider">
                      Color: <span className="font-normal normal-case text-[#1C1C1C]/50">{selectedColor}</span>
                    </p>
                    <div className="flex gap-2">
                      {quickViewProduct.colors.map((color) => (
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

                <div className="mb-6">
                  <p className="text-xs font-semibold text-[#1C1C1C] mb-2 uppercase tracking-wider">
                    Size: <span className="font-normal normal-case text-[#1C1C1C]/50">{selectedSize}</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
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

                <button
                  onClick={() => {
                    const matchedVariantId = findVariantId(quickViewProduct, selectedSize, selectedColor);
                    addToCart(quickViewProduct, selectedSize, selectedColor, matchedVariantId);
                  }}
                  className="mt-auto w-full py-4 btn-golden text-base"
                >
                  Add to Cart — ${quickViewProduct.price}
                </button>

                <div className="flex items-center justify-center gap-6 mt-4 text-xs text-[#1C1C1C]/40">
                  <span>Free Shipping $75+</span>
                  <span>30-Day Returns</span>
                  <span>In Stock</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Announcement Bar — Rotating */}
      <div className="bg-[#334FB4] text-white text-center py-2.5 px-4 text-xs font-semibold tracking-wider relative overflow-hidden">
        <div
          key={announcementIndex}
          className="animate-fade-in"
        >
          {announcements[announcementIndex]}
          <span className="mx-3 text-[#E8C547]/70">/</span>
          <a href="#shop" className="underline hover:no-underline">Shop Now</a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                <Image
                  src="/logo-icon.png"
                  alt="Hotel Breakfast"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-bold tracking-tight text-[#1C1C1C] leading-none">
                  HOTEL BREAKFAST
                </span>
                <span className="text-[9px] tracking-[0.12em] text-[#1C1C1C]/40 font-medium hidden sm:block mt-0.5">
                  BECAUSE CHAMPAGNE IS A MORNING DRINK
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {[
                { label: 'Shop', href: '#shop' },
                { label: 'Our Story', href: '#story' },
                { label: 'Blog', href: '/blog' },
                { label: 'Size Guide', href: '/size-guide' },
              ].map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm text-[#1C1C1C]/70 hover:text-[#334FB4] transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm text-[#1C1C1C]/70 hover:text-[#334FB4] transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <button
                onClick={openCart}
                className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#F5F1EB] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-[#E8C547] text-[#1C1C1C] text-[10px] rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#F5F1EB] transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-3 pb-3 border-t border-black/5 pt-3">
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Shop', href: '#shop' },
                  { label: 'Our Story', href: '#story' },
                  { label: 'Blog', href: '/blog' },
                  { label: 'Size Guide', href: '/size-guide' },
                  { label: 'Track Order', href: '/track' },
                ].map((item) => (
                  item.href.startsWith('/') ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-[#1C1C1C] font-medium text-base hover:text-[#C4553A] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-[#1C1C1C] font-medium text-base hover:text-[#C4553A] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section — Product-Forward with Cream Overlay */}
      <section className="relative overflow-hidden bg-[#FFF6E1]">
        <div className="relative min-h-[85vh] flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Copy */}
              <div className="py-16 sm:py-20 lg:py-0">
                <p className="font-[family-name:var(--font-eb-garamond)] italic text-[#334FB4] text-lg sm:text-xl mb-4">
                  Leisure-Enhancing Essentials
                </p>
                <h1 className="font-[family-name:var(--font-eb-garamond)] text-4xl sm:text-6xl lg:text-7xl text-[#1C1C1C] leading-[1.05] mb-6">
                  Because Champagne<br />
                  <em>is a Morning Drink</em>
                </h1>
                <p className="text-[#1C1C1C]/60 text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
                  Lifestyle essentials for those who believe every morning should feel like the first day of vacation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#shop" className="btn-golden px-10 py-4 text-base inline-flex items-center justify-center gap-2">
                    Shop the Collection
                  </a>
                  <a href="#story" className="btn-outline px-10 py-4 text-base inline-flex items-center justify-center">
                    Our Story
                  </a>
                </div>
              </div>
              {/* Product Images Grid */}
              <div className="grid grid-cols-2 gap-3 pb-8 lg:pb-0">
                <div className="aspect-[3/4] rounded-xl overflow-hidden relative">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0751/4456/0894/files/3262399543692142814_2048.jpg"
                    alt="The Crewneck Pullover"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="aspect-[3/4] rounded-xl overflow-hidden relative mt-8">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0751/4456/0894/files/8999220662666491318_2048.jpg"
                    alt="Do Not Disturb Oversized Tee"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="aspect-[3/4] rounded-xl overflow-hidden relative -mt-8">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0751/4456/0894/files/568868594357841610_2048.jpg"
                    alt="The Lounge Towel"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="aspect-[3/4] rounded-xl overflow-hidden relative">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0751/4456/0894/files/5580959199368031222_2048.jpg"
                    alt="The Denim Dad Hat"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Review Bar */}
      <section className="py-5 bg-white border-y border-black/5">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8">
          <div className="flex items-center gap-2">
            <span className="text-[#E8C547] text-xl">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span className="font-bold text-[#1C1C1C] text-lg">4.9/5</span>
          </div>
          <span className="text-[#1C1C1C]/40 text-sm font-medium">from 2,000+ verified reviews</span>
          <div className="hidden sm:flex items-center gap-6 text-xs text-[#1C1C1C]/40 font-semibold tracking-wider">
            <span className="text-[#334FB4]">/</span>
            <span>FREE SHIPPING $75+</span>
            <span className="text-[#334FB4]">/</span>
            <span>30-DAY RETURNS</span>
          </div>
        </div>
      </section>

      {/* As Featured In */}
      <section className="py-14 px-4 sm:px-6 bg-white border-b border-black/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#1C1C1C]/30 text-xs font-semibold tracking-[0.2em] uppercase mb-8">As Featured In</p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {pressLogos.map((logo, i) => (
              <span
                key={i}
                className="text-xl sm:text-2xl font-serif font-bold text-[#1C1C1C]/15 hover:text-[#1C1C1C]/40 transition-colors duration-300 tracking-tight cursor-default"
                style={{ fontFamily: 'var(--font-eb-garamond), serif' }}
              >
                {logo.display}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section id="bestsellers" className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-semibold text-[#334FB4] uppercase tracking-[0.15em] mb-2">Fan Favorites</p>
              <h2 className="font-[family-name:var(--font-eb-garamond)] text-3xl sm:text-4xl lg:text-5xl text-[#1C1C1C]">
                Bestsellers
              </h2>
            </div>
            <a href="#shop" className="text-sm font-semibold text-[#1C1C1C]/60 hover:text-[#1C1C1C] transition-colors flex items-center gap-1 underline underline-offset-4">
              View All Products
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group product-card cursor-pointer"
                onClick={() => openQuickView(product)}
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-xl bg-[#F5F1EB] mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {product.tag && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-[#E8C547] text-[#1C1C1C] text-[10px] font-bold rounded-full uppercase tracking-wider">
                        {product.tag}
                      </span>
                    </div>
                  )}
                  <button
                    onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                    className="absolute bottom-3 right-3 w-10 h-10 bg-[#E8C547] text-[#1C1C1C] rounded-full flex items-center justify-center shadow-lg hover:bg-[#D4B03E] transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                    </svg>
                  </button>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#1C1C1C] mb-1 group-hover:underline">
                    <Link href={`/products/${product.handle}`} onClick={(e) => e.stopPropagation()}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#1C1C1C]/50">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FFF6E1]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden relative">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0751/4456/0894/files/13733165656261452820_2048.jpg"
                  alt="The Everyday Tote"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden mt-8 relative">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0751/4456/0894/files/568868594357841610_2048.jpg"
                  alt="The Lounge Towel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Copy */}
            <div>
              <p className="text-xs font-semibold text-[#334FB4] uppercase tracking-[0.15em] mb-3">Our Story</p>
              <h2 className="font-[family-name:var(--font-eb-garamond)] text-3xl sm:text-4xl lg:text-5xl text-[#1C1C1C] mb-8 leading-tight">
                We Started With<br />
                <em>a Simple Belief</em>
              </h2>
              <div className="space-y-5 text-[#1C1C1C]/60 text-base leading-relaxed">
                <p>
                  <strong className="text-[#1C1C1C]">Every morning should feel like you&apos;re on vacation.</strong> That moment when you wake up in a beautiful hotel, sun streaming through the windows, nothing on the agenda but relaxation.
                </p>
                <p>
                  We created Hotel Breakfast for the dreamers, the travelers, the people who believe that champagne IS a morning drink. Our pieces are designed to bring that indulgent hotel morning experience into your everyday life.
                </p>
                <p>
                  Premium materials. Thoughtful design. Effortless style.
                </p>
              </div>
              <div className="flex gap-10 mt-10">
                {[
                  { value: "15K+", label: "Happy Customers" },
                  { value: "4.9/5", label: "Average Rating" },
                  { value: "50+", label: "Countries" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl sm:text-3xl font-bold text-[#1C1C1C]">{stat.value}</p>
                    <p className="text-[#1C1C1C]/40 text-xs mt-1 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Collection */}
      <section id="shop" className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-[#334FB4] uppercase tracking-[0.15em] mb-2">The Collection</p>
            <h2 className="font-[family-name:var(--font-eb-garamond)] text-3xl sm:text-4xl lg:text-5xl text-[#1C1C1C] mb-4">
              Shop All
            </h2>
            <p className="text-[#1C1C1C]/50 max-w-lg mx-auto text-sm">
              Curated essentials for the modern lifestyle. Every piece designed to make your mornings extraordinary.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#1C1C1C] text-white'
                    : 'bg-[#F5F1EB] text-[#1C1C1C]/60 hover:bg-[#E8E4DE] hover:text-[#1C1C1C]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group product-card cursor-pointer"
                onClick={() => openQuickView(product)}
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-xl bg-[#F5F1EB] mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {product.tag && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-[#E8C547] text-[#1C1C1C] text-[10px] font-bold rounded-full uppercase tracking-wider">
                        {product.tag}
                      </span>
                    </div>
                  )}
                  <button
                    onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                    className="absolute bottom-3 right-3 w-10 h-10 bg-[#E8C547] text-[#1C1C1C] rounded-full flex items-center justify-center shadow-lg hover:bg-[#D4B03E] transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                    </svg>
                  </button>
                </div>
                <div>
                  <p className="text-[10px] text-[#1C1C1C]/30 font-semibold uppercase tracking-wider mb-1">{product.category}</p>
                  <h3 className="font-bold text-sm text-[#1C1C1C] mb-1 group-hover:underline">
                    <Link href={`/products/${product.handle}`} onClick={(e) => e.stopPropagation()}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#1C1C1C]/50">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#FFF6E1]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-[#334FB4] uppercase tracking-[0.15em] mb-2">Reviews</p>
            <h2 className="font-[family-name:var(--font-eb-garamond)] text-3xl sm:text-4xl lg:text-5xl text-[#1C1C1C] mb-3">
              What People Are Saying
            </h2>
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="text-[#E8C547] text-base">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span className="font-bold">4.9</span>
              <span className="text-[#1C1C1C]/40">from 2,000+ reviews</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {testimonials.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 sm:p-7"
              >
                <div className="flex items-center gap-0.5 text-[#E8C547] mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <span key={j} className="text-sm">&#9733;</span>
                  ))}
                </div>
                <p className="text-[#1C1C1C] text-sm mb-5 leading-relaxed">
                  &quot;{review.quote}&quot;
                </p>
                <div>
                  <p className="font-semibold text-[#1C1C1C] text-sm">{review.name}</p>
                  <p className="text-[#1C1C1C]/40 text-xs">{review.location}</p>
                </div>
                <p className="text-[#C4553A] text-xs font-semibold mt-3">{review.product}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 px-4 sm:px-6 bg-white border-y border-black/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
            {[
              { title: "Sustainable", desc: "Organic & eco-friendly materials" },
              { title: "Premium Quality", desc: "Built to last, made to impress" },
              { title: "Free Shipping", desc: "On all orders over $75" },
              { title: "Easy Returns", desc: "30-day money-back guarantee" },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-semibold text-[#1C1C1C] text-sm mb-1">{item.title}</h3>
                <p className="text-[#1C1C1C]/40 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 sm:py-20 px-4 sm:px-6 bg-[#1C1C1C]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image
                    src="/logo-icon.png"
                    alt="Hotel Breakfast"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-bold tracking-tight text-white">HOTEL BREAKFAST</span>
              </div>
              <p className="text-white/40 text-xs mb-6 leading-relaxed">
                Because Champagne is a Morning Drink.
              </p>
              <div className="flex gap-3">
                {['instagram', 'tiktok', 'twitter'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/40 hover:bg-white/20 hover:text-white transition-all"
                  >
                    {social === 'instagram' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/><circle cx="12" cy="12" r="3.5"/></svg>}
                    {social === 'tiktok' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>}
                    {social === 'twitter' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>}
                  </a>
                ))}
              </div>
            </div>
            {[
              { title: 'Shop', links: [
                { label: 'All Products', href: '/#shop' },
                { label: 'Apparel', href: '/#shop' },
                { label: 'Accessories', href: '/#shop' },
                { label: 'Beach', href: '/#shop' },
              ]},
              { title: 'Help', links: [
                { label: 'FAQ', href: '/track#faq' },
                { label: 'Shipping', href: '/track#faq' },
                { label: 'Returns', href: '/track#faq' },
                { label: 'Contact Us', href: 'mailto:hello@hotelbreakfast.co' },
                { label: 'Size Guide', href: '/size-guide' },
              ]},
              { title: 'Company', links: [
                { label: 'Our Story', href: '#story' },
                { label: 'Blog', href: '/blog' },
                { label: 'Track Order', href: '/track' },
                { label: 'Sustainability', href: '#' },
                { label: 'Privacy', href: '#' },
              ]},
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-5 text-white text-xs uppercase tracking-wider">{col.title}</h4>
                <ul className="space-y-2.5 text-white/40 text-xs">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
            <p className="text-white/25 text-xs">
              &copy; {new Date().getFullYear()} Hotel Breakfast. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((card) => (
                <span key={card} className="bg-white/10 text-white/40 px-2.5 py-1 rounded text-[10px] font-medium">
                  {card}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
