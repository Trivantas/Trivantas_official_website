import lubricationData from './lubrication.json';

export interface LubricationItem {
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

export const LUBRICATION_CATALOG: LubricationItem[] = lubricationData as LubricationItem[];

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

export function getLubricationSlug(item: LubricationItem): string {
  return item.id || slugify(item.name);
}

export function getLubricationBySlug(slug: string): LubricationItem | undefined {
  if (!slug) return undefined;
  const target = slug.toLowerCase().trim();

  return LUBRICATION_CATALOG.find((item) => {
    const idMatch = item.id?.toLowerCase() === target;
    const slugifiedIdMatch = slugify(item.id || '') === target;
    const slugifiedNameMatch = slugify(item.name || '') === target;
    const nameMatch = item.name?.toLowerCase() === target;

    return idMatch || slugifiedIdMatch || slugifiedNameMatch || nameMatch;
  });
}

export function getAllLubricationProducts(): (LubricationItem & { slug: string })[] {
  return LUBRICATION_CATALOG.map((item) => ({
    ...item,
    slug: getLubricationSlug(item),
  }));
}

export function getRelatedLubricationProducts(
  currentIdOrSlug: string,
  limit: number = 3
): (LubricationItem & { slug: string })[] {
  const all = getAllLubricationProducts();
  const current = getLubricationBySlug(currentIdOrSlug);

  return all
    .filter((p) => p.id !== current?.id && p.slug !== currentIdOrSlug)
    .slice(0, limit);
}
