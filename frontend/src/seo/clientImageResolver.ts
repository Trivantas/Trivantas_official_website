import { getProductImageSrc, getCategoryHeroSlides } from "@/data/categoryAssets";
import { getBlogPostById } from "@/data/blogs";
import { getProductByPath } from "@/seo/productIndex";
import { pageContent } from "@/data/pageContent";
import { DEFAULT_OG_IMAGE, SITE_ORIGIN } from "./siteConfig";

function toAbsoluteUrl(src?: string): string {
  if (!src) return DEFAULT_OG_IMAGE;
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  const clean = src.startsWith("/") ? src : `/${src}`;
  return `${SITE_ORIGIN}${clean}`;
}

export function resolveClientOgImage(pathname: string): string {
  const path = pathname === "" ? "/" : pathname.replace(/\/+$/, "") || "/";

  // 1. Product detail page
  const product = getProductByPath(path);
  if (product) {
    const src = getProductImageSrc(product.item, product.categorySlug);
    return toAbsoluteUrl(src);
  }

  // 2. Category page
  if (path.startsWith("/products/")) {
    const category = path.slice("/products/".length).split("/")[0];
    if (pageContent[category]) {
      const slides = getCategoryHeroSlides(category);
      if (slides.length > 0 && slides[0]) {
        return toAbsoluteUrl(slides[0]);
      }
    }
  }

  // 3. Blog post detail page
  if (path.startsWith("/blogs/")) {
    const id = path.slice("/blogs/".length).split("/")[0];
    const blog = getBlogPostById(id);
    if (blog && blog.image) {
      return toAbsoluteUrl(blog.image);
    }
  }

  return DEFAULT_OG_IMAGE;
}
