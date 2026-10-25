import { pageContent } from "../data/pageContent";
import {
  getProductByPath,
  getBlogByPath,
  CatalogProductEntry,
  BlogEntry,
} from "./productIndex";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "./siteConfig";

export type BreadcrumbTrailItem = { name: string; path: string };

export function productCategoryBreadcrumbItems(slug: string): BreadcrumbTrailItem[] | null {
  const content = slug ? pageContent[slug as keyof typeof pageContent] : undefined;
  if (!content) return null;
  const path = `/products/${slug}`;
  return [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: content.title.trim(), path },
  ];
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_ORIGIN,
    logo: `${SITE_ORIGIN}/images/logo.png`,
    foundingDate: "2019",
    description: "Trivantas is a premier B2B manufacturer and engineering solutions provider specializing in smart level sensors, industrial filtration systems, water treatment plants, and material handling.",
    knowsAbout: [
      "Smart Level Sensors & Instrumentation",
      "Industrial Coolant & Oil Filtration Systems",
      "Wastewater & Effluent Treatment Plants (ETP / STP / ZLD)",
      "Material Handling & Automated Conveyor Systems",
      "Special Purpose Industrial Machinery (SPM)",
      "Centralized Lubrication Systems",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-7028165428",
        contactType: "sales",
        email: "sales@trivantas.com",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Hindi", "Marathi", "Gujarati"],
      },
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "No. 677, Kanjane Nagar, Ghar society Road, Tal Mulshi, Uravade",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        postalCode: "412115",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "167 & 168 Aadhya 2, Andada",
        addressLocality: "Ankleshwar",
        addressRegion: "Gujarat",
        postalCode: "393002",
        addressCountry: "IN",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/trivantas/",
      "https://www.instagram.com/_trivantas_?igsh=MWVxaG53b3hleXBieg==",
    ],
  };
}

export function localBusinessSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `${SITE_NAME} - Pune Plant`,
      url: SITE_ORIGIN,
      logo: `${SITE_ORIGIN}/images/logo.png`,
      image: `${SITE_ORIGIN}/images/logo.png`,
      telephone: "+91-7028165428",
      email: "sales@trivantas.com",
      priceRange: "$$",
      hasMap: "https://www.google.com/maps/search/?api=1&query=Trivantas,+Kanjane+Nagar,+Ghar+society+Road,+677,+Tal,+Mulshi,+Uravade,+Maharashtra+412115",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 677, Kanjane Nagar, Ghar society Road, Tal Mulshi, Uravade",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        postalCode: "412115",
        addressCountry: "IN",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "13:00",
        },
      ],
      sameAs: [
        "https://www.linkedin.com/company/trivantas/",
        "https://www.instagram.com/_trivantas_?igsh=MWVxaG53b3hleXBieg==",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `${SITE_NAME} - Gujarat Office`,
      url: SITE_ORIGIN,
      logo: `${SITE_ORIGIN}/images/logo.png`,
      image: `${SITE_ORIGIN}/images/logo.png`,
      telephone: "+91-7028165428",
      email: "sales@trivantas.com",
      priceRange: "$$",
      hasMap: "https://www.google.com/maps/search/?api=1&query=167+%26+168+Aadhya+2,+Andada,+Ankleshwar,+Gujarat+393002",
      address: {
        "@type": "PostalAddress",
        streetAddress: "167 & 168 Aadhya 2, Andada",
        addressLocality: "Ankleshwar",
        addressRegion: "Gujarat",
        postalCode: "393002",
        addressCountry: "IN",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "13:00",
        },
      ],
      sameAs: [
        "https://www.linkedin.com/company/trivantas/",
        "https://www.instagram.com/_trivantas_?igsh=MWVxaG53b3hleXBieg==",
      ],
    },
  ];
}



export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_ORIGIN,
  };
}

export function breadcrumbSchema(items: BreadcrumbTrailItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_ORIGIN}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

