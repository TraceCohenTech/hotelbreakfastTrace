import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Size Guide | Hotel Breakfast',
  description: 'Find your perfect fit with our comprehensive size guide for Hotel Breakfast apparel, hats, and towels.',
};

export default function SizeGuidePage() {
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

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Breadcrumbs */}
        <nav className="text-xs text-[#1C1C1C]/40 mb-8">
          <Link href="/" className="hover:text-[#1C1C1C] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1C1C1C]">Size Guide</span>
        </nav>

        <h1 className="font-[family-name:var(--font-eb-garamond)] text-4xl sm:text-5xl text-[#1C1C1C] mb-4">
          Size Guide
        </h1>
        <p className="text-[#1C1C1C]/50 text-base mb-12 max-w-2xl">
          Find your perfect fit. All measurements are in inches unless otherwise noted.
        </p>

        {/* Apparel Section */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-eb-garamond)] text-2xl text-[#1C1C1C] mb-1">Apparel</h2>
          <p className="text-[#1C1C1C]/40 text-xs mb-6">Tees, Crewneck Pullover &amp; Sweatshirts</p>

          <div className="bg-white rounded-xl border border-black/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left px-6 py-3 font-semibold text-xs uppercase tracking-wider">Size</th>
                    <th className="text-center px-6 py-3 font-semibold text-xs uppercase tracking-wider">Chest (in)</th>
                    <th className="text-center px-6 py-3 font-semibold text-xs uppercase tracking-wider">Length (in)</th>
                    <th className="text-center px-6 py-3 font-semibold text-xs uppercase tracking-wider">Sleeve (in)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: 'S', chest: '36-38', length: '27', sleeve: '8' },
                    { size: 'M', chest: '39-41', length: '28', sleeve: '8.5' },
                    { size: 'L', chest: '42-44', length: '29', sleeve: '9' },
                    { size: 'XL', chest: '45-47', length: '30', sleeve: '9.5' },
                    { size: 'XXL', chest: '48-50', length: '31', sleeve: '10' },
                  ].map((row, i) => (
                    <tr key={row.size} className={i % 2 === 0 ? 'bg-[#F5F1EB]/50' : 'bg-white'}>
                      <td className="px-6 py-3 font-semibold text-[#1C1C1C] text-sm">{row.size}</td>
                      <td className="px-6 py-3 text-center text-[#1C1C1C]/60 text-sm">{row.chest}</td>
                      <td className="px-6 py-3 text-center text-[#1C1C1C]/60 text-sm">{row.length}</td>
                      <td className="px-6 py-3 text-center text-[#1C1C1C]/60 text-sm">{row.sleeve}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 bg-[#E8C547]/10 border border-[#E8C547]/20 rounded-lg p-4">
            <p className="text-sm text-[#1C1C1C]/70 font-medium">
              Tip: Our oversized tees run large by design. Size down if you prefer a more fitted look.
            </p>
          </div>
        </section>

        {/* Hats Section */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-eb-garamond)] text-2xl text-[#1C1C1C] mb-1">Hats</h2>
          <p className="text-[#1C1C1C]/40 text-xs mb-6">Dad Hats &amp; Structured Caps</p>

          <div className="bg-white rounded-xl border border-black/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left px-6 py-3 font-semibold text-xs uppercase tracking-wider">Size</th>
                    <th className="text-center px-6 py-3 font-semibold text-xs uppercase tracking-wider">Head Circumference (in)</th>
                    <th className="text-center px-6 py-3 font-semibold text-xs uppercase tracking-wider">Head Circumference (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: 'S/M', inches: '21.5-22.5', cm: '54.5-57' },
                    { size: 'L/XL', inches: '23-24', cm: '58.5-61' },
                    { size: 'One Size (Adjustable)', inches: '21-24', cm: '53-61' },
                  ].map((row, i) => (
                    <tr key={row.size} className={i % 2 === 0 ? 'bg-[#F5F1EB]/50' : 'bg-white'}>
                      <td className="px-6 py-3 font-semibold text-[#1C1C1C] text-sm">{row.size}</td>
                      <td className="px-6 py-3 text-center text-[#1C1C1C]/60 text-sm">{row.inches}</td>
                      <td className="px-6 py-3 text-center text-[#1C1C1C]/60 text-sm">{row.cm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 bg-[#E8C547]/10 border border-[#E8C547]/20 rounded-lg p-4">
            <p className="text-sm text-[#1C1C1C]/70 font-medium">
              Tip: Most of our hats are one-size with an adjustable strap for a custom fit.
            </p>
          </div>
        </section>

        {/* Towels Section */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-eb-garamond)] text-2xl text-[#1C1C1C] mb-1">Beach Towels</h2>
          <p className="text-[#1C1C1C]/40 text-xs mb-6">The Lounge Towel</p>

          <div className="bg-white rounded-xl border border-black/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left px-6 py-3 font-semibold text-xs uppercase tracking-wider">Product</th>
                    <th className="text-center px-6 py-3 font-semibold text-xs uppercase tracking-wider">Dimensions</th>
                    <th className="text-center px-6 py-3 font-semibold text-xs uppercase tracking-wider">Material</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#F5F1EB]/50">
                    <td className="px-6 py-3 font-semibold text-[#1C1C1C] text-sm">The Lounge Towel</td>
                    <td className="px-6 py-3 text-center text-[#1C1C1C]/60 text-sm">30&quot; x 60&quot;</td>
                    <td className="px-6 py-3 text-center text-[#1C1C1C]/60 text-sm">100% Cotton Terry</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How to Measure */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-eb-garamond)] text-2xl text-[#1C1C1C] mb-6">How to Measure</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Chest', instruction: 'Measure around the fullest part of your chest, keeping the tape level under your arms and across your shoulder blades.' },
              { title: 'Length', instruction: 'Measure from the highest point of your shoulder, over the most prominent part of your chest, down to the desired length.' },
              { title: 'Sleeve', instruction: 'With arm relaxed at your side, measure from the shoulder seam to the end of the sleeve.' },
              { title: 'Head Circumference', instruction: 'Wrap a flexible measuring tape around your head about 1 inch above your eyebrows and ears, across the widest part of the back of your head.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-black/5">
                <h3 className="font-semibold text-[#1C1C1C] text-sm mb-2">{item.title}</h3>
                <p className="text-[#1C1C1C]/50 text-sm leading-relaxed">{item.instruction}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Still Need Help */}
        <section className="text-center bg-white rounded-xl p-10 sm:p-14 border border-black/5">
          <h2 className="font-[family-name:var(--font-eb-garamond)] text-2xl text-[#1C1C1C] mb-3">Still Not Sure?</h2>
          <p className="text-[#1C1C1C]/50 mb-6 max-w-md mx-auto text-sm">
            Reach out to us and we&apos;ll help you find the perfect fit.
          </p>
          <a
            href="mailto:hello@hotelbreakfast.co"
            className="inline-block px-8 py-3.5 btn-golden text-sm"
          >
            Contact Us
          </a>
        </section>
      </main>
    </div>
  );
}
