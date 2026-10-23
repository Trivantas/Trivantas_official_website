import { pageContent } from "../data/pageContent";
import {
  getProductByPath,
  getBlogByPath,
  CatalogProductEntry,
  BlogEntry,
} from "./productIndex";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "./siteConfig";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_ORIGIN,
    logo: `${SITE_ORIGIN}/images/logo.png`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-7028165428",
        contactType: "sales",
        email: "sales@trivantas.com",
        areaServed: "IN",
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

export function breadcrumbSchema(items: { name: string; path: string }[]) {
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

export function productSchema(product: CatalogProductEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: DEFAULT_OG_IMAGE,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    category: product.categoryName,
  };
}

export function blogPostingSchema(blog: BlogEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    url: `${SITE_ORIGIN}${blog.path}`,
    image: DEFAULT_OG_IMAGE,
    datePublished: blog.date,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_ORIGIN,
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

export function jsonLdForPath(pathname: string): object[] {
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
    blocks.push(productSchema(product));
    return blocks;
  }

  // 3. Category listing page: 3-level BreadcrumbList
  if (path.startsWith("/products/")) {
    const slug = path.slice("/products/".length).split("/")[0];
    const content = slug ? pageContent[slug] : undefined;
    const name = content?.title ?? slug ?? "Products";
    blocks.push(
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: name, path },
      ]),
    );
    return blocks;
  }

  // 4. Products root
  if (path === "/products") {
    blocks.push(
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
      ]),
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
    blocks.push(blogPostingSchema(blog));
    return blocks;
  }

  // 6. Blogs root
  if (path === "/blogs") {
    blocks.push(
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blogs", path: "/blogs" },
      ]),
    );
    return blocks;
  }

  // 7. General static pages (About, Contact, Schedule, Flipbook)
  const staticNames: Record<string, string> = {
    "/about": "About Us",
    "/contact": "Contact Us",
    "/schedule": "Schedule Meeting",
    "/flipbook": "Company Flipbook",
  };
  if (staticNames[path]) {
    blocks.push(
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: staticNames[path], path },
      ]),
    );
  }

  // 8. Contact page: LocalBusiness structured data (Pune & Gujarat branches)
  if (path === "/contact") {
    blocks.push(...localBusinessSchemas());
  }

  return blocks;
}



