import {
  FILTRATION_CATALOG,
  FiltrationItem,
  slugify,
  getFiltrationSlug,
  getFiltrationBySlug,
} from '../data/filtrationCatalog';

import filtrationImg from '@/assets/filtration-system.jpg';
import paperBandFilterImg from '@/assets/paper-band-filter-new.jpeg';
import oilSkimmerImg from '@/assets/oil-skimmer.jpeg';
import magneticSeparatorImg from '@/assets/magnetic-separators-new.jpeg';
import desalinationImg from '@/assets/desalination.jpeg';
import sumpCleanerImg from '@/assets/sump-cleaner.jpeg';
import magBandFilterImg from '@/assets/Mag Band Filter.png';
import centralCoolantImg from '@/assets/central-coolant-filtration.jpeg';
import mobileFilterImg from '@/assets/mobile-type-filters.jpeg';
import pressureBedImg from '@/assets/compact-pressure-bed-filters.png';
import chRoAndUfImg from '@/assets/ChROandUF.png';
import waterFiltrationTreatmentsImg from '@/assets/waterfiltrationtreatments.png';

export type FiltrationProduct = FiltrationItem;
export { slugify, getFiltrationSlug, getFiltrationBySlug };

export const filtrationImageMap: Record<string, string> = {
  magBandFilter: magBandFilterImg,
  centralCoolant: centralCoolantImg,
  magneticSeparator: magneticSeparatorImg,
  paperBand: paperBandFilterImg,
  sumpCleaner: sumpCleanerImg,
  pressureBed: pressureBedImg,
  oilSkimmer: oilSkimmerImg,
  mobileFilter: mobileFilterImg,
  desalination: desalinationImg,
  membranePlants: chRoAndUfImg,
  mineralWater: waterFiltrationTreatmentsImg,
  default: filtrationImg,
};

export const productsWithoutImages = [
  "Fine Mesh Oil Filters",
  "Mineral Water Filtration Plants",
  "Water Purifiers",
  "Reusable Food Oil Filters",
  "High-Temperature Cooking Oil Filtration Units",
  "Compact Band Filters",
  "Individual Machine Coolant Filters",
  "Compact Filters",
  "Oil Recovery Press Units",
  "Chip Wringer Systems",
  "Up-Flow Filters",
  "Self-Cleaning Industrial Filters",
  "Reusable Oil & Coolant Filters",
  "Spare Parts for Filtration Systems (Bags, Paper, Candle, etc.)"
];

/**
 * Check if the product has a specific real image asset
 */
export function hasSpecificImage(item: FiltrationProduct): boolean {
  if (productsWithoutImages.includes(item.name)) return false;
  return !!(item.imageKey && filtrationImageMap[item.imageKey]);
}

/**
 * Resolve product image by its imageKey
 */
export function getFiltrationImage(item: FiltrationProduct): string {
  if (item.imageKey && filtrationImageMap[item.imageKey]) {
    return filtrationImageMap[item.imageKey];
  }
  return filtrationImageMap.default;
}

/**
 * Return all filtration products enriched with slug and resolved image
 */
export function getAllFiltrationProductsWithImages(): (FiltrationProduct & { slug: string; image: string })[] {
  return FILTRATION_CATALOG.map((item) => ({
    ...item,
    slug: getFiltrationSlug(item),
    image: getFiltrationImage(item),
  }));
}

/**
 * Get related filtration products
 */
export function getRelatedFiltrationProducts(
  currentIdOrSlug: string,
  limit: number = 3
): (FiltrationProduct & { slug: string; image: string })[] {
  const all = getAllFiltrationProductsWithImages();
  const current = getFiltrationBySlug(currentIdOrSlug);

  return all
    .filter((p) => p.id !== current?.id && p.slug !== currentIdOrSlug)
    .slice(0, limit);
}
