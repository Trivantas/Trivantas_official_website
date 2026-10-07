import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_CARD, SITE_ORIGIN } from "./siteConfig";
import type { PageSeoConfig } from "./types";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function applyPageSeo(config: PageSeoConfig, jsonLdBlocks: object[] = []) {
  const canonical = `${SITE_ORIGIN}${config.path === "/" ? "" : config.path}`;
  document.title = config.title;

  upsertMeta("name", "description", config.description);
  upsertLink("canonical", canonical);

  const robots = config.noindex ? "noindex, nofollow" : "index, follow";
  upsertMeta("name", "robots", robots);

  upsertMeta("property", "og:title", config.title);
  upsertMeta("property", "og:description", config.description);
  upsertMeta("property", "og:type", config.ogType ?? "website");
  upsertMeta("property", "og:url", canonical);
  upsertMeta("property", "og:image", DEFAULT_OG_IMAGE);

  upsertMeta("name", "twitter:card", DEFAULT_TWITTER_CARD);
  upsertMeta("name", "twitter:title", config.title);
  upsertMeta("name", "twitter:description", config.description);
  upsertMeta("name", "twitter:image", DEFAULT_OG_IMAGE);

  document.querySelectorAll('script[id^="seo-jsonld-"]').forEach((node) => node.remove());
  jsonLdBlocks.forEach((block, index) => {
    upsertJsonLd(`seo-jsonld-${index}`, block);
  });
}
