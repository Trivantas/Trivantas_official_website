import waterTreatmentData from './water-treatment.json';

export interface WaterTreatmentItem {
  id: string;
  categoryLabel?: string;
  name: string;
  capacity?: string;
  efficiency?: string;
  features?: string[];
  icons?: string[];
  imageKey?: string;
  type?: string;
  range?: string;
  accuracy?: string;
  applications?: string[];
  specifications?: Record<string, string | number>;
  imageStyle?: Record<string, string | number>;
  installationSupport?: string[];
  [key: string]: unknown;
}

export const WATER_TREATMENT_CATALOG: WaterTreatmentItem[] = waterTreatmentData as WaterTreatmentItem[];

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function getWaterTreatmentSlug(item: WaterTreatmentItem): string {
  return item.id || slugify(item.name);
}

export function getWaterTreatmentBySlug(slug: string): WaterTreatmentItem | undefined {
  if (!slug) return undefined;
  const target = slug.toLowerCase().trim();

  return WATER_TREATMENT_CATALOG.find((item) => {
    const idMatch = item.id?.toLowerCase() === target;
    const slugifiedIdMatch = slugify(item.id || '') === target;
    const slugifiedNameMatch = slugify(item.name || '') === target;
    const nameMatch = item.name?.toLowerCase() === target;

    return idMatch || slugifiedIdMatch || slugifiedNameMatch || nameMatch;
  });
}

export function getAllWaterTreatmentProducts(): (WaterTreatmentItem & { slug: string })[] {
  return WATER_TREATMENT_CATALOG.map((item) => ({
    ...item,
    slug: getWaterTreatmentSlug(item),
  }));
}
