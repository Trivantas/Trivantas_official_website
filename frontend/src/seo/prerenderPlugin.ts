import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import type { Plugin } from "vite";

const pluginDir = path.dirname(fileURLToPath(import.meta.url));

function routeToDistRelative(routePath: string): string {
  if (routePath === "/") {
    return "index.html";
  }
  return path.join(routePath.slice(1), "index.html");
}

function generateSitemapXml(paths: readonly string[], siteOrigin: string): string {
  const today = new Date().toISOString().split("T")[0];

  const getPriority = (routePath: string): string => {
    if (routePath === "/") return "1.0";
    if (routePath === "/products" || routePath === "/about" || routePath === "/contact") return "0.9";
    if (routePath.startsWith("/products/")) return "0.8";
    if (routePath === "/blogs" || routePath.startsWith("/blogs/")) return "0.7";
    return "0.6";
  };

  const urls = paths
    .map((routePath) => {
      const loc = `${siteOrigin}${routePath === "/" ? "/" : routePath}`;
      const priority = getPriority(routePath);
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function seoPrerenderPlugin(): Plugin {
  return {
    name: "trivantas-seo-prerender",
    apply: "build",
    async closeBundle() {
      const { injectSeoIntoHtml } = await import("./injectSeoIntoHtml");
      const { INDEXABLE_PATHS, resolvePageSeo } = await import("./routeSeo");
      const { jsonLdForPath } = await import("./structuredData");
      const { SITE_ORIGIN } = await import("./siteConfig");
      const { renderPrerenderBody } = await import("./prerenderBody");

      const outDir = path.resolve(pluginDir, "../../dist");
      const rootHtmlPath = path.join(outDir, "index.html");
      if (!fs.existsSync(rootHtmlPath)) {
        console.warn("[seo-prerender] dist/index.html missing, skipping.");
        return;
      }
      const template = fs.readFileSync(rootHtmlPath, "utf8");

      // 1. Prerender HTML shells for all canonical routes
      for (const routePath of INDEXABLE_PATHS) {
        const config = resolvePageSeo(routePath);
        const jsonLd = jsonLdForPath(routePath);
        const bodyMarkup = renderPrerenderBody(routePath);
        const html = injectSeoIntoHtml(template, config, jsonLd, bodyMarkup);
        const relative = routeToDistRelative(routePath);
        const target = path.join(outDir, relative);
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, html, "utf8");
      }
      console.info(`[seo-prerender] Wrote ${INDEXABLE_PATHS.length} HTML shells under dist/`);

      // 2. Generate automated sitemap.xml
      const sitemapXml = generateSitemapXml(INDEXABLE_PATHS, SITE_ORIGIN);
      const distSitemapPath = path.join(outDir, "sitemap.xml");
      fs.writeFileSync(distSitemapPath, sitemapXml, "utf8");

      const publicDir = path.resolve(pluginDir, "../../public");
      const publicSitemapPath = path.join(publicDir, "sitemap.xml");
      if (fs.existsSync(publicDir)) {
        fs.writeFileSync(publicSitemapPath, sitemapXml, "utf8");
      }
      console.info(`[seo-prerender] Wrote automated sitemap.xml with ${INDEXABLE_PATHS.length} URLs`);
    },
  };
}