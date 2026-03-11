#!/usr/bin/env node

/**
 * Run this script after adding your Storefront API token to .env.local
 * to get the variant IDs you need to add to page.tsx.
 *
 * Usage: node scripts/fetch-variant-ids.mjs
 */

import { readFileSync } from 'fs';

// Parse .env.local manually (no dotenv dependency needed)
let envVars = {};
try {
  const envContent = readFileSync('.env.local', 'utf-8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const [key, ...rest] = trimmed.split('=');
    envVars[key.trim()] = rest.join('=').trim();
  }
} catch {
  console.error('❌ Could not read .env.local — make sure it exists in the project root.');
  process.exit(1);
}

const domain = envVars.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const token = envVars.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

if (!domain || !token) {
  console.error('❌ Missing NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN or NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN in .env.local');
  process.exit(1);
}

const query = `
  query {
    products(first: 50) {
      edges {
        node {
          id
          title
          handle
          variants(first: 10) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                availableForSale
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
        }
      }
    }
  }
`;

async function main() {
  const res = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    console.error(`❌ API error: ${res.status} ${res.statusText}`);
    const text = await res.text();
    console.error(text);
    process.exit(1);
  }

  const json = await res.json();

  if (json.errors) {
    console.error('❌ GraphQL errors:', JSON.stringify(json.errors, null, 2));
    process.exit(1);
  }

  console.log('\n✅ Successfully connected to Shopify Storefront API!\n');
  console.log('─'.repeat(70));
  console.log('Copy the variant IDs below into the products array in src/app/page.tsx');
  console.log('Add variantId: "gid://..." to each product object.\n');
  console.log('─'.repeat(70));

  for (const { node: product } of json.data.products.edges) {
    console.log(`\n📦 ${product.title}`);
    console.log(`   Product ID: ${product.id}`);
    console.log(`   Handle: ${product.handle}`);
    for (const { node: variant } of product.variants.edges) {
      const options = variant.selectedOptions.map(o => `${o.name}: ${o.value}`).join(', ');
      console.log(`   └─ Variant: ${variant.id}`);
      console.log(`      ${variant.title} — $${variant.price.amount} ${variant.availableForSale ? '✅ In Stock' : '❌ Out of Stock'}`);
      if (options) console.log(`      Options: ${options}`);
    }
  }

  console.log('\n');
}

main().catch(console.error);
