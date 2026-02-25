import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hotel Breakfast | Because Champagne is a Morning Drink",
  description: "Elevate your morning ritual. Luxury breakfast lifestyle brand celebrating the art of starting your day with intention and indulgence.",
  keywords: ["luxury breakfast", "champagne", "morning ritual", "lifestyle", "hotel breakfast"],
  openGraph: {
    title: "Hotel Breakfast | Because Champagne is a Morning Drink",
    description: "Elevate your morning ritual with luxury breakfast essentials.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
