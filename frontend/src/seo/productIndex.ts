import sensorsData from "../data/sensors.json";
import filtrationData from "../data/filtration.json";
import handlingData from "../data/handling.json";
import lubricationData from "../data/lubrication.json";
import waterTreatmentData from "../data/water-treatment.json";
import spmData from "../data/spm.json";

export interface RawProductItem {
  id: string;
  name: string;
  categoryLabel?: string;
  type?: string;
  capacity?: string;
  efficiency?: string;
  features?: string[];
  range?: string;
  accuracy?: string;
  applications?: string[];
  imageKey?: string;
  [key: string]: unknown;
}

export interface CatalogProductEntry {
  categorySlug: string;
  categoryName: string;
  slug: string;
  path: string;
  name: string;
  description: string;
  item: RawProductItem;
}

export interface BlogEntry {
  id: string;
  title: string;
  excerpt: string;
  path: string;
  date?: string;
}

const CATEGORY_DEFINITIONS: {
  slug: string;
  name: string;
  data: RawProductItem[];
}[] = [
  { slug: "sensors", name: "Smart Level Sensors", data: sensorsData as RawProductItem[] },
  { slug: "filtration", name: "Advanced Filtration Systems", data: filtrationData as RawProductItem[] },
  { slug: "handling", name: "Material Handling Systems", data: handlingData as RawProductItem[] },
  { slug: "lubrication-systems", name: "Industrial Lubrication Systems", data: lubricationData as RawProductItem[] },
  { slug: "water-treatment", name: "Water Treatment Plants", data: waterTreatmentData as RawProductItem[] },
  { slug: "spm", name: "Special Purpose Machines", data: spmData as RawProductItem[] },
];

function buildProductDescription(item: RawProductItem, categoryName: string): string {
  const parts: string[] = [];
  if (item.features && item.features.length > 0) {
    parts.push(item.features.slice(0, 3).join(". "));
  } else if (item.applications && item.applications.length > 0) {
    parts.push(`Applications: ${item.applications.slice(0, 4).join(", ")}`);
  }
  if (item.capacity) parts.push(`Capacity: ${item.capacity}`);
  if (item.efficiency) parts.push(`Efficiency: ${item.efficiency}`);
  if (item.accuracy) parts.push(`Accuracy: ${item.accuracy}`);

  const details = parts.join(". ");
  if (details) {
    return `${item.name} by Trivantas - ${details}. Engineered for demanding industrial environments.`;
  }
  return `${item.name} - High-performance ${categoryName.toLowerCase()} solution by Trivantas, engineered for industrial reliability.`;
}

export const ALL_PRODUCTS: CatalogProductEntry[] = CATEGORY_DEFINITIONS.flatMap(
  ({ slug: categorySlug, name: categoryName, data }) =>
    data.map((item) => {
      const slug = item.id;
      return {
        categorySlug,
        categoryName,
        slug,
        path: `/products/${categorySlug}/${slug}`,
        name: item.name,
        description: buildProductDescription(item, categoryName),
        item,
      };
    })
);

const PRODUCT_BY_PATH = new Map<string, CatalogProductEntry>(
  ALL_PRODUCTS.map((p) => [p.path, p])
);

export function getProductByPath(pathname: string): CatalogProductEntry | undefined {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return PRODUCT_BY_PATH.get(normalized);
}

export const BLOG_ENTRIES: BlogEntry[] = [
  {
    id: "industrial-water-oil-coolant-recycling",
    title: "Industrial Water, Oil & Coolant Recycling: A Smarter Approach to Sustainable Manufacturing",
    excerpt:
      "Discover how recycling, filtration and resource recovery solutions for industrial water, oil and coolant enable more efficient and sustainable manufacturing operations.",
    path: "/blogs/industrial-water-oil-coolant-recycling",
    date: "2026-08-29",
  },
  {
    id: "ultrasonic-level-sensors",
    title: "How Ultrasonic Level Sensors Solve Modern Industrial Level Challenges",
    excerpt:
      "From chemical plants to water treatment facilities, discover how non-contact ultrasonic sensing delivers accurate, automated, and maintenance-light level measurement.",
    path: "/blogs/ultrasonic-level-sensors",
    date: "2026-07-09",
  },
  {
    id: "fuel-level-transmitter",
    title: "How Fuel Level Transmitters Solve Critical Fuel Monitoring Challenges",
    excerpt:
      "From diesel generators to mining equipment, discover how Fuel Level Transmitters deliver real-time accuracy, prevent downtime, and automate fuel management across industries.",
    path: "/blogs/fuel-level-transmitter",
    date: "2026-07-09",
  },
];

const BLOG_BY_PATH = new Map<string, BlogEntry>(
  BLOG_ENTRIES.map((b) => [b.path, b])
);

export function getBlogByPath(pathname: string): BlogEntry | undefined {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return BLOG_BY_PATH.get(normalized);
}
