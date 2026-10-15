import {
  WATER_TREATMENT_CATALOG,
  WaterTreatmentItem,
  slugify,
  getWaterTreatmentSlug,
  getWaterTreatmentBySlug,
} from '../data/waterTreatmentCatalog';

import stpImg from '@/assets/sewage-treatment-plant.jpg';
import etpImg from '@/assets/effluent-treatment-plants.jpeg';
import chRoAndUfImg from '@/assets/ChROandUF.png';
import waterFiltrationTreatmentsImg from '@/assets/waterfiltrationtreatments.png';
import zldImg from '@/assets/ZLD.jpeg';
import desalinationImg from '@/assets/desalination.jpeg';

export type WaterTreatmentProduct = WaterTreatmentItem;
export { slugify, getWaterTreatmentSlug, getWaterTreatmentBySlug };

export const waterTreatmentImageMap: Record<string, string> = {
  stp: stpImg,
  etp: etpImg,
  membranePlants: chRoAndUfImg,
  mineralWater: waterFiltrationTreatmentsImg,
  zld: zldImg,
  desalination: desalinationImg,
  default: stpImg,
};

/**
 * Resolve product image by imageKey
 */
export function getWaterTreatmentImage(item: WaterTreatmentProduct): string {
  if (item.imageKey && waterTreatmentImageMap[item.imageKey]) {
    return waterTreatmentImageMap[item.imageKey];
  }
  return waterTreatmentImageMap.default;
}

/**
 * Return all water treatment products enriched with slug and image
 */
export function getAllWaterTreatments(): (WaterTreatmentProduct & { slug: string; image: string })[] {
  return WATER_TREATMENT_CATALOG.map((item) => ({
    ...item,
    slug: getWaterTreatmentSlug(item),
    image: getWaterTreatmentImage(item),
  }));
}

/**
 * Get related water treatment plants
 */
export function getRelatedWaterTreatments(
  currentIdOrSlug: string,
  limit: number = 3
): (WaterTreatmentProduct & { slug: string; image: string })[] {
  const all = getAllWaterTreatments();
  const current = getWaterTreatmentBySlug(currentIdOrSlug);

  return all
    .filter((p) => p.id !== current?.id && p.slug !== currentIdOrSlug)
    .slice(0, limit);
}
