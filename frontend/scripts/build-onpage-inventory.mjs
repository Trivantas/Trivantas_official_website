/**
 * Writes seo-local/reports/full_site_onpage_inventory_v1.csv from routeSeo sources.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const frontendRoot = path.join(__dirname, "..");
const outPath = path.join(
  frontendRoot,
  "..",
  "seo-local",
  "reports",
  "full_site_onpage_inventory_v1.csv",
);

const STATIC_META = {
  "/": { title: "routeSeo.staticRoutes", meta: "routeSeo.staticRoutes" },
  "/about": { title: "routeSeo.staticRoutes", meta: "routeSeo.staticRoutes" },
  "/products": { title: "routeSeo.staticRoutes", meta: "routeSeo.staticRoutes" },
  "/contact": { title: "routeSeo.staticRoutes", meta: "routeSeo.staticRoutes" },
  "/blogs": { title: "routeSeo.staticRoutes", meta: "routeSeo.staticRoutes" },
  "/schedule": { title: "routeSeo.staticRoutes", meta: "routeSeo.staticRoutes" },
  "/flipbook": { title: "routeSeo.staticRoutes", meta: "routeSeo.staticRoutes" },
  "/privacy-policy": { title: "routeSeo.staticRoutes", meta: "routeSeo.staticRoutes" },
  "/terms-of-service": { title: "routeSeo.staticRoutes", meta: "routeSeo.staticRoutes" },
};

function loadPaths() {
  const pageContentSrc = fs.readFileSync(
    path.join(frontendRoot, "src", "data", "pageContent.ts"),
    "utf8",
  );
  const pageContentBlock = pageContentSrc.slice(pageContentSrc.indexOf("export const pageContent"));
  const categoryKeys = [
    ...pageContentBlock.matchAll(/^\s{4}(?:"([^"]+)"|(\w[\w-]*)):\s*\{/gm),
  ].map((m) => m[1] || m[2]);
  const rows = [];

  for (const [pathKey, src] of Object.entries(STATIC_META)) {
    rows.push({
      path: pathKey,
      titleSource: src.title,
      metaSource: src.meta,
      status: "indexable",
    });
  }

  for (const cat of categoryKeys) {
    rows.push({
      path: `/products/${cat}`,
      titleSource: "routeSeo.resolvePageSeo + pageContent.title",
      metaSource: "routeSeo.resolvePageSeo + pageContent.description",
      status: "indexable",
    });
  }

  const files = [
    "sensors.json",
    "filtration.json",
    "handling.json",
    "water-treatment.json",
    "lubrication.json",
    "spm.json",
  ];
  const pi = fs.readFileSync(path.join(frontendRoot, "src", "seo", "productIndex.ts"), "utf8");
  const approved = new Set([...pi.matchAll(/"(\/products\/[^"]+)":/g)].map((m) => m[1]));

  for (const file of files) {
    const slug = file.replace(".json", "");
    const data = JSON.parse(
      fs.readFileSync(path.join(frontendRoot, "src", "data", file), "utf8"),
    );
    for (const item of data) {
      const p = `/products/${slug}/${item.id}`;
      const metaSource = approved.has(p)
        ? "productIndex.APPROVED_KEYWORD_DESCRIPTIONS"
        : "productIndex.buildProductDescription";
      rows.push({
        path: p,
        titleSource: "routeSeo.resolvePageSeo (product.name + categoryName)",
        metaSource,
        status: "indexable",
      });
    }
  }

  const blogs = [
    ["industrial-water-oil-coolant-recycling", "blogs data + routeSeo"],
    ["ultrasonic-level-sensors", "blogs data + routeSeo"],
    ["fuel-level-transmitter", "blogs data + routeSeo"],
  ];
  for (const [id] of blogs) {
    rows.push({
      path: `/blogs/${id}`,
      titleSource: "routeSeo.resolvePageSeo (blog.title)",
      metaSource: "routeSeo.resolvePageSeo (blog.excerpt)",
      status: "indexable",
    });
  }

  return rows.sort((a, b) => a.path.localeCompare(b.path));
}

const rows = loadPaths();
const header = "path,title_source,meta_source,status\n";
const body = rows
  .map((r) => `${r.path},${r.titleSource},${r.metaSource},${r.status}`)
  .join("\n");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, header + body + "\n", "utf8");
console.info(`[build-onpage-inventory] Wrote ${rows.length} rows to ${outPath}`);
