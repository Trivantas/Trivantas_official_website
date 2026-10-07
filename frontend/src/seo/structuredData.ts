import { pageContent } from "@/data/pageContent";
import { SITE_NAME, SITE_ORIGIN } from "./siteConfig";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_ORIGIN,
    logo: `${SITE_ORIGIN}/images/logo.png`,
    sameAs: ["https://www.linkedin.com/company/trivantas/"],
  };
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

export function jsonLdForPath(pathname: string): object[] {
  const blocks: object[] = [organizationSchema()];
  const path = pathname.replace(/\/+$/, "") || "/";

  if (path === "/") {
    blocks.push(webSiteSchema());
    return blocks;
  }

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

  if (path === "/products") {
    blocks.push(
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
      ]),
    );
  }

  return blocks;
}
