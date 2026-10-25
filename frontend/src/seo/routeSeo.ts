import { pageContent } from "../data/pageContent";
import {
  ALL_PRODUCTS,
  BLOG_ENTRIES,
  getProductByPath,
  getBlogByPath,
} from "./productIndex";
import type { PageSeoConfig } from "./types";

const BRAND = "Trivantas";

function truncate(text: string, max: number): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trim()}…`;
}

const staticRoutes: Record<string, Omit<PageSeoConfig, "path">> = {
  "/": {
    title: `${BRAND} | Industrial Equipment & Automation Supplier`,
    description:
      "Trivantas industrial equipment: smart level sensors, filtration, water treatment plants, material handling, lubrication systems, and special purpose machines. B2B quotes and engineering support.",
  },
  "/about": {
    title: `About ${BRAND} | Industrial Solutions Partner`,
    description:
      "Learn about Trivantas — over seven years delivering industrial sensors, filtration, handling, and automation solutions for manufacturing and process industries.",
  },
  "/products": {
    title: `Industrial Product Catalog | ${BRAND}`,
    description:
      "Browse the Trivantas industrial product catalog: level sensors, filtration, water treatment, chip conveyors and material handling, lubrication, and SPM machines.",
  },
  "/contact": {
    title: `Contact ${BRAND} | Request a Quote`,
    description:
      "Contact Trivantas for B2B industrial equipment quotes, technical inquiries, and project consultations. Sales and engineering teams respond to India and export requests.",
  },
  "/blogs": {
    title: `Industrial Insights & Articles | ${BRAND}`,
    description:
      "Articles on filtration, coolant management, and industrial best practices from the Trivantas team.",
  },
  "/schedule": {
    title: `Schedule a Meeting | ${BRAND}`,
    description:
      "Book a consultation with Trivantas to discuss sensors, filtration, handling, or custom industrial solutions.",
  },
  "/flipbook": {
    title: `Company Flipbook | ${BRAND}`,
    description: "Browse the Trivantas digital flipbook — company overview and industrial capabilities.",
    noindex: false,
  },
  "/privacy-policy": {
    title: `Privacy Policy | ${BRAND}`,
    description:
      "Trivantas Privacy Policy: How we protect, manage, and safeguard client engineering data, technical specifications, RFQ proposals, and commercial confidentiality.",
    noindex: false,
  },
  "/terms-of-service": {
    title: `Terms of Service | ${BRAND}`,
    description:
      "Trivantas Terms of Service: Standard commercial terms governing website use, equipment quotations, custom engineering specifications, and hardware procurement.",
    noindex: false,
  },
  "/admin": {
    title: `Admin | ${BRAND}`,
    description: "Internal administration.",
    noindex: true,
  },
  "/admin/login": {
    title: `Admin Login | ${BRAND}`,
    description: "Internal administration login.",
    noindex: true,
  },
};

const CATEGORY_PATHS = new Set(Object.keys(pageContent));

export function resolvePageSeo(pathname: string, ogImage?: string): PageSeoConfig {
  const path = pathname === "" ? "/" : pathname.replace(/\/+$/, "") || "/";

  // 1. Check for specific product detail page (/products/:category/:slug)
  const product = getProductByPath(path);
  if (product) {
    return {
      path,
      title: `${product.name} | ${product.categoryName} | ${BRAND}`,
      description: truncate(product.description, 160),
      ogType: "product",
      ogImage,
      noindex: false,
    };
  }

  // 2. Check for category listing page (/products/:category)
  if (path.startsWith("/products/")) {
    const segments = path.slice("/products/".length).split("/").filter(Boolean);
    if (segments.length === 1 && CATEGORY_PATHS.has(segments[0])) {
      const content = pageContent[segments[0]];
      return {
        path,
        title: `${content.title} | ${BRAND}`,
        description: truncate(content.description, 160),
        ogType: "website",
        ogImage,
        noindex: false,
      };
    }
    return {
      path,
      title: `Products | ${BRAND}`,
      description: staticRoutes["/products"].description,
      ogImage,
      noindex: true,
    };
  }

  // 3. Check for blog post page (/blogs/:id)
  const blog = getBlogByPath(path);
  if (blog) {
    return {
      path,
      title: `${blog.title} | ${BRAND}`,
      description: truncate(blog.excerpt, 160),
      ogType: "article",
      ogImage,
      noindex: false,
    };
  }

  // 4. Static defined routes
  const staticConfig = staticRoutes[path];
  if (staticConfig) {
    return {
      ...staticConfig,
      path,
      ogImage: ogImage ?? staticConfig.ogImage,
    };
  }

  // 5. Catch-all not found
  return {
    path,
    title: `Page Not Found | ${BRAND}`,
    description: "The requested page could not be found.",
    noindex: true,
  };
}

export const INDEXABLE_PATHS: readonly string[] = [
  "/",
  "/about",
  "/products",
  ...Array.from(CATEGORY_PATHS).map((id) => `/products/${id}`),
  ...ALL_PRODUCTS.map((p) => p.path),
  "/contact",
  "/blogs",
  ...BLOG_ENTRIES.map((b) => b.path),
  "/schedule",
  "/flipbook",
  "/privacy-policy",
  "/terms-of-service",
];

