'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Product data from Hotel Breakfast
const products = [
  {
    id: 1,
    name: "The Crewneck Pullover",
    description: "Cotton-rich fabric sweatshirt with vintage wash and retro vibe. Your new Sunday morning essential.",
    price: 76,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/3262399543692142814_2048.jpg",
    tag: "Bestseller",
    category: "Apparel"
  },
  {
    id: 2,
    name: "The Pocket Tee",
    description: "Ring-spun cotton fabric unisex shirt with vintage aesthetic and pocket detail.",
    price: 42,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/1591691027165322782_2048.jpg",
    tag: "Essential",
    category: "Apparel"
  },
  {
    id: 3,
    name: "Do Not Disturb Oversized Tee",
    description: "Men's Heavy Oversized Tee combining casual elegance with trendy oversized fit.",
    price: 64.99,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/8999220662666491318_2048.jpg",
    tag: "New Drop",
    category: "Apparel"
  },
  {
    id: 4,
    name: "Breakfast & Travel Oversized Tee",
    description: "Reflecting individuality and comfort with laid-back aesthetic. Made for wanderers.",
    price: 64.99,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/14932325304822957776_2048.jpg",
    tag: "Limited",
    category: "Apparel"
  },
  {
    id: 5,
    name: "The Everyday Tote",
    description: "100% organic cotton twill bag with 6-gallon capacity. OEKO-TEX certified for conscious living.",
    price: 42,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/13733165656261452820_2048.jpg",
    tag: "Sustainable",
    category: "Accessories"
  },
  {
    id: 6,
    name: "The Organic Cap",
    description: "100% organic cotton baseball cap. Unstructured six-panel design for effortless style.",
    price: 35,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/1875496474666638470_2048.jpg",
    tag: "Organic",
    category: "Accessories"
  },
  {
    id: 7,
    name: "The Denim Dad Hat",
    description: "6-panel unstructured denim hat with pigment-dyed finish. Vintage vibes only.",
    price: 52,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/5580959199368031222_2048.jpg",
    tag: "Fan Favorite",
    category: "Accessories"
  },
  {
    id: 8,
    name: "The Sun Hat",
    description: "Premium bucket hat for beach, festivals, and outdoor adventures. Sun protection with style.",
    price: 35,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/3163221279104308777_2048.jpg",
    tag: "Summer",
    category: "Accessories"
  },
  {
    id: 9,
    name: "Terracotta Towel",
    description: "Personalized beach towel with polyester mink front and cotton back. 30\"×60\" of luxury.",
    price: 49,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/5885969260573620490_2048.jpg",
    tag: "Hot",
    category: "Beach"
  },
  {
    id: 10,
    name: "Turf Towel",
    description: "Vibrant colors, multifunctional for beach, gym, and pool use. Stand out everywhere.",
    price: 49,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/14707760509720742550_2048.jpg",
    tag: "Vibrant",
    category: "Beach"
  },
  {
    id: 11,
    name: "Sun Towel",
    description: "Mink-cotton blend offering ample space for drying off or relaxing on the sand.",
    price: 49,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/665358233442400327_2048.jpg",
    tag: "Luxe",
    category: "Beach"
  },
  {
    id: 12,
    name: "The Lounge Towel",
    description: "Luxurious beach towel designed for poolside lounging with eye-catching aesthetics.",
    price: 49,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/568868594357841610_2048.jpg",
    tag: "Poolside",
    category: "Beach"
  },
];

const featuredProducts = products.slice(0, 4);
const allCategories = ["All", "Apparel", "Accessories", "Beach"];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Los Angeles, CA",
    quote: "The quality is unmatched. I wear my crewneck every single weekend. It's become my signature look.",
    rating: 5,
    product: "The Crewneck Pullover",
    verified: true
  },
  {
    name: "Marcus T.",
    location: "Miami, FL",
    quote: "These towels are EVERYTHING. Took them to Tulum and got so many compliments. Already ordering more.",
    rating: 5,
    product: "Terracotta Towel",
    verified: true
  },
  {
    name: "Emma K.",
    location: "Brooklyn, NY",
    quote: "Finally a brand that gets it. Champagne IS a morning drink. The aesthetic, the quality, the vibe - chef's kiss.",
    rating: 5,
    product: "The Everyday Tote",
    verified: true
  },
  {
    name: "Jake R.",
    location: "Austin, TX",
    quote: "Got the oversized tee and cap. Haven't taken them off since. This is my new uniform.",
    rating: 5,
    product: "Do Not Disturb Tee",
    verified: true
  }
];

