import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const csvPath = path.join(root, "..", "seo-local", "research", "keyword_url_map_v1.csv");
const piPath = path.join(root, "src", "seo", "productIndex.ts");

const csv = fs.readFileSync(csvPath, "utf8").trim().split(/\r?\n/).slice(1);
const paths = csv.map((l) => {
  const cols = l.split(",");
  const u = cols[3];
  return new URL(u).pathname;
});

const pi = fs.readFileSync(piPath, "utf8");
const approved = [...pi.matchAll(/"(\/products\/[^"]+)":/g)].map((m) => m[1]);

const jsonFiles = [
  "sensors.json",
  "filtration.json",
  "handling.json",
  "water-treatment.json",
  "lubrication.json",
  "spm.json",
];
const productPaths = new Set();
for (const f of jsonFiles) {
  const data = JSON.parse(fs.readFileSync(path.join(root, "src", "data", f), "utf8"));
  const slug = f.replace(".json", "");
  for (const item of data) {
    productPaths.add(`/products/${slug}/${item.id}`);
  }
}

console.log("CSV URL count:", paths.length);
console.log("Approved description keys:", approved.length);

const productCsv = paths.filter((p) => p.startsWith("/products/") && p.split("/").filter(Boolean).length === 3);
console.log("CSV product detail URLs:", productCsv.length);

const missingApproved = productCsv.filter((p) => !approved.includes(p));
const missingJson = productCsv.filter((p) => !productPaths.has(p));
console.log("CSV products missing from APPROVED:", missingApproved);
console.log("CSV products missing from JSON ids:", missingJson);

const blogCsv = paths.filter((p) => p.startsWith("/blogs/"));
const blogExcerpt = [...pi.matchAll(/path: "(\/blogs\/[^"]+)"[\s\S]*?excerpt:\s*\n\s*"([^"]+)"/g)];

console.log("\nBlog CSV paths:", blogCsv);

let failed = false;
if (missingApproved.length) {
  console.error("FAIL: CSV products missing APPROVED_KEYWORD_DESCRIPTIONS:", missingApproved);
  failed = true;
}
if (missingJson.length) {
  console.error("FAIL: CSV products missing catalog JSON ids:", missingJson);
  failed = true;
}
if (productCsv.length !== approved.length) {
  console.error(
    `FAIL: expected ${productCsv.length} approved SKU keys, found ${approved.length}`,
  );
  failed = true;
}

if (failed) process.exit(1);
console.log("\nOK: keyword map v1 paths align with productIndex + catalog JSON.");
