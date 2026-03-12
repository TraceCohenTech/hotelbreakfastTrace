import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFFDF8] flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-lg mx-auto">
        <div className="relative w-16 h-16 mx-auto mb-8">
          <Image
            src="/logo-icon.png"
            alt="Hotel Breakfast"
            fill
            className="object-contain"
          />
        </div>

        <h1 className="text-7xl sm:text-8xl font-bold text-[#E8C547] mb-4">404</h1>

        <h2 className="font-[family-name:var(--font-eb-garamond)] text-2xl sm:text-3xl text-[#1C1C1C] mb-4">
          This Room Doesn&apos;t Exist
        </h2>

        <p className="text-[#1C1C1C]/50 text-base mb-2">
          Looks like the champagne went to your URL bar.
        </p>
        <p className="text-[#1C1C1C]/30 text-sm mb-10">
          The page you&apos;re looking for has checked out.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="px-8 py-3.5 btn-golden text-sm text-center"
          >
            Back to Lobby
          </Link>
          <Link
            href="/#shop"
            className="px-8 py-3.5 btn-outline text-sm text-center"
          >
            Shop Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
