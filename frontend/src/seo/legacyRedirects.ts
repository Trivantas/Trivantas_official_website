import { ALL_PRODUCTS } from "./productIndex";

export const STATIC_REDIRECTS: Record<string, string> = {
  // Short category marketing URLs
  "/sensors": "/products/sensors",
  "/filtration": "/products/filtration",
  "/water-treatment": "/products/water-treatment",
  "/handling": "/products/handling",
  "/lubrication": "/products/lubrication-systems",
  "/lubrication-systems": "/products/lubrication-systems",
  "/spm": "/products/spm",

  // Legacy route aliases
  "/product": "/products",
  "/catalog": "/products",
  "/products/water": "/products/water-treatment",
  "/products/material-handling": "/products/handling",
  "/products/lubrication": "/products/lubrication-systems",
  "/products-details": "/products",
  "/product-details": "/products",

  // Legacy blog aliases
  "/blog": "/blogs",
  "/articles": "/blogs",
  "/insights": "/blogs",

  // Legal aliases
  "/privacy": "/privacy-policy",
  "/terms": "/terms-of-service",
};

const PRODUCT_SLUG_MAP = new Map<string, string>();

ALL_PRODUCTS.forEach((p) => {
  PRODUCT_SLUG_MAP.set(p.slug.toLowerCase(), p.path);
  const nameSlug = p.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  if (!PRODUCT_SLUG_MAP.has(nameSlug)) {
    PRODUCT_SLUG_MAP.set(nameSlug, p.path);
  }
});

export function resolveLegacyRedirect(pathname: string, search: string): string | null {
  const cleanPath = pathname === "" ? "/" : pathname.replace(/\/+$/, "") || "/";

  // 1. Check query parameter modal / bookmark legacy links (?product=xyz or ?id=xyz)
  if (search) {
    const params = new URLSearchParams(search);
    const productParam = params.get("product") || params.get("id") || params.get("item");
    if (productParam) {
      const match = PRODUCT_SLUG_MAP.get(productParam.toLowerCase().trim());
      if (match) {
        return match;
      }
    }

    const categoryParam = params.get("category");
    if (categoryParam) {
      const catKey = categoryParam.toLowerCase().trim();
      if (["sensors", "filtration", "water-treatment", "handling", "lubrication-systems", "spm"].includes(catKey)) {
        return `/products/${catKey}`;
      }
    }
  }

  // 2. Check static path mapping
  if (STATIC_REDIRECTS[cleanPath]) {
    return STATIC_REDIRECTS[cleanPath];
  }

  // 3. Normalization of trailing slashes (except root)
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return cleanPath;
  }

  return null;
}
