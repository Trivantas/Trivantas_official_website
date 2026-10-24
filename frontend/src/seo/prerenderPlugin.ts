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
      const { SITE_ORIGIN, DEFAULT_OG_IMAGE } = await import("./siteConfig");
      const { renderPrerenderBody } = await import("./prerenderBody");
      const { getImageCandidatesForPath } = await import("./imageKeys");

      const outDir = path.resolve(pluginDir, "../../dist");
      const rootHtmlPath = path.join(outDir, "index.html");
      if (!fs.existsSync(rootHtmlPath)) {
        console.warn("[seo-prerender] dist/index.html missing, skipping.");
        return;
      }
      const template = fs.readFileSync(rootHtmlPath, "utf8");

      // Index emitted assets in dist/assets to resolve exact fingerprinted image URLs
      const assetsDir = path.join(outDir, "assets");
      const assetFiles = fs.existsSync(assetsDir)
        ? fs.readdirSync(assetsDir).filter((f) => /\.(png|jpe?g|webp|svg)$/i.test(f))
        : [];

      const resolveAssetUrl = (candidates: string[]): string | undefined => {
        for (const targetBase of candidates) {
          const norm = targetBase.toLowerCase().replace(/[\s_]+/g, "-");
          const match = assetFiles.find((f) => {
            const fNorm = f.toLowerCase().replace(/[\s_]+/g, "-");
            return fNorm.startsWith(norm + "-") || fNorm.startsWith(norm + ".");
          });
          if (match) {
            return `${SITE_ORIGIN}/assets/${match}`;
          }
        }
        return undefined;
      };

      // 1. Prerender HTML shells for all canonical routes
      for (const routePath of INDEXABLE_PATHS) {
        const candidates = getImageCandidatesForPath(routePath);
        const ogImage = resolveAssetUrl(candidates) || DEFAULT_OG_IMAGE;
        const config = resolvePageSeo(routePath, ogImage);
        const jsonLd = jsonLdForPath(routePath, ogImage);
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

      // 3. BUILD-TIME SEO QUALITY GATES (Audit Item 4.18)
      // Enforce zero missing pages, valid sitemap parity, and canonical integrity.
      const { ALL_PRODUCTS, BLOG_ENTRIES } = await import("./productIndex");
      const qualityErrors: string[] = [];

      // Gate A: Fail build if sitemap URL count != indexable URL count in code
      const sitemapMatches = sitemapXml.match(/<loc>(.*?)<\/loc>/g) || [];
      if (sitemapMatches.length !== INDEXABLE_PATHS.length) {
        qualityErrors.push(
          `Sitemap URL count mismatch: sitemap.xml has ${sitemapMatches.length} URLs, but code defines ${INDEXABLE_PATHS.length} indexable paths.`
        );
      }

      // Gate B: Fail build if any product in catalog lacks a generated HTML shell or canonical tag
      for (const product of ALL_PRODUCTS) {
        const productRelative = routeToDistRelative(product.path);
        const productHtmlPath = path.join(outDir, productRelative);
        if (!fs.existsSync(productHtmlPath)) {
          qualityErrors.push(`Missing product HTML shell on disk: ${product.path} (expected at ${productRelative})`);
        } else {
          const content = fs.readFileSync(productHtmlPath, "utf8");
          const expectedCanonical = `${SITE_ORIGIN}${product.path}`;
          if (!content.includes(expectedCanonical)) {
            qualityErrors.push(`Product HTML lacks canonical tag "${expectedCanonical}": ${product.path}`);
          }
        }
      }

      // Gate C: Fail build if any blog entry lacks a generated HTML shell or canonical tag
      for (const blog of BLOG_ENTRIES) {
        const blogRelative = routeToDistRelative(blog.path);
        const blogHtmlPath = path.join(outDir, blogRelative);
        if (!fs.existsSync(blogHtmlPath)) {
          qualityErrors.push(`Missing blog HTML shell on disk: ${blog.path} (expected at ${blogRelative})`);
        } else {
          const content = fs.readFileSync(blogHtmlPath, "utf8");
          const expectedCanonical = `${SITE_ORIGIN}${blog.path}`;
          if (!content.includes(expectedCanonical)) {
            qualityErrors.push(`Blog HTML lacks canonical tag "${expectedCanonical}": ${blog.path}`);
          }
        }
      }

      // Gate D: If any Quality Gate fails, ABORT AND FAIL THE BUILD
      if (qualityErrors.length > 0) {
        console.error("\n❌ [seo-quality-gate] BUILD FAILED due to SEO Quality Gate violations:");
        qualityErrors.forEach((err) => console.error(`  - ${err}`));
        console.error("\nDeploy blocked: fix the above errors before shipping to production.\n");
        throw new Error(`[seo-quality-gate] Build aborted with ${qualityErrors.length} SEO quality violations.`);
      }

      console.info(
        `✅ [seo-quality-gate] Passed all build-time SEO quality gates (Sitemap: ${sitemapMatches.length}, Products: ${ALL_PRODUCTS.length}, Shells: ${INDEXABLE_PATHS.length})`
      );
    },
  };
}