/** ItemList of product groups on category listing pages (Week 3 JSON-LD). */
function productGroupItemListSchema(slug: string) {
  const content = pageContent[slug as keyof typeof pageContent];
  if (!content?.productGroups?.length) return null;

  const groupItems = content.productGroups.map((group, index) => ({
    "@type": "ListItem" as const,
    position: index + 1,
    name: group.title,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${content.title.trim()} — product groups`,
    numberOfItems: groupItems.length,
    itemListElement: groupItems,
  };
}

/** B2B quote-based catalog — Offer without public price (Google: omit price when not listed). */
function productOfferBlock(product: CatalogProductEntry) {
  const offerUrl = `${SITE_ORIGIN}${product.path}`;
  return {
    "@type": "Offer" as const,
    url: offerUrl,
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
      description: "Contact for quote — pricing provided on request for industrial B2B orders.",
    },
    seller: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_ORIGIN,
    },
  };
}

export function productSchema(product: CatalogProductEntry, imageUrl?: string) {
  const productUrl = `${SITE_ORIGIN}${product.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    url: productUrl,
    image: imageUrl || DEFAULT_OG_IMAGE,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    category: product.categoryName,
    offers: productOfferBlock(product),
  };
}

export function blogPostingSchema(blog: BlogEntry, imageUrl?: string) {
  const published = blog.date || undefined;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    url: `${SITE_ORIGIN}${blog.path}`,
    image: imageUrl || DEFAULT_OG_IMAGE,
    ...(published ? { datePublished: published, dateModified: published } : {}),
    inLanguage: "en",
    author: {
      "@type": "Organization",
      name: "Trivantas Technical Engineering Team",
      url: SITE_ORIGIN,
      sameAs: "https://www.linkedin.com/company/trivantas/",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME, 
      logo: {
        "@type": "ImageObject",
        url: `${SITE_ORIGIN}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_ORIGIN}${blog.path}`,
    },
  };
}

export interface WebPageSchemaOptions {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}

export function webPageSchema(options: WebPageSchemaOptions) {
  const url = `${SITE_ORIGIN}${options.path === "/" ? "" : options.path}`;
  return {
    "@context": "https://schema.org",
    "@type": options.type || "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: options.name,
    description: options.description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      name: SITE_NAME,
      url: SITE_ORIGIN,
    },
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_ORIGIN,
    },
  };
}

export function jsonLdForPath(pathname: string, imageUrl?: string): object[] {
  const blocks: object[] = [organizationSchema()];
  const path = pathname.replace(/\/+$/, "") || "/";

  // 1. Home page
  if (path === "/") {
    blocks.push(webSiteSchema());
    return blocks;
  }

  // 2. Individual product page: 4-level BreadcrumbList + schema.org Product
  const product = getProductByPath(path);
  if (product) {
    blocks.push(
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: product.categoryName, path: `/products/${product.categorySlug}` },
        { name: product.name, path: product.path },
      ]),
    );
    blocks.push(productSchema(product, imageUrl));
    return blocks;
  }

  // 3. Category listing page only (/products/:category) — not invalid or unknown product paths
  if (path.startsWith("/products/")) {
    const segments = path.slice("/products/".length).split("/").filter(Boolean);
    if (segments.length !== 1) {
      return blocks;
    }
    const slug = segments[0];
    const content = pageContent[slug as keyof typeof pageContent];
    if (!content) {
      return blocks;
    }
    const crumbs = productCategoryBreadcrumbItems(slug);
    const name = crumbs?.[2]?.name ?? content.title.trim();
    const desc = content.description ?? `Explore ${name} industrial hardware solutions by ${SITE_NAME}.`;
    if (crumbs) {
      blocks.push(breadcrumbSchema(crumbs));
    }
    blocks.push(
      webPageSchema({
        path,
        name: `${name} | ${SITE_NAME}`,
        description: desc,
        type: "CollectionPage",
      }),
    );
    const groupList = productGroupItemListSchema(slug);
    if (groupList) {
      blocks.push(groupList);
    }
    return blocks;
  }

  // 4. Products root: 2-level BreadcrumbList + CollectionPage schema
  if (path === "/products") {
    blocks.push(
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
      ]),
    );
    blocks.push(
      webPageSchema({
        path: "/products",
        name: `Industrial Products & Equipment | ${SITE_NAME}`,
        description:
          "Explore Trivantas product categories: smart level sensors, advanced filtration, water treatment, material handling, lubrication systems, and special-purpose machines.",
        type: "CollectionPage",
      }),
    );
    return blocks;
  }

  // 5. Individual blog post: 3-level BreadcrumbList + BlogPosting schema
  const blog = getBlogByPath(path);
  if (blog) {
    blocks.push(
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blogs", path: "/blogs" },
        { name: blog.title, path: blog.path },
      ]),
    );
    blocks.push(blogPostingSchema(blog, imageUrl));
    return blocks;
  }

  // 6. Blogs root: 2-level BreadcrumbList + CollectionPage schema
  if (path === "/blogs") {
    blocks.push(
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blogs", path: "/blogs" },
      ]),
    );
    blocks.push(
      webPageSchema({
        path: "/blogs",
        name: `Industrial Insights & Articles | ${SITE_NAME}`,
        description:
          "Articles on filtration, coolant management, and industrial best practices from the Trivantas team.",
        type: "CollectionPage",
      }),
    );
    return blocks;
  }

  // 7. General static pages (About, Contact, Schedule, Flipbook)
  const staticPageConfigs: Record<
    string,
    { name: string; title: string; description: string; type: "WebPage" | "AboutPage" | "ContactPage" }
  > = {
    "/about": {
      name: "About Us",
      title: `About ${SITE_NAME} | Industrial Solutions Partner`,
      description:
        "Learn about Trivantas — over seven years delivering industrial sensors, filtration, handling, and automation solutions for manufacturing and process industries.",
      type: "AboutPage",
    },
    "/contact": {
      name: "Contact Us",
      title: `Contact ${SITE_NAME} | Request a Quote`,
      description:
        "Contact Trivantas for industrial equipment inquiries, quotations, and technical support. Sales and engineering teams ready to assist.",
      type: "ContactPage",
    },
    "/schedule": {
      name: "Schedule Meeting",
      title: `Schedule a Meeting | ${SITE_NAME}`,
      description:
        "Book a consultation with Trivantas to discuss sensors, filtration, handling, or custom industrial solutions.",
      type: "WebPage",
    },
    "/flipbook": {
      name: "Company Flipbook",
      title: `Company Flipbook | ${SITE_NAME}`,
      description: "Browse the Trivantas digital flipbook — company overview and industrial capabilities.",
      type: "WebPage",
    },
    "/privacy-policy": {
      name: "Privacy Policy",
      title: `Privacy Policy | ${SITE_NAME}`,
      description: "Trivantas Privacy Policy: Data protection and confidentiality standards.",
      type: "WebPage",
    },
    "/terms-of-service": {
      name: "Terms of Service",
      title: `Terms of Service | ${SITE_NAME}`,
      description: "Trivantas Terms of Service: Commercial, quotation, and warranty terms.",
      type: "WebPage",
    },
  };

  const staticConfig = staticPageConfigs[path];
  if (staticConfig) {
    blocks.push(
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: staticConfig.name, path },
      ]),
    );
    blocks.push(
      webPageSchema({
        path,
        name: staticConfig.title,
        description: staticConfig.description,
        type: staticConfig.type,
      }),
    );
  }

  // 8. Contact page: LocalBusiness structured data (Pune & Gujarat branches)
  if (path === "/contact") {
    blocks.push(...localBusinessSchemas());
  }

  return blocks;
}