const pressLogos = [
  { name: "Vogue", display: "VOGUE" },
  { name: "GQ", display: "GQ" },
  { name: "Hypebeast", display: "HYPEBEAST" },
  { name: "Highsnobiety", display: "HIGHSNOBIETY" },
  { name: "Complex", display: "COMPLEX" },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#FFF6E1]">
      {/* Announcement Bar */}
      <div className="bg-[#334FB4] text-white text-center py-2.5 px-4 text-sm font-medium">
        <span className="hidden sm:inline">FREE SHIPPING ON ORDERS $75+ </span>
        <span className="sm:hidden">FREE SHIPPING $75+</span>
        <span className="mx-2">•</span>
        <span className="underline cursor-pointer hover:no-underline">Shop Now</span>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-[#FFF6E1]/95 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#334FB4] rounded-full flex items-center justify-center">
                <span className="text-white text-lg">🥂</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-black tracking-tight text-[#1a1a1a] leading-none">HOTEL BREAKFAST</span>
                <span className="text-[10px] tracking-[0.2em] text-[#334FB4] font-medium hidden sm:block">BECAUSE CHAMPAGNE IS A MORNING DRINK</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#shop" className="text-[#1a1a1a] hover:text-[#334FB4] transition-colors font-semibold">Shop All</a>
              <a href="#bestsellers" className="text-[#1a1a1a] hover:text-[#334FB4] transition-colors font-semibold">Bestsellers</a>
              <a href="#about" className="text-[#1a1a1a] hover:text-[#334FB4] transition-colors font-semibold">Our Story</a>
              <a href="#reviews" className="text-[#1a1a1a] hover:text-[#334FB4] transition-colors font-semibold">Reviews</a>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:block text-[#1a1a1a] hover:text-[#334FB4]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="relative text-[#1a1a1a] hover:text-[#334FB4]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#A42325] text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="lg:hidden text-[#1a1a1a]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-black/10 pt-4 animate-fade-in-up">
              <div className="flex flex-col gap-4">
                <a href="#shop" className="text-[#1a1a1a] font-semibold text-lg">Shop All</a>
                <a href="#bestsellers" className="text-[#1a1a1a] font-semibold text-lg">Bestsellers</a>
                <a href="#about" className="text-[#1a1a1a] font-semibold text-lg">Our Story</a>
                <a href="#reviews" className="text-[#1a1a1a] font-semibold text-lg">Reviews</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#334FB4] via-[#4A6BD4] to-[#334FB4]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0zNCAyNGgydjRoLTJ2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-6">
                <span className="text-white text-sm font-semibold">New Summer Collection</span>
                <span className="animate-pulse">☀️</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[0.95] mb-6">
                Because<br />
                Champagne is a<br />
                <span className="text-[#FFF6E1]">Morning Drink.</span>
              </h1>

              <p className="text-white/80 text-lg sm:text-xl max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                Lifestyle essentials for those who believe every morning should feel like vacation.
                Premium quality. Effortless style. Zero compromises.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#shop" className="group px-8 py-4 bg-white text-[#334FB4] font-bold rounded-full hover:bg-[#FFF6E1] transition-all shadow-2xl flex items-center justify-center gap-2">
                  Shop the Collection
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#about" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center">
                  Our Story
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10 text-white/70 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🚚</span>
                  <span>Free Shipping $75+</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>⭐</span>
                  <span>4.9/5 (2k+ Reviews)</span>
                </div>
              </div>
            </div>

            {/* Hero Image Grid */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-white/10 relative group">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0751/4456/0894/files/3262399543692142814_2048.jpg"
                      alt="The Crewneck Pullover"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-[#334FB4]">
                      $76
                    </div>
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-white/10 relative group">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0751/4456/0894/files/1875496474666638470_2048.jpg"
                      alt="The Organic Cap"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-white/10 relative group">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0751/4456/0894/files/5885969260573620490_2048.jpg"
                      alt="Terracotta Towel"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-white/10 relative group">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0751/4456/0894/files/8999220662666491318_2048.jpg"
                      alt="Do Not Disturb Tee"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute top-4 right-4 bg-[#A42325] text-white px-3 py-1 rounded-full text-xs font-bold">
                      NEW
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FFF6E1"/>
          </svg>
        </div>
      </section>

      {/* As Seen In */}
      <section className="py-12 px-4 sm:px-6 border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[#1a1a1a]/40 text-sm font-medium tracking-widest uppercase mb-8">As Featured In</p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
            {pressLogos.map((logo, i) => (
              <span key={i} className="text-xl sm:text-2xl font-black text-[#1a1a1a]/20 hover:text-[#1a1a1a]/40 transition-colors tracking-tight">
                {logo.display}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section id="bestsellers" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#A42325] text-white text-xs font-bold rounded-full mb-4 tracking-wide">
                FAN FAVORITES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a]">
                Bestsellers
              </h2>
            </div>
            <a href="#shop" className="text-[#334FB4] font-semibold hover:underline flex items-center gap-1 group">
              View All Products
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-black/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square relative overflow-hidden bg-[#f5f5f5]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="bg-[#334FB4] text-white px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold">
                      {product.tag}
                    </span>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); addToCart(); }}
                    className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-lg hover:bg-[#334FB4]"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-[10px] sm:text-xs text-[#334FB4] font-semibold uppercase tracking-wider mb-1">{product.category}</p>
                  <h3 className="font-bold text-sm sm:text-base text-[#1a1a1a] mb-1 group-hover:text-[#334FB4] transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-[#1a1a1a]/50 text-xs sm:text-sm mb-3 line-clamp-2 hidden sm:block">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#1a1a1a] font-black text-base sm:text-lg">${product.price}</span>
                    <div className="flex items-center gap-1 text-[#E85D4C]">
                      <span className="text-xs sm:text-sm">★★★★★</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props Banner */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: "🌿", title: "Sustainable", desc: "Organic & eco-friendly materials" },
              { icon: "✨", title: "Premium Quality", desc: "Built to last, made to impress" },
              { icon: "🚚", title: "Free Shipping", desc: "On all orders over $75" },
              { icon: "💯", title: "Satisfaction", desc: "30-day money-back guarantee" },
            ].map((item, i) => (
              <div key={i} className="text-center sm:text-left">
                <span className="text-2xl sm:text-3xl mb-2 sm:mb-3 block">{item.icon}</span>
                <h3 className="text-white font-bold text-sm sm:text-base mb-1">{item.title}</h3>
                <p className="text-white/50 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Collection */}
      <section id="shop" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#334FB4]/10 text-[#334FB4] text-xs font-bold rounded-full mb-4 tracking-wide">
              THE COLLECTION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a] mb-4">
              Shop All Products
            </h2>
            <p className="text-[#1a1a1a]/60 max-w-2xl mx-auto">
              Curated essentials for the modern lifestyle. Every piece designed to make your mornings feel extraordinary.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-sm transition-all ${
                  activeCategory === cat
                    ? 'bg-[#1a1a1a] text-white'
                    : 'bg-[#FFF6E1] text-[#1a1a1a] hover:bg-[#1a1a1a]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-[#FFF6E1] rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-white ${
                      product.tag === 'New Drop' || product.tag === 'Limited' ? 'bg-[#A42325]' :
                      product.tag === 'Sustainable' || product.tag === 'Organic' ? 'bg-[#7A9E7E]' :
                      'bg-[#334FB4]'
                    }`}>
                      {product.tag}
                    </span>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); addToCart(); }}
                    className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white text-[#1a1a1a] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-lg hover:bg-[#334FB4] hover:text-white"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
                <div className="p-4 sm:p-5 bg-white">
                  <p className="text-[10px] sm:text-xs text-[#334FB4] font-semibold uppercase tracking-wider mb-1">{product.category}</p>
                  <h3 className="font-bold text-sm sm:text-base text-[#1a1a1a] mb-2 group-hover:text-[#334FB4] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-[#1a1a1a] font-black text-base sm:text-lg">${product.price}</span>
                    <button
                      onClick={(e) => { e.stopPropagation(); addToCart(); }}
                      className="text-xs sm:text-sm font-semibold text-[#334FB4] hover:underline"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Story Section */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FFF6E1]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 bg-[#E85D4C]/10 text-[#E85D4C] text-xs font-bold rounded-full mb-4 tracking-wide">
                OUR STORY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a] mb-6 leading-tight">
                We Started With<br />
                <span className="text-[#334FB4]">a Simple Belief</span>
              </h2>
              <div className="space-y-4 text-[#1a1a1a]/70 text-base sm:text-lg leading-relaxed">
                <p>
                  <strong className="text-[#1a1a1a]">Every morning should feel like you&apos;re on vacation.</strong> That moment when you wake up in a beautiful hotel, sun streaming through the windows, nothing on the agenda but relaxation.
                </p>
                <p>
                  We created Hotel Breakfast for the dreamers, the travelers, the people who believe that champagne IS a morning drink. Our pieces are designed to bring that indulgent hotel morning experience into your everyday life.
                </p>
                <p>
                  Premium materials. Thoughtful design. Effortless style. Because you deserve to feel like a VIP every single day.
                </p>
              </div>
              <div className="flex flex-wrap gap-8 mt-8">
                <div>
                  <p className="text-3xl sm:text-4xl font-black text-[#334FB4]">15K+</p>
                  <p className="text-[#1a1a1a]/50 text-sm">Happy Customers</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-black text-[#334FB4]">4.9★</p>
                  <p className="text-[#1a1a1a]/50 text-sm">Average Rating</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-black text-[#334FB4]">50+</p>
                  <p className="text-[#1a1a1a]/50 text-sm">Countries Shipped</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl relative">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0751/4456/0894/files/13733165656261452820_2048.jpg"
                    alt="The Everyday Tote"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl mt-8 relative">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0751/4456/0894/files/568868594357841610_2048.jpg"
                    alt="The Lounge Towel"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 sm:p-6 rounded-2xl shadow-xl max-w-[200px] sm:max-w-xs">
                <p className="text-[#1a1a1a] font-bold text-sm sm:text-base">&quot;The quality is insane&quot;</p>
                <p className="text-[#1a1a1a]/50 text-xs sm:text-sm mt-1">— Sarah M., LA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#7A9E7E]/20 text-[#5A7E5E] text-xs font-bold rounded-full mb-4 tracking-wide">
              REVIEWS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a] mb-4">
              What People Are Saying
            </h2>
            <div className="flex items-center justify-center gap-2 text-lg">
              <span className="text-[#E85D4C] text-xl">★★★★★</span>
              <span className="font-bold">4.9</span>
              <span className="text-[#1a1a1a]/50">from 2,000+ reviews</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {testimonials.map((review, i) => (
              <div key={i} className="bg-[#FFF6E1] rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 text-[#E85D4C] mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
                <p className="text-[#1a1a1a] font-medium mb-4 text-sm sm:text-base leading-relaxed">
                  &quot;{review.quote}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#1a1a1a] text-sm">{review.name}</p>
                    <p className="text-[#1a1a1a]/50 text-xs">{review.location}</p>
                  </div>
                  {review.verified && (
                    <span className="text-[10px] bg-[#7A9E7E]/20 text-[#5A7E5E] px-2 py-1 rounded-full font-semibold">
                      Verified
                    </span>
                  )}
                </div>
                <p className="text-[#334FB4] text-xs font-medium mt-3">{review.product}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram / UGC Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FFF6E1]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[#334FB4]/10 text-[#334FB4] text-xs font-bold rounded-full mb-4 tracking-wide">
            @HOTELBREAKFAST
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a] mb-4">
            Join the Community
          </h2>
          <p className="text-[#1a1a1a]/60 mb-10 max-w-xl mx-auto">
            Tag us in your morning moments. We love seeing how you rock Hotel Breakfast.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
            {products.slice(0, 6).map((product, i) => (
              <div key={i} className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden relative group cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-[#334FB4]/0 group-hover:bg-[#334FB4]/50 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-2xl">♥</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#334FB4]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-5xl sm:text-6xl mb-6 block">🥂</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-white">
            Join the Morning Club
          </h2>
          <p className="text-white/70 mb-8 text-base sm:text-lg">
            Get 15% off your first order + exclusive access to new drops, sales, and morning inspiration.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 sm:px-6 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20 transition-colors text-base"
            />
            <button
              type="submit"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#334FB4] font-bold rounded-full hover:bg-[#FFF6E1] transition-colors whitespace-nowrap shadow-lg text-base"
            >
              Get 15% Off
            </button>
          </form>
          <p className="text-white/40 text-xs sm:text-sm mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 sm:px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-sm">🥂</span>
                </div>
                <span className="text-lg font-black tracking-tight text-white">HOTEL BREAKFAST</span>
              </div>
              <p className="text-white/50 text-sm mb-4">
                Because Champagne is a Morning Drink.™
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white/30 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/><circle cx="12" cy="12" r="3.5"/></svg>
                </a>
                <a href="#" className="text-white/30 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
                </a>
                <a href="#" className="text-white/30 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white text-sm">Shop</h4>
              <ul className="space-y-2 text-white/50 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apparel</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Beach</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white text-sm">Help</h4>
              <ul className="space-y-2 text-white/50 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white text-sm">Company</h4>
              <ul className="space-y-2 text-white/50 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
            <p className="text-white/30 text-xs sm:text-sm text-center sm:text-left">
              © 2024 Hotel Breakfast. All rights reserved. Because Champagne is a Morning Drink.™
            </p>
            <div className="flex items-center gap-4">
              <span className="text-white/30 text-xs">We accept:</span>
              <div className="flex gap-2 text-white/50 text-xs">
                <span className="bg-white/10 px-2 py-1 rounded">Visa</span>
                <span className="bg-white/10 px-2 py-1 rounded">MC</span>
                <span className="bg-white/10 px-2 py-1 rounded">Amex</span>
                <span className="bg-white/10 px-2 py-1 rounded">PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
