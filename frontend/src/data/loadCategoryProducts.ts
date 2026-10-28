import type { ProductType } from "@/components/ProductDetailModal";

/** Code-split category catalog JSON — only the active category chunk loads. */
export async function loadCategoryProducts(category: string): Promise<ProductType[]> {
  switch (category) {
    case "sensors":
      return (await import("@/data/sensors.json")).default as ProductType[];
    case "filtration":
      return (await import("@/data/filtration.json")).default as ProductType[];
    case "spm":
      return (await import("@/data/spm.json")).default as ProductType[];
    case "handling":
      return (await import("@/data/handling.json")).default as ProductType[];
    case "water-treatment":
      return (await import("@/data/water-treatment.json")).default as ProductType[];
    case "lubrication-systems":
      return (await import("@/data/lubrication.json")).default as ProductType[];
    case "spare-parts":
      return (await import("@/data/spare-parts.json")).default as ProductType[];
    default:
      return [];
  }
}
