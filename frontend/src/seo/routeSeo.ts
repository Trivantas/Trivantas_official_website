import { pageContent } from "@/data/pageContent";
import type { PageSeoConfig } from "./types";

const BRAND = "Trivantas";

function truncate(text: string, max: number): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trim()}…`;
}

const staticRoutes: Record<string, Omit<PageSeoConfig, "path">> = {
  "/": {
    title: `${BRAND} | One Stop Industrial Solutions`,
    description:
      "B2B industrial hardware: smart level sensors, filtration, water treatment, material handling, lubrication systems, and SPM machines. Reliable partnerships beyond business.",
  },
  "/about": {
    title: `About ${BRAND} | Industrial Solutions Partner`,
    description:
      "Learn about Trivantas — over seven years delivering industrial sensors, filtration, handling, and automation solutions for manufacturing and process industries.",
  },
  "/products": {
    title: `Industrial Products & Equipment | ${BRAND}`,
    description:
      "Explore Trivantas product categories: smart level sensors, advanced filtration, water treatment, material handling, lubrication systems, and special-purpose machines.",
  },
  "/contact": {
    title: `Contact ${BRAND} | Request a Quote`,
    description:
      "Contact Trivantas for industrial equipment inquiries, quotations, and technical support. Sales and engineering teams ready to assist.",
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

export function resolvePageSeo(pathname: string): PageSeoConfig {
  const path = pathname === "" ? "/" : pathname.replace(/\/+$/, "") || "/";

  if (path.startsWith("/products/")) {
    const slug = path.slice("/products/".length).split("/")[0];
    if (slug && CATEGORY_PATHS.has(slug)) {
      const content = pageContent[slug];
      return {
        path,
        title: `${content.title} | ${BRAND}`,
        description: truncate(content.description, 160),
      };
    }
    return {
      path,
      title: `Products | ${BRAND}`,
      description: staticRoutes["/products"].description,
      noindex: true,
    };
  }

  const staticConfig = staticRoutes[path];
  if (staticConfig) {
    return { ...staticConfig, path };
  }

  return {
    path,
    title: `Page Not Found | ${BRAND}`,
    description: "The requested page could not be found.",
    noindex: true,
  };
}

export const INDEXABLE_PATHS = [
  "/",
  "/about",
  "/products",
  ...Array.from(CATEGORY_PATHS).map((id) => `/products/${id}`),
  "/contact",
  "/blogs",
  "/schedule",
  "/flipbook",
] as const;
