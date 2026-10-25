/**
 * Post-build QA: prerender shell count, sitemap parity, unique titles on priority routes.
 * Run: npm run build && node scripts/verify-seo-shells.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const frontendRoot = path.join(__dirname, "..");
const distDir = path.join(frontendRoot, "dist");

const PRIORITY_TITLE_ROUTES = [
  "/",
  "/about",
  "/schedule",
  "/flipbook",
  "/blogs",
  "/privacy-policy",
  "/terms-of-service",
  "/products/water-treatment",
  "/blogs/ultrasonic-level-sensors",
];

function routeToDistRelative(routePath) {
  if (routePath === "/") return "index.html";
  return path.join(routePath.slice(1), "index.html");
}

function readTitle(html) {
  const m = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  return m ? m[1].trim() : null;
}

function countShells(dir, acc = 0) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) acc = countShells(full, acc);
    else if (entry.name === "index.html" && full !== path.join(distDir, "index.html")) acc += 1;
  }
  return acc;
}

function loadExpectedIndexableCount() {
  const manifest = path.join(frontendRoot, "vercel.indexable-manifest.json");
  if (fs.existsSync(manifest)) {
    return JSON.parse(fs.readFileSync(manifest, "utf8")).indexablePathCount;
  }
  const sitemap = path.join(distDir, "sitemap.xml");
  if (!fs.existsSync(sitemap)) return null;
  return (fs.readFileSync(sitemap, "utf8").match(/<loc>/g) || []).length;
}

const errors = [];

if (!fs.existsSync(distDir)) {
  console.error("❌ dist/ missing — run npm run build first.");
  process.exit(1);
}

const expected = loadExpectedIndexableCount();
const sitemapPath = path.join(distDir, "sitemap.xml");
const sitemapLocs = fs.existsSync(sitemapPath)
  ? (fs.readFileSync(sitemapPath, "utf8").match(/<loc>/g) || []).length
  : 0;

const rootIndex = path.join(distDir, "index.html");
const nestedShells = countShells(distDir, 0);
const totalIndexHtml =
  nestedShells + (fs.existsSync(rootIndex) ? 1 : 0);

if (expected != null && totalIndexHtml !== expected) {
  errors.push(
    `HTML shell count ${totalIndexHtml} !== expected indexable ${expected} (nested=${nestedShells} + root)`,
  );
}
if (expected != null && sitemapLocs !== expected) {
  errors.push(`Sitemap loc count ${sitemapLocs} !== expected ${expected}`);
}

const titles = new Map();
for (const route of PRIORITY_TITLE_ROUTES) {
  const rel = routeToDistRelative(route);
  const filePath = path.join(distDir, rel);
  if (!fs.existsSync(filePath)) {
    errors.push(`Missing prerender shell for priority route: ${route}`);
    continue;
  }
  const title = readTitle(fs.readFileSync(filePath, "utf8"));
  if (!title) {
    errors.push(`Missing <title> for ${route}`);
    continue;
  }
  if (titles.has(title)) {
    errors.push(`Duplicate title "${title}" on ${route} and ${titles.get(title)}`);
  } else {
    titles.set(title, route);
  }
  if (route === "/about" && !title.toLowerCase().includes("about")) {
    errors.push(`/about title does not mention About: ${title}`);
  }
}

if (errors.length) {
  console.error("❌ verify-seo-shells failed:");
  errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}

console.info(
  `✅ verify-seo-shells: ${totalIndexHtml} shells, sitemap ${sitemapLocs} URLs, ${PRIORITY_TITLE_ROUTES.length} priority titles unique.`,
);
