import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Track Your Order | Hotel Breakfast',
  description: 'Track your Hotel Breakfast order status. Find shipping updates, delivery estimates, and answers to common shipping questions.',
};

export default function TrackOrderPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF8]">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
              <Image src="/logo-icon.png" alt="Hotel Breakfast" fill className="object-contain" />
            </div>
            <span className="text-sm sm:text-base font-bold tracking-tight text-[#1C1C1C]">HOTEL BREAKFAST</span>
          </Link>
          <Link href="/" className="text-sm text-[#1C1C1C]/50 font-semibold hover:text-[#1C1C1C] transition-colors">
            Back to Shop
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Breadcrumbs */}
        <nav className="text-xs text-[#1C1C1C]/40 mb-8">
          <Link href="/" className="hover:text-[#1C1C1C] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1C1C1C]">Track Order</span>
        </nav>

        <h1 className="font-[family-name:var(--font-eb-garamond)] text-4xl sm:text-5xl text-[#1C1C1C] mb-4">
          Track Your Order
        </h1>
        <p className="text-[#1C1C1C]/50 text-base mb-10">
          Enter your order details below to check the status of your delivery.
        </p>

        {/* Tracking Form */}
        <div className="bg-white rounded-xl p-8 sm:p-10 border border-black/5 mb-16">
          <form
            action="https://hotelbreakfast.co/account/login"
            method="get"
            className="space-y-5"
          >
            <div>
              <label htmlFor="order-number" className="block text-xs font-semibold text-[#1C1C1C] mb-2 uppercase tracking-wider">
                Order Number
              </label>
              <input
                id="order-number"
                name="order"
                type="text"
                placeholder="e.g. #HB-1234"
                className="w-full px-4 py-3.5 rounded-lg border border-black/10 bg-[#FFFDF8] text-[#1C1C1C] placeholder:text-[#1C1C1C]/25 focus:outline-none focus:border-[#1C1C1C] transition-colors text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-[#1C1C1C] mb-2 uppercase tracking-wider">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="The email used for your order"
                className="w-full px-4 py-3.5 rounded-lg border border-black/10 bg-[#FFFDF8] text-[#1C1C1C] placeholder:text-[#1C1C1C]/25 focus:outline-none focus:border-[#1C1C1C] transition-colors text-sm"
              />
            </div>
            <a
              href="https://hotelbreakfast.co/account/login"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 btn-golden text-center text-sm"
            >
              Track Order
            </a>
          </form>

          <p className="text-center text-[#1C1C1C]/30 text-[10px] mt-5">
            You&apos;ll be redirected to our secure order portal to view your tracking details.
          </p>
        </div>

        {/* FAQ Section */}
        <section id="faq">
          <h2 className="font-[family-name:var(--font-eb-garamond)] text-2xl sm:text-3xl text-[#1C1C1C] mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {[
              {
                question: 'How long does shipping take?',
                answer: 'Domestic orders typically arrive within 3-7 business days. Orders are processed within 1-2 business days before shipping. You\'ll receive a tracking number via email once your order ships.',
              },
              {
                question: 'Do you ship internationally?',
                answer: 'Yes, we ship worldwide! International orders typically take 7-14 business days depending on the destination. Customs duties and import taxes may apply and are the responsibility of the buyer.',
              },
              {
                question: 'How do I return an item?',
                answer: 'We offer a 30-day return policy on all unworn, unwashed items with original tags attached. To initiate a return, email us at hello@hotelbreakfast.co with your order number and we\'ll send you a prepaid return label.',
              },
              {
                question: 'Can I change or cancel my order?',
                answer: 'We process orders quickly! If you need to make changes, email us at hello@hotelbreakfast.co within 2 hours of placing your order and we\'ll do our best to accommodate your request.',
              },
              {
                question: 'What if my order arrives damaged?',
                answer: 'We\'re sorry to hear that! Please email hello@hotelbreakfast.co with photos of the damaged item within 48 hours of delivery. We\'ll send a replacement right away - no need to return the damaged item.',
              },
              {
                question: 'Do you offer free shipping?',
                answer: 'Yes! All domestic orders over $75 qualify for free standard shipping. This is calculated automatically at checkout.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-black/5">
                <h3 className="font-semibold text-[#1C1C1C] text-sm mb-2">{faq.question}</h3>
                <p className="text-[#1C1C1C]/50 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-white rounded-xl p-10 border border-black/5">
          <h3 className="font-[family-name:var(--font-eb-garamond)] text-xl text-[#1C1C1C] mb-3">Still Have Questions?</h3>
          <p className="text-[#1C1C1C]/50 mb-6 text-sm">
            Our team is here to help. We typically respond within 24 hours.
          </p>
          <a
            href="mailto:hello@hotelbreakfast.co"
            className="inline-block px-8 py-3.5 btn-golden text-sm"
          >
            Email Us
          </a>
        </div>
      </main>
    </div>
  );
}
