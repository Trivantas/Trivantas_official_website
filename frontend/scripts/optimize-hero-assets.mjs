/**
 * Phase 7 — hero/category PNG compression (BLOCKED stub).
 *
 * Safe automated compression requires client approval for visual QA on six category
 * carousels (~820KB–1MB PNGs per slide in categoryAssets.ts). This script does not
 * modify assets until `sharp` is installed and RUN_OPTIMIZE=1 is set.
 *
 * Usage (future): npm install -D sharp && set RUN_OPTIMIZE=1 && node scripts/optimize-hero-assets.mjs
 */
console.info("[optimize-hero-assets] BLOCKED (client QA): category hero PNG pipeline not run.");
console.info(
  "  Rationale: compress/WebP must preserve visible quality; see seo-local/reports/image_seo_audit_v1.md",
);
console.info("  No source files or component import paths were changed in this run.");

if (process.env.RUN_OPTIMIZE === "1") {
  console.error(
    "  RUN_OPTIMIZE=1 set but sharp pipeline is not implemented — add sharp + maxWidth 1920 WebP emit to categoryAssets build step when approved.",
  );
  process.exit(1);
}

process.exit(0);
