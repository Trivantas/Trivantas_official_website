/**
 * Regenerates SPA rewrite allowlist semantics for frontend/vercel.json:
 * - Admin routes → index.html (no prerender shell)
 * - All indexable marketing URLs → static dist shells (filesystem; no rewrite)
 * - Unknown paths (invalid category/product slugs, junk URLs) → platform 404 (no catch-all SPA)
 *
 * Run: node scripts/generate-vercel-rewrites.mjs
 * Invoked automatically after `vite build` via prerenderPlugin closeBundle hook.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const frontendRoot = path.join(__dirname, "..");
const vercelPath = path.join(frontendRoot, "vercel.json");
const repoRoot = path.join(frontendRoot, "..");
const rootVercelPath = path.join(repoRoot, "vercel.json");

const JSON_PRODUCT_FILES = [
  "sensors.json",
  "filtration.json",
  "handling.json",
  "water-treatment.json",
  "lubrication.json",
  "spare-parts.json",
  "spm.json",
];

function loadIndexablePaths() {
  const pageContentPath = path.join(frontendRoot, "src", "data", "pageContent.ts");
  const pageContentSrc = fs.readFileSync(pageContentPath, "utf8");
  const pageContentBlock = pageContentSrc.slice(pageContentSrc.indexOf("export const pageContent"));
  const categoryKeys = [
    ...pageContentBlock.matchAll(/^\s{4}(?:"([^"]+)"|(\w[\w-]*)):\s*\{/gm),
  ].map((m) => m[1] || m[2]);

  const paths = new Set([
    "/",
    "/about",
    "/products",
    "/contact",
    "/blogs",
    "/schedule",
    "/flipbook",
    "/privacy-policy",
    "/terms-of-service",
  ]);

  for (const cat of categoryKeys) {
    paths.add(`/products/${cat}`);
  }

  for (const file of JSON_PRODUCT_FILES) {
    const slug = file === "lubrication.json" ? "lubrication-systems" : file.replace(".json", "");
    const data = JSON.parse(
      fs.readFileSync(path.join(frontendRoot, "src", "data", file), "utf8"),
    );
    for (const item of data) {
      paths.add(`/products/${slug}/${item.id}`);
    }
  }

  const blogIds = [
    "industrial-water-oil-coolant-recycling",
    "ultrasonic-level-sensors",
    "fuel-level-transmitter",
  ];
  for (const id of blogIds) {
    paths.add(`/blogs/${id}`);
  }

  return { paths: [...paths].sort(), categoryKeys };
}

function buildSpaRewrites() {
  return [
    {
      source: "/robots.txt",
      has: [
        {
          type: "host",
          value: "^(?!www\\.trivantas\\.com$|trivantas\\.com$).*$",
        },
      ],
      destination: "/robots-staging.txt",
    },
    { source: "/admin/login", destination: "/index.html" },
    { source: "/admin", destination: "/index.html" },
  ];
}

function patchFrontendVercel(indexableCount, categoryKeys) {
  const config = JSON.parse(fs.readFileSync(vercelPath, "utf8"));
  config.rewrites = buildSpaRewrites();
  if (!config.cleanUrls) config.cleanUrls = true;
  if (config.trailingSlash !== false) config.trailingSlash = false;

  const hadCatchAllSpa = (config.rewrites || []).some(
    (r) => r.source === "/(.*)" && r.destination === "/index.html",
  );
  fs.writeFileSync(vercelPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");

  const manifestPath = path.join(frontendRoot, "vercel.indexable-manifest.json");
  fs.writeFileSync(
    manifestPath,
    `${JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        indexablePathCount: indexableCount,
        validProductCategorySlugs: categoryKeys,
        invalidCategoryBehavior:
          "HTTP 404 at edge when no dist shell exists (no SPA catch-all rewrite to index.html)",
        adminSpaRewrites: ["/admin", "/admin/login"],
      },
      null,
      2,
    )}\n`,
    "utf8",
  );

  return hadCatchAllSpa;
}

function patchRootVercel() {
  if (!fs.existsSync(rootVercelPath)) return;
  const config = JSON.parse(fs.readFileSync(rootVercelPath, "utf8"));
  config.rewrites = [
    { source: "/admin/login", destination: "/index.html" },
    { source: "/admin", destination: "/index.html" },
  ];
  fs.writeFileSync(rootVercelPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");
}

const { paths, categoryKeys } = loadIndexablePaths();
const removedCatchAll = patchFrontendVercel(paths.length, categoryKeys);
patchRootVercel();

console.info(
  `[generate-vercel-rewrites] Indexable paths: ${paths.length}; valid categories: ${categoryKeys.join(", ")}`,
);
if (removedCatchAll) {
  console.info(
    "[generate-vercel-rewrites] Removed catch-all SPA rewrite — invalid /products/{category} slugs return HTTP 404 when no static shell exists.",
  );
}
console.info("[generate-vercel-rewrites] Updated frontend/vercel.json and root vercel.json (admin SPA only).");
