import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { CartDrawer } from "@/lib/cart-drawer";
import { CartToast } from "@/lib/cart-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hotel-breakfast-redesign.vercel.app"),
  title: "Hotel Breakfast | Because Champagne is a Morning Drink",
  description: "Elevate your morning ritual. Luxury lifestyle essentials for those who believe every morning should feel like vacation. Premium quality. Effortless style.",
  keywords: ["luxury breakfast", "champagne", "morning ritual", "lifestyle", "hotel breakfast", "beach towels", "premium apparel"],
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Hotel Breakfast | Because Champagne is a Morning Drink",
    description: "Lifestyle essentials for those who believe every morning should feel like vacation. Premium quality. Effortless style.",
    type: "website",
    siteName: "Hotel Breakfast",
    locale: "en_US",
    url: "https://hotel-breakfast-redesign.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Breakfast | Because Champagne is a Morning Drink",
    description: "Lifestyle essentials for those who believe every morning should feel like vacation.",
    creator: "@hotelbreakfast",
    site: "@hotelbreakfast",
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hotel Breakfast',
  url: 'https://hotelbreakfast.co',
  logo: 'https://hotel-breakfast-redesign.vercel.app/logo-white.png',
  sameAs: [
    'https://instagram.com/hotelbreakfast',
    'https://tiktok.com/@hotelbreakfast',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Hotel Breakfast',
  url: 'https://hotelbreakfast.co',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://hotelbreakfast.co/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${ebGaramond.variable} antialiased`}
      >
        <CartProvider>
          {children}
          <CartDrawer />
          <CartToast />
        </CartProvider>
      </body>
    </html>
  );
}
