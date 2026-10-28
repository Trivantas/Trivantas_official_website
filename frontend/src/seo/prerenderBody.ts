import { ALL_PRODUCTS, getProductByPath, getBlogByPath } from "./productIndex";
import { pageContent } from "../data/pageContent";

const BLOG_CONTEXTUAL_LINKS: Record<string, { href: string; label: string }[]> = {
  "ultrasonic-level-sensors": [
    { href: "/products/sensors/ultrasonic-level-sensors", label: "Ultrasonic level sensors" },
    { href: "/products/sensors", label: "Level sensors catalog" },
  ],
  "fuel-level-transmitter": [
    { href: "/products/sensors/fuel-level-transmitters", label: "Fuel level transmitters" },
    { href: "/products/sensors", label: "Industrial level instrumentation" },
  ],
  "industrial-water-oil-coolant-recycling": [
    { href: "/products/filtration", label: "Advanced filtration systems" },
    { href: "/products/water-treatment", label: "Water treatment plants (ETP / STP / ZLD)" },
  ],
};

function blogRelatedLinksHtml(blogId: string): string {
  const links = BLOG_CONTEXTUAL_LINKS[blogId];
  if (!links?.length) return "";
  return `<nav aria-label="Related products" class="mt-8 pt-6 border-t border-border/60">
    <p class="text-sm font-semibold text-foreground mb-3">Related Trivantas solutions</p>
    <ul class="space-y-2 text-sm">
      ${links
        .map(
          (l) =>
            `<li><a href="${l.href}" class="text-primary hover:underline font-medium">${escapeHtml(l.label)}</a></li>`,
        )
        .join("")}
    </ul>
  </nav>`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderPrerenderBody(routePath: string): string | undefined {
  const normalized = routePath === "" ? "/" : routePath.replace(/\/+$/, "") || "/";

  // 1. Product Detail Pages (/products/:category/:slug)
  const product = getProductByPath(normalized);
  if (product) {
    const item = product.item;
    const specs: { label: string; value: string }[] = [];
    if (item.type) specs.push({ label: "Type", value: String(item.type) });
    if (item.range) specs.push({ label: "Range", value: String(item.range) });
    if (item.accuracy) specs.push({ label: "Accuracy", value: String(item.accuracy) });
    if (item.capacity) specs.push({ label: "Capacity", value: String(item.capacity) });
    if (item.efficiency) specs.push({ label: "Efficiency", value: String(item.efficiency) });

    const specsHtml = specs.length > 0
      ? `<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl my-6">
          ${specs.map((s) => `
            <div class="p-3.5 rounded-xl border border-border/60 bg-card/60">
              <span class="block text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">${escapeHtml(s.label)}</span>
              <span class="font-semibold text-foreground text-sm truncate block" title="${escapeHtml(s.value)}">${escapeHtml(s.value)}</span>
            </div>
          `).join("")}
        </div>`
      : "";

    const highlights: string[] = Array.isArray(item.features) && item.features.length > 0
      ? item.features
      : Array.isArray(item.applications) && item.applications.length > 0
        ? item.applications
        : [];

    const highlightsHtml = highlights.length > 0
      ? `<div class="mt-8 pt-6 border-t border-border/60 max-w-3xl">
          <h2 class="text-xl font-bold text-foreground mb-3">${Array.isArray(item.features) && item.features.length > 0 ? "Key Features & Capabilities" : "Industrial Applications"}</h2>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground text-sm list-disc pl-5">
            ${highlights.slice(0, 6).map((h) => `<li class="leading-relaxed">${escapeHtml(h)}</li>`).join("")}
          </ul>
        </div>`
      : "";

    return `
      <div class="min-h-screen bg-background text-foreground flex flex-col">
        <header class="border-b border-border/80 bg-background/95 py-3 px-4 sm:px-8">
          <nav aria-label="Breadcrumb" class="text-xs text-muted-foreground flex items-center gap-2 max-w-7xl mx-auto flex-wrap">
            <a href="/" class="hover:text-foreground hover:underline">Home</a>
            <span>/</span>
            <a href="/products" class="hover:text-foreground hover:underline">Products</a>
            <span>/</span>
            <a href="/products/${escapeHtml(product.categorySlug)}" class="hover:text-foreground hover:underline">${escapeHtml(product.categoryName)}</a>
            <span>/</span>
            <span class="text-foreground font-medium">${escapeHtml(product.name)}</span>
          </nav>
        </header>
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex-grow w-full">
          <div class="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
            ${escapeHtml(product.categoryName)}
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            ${escapeHtml(product.name)}
          </h1>
          <p class="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed mb-6">
            ${escapeHtml(product.description)}
          </p>
          ${specsHtml}
          ${highlightsHtml}
          <div class="mt-8 flex flex-wrap gap-4">
            <a href="/contact" class="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm shadow hover:opacity-95 transition-opacity">
              Request a Quote
            </a>
            <a href="/products/${escapeHtml(product.categorySlug)}" class="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-border bg-card text-foreground font-medium text-sm hover:bg-muted transition-colors">
              Explore ${escapeHtml(product.categoryName)}
            </a>
          </div>
        </main>
      </div>
    `.trim();
  }

  // 2. Category Listing Pages (/products/:category)
  if (normalized.startsWith("/products/")) {
    const categoryKey = normalized.slice("/products/".length).replace(/\/+$/, "");
    const category = pageContent[categoryKey];
    if (category) {
      const groupsHtml = category.productGroups && category.productGroups.length > 0
        ? `<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-5xl">
            ${category.productGroups.map((g) => `
              <div class="p-5 rounded-2xl border border-border/60 bg-card/60">
                <h2 class="text-lg font-bold text-foreground mb-2">${escapeHtml(g.title)}</h2>
                <p class="text-sm text-muted-foreground mb-3">${escapeHtml(g.description)}</p>
                ${g.items && g.items.length > 0 ? `
                  <ul class="text-xs text-muted-foreground space-y-1 list-disc pl-4">
                    ${g.items.slice(0, 4).map((it) => `<li>${escapeHtml(it)}</li>`).join("")}
                  </ul>
                ` : ""}
              </div>
            `).join("")}
          </div>`
        : "";

      const categoryProducts = ALL_PRODUCTS.filter((p) => p.categorySlug === categoryKey);
      const productLinksHtml =
        categoryProducts.length > 0
          ? `<nav aria-label="Products in this category" class="mt-10 pt-6 border-t border-border/60 max-w-3xl">
            <p class="text-sm font-semibold text-foreground mb-3">Product specifications</p>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              ${categoryProducts
                .slice(0, 24)
                .map(
                  (p) =>
                    `<li><a href="${p.path}" class="text-primary hover:underline font-medium">${escapeHtml(p.name)}</a></li>`,
                )
                .join("")}
            </ul>
            ${
              categoryProducts.length > 24
                ? `<p class="text-xs text-muted-foreground mt-3">+ ${categoryProducts.length - 24} additional SKUs in this category.</p>`
                : ""
            }
          </nav>`
          : "";

      return `
        <div class="min-h-screen bg-background text-foreground flex flex-col">
          <header class="border-b border-border/80 bg-background/95 py-3 px-4 sm:px-8">
            <nav aria-label="Breadcrumb" class="text-xs text-muted-foreground flex items-center gap-2 max-w-7xl mx-auto">
              <a href="/" class="hover:text-foreground hover:underline">Home</a>
              <span>/</span>
              <a href="/products" class="hover:text-foreground hover:underline">Products</a>
              <span>/</span>
              <span class="text-foreground font-medium">${escapeHtml(category.title)}</span>
            </nav>
          </header>
          <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex-grow w-full">
            <div class="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              Industrial Catalog
            </div>
            <h1 class="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              ${escapeHtml(category.title)}
            </h1>
            <p class="text-lg text-foreground/80 font-medium max-w-3xl mb-3">
              ${escapeHtml(category.subtitle)}
            </p>
            <p class="text-base text-muted-foreground max-w-3xl leading-relaxed mb-6">
              ${escapeHtml(category.description)}
            </p>
            ${groupsHtml}
            ${productLinksHtml}
            <div class="mt-8 flex gap-4">
              <a href="/contact" class="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm shadow">
                Inquire About Custom Systems
              </a>
            </div>
          </main>
        </div>
      `.trim();
    }
  }

  // 3. Blog Detail Pages (/blogs/:id)
  const blog = getBlogByPath(normalized);
  if (blog) {
    const relatedNav = blogRelatedLinksHtml(blog.id);
    return `
      <div class="min-h-screen bg-background text-foreground flex flex-col">
        <header class="border-b border-border/80 bg-background/95 py-3 px-4 sm:px-8">
          <nav aria-label="Breadcrumb" class="text-xs text-muted-foreground flex items-center gap-2 max-w-7xl mx-auto">
            <a href="/" class="hover:text-foreground hover:underline">Home</a>
            <span>/</span>
            <a href="/blogs" class="hover:text-foreground hover:underline">Articles</a>
            <span>/</span>
            <span class="text-foreground font-medium">${escapeHtml(blog.title)}</span>
          </nav>
        </header>
        <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
          <div class="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
            Industrial Knowledge & Insights
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 leading-tight">
            ${escapeHtml(blog.title)}
          </h1>
          ${blog.date ? `<time class="block text-xs text-muted-foreground mb-6">${escapeHtml(blog.date)}</time>` : ""}
          <p class="text-lg text-muted-foreground leading-relaxed">
            ${escapeHtml(blog.excerpt)}
          </p>
          ${relatedNav}
          <div class="mt-8">
            <a href="/blogs" class="text-primary hover:underline text-sm font-medium">
              &larr; Back to all industrial insights
            </a>
          </div>
        </main>
      </div>
    `.trim();
  }

  // 4. Static core pages - leave root clean to prevent layout flash before hydration
  if (normalized === "/" || normalized === "/about" || normalized === "/contact" || normalized === "/products") {
    return undefined;
  }

  return undefined;
}
