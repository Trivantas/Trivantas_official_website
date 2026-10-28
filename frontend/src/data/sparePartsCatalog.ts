import sparePartsData from './spare-parts.json';

export interface SparePartItem {
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

export const SPARE_PARTS_CATALOG: SparePartItem[] = sparePartsData as SparePartItem[];

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

export function getSparePartSlug(item: SparePartItem): string {
  return item.id || slugify(item.name);
}

export function getSparePartBySlug(slug: string): SparePartItem | undefined {
  if (!slug) return undefined;
  const target = slug.toLowerCase().trim();

  return SPARE_PARTS_CATALOG.find((item) => {
    const idMatch = item.id?.toLowerCase() === target;
    const slugifiedIdMatch = slugify(item.id || '') === target;
    const slugifiedNameMatch = slugify(item.name || '') === target;
    const nameMatch = item.name?.toLowerCase() === target;

    return idMatch || slugifiedIdMatch || slugifiedNameMatch || nameMatch;
  });
}

export function getAllSparePartsProducts(): (SparePartItem & { slug: string })[] {
  return SPARE_PARTS_CATALOG.map((item) => ({
    ...item,
    slug: getSparePartSlug(item),
  }));
}

export function getRelatedSparePartsProducts(
  currentIdOrSlug: string,
  limit: number = 3
): SparePartItem[] {
  const current = getSparePartBySlug(currentIdOrSlug);
  return SPARE_PARTS_CATALOG
    .filter((item) => item.id !== current?.id && getSparePartSlug(item) !== currentIdOrSlug)
    .slice(0, limit);
}
