import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog | Hotel Breakfast',
  description: 'Stories, style guides, and morning inspiration from Hotel Breakfast. Explore the art of living well.',
};

const posts = [
  {
    slug: 'the-art-of-the-hotel-morning',
    title: 'The Art of the Hotel Morning',
    excerpt: 'Why we believe every morning should feel like the first day of vacation. The philosophy behind Hotel Breakfast and what it means to start your day right.',
    date: 'March 1, 2026',
    readTime: '5 min read',
    category: 'Brand',
  },
  {
    slug: 'beach-towel-care-guide',
    title: 'Beach Towel Care Guide',
    excerpt: 'How to keep your Lounge Towel looking fresh for seasons to come. From washing tips to storage hacks, here is everything you need to know.',
    date: 'February 18, 2026',
    readTime: '4 min read',
    category: 'Care',
  },
  {
    slug: '5-ways-to-style-your-do-not-disturb-tee',
    title: '5 Ways to Style Your Do Not Disturb Tee',
    excerpt: 'From poolside to rooftop bar, our oversized tee is the ultimate versatile piece. Here are five looks to try this season.',
    date: 'February 5, 2026',
    readTime: '3 min read',
    category: 'Style',
  },
  {
    slug: 'why-champagne-is-actually-a-morning-drink',
    title: 'Why Champagne is Actually a Morning Drink',
    excerpt: 'A brief history of the mimosa, the art of brunch culture, and why we put bubbles on everything. Spoiler: it has always been a morning drink.',
    date: 'January 22, 2026',
    readTime: '6 min read',
    category: 'Lifestyle',
  },
];

export default function BlogPage() {
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
          <span className="text-[#1C1C1C]">Blog</span>
        </nav>

        <div className="text-center mb-14">
          <h1 className="font-[family-name:var(--font-eb-garamond)] text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] mb-4">
            The Journal
          </h1>
          <p className="text-[#1C1C1C]/50 text-base max-w-xl mx-auto">
            Stories, style guides, and morning inspiration.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-xl overflow-hidden border border-black/5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Placeholder image */}
              <div className="aspect-[16/9] bg-[#F5F1EB] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#1C1C1C]/5 text-7xl font-bold" style={{ fontFamily: 'var(--font-eb-garamond), serif' }}>
                    HB
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#E8C547] text-[#1C1C1C] text-[10px] font-bold rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-3 text-[10px] text-[#1C1C1C]/30 mb-3 font-medium">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#1C1C1C]/15" />
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-[family-name:var(--font-eb-garamond)] text-xl sm:text-2xl text-[#1C1C1C] mb-3 group-hover:text-[#334FB4] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#1C1C1C]/50 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-4 text-[#1C1C1C] font-semibold text-sm underline underline-offset-4 group-hover:text-[#334FB4] transition-colors">
                  Read More
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
