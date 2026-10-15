import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_CARD, SITE_ORIGIN } from "./siteConfig";
import type { PageSeoConfig } from "./types";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildSeoHeadMarkup(config: PageSeoConfig, jsonLdBlocks: object[] = []): string {
  const canonical = `${SITE_ORIGIN}${config.path === "/" ? "" : config.path}`;
  const robots = config.noindex ? "noindex, nofollow" : "index, follow";
  const ogType = config.ogType ?? "website";

  const lines = [
    `<title>${escapeHtml(config.title)}</title>`,
    `<meta name="description" content="${escapeHtml(config.description)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<meta property="og:title" content="${escapeHtml(config.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(config.description)}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `<meta property="og:image" content="${escapeHtml(DEFAULT_OG_IMAGE)}" />`,
    `<meta name="twitter:card" content="${DEFAULT_TWITTER_CARD}" />`,
    `<meta name="twitter:title" content="${escapeHtml(config.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(config.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(DEFAULT_OG_IMAGE)}" />`,
  ];

  jsonLdBlocks.forEach((block, index) => {
    lines.push(
      `<script type="application/ld+json" id="seo-jsonld-${index}">${JSON.stringify(block)}</script>`,
    );
  });

  return lines.join("\n    ");
}

const REMOVABLE_HEAD =
  /<title>[\s\S]*?<\/title>\s*|<meta name="description"[\s\S]*?\/?>\s*|<meta name="keywords"[\s\S]*?\/?>\s*|<meta property="og:[^"]+"[\s\S]*?\/?>\s*|<meta name="twitter:[^"]+"[\s\S]*?\/?>\s*|<link rel="canonical"[\s\S]*?\/?>\s*|<meta name="robots"[\s\S]*?\/?>\s*|<script type="application\/ld\+json" id="seo-jsonld-[\s\S]*?<\/script>\s*/gi;

export function injectSeoIntoHtml(html: string, config: PageSeoConfig, jsonLdBlocks: object[] = []): string {
  const seoBlock = buildSeoHeadMarkup(config, jsonLdBlocks);
  let head = html.replace(REMOVABLE_HEAD, "");
  const insertPoint = head.indexOf("</head>");
  if (insertPoint === -1) {
    return html;
  }
  return `${head.slice(0, insertPoint)}    ${seoBlock}\n  ${head.slice(insertPoint)}`;
}
