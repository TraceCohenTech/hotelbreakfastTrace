// Shared product data used across the site
// This is the hardcoded product catalog with handle slugs for routing

export interface Product {
  id: number;
  name: string;
  handle: string;
  description: string;
  price: number;
  image: string;
  tag: string;
  category: string;
  hoverColor: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  variantId?: string;
}

export const products: Product[] = [
  {
    id: 1,
    handle: "the-crewneck-pullover",
    name: "The Crewneck Pullover",
    description: "Cotton-rich fabric sweatshirt with vintage wash and retro vibe. Your new Sunday morning essential.",
    price: 76,
    image: "https://cdn.shopify.com/s/files/1/0751/4456/0894/files/3262399543692142814_2048.jpg",
    tag: "Bestseller",
    category: "Apparel",
    hoverColor: "hover-color-navy",
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
    hoverColor: "hover-color-coral",
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
    tag: "New Drop",
    category: "Apparel",
    hoverColor: "hover-color-burgundy",
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
    hoverColor: "hover-color-sage",
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
    hoverColor: "hover-color-sage",
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
    hoverColor: "hover-color-navy",
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
    hoverColor: "hover-color-coral",
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
    hoverColor: "hover-color-burgundy",
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
    hoverColor: "hover-color-coral",
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
    hoverColor: "hover-color-sage",
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
    hoverColor: "hover-color-navy",
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
    hoverColor: "hover-color-burgundy",
    sizes: ["30x60"],
    colors: [
      { name: "Ocean Blue", hex: "#334FB4" }
    ],
    variantId: "gid://shopify/ProductVariant/47207504969982"
  },
];

export function getProductByHandle(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}

export function getRelatedProducts(handle: string, count = 4): Product[] {
  const current = products.find((p) => p.handle === handle);
  if (!current) return products.slice(0, count);
  // Prefer same category, then fill with others
  const sameCategory = products.filter((p) => p.handle !== handle && p.category === current.category);
  const others = products.filter((p) => p.handle !== handle && p.category !== current.category);
  return [...sameCategory, ...others].slice(0, count);
}
