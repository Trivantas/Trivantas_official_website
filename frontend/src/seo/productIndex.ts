import sensorsData from "../data/sensors.json";
import filtrationData from "../data/filtration.json";
import waterTreatmentData from "../data/water-treatment.json";
import handlingData from "../data/handling.json";
import lubricationData from "../data/lubrication.json";
import sparePartsData from "../data/spare-parts.json";
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
  { slug: "sensors", name: "Level Sensors", data: sensorsData as RawProductItem[] },
  { slug: "filtration", name: "Advanced Filtration Systems", data: filtrationData as RawProductItem[] },
  { slug: "water-treatment", name: "Water Treatment Plants", data: waterTreatmentData as RawProductItem[] },
  { slug: "handling", name: "Material Handling Systems", data: handlingData as RawProductItem[] },
  { slug: "lubrication-systems", name: "Industrial Lubrication Systems", data: lubricationData as RawProductItem[] },
  { slug: "spare-parts", name: "Industrial Spare Parts", data: sparePartsData as RawProductItem[] },
  { slug: "spm", name: "Special Purpose Machines", data: spmData as RawProductItem[] },
];

/** Client-approved keyword map v1 (25 Oct 2026) — meta descriptions for priority SKUs. */
const APPROVED_KEYWORD_DESCRIPTIONS: Record<string, string> = {
  "/products/sensors/capacitance-level-sensors":
    "Capacitive level sensors and probes for non-contact industrial tank and vessel level measurement. Trivantas configures outputs and materials for your process.",
  "/products/sensors/ultrasonic-level-sensors":
    "Industrial ultrasonic level sensors for non-contact tank level measurement in chemical, water, and process applications. Application support from Trivantas.",
  "/products/sensors/fuel-level-transmitters":
    "Fuel level transmitters for diesel tanks, generators, and mobile equipment. Real-time monitoring and durable industrial transmitters from Trivantas.",
  "/products/sensors/radar-level-sensors":
    "Radar level sensors for bulk solids and demanding tanks—microwave level measurement with minimal maintenance. Spec support from Trivantas.",
  "/products/sensors/electromagnetic-flow-level-sensors":
    "Electromagnetic flow meters and industrial flow level indicators for liquid process lines. Accuracy-focused solutions from Trivantas.",
  "/products/sensors/level-transmitters":
    "Industrial level transmitters with continuous 4–20 mA measurement for tanks and silos. Trivantas matches range and media to your PLC or SCADA.",
  "/products/sensors/vibrating-fork-level-sensors-liquid":
    "Vibrating fork level switches for reliable point level detection in liquids. Rugged industrial switches configured by Trivantas.",
  "/products/water-treatment/sewage-treatment-plant":
    "Sewage treatment plant (STP) systems for municipal and industrial wastewater. Trivantas engineers biology, layout, and compliance for your site.",
  "/products/water-treatment/effluent-treatment-plant":
    "Effluent treatment plant (ETP) solutions for industrial wastewater and process effluent. Designed for discharge norms and recovery where feasible.",
  "/products/water-treatment/ro-uf-system":
    "RO and UF water treatment systems for process water purification and reuse. Membrane plants engineered and commissioned by Trivantas.",
  "/products/water-treatment/water-filtration-system":
    "Industrial water filtration and pre-treatment systems for manufacturing and process water. Sized for flow, particle load, and footprint.",
  "/products/filtration/centralized-coolant-filtration-systems":
    "Centralized coolant filtration for machine shops—multi-machine chip and fluid handling with magnetic and media stages from Trivantas.",
  "/products/filtration/magnetic-separators":
    "Magnetic coolant separators for ferrous chip and fines removal in machining lines. Heavy-duty magnetic separation from Trivantas.",
  "/products/filtration/reusable-oil-coolant-filters":
    "Reusable oil and coolant filtration units for sustainable fluid management and lower disposal costs. Industrial filter systems by Trivantas.",
  "/products/handling/scraper-type-chip-conveyor":
    "Scraper type chip conveyors for CNC and machine tool swarf removal. Centralized or machine-side chip handling from Trivantas.",
  "/products/handling/screw-type-chip-conveyor":
    "Screw type chip conveyors (auger) for metal chips and swarf in production lines. Built for continuous industrial duty.",
  "/products/handling/automated-handling-systems":
    "Automated chip conveying and material handling systems for plant-wide scrap transport. Integration and layout support from Trivantas.",
  "/products/handling/centralized-chip-handling-system":
    "Centralized chip handling systems linking machines to processing or storage. End-to-end conveying concepts engineered by Trivantas.",
};

function buildProductDescription(item: RawProductItem, categoryName: string, path: string): string {
  const approved = APPROVED_KEYWORD_DESCRIPTIONS[path];
  if (approved) {
    return approved;
  }
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
  return `${item.name} — ${categoryName} from Trivantas. Engineered for industrial reliability; contact our team for specifications and B2B quotation.`;
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
        description: buildProductDescription(item, categoryName, `/products/${categorySlug}/${slug}`),
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
      "Industrial water, oil and coolant recycling for sustainable manufacturing—filtration and resource recovery strategies for machining and process plants.",
    path: "/blogs/industrial-water-oil-coolant-recycling",
    date: "2026-08-29",
  },
  {
    id: "ultrasonic-level-sensors",
    title: "How Ultrasonic Level Sensors Solve Modern Industrial Level Challenges",
    excerpt:
      "Ultrasonic level sensors guide: non-contact tank level for chemical plants and water treatment—accuracy, automation, and maintenance benefits.",
    path: "/blogs/ultrasonic-level-sensors",
    date: "2026-07-09",
  },
  {
    id: "fuel-level-transmitter",
    title: "How Fuel Level Transmitters Solve Critical Fuel Monitoring Challenges",
    excerpt:
      "Fuel level transmitter applications for generators, mining, and industrial tanks—real-time fuel monitoring and downtime prevention.",
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
