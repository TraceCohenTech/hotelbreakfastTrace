'use client';

import { useState } from 'react';

// Champagne glass SVG icon
const ChampagneIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 2h8l-1 10H9L8 2z" />
    <path d="M12 12v8" />
    <path d="M8 22h8" />
    <circle cx="10" cy="5" r="0.5" fill="currentColor" />
    <circle cx="14" cy="6" r="0.5" fill="currentColor" />
    <circle cx="12" cy="4" r="0.5" fill="currentColor" />
  </svg>
);

// Star icon for reviews
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill={filled ? "#d4af37" : "none"} stroke="#d4af37">
    <path d="M10 2l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 14.27l-4.77 2.51.91-5.32-3.87-3.77 5.34-.78L10 2z" />
  </svg>
);

export default function Home() {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      name: "The Mimosa Set",
      description: "Crystal glassware for the perfect morning pour",
      price: "$185",
      tag: "Bestseller"
    },
    {
      name: "Breakfast in Bed Tray",
      description: "Handcrafted walnut with brass accents",
      price: "$245",
      tag: "New"
    },
    {
      name: "The Champagne Robe",
      description: "Silk-lined comfort meets morning elegance",
      price: "$320",
      tag: "Limited"
    },
    {
      name: "Caviar Service Set",
      description: "Mother of pearl spoons, crystal bowl",
      price: "$425",
      tag: "Luxury"
    }
  ];

  const testimonials = [
    {
      name: "Alexandra M.",
      role: "Fashion Executive",
      quote: "Finally, a brand that understands mornings should feel like a celebration, not a chore."
    },
    {
      name: "James R.",
      role: "Hotel Owner",
      quote: "We've outfitted our suites with Hotel Breakfast. Guests constantly ask where they can buy pieces."
    },
    {
      name: "Sophia L.",
      role: "Interior Designer",
      quote: "The attention to detail is impeccable. Every piece feels intentional and luxurious."
    }
  ];

  const features = [
    {
      icon: "🥂",
      title: "Morning Rituals",
      description: "Transform your wake-up routine into a daily celebration"
    },
    {
      icon: "✨",
      title: "Luxury Materials",
      description: "Handcrafted from the finest materials across the globe"
    },
    {
      icon: "🛎️",
      title: "Hotel-Grade",
      description: "The same quality found in the world's finest establishments"
    },
    {
      icon: "🎁",
      title: "Gift Ready",
      description: "Signature packaging for the perfect present"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-[#d4af37]"><ChampagneIcon /></span>
              <span className="text-xl font-bold tracking-tight">HOTEL BREAKFAST</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#collection" className="text-white/70 hover:text-white transition-colors">Collection</a>
              <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
              <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">Reviews</a>
              <button className="px-6 py-2 bg-[#d4af37] text-black font-semibold rounded-full hover:bg-[#f5e6b3] transition-colors">
                Shop Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
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

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
              <div className="flex flex-col gap-4">
                <a href="#collection" className="text-white/70 hover:text-white transition-colors">Collection</a>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
                <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">Reviews</a>
                <button className="px-6 py-2 bg-[#d4af37] text-black font-semibold rounded-full hover:bg-[#f5e6b3] transition-colors w-full">
                  Shop Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <p className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-6">Luxury Morning Rituals</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Because Champagne<br />
              <span className="gold-gradient">is a Morning Drink</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Elevate your morning ritual with curated luxury breakfast essentials.
              Because every day deserves to start with intention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#d4af37] text-black font-bold rounded-full hover:bg-[#f5e6b3] transition-all hover-glow animate-pulse-gold">
                Explore Collection
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all">
                Our Story
              </button>
            </div>
          </div>

          {/* Floating champagne icon */}
          <div className="mt-20 animate-float">
            <div className="w-20 h-20 mx-auto border border-[#d4af37]/30 rounded-full flex items-center justify-center">
              <span className="text-4xl">🥂</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-8 border-y border-white/10 overflow-hidden">
        <div className="gradient-mask">
          <div className="animate-marquee whitespace-nowrap flex gap-8">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 items-center">
                <span className="text-white/40 text-sm tracking-widest">LUXURY BREAKFAST</span>
                <span className="text-[#d4af37]">✦</span>
                <span className="text-white/40 text-sm tracking-widest">MORNING RITUALS</span>
                <span className="text-[#d4af37]">✦</span>
                <span className="text-white/40 text-sm tracking-widest">CHAMPAGNE LIFESTYLE</span>
                <span className="text-[#d4af37]">✦</span>
                <span className="text-white/40 text-sm tracking-widest">HOTEL QUALITY</span>
                <span className="text-[#d4af37]">✦</span>
                <span className="text-white/40 text-sm tracking-widest">CURATED ELEGANCE</span>
                <span className="text-[#d4af37]">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-4">The Philosophy</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Mornings are<br />
                <span className="gold-gradient">meant to be savored</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                We believe the first hours of your day set the tone for everything that follows.
                Hotel Breakfast was born from the desire to bring that indulgent hotel morning
                experience into your daily life.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                Every piece in our collection is thoughtfully designed to transform the mundane
                into the magnificent—because you deserve to feel like a guest in your own home.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 hover-glow transition-all cursor-default"
                >
                  <span className="text-3xl mb-4 block">{feature.icon}</span>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/50 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-24 px-6 bg-gradient-to-b from-transparent via-[#d4af37]/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-4">The Collection</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Curated for the<br />
              <span className="gold-gradient">discerning morning</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="group glass rounded-2xl overflow-hidden hover-glow transition-all cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center relative">
                  <span className="text-6xl group-hover:scale-110 transition-transform">🥂</span>
                  <span className="absolute top-4 right-4 text-xs bg-[#d4af37] text-black px-2 py-1 rounded-full font-semibold">
                    {product.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-[#d4af37] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-white/50 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#d4af37] font-bold">{product.price}</span>
                    <button className="text-sm text-white/70 hover:text-white transition-colors">
                      Add to Cart →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 border border-[#d4af37] text-[#d4af37] font-semibold rounded-full hover:bg-[#d4af37] hover:text-black transition-all">
              View Full Collection
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              What our guests<br />
              <span className="gold-gradient">are saying</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 hover-glow transition-all"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={true} />
                  ))}
                </div>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f5e6b3] flex items-center justify-center text-black font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-white/50 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold gold-gradient">15K+</p>
              <p className="text-white/50 mt-2">Happy Guests</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold gold-gradient">200+</p>
              <p className="text-white/50 mt-2">Hotel Partners</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold gold-gradient">4.9</p>
              <p className="text-white/50 mt-2">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold gold-gradient">50+</p>
              <p className="text-white/50 mt-2">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-5xl mb-6 block animate-float">💌</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the <span className="gold-gradient">Morning Club</span>
          </h2>
          <p className="text-white/60 mb-8">
            Be the first to know about new collections, exclusive offers, and morning inspiration.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4af37] transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#d4af37] text-black font-bold rounded-full hover:bg-[#f5e6b3] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-white/30 text-sm mt-4">
            No spam, just champagne-worthy content. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#d4af37]"><ChampagneIcon /></span>
                <span className="text-xl font-bold tracking-tight">HOTEL BREAKFAST</span>
              </div>
              <p className="text-white/50 max-w-sm">
                Elevating morning rituals with luxury breakfast essentials since 2020.
                Because every day deserves to start with champagne.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-white/50">
                <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bestsellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gift Sets</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white/50">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
            <p className="text-white/30 text-sm">
              © 2024 Hotel Breakfast. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/30 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="text-white/30 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="text-white/30 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
