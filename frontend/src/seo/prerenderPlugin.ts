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

export function seoPrerenderPlugin(): Plugin {
  return {
    name: "trivantas-seo-prerender",
    apply: "build",
    async closeBundle() {
      const { injectSeoIntoHtml } = await import("./injectSeoIntoHtml");
      const { INDEXABLE_PATHS, resolvePageSeo } = await import("./routeSeo");
      const { jsonLdForPath } = await import("./structuredData");

      const outDir = path.resolve(pluginDir, "../../dist");
      const rootHtmlPath = path.join(outDir, "index.html");
      if (!fs.existsSync(rootHtmlPath)) {
        console.warn("[seo-prerender] dist/index.html missing, skipping.");
        return;
      }
      const template = fs.readFileSync(rootHtmlPath, "utf8");

      for (const routePath of INDEXABLE_PATHS) {
        const config = resolvePageSeo(routePath);
        const jsonLd = jsonLdForPath(routePath);
        const html = injectSeoIntoHtml(template, config, jsonLd);
        const relative = routeToDistRelative(routePath);
        const target = path.join(outDir, relative);
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, html, "utf8");
      }

      console.info(`[seo-prerender] Wrote ${INDEXABLE_PATHS.length} HTML shells under dist/`);
    },
  };
}
