import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const posts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
  relatedProducts: { name: string; description: string }[];
}> = {
  'the-art-of-the-hotel-morning': {
    title: 'The Art of the Hotel Morning',
    date: 'March 1, 2026',
    readTime: '5 min read',
    category: 'Brand',
    content: [
      'There is a moment, right before you fully wake up in a hotel room, where everything feels possible. The sheets are impossibly soft. The light filters through curtains you did not pick out. Somewhere below, someone is already making your coffee. That feeling - that suspension between sleep and the best day of your life - is what Hotel Breakfast is about.',
      'We started this brand because we were tired of the mundane. Every morning felt like a repetition of the last: the same alarm, the same rush, the same stale routine. But then we remembered how mornings felt on vacation. How you would linger over breakfast. How a simple white tee felt like the only outfit you needed. How champagne before noon was not just acceptable - it was encouraged.',
      'Hotel Breakfast is not just clothing. It is a philosophy. It is the belief that you deserve to feel like you are on the best trip of your life, every single morning. Whether you are pouring orange juice in your kitchen or sipping espresso on a balcony in Positano, we want you to feel it. That is why every piece we make is designed for the morning person you want to be - relaxed, confident, and maybe just a little bit glamorous.',
    ],
    relatedProducts: [
      { name: 'The Crewneck Pullover', description: 'Your new Sunday morning essential' },
      { name: 'The Lounge Towel', description: 'Premium beach-ready cotton' },
    ],
  },
  'beach-towel-care-guide': {
    title: 'Beach Towel Care Guide',
    date: 'February 18, 2026',
    readTime: '4 min read',
    category: 'Care',
    content: [
      'Your Lounge Towel is built to last, but a little care goes a long way. Our towels are made from 100% premium cotton terry, chosen for its absorbency, softness, and durability. With the right care, your towel will stay plush and vibrant for years to come.',
      'Before first use, wash your towel separately in cold water to set the colors and remove any residual manufacturing finish. For regular washing, machine wash on a gentle cycle with cold or warm water. Use a mild, color-safe detergent and avoid bleach or fabric softener - fabric softener coats the fibers and actually reduces absorbency over time. If you want extra softness, add half a cup of white vinegar to the rinse cycle instead.',
      'Tumble dry on low heat or hang dry in the shade. Direct sunlight can fade colors over time, so if you are air drying outdoors, flip the towel periodically. When storing, make sure your towel is completely dry to prevent mildew. Roll rather than fold to minimize creasing and keep the fibers lofty. With these simple steps, your Lounge Towel will be beach-trip ready whenever you are.',
    ],
    relatedProducts: [
      { name: 'The Lounge Towel', description: 'Premium beach-ready cotton' },
      { name: 'The Everyday Tote', description: 'Perfect beach companion' },
    ],
  },
  '5-ways-to-style-your-do-not-disturb-tee': {
    title: '5 Ways to Style Your Do Not Disturb Tee',
    date: 'February 5, 2026',
    readTime: '3 min read',
    category: 'Style',
    content: [
      'The Do Not Disturb Oversized Tee is our most versatile piece, and for good reason. Its relaxed silhouette and premium heavyweight cotton make it the kind of shirt that works just as well at a rooftop bar as it does on a lazy Sunday morning. Here are five ways to wear it this season.',
      'First, the classic beach look: pair it with swim trunks and slides for an effortless poolside vibe. Second, tuck it into high-waisted trousers and add loafers for an elevated casual Friday outfit. Third, layer it under a blazer with jeans - the oversized fit works perfectly under structured outerwear. Fourth, tie a knot at the hem and pair with a midi skirt for a relaxed weekend brunch look. And fifth, throw it on with joggers and sneakers for the airport - because your travel outfit should still look good.',
      'The key to styling an oversized tee is balance. If the top is loose, keep the bottom more fitted, and vice versa. And remember, the Do Not Disturb runs intentionally large - that is the whole point. Lean into the relaxed fit. After all, the best style always looks like you are not trying too hard.',
    ],
    relatedProducts: [
      { name: 'Do Not Disturb Oversized Tee', description: 'Heavyweight oversized fit' },
      { name: 'The Pocket Tee', description: 'Ring-spun cotton essential' },
    ],
  },
  'why-champagne-is-actually-a-morning-drink': {
    title: 'Why Champagne is Actually a Morning Drink',
    date: 'January 22, 2026',
    readTime: '6 min read',
    category: 'Lifestyle',
    content: [
      'Before brunch became an institution, before the mimosa became a cultural phenomenon, champagne was already a morning drink. In 18th-century France, it was common to start the day with a glass of sparkling wine. It was not indulgence - it was ritual. The effervescence was thought to aid digestion and sharpen the mind. Kings and philosophers alike reached for the bubbles before reaching for anything else.',
      'Fast forward to today, and the mimosa - that perfect blend of champagne and fresh orange juice - has become the unofficial drink of weekend mornings everywhere. But somewhere along the way, we started treating champagne before noon as something rebellious, something that needed a brunch menu to justify it. We disagree. Champagne is celebration in a glass, and every morning is worth celebrating.',
      'That is the spirit behind our tagline: Because Champagne is a Morning Drink. It is not about drinking champagne every morning (though we will not judge). It is about approaching your morning with the same sense of occasion. It is about refusing to let the first hours of your day be mundane. Whether your morning champagne is actual Veuve Clicquot or just a really great cup of coffee in your favorite crewneck, what matters is that you are savoring it. Cheers to that.',
    ],
    relatedProducts: [
      { name: 'The Crewneck Pullover', description: 'Your new Sunday morning essential' },
      { name: 'The Champagne Dad Hat', description: 'Top off any morning look' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) {
    return { title: 'Post Not Found | Hotel Breakfast' };
  }
  return {
    title: `${post.title} | Hotel Breakfast Blog`,
    description: post.content[0].slice(0, 160) + '...',
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

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
          <Link href="/blog" className="text-sm text-[#1C1C1C]/50 font-semibold hover:text-[#1C1C1C] transition-colors">
            &larr; Back to Blog
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Hero area */}
        <div className="aspect-[21/9] bg-[#F5F1EB] rounded-xl mb-10 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#1C1C1C]/5 text-[8rem] font-bold leading-none" style={{ fontFamily: 'var(--font-eb-garamond), serif' }}>
              HB
            </span>
          </div>
          <div className="absolute bottom-5 left-5">
            <span className="px-3 py-1 bg-[#E8C547] text-[#1C1C1C] text-[10px] font-bold rounded-full uppercase tracking-wider">
              {post.category}
            </span>
          </div>
        </div>

        {/* Post header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 text-xs text-[#1C1C1C]/30 mb-4 font-medium">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-[#1C1C1C]/15" />
            <span>{post.readTime}</span>
          </div>
          <h1 className="font-[family-name:var(--font-eb-garamond)] text-3xl sm:text-4xl lg:text-5xl text-[#1C1C1C] leading-tight">
            {post.title}
          </h1>
        </div>

        {/* Post content */}
        <article className="space-y-6 mb-16">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-[#1C1C1C]/60 text-base sm:text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Divider */}
        <hr className="border-black/5 mb-12" />

        {/* Related Products */}
        <section>
          <h2 className="font-[family-name:var(--font-eb-garamond)] text-2xl text-[#1C1C1C] mb-6">Shop the Story</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {post.relatedProducts.map((product) => (
              <Link
                key={product.name}
                href="/#shop"
                className="group bg-white rounded-xl p-6 border border-black/5 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <h3 className="font-semibold text-[#1C1C1C] group-hover:text-[#C4553A] transition-colors">
                  {product.name}
                </h3>
                <p className="text-[#1C1C1C]/40 text-sm mt-1">{product.description}</p>
                <span className="inline-block mt-3 text-[#1C1C1C] font-semibold text-sm underline underline-offset-4 group-hover:text-[#C4553A] transition-colors">
                  Shop Now
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Back to blog */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-block px-8 py-3.5 btn-outline text-sm"
          >
            &larr; Back to All Posts
          </Link>
        </div>
      </main>
    </div>
  );
}
