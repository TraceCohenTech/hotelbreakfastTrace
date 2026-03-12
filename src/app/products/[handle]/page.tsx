import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products, getProductByHandle as getLocalProduct, getRelatedProducts } from '@/lib/products';
import { getProductByHandle as getShopifyProduct } from '@/lib/shopify';
import ProductDetail from './product-detail';

interface PageProps {
  params: Promise<{ handle: string }>;
}

// Generate static params for all known product handles
export async function generateStaticParams() {
  return products.map((product) => ({
    handle: product.handle,
  }));
}

// Generate per-product metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = getLocalProduct(handle);

  if (!product) {
    return {
      title: 'Product Not Found | Hotel Breakfast',
    };
  }

  const title = `${product.name} | Hotel Breakfast`;
  const description = `${product.description} Shop ${product.name} for $${product.price}. Free shipping on orders over $75. Premium quality from Hotel Breakfast.`;
  const url = `https://hotelbreakfast.co/products/${handle}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Hotel Breakfast',
      type: 'website',
      images: [
        {
          url: product.image,
          width: 1200,
          height: 1200,
          alt: product.name,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [product.image],
      creator: '@hotelbreakfast',
      site: '@hotelbreakfast',
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { handle } = await params;

  // Try local product data first, then Shopify
  let product = getLocalProduct(handle);

  if (!product) {
    // Try fetching from Shopify as fallback
    const shopifyProduct = await getShopifyProduct(handle);
    if (shopifyProduct) {
      const firstImage = shopifyProduct.images.edges[0]?.node;
      const firstVariant = shopifyProduct.variants.edges[0]?.node;
      const sizeOption = shopifyProduct.options.find((o) => o.name === 'Size');
      const colorOption = shopifyProduct.options.find((o) => o.name === 'Color');

      product = {
        id: 0,
        handle: shopifyProduct.handle,
        name: shopifyProduct.title,
        description: shopifyProduct.description,
        price: firstVariant ? parseFloat(firstVariant.price.amount) : 0,
        image: firstImage?.url || '',
        tag: shopifyProduct.tags[0] || '',
        category: shopifyProduct.productType || 'Apparel',
        hoverColor: 'hover-color-navy',
        sizes: sizeOption?.values || ['One Size'],
        colors: colorOption
          ? colorOption.values.map((v) => ({ name: v, hex: '#1a1a1a' }))
          : [],
        variantId: firstVariant?.id,
      };
    }
  }

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(handle, 4);

  // Product JSON-LD structured data
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: 'Hotel Breakfast',
    },
    offers: {
      '@type': 'Offer',
      price: product.price.toString(),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `https://hotelbreakfast.co/products/${handle}`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2000',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductDetail product={product} relatedProducts={relatedProducts} />
    </>
  );
}
