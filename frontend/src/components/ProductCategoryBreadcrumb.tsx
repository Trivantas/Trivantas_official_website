import { Link } from "react-router-dom";
import { productCategoryBreadcrumbItems } from "@/seo/structuredData";
import { cn } from "@/lib/utils";

type ProductCategoryBreadcrumbProps = {
  categorySlug: string;
  /** Light text for hero overlays; default for sticky bars on light background */
  variant?: "default" | "hero";
  className?: string;
};

export function ProductCategoryBreadcrumb({
  categorySlug,
  variant = "default",
  className,
}: ProductCategoryBreadcrumbProps) {
  const items = productCategoryBreadcrumbItems(categorySlug);
  if (!items?.length) return null;

  const isHero = variant === "hero";
  const linkClass = isHero
    ? "hover:text-white hover:underline"
    : "hover:text-foreground hover:underline";
  const separatorClass = isHero ? "text-white/50" : "text-muted-foreground/60";
  const currentClass = isHero ? "text-white font-semibold" : "text-foreground font-semibold";

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center gap-2 flex-wrap",
        isHero ? "text-xs text-white/70" : "text-xs text-muted-foreground",
        className,
      )}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.path} className="inline-flex items-center gap-2">
            {index > 0 && <span className={separatorClass}>/</span>}
            {isLast ? (
              <span className={currentClass} aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link to={item.path} className={linkClass}>
                {item.name}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
