import spmData from './spm.json';

export interface SpmItem {
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

export const SPM_CATALOG: SpmItem[] = spmData as SpmItem[];

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

export function getSpmSlug(item: SpmItem): string {
  return item.id || slugify(item.name);
}

export function getSpmBySlug(slug: string): SpmItem | undefined {
  if (!slug) return undefined;
  const target = slug.toLowerCase().trim();

  return SPM_CATALOG.find((item) => {
    const idMatch = item.id?.toLowerCase() === target;
    const slugifiedIdMatch = slugify(item.id || '') === target;
    const slugifiedNameMatch = slugify(item.name || '') === target;
    const nameMatch = item.name?.toLowerCase() === target;

    return idMatch || slugifiedIdMatch || slugifiedNameMatch || nameMatch;
  });
}

export function getAllSpmProducts(): (SpmItem & { slug: string })[] {
  return SPM_CATALOG.map((item) => ({
    ...item,
    slug: getSpmSlug(item),
  }));
}

export function getRelatedSpmProducts(
  currentIdOrSlug: string,
  limit: number = 3
): (SpmItem & { slug: string })[] {
  const all = getAllSpmProducts();
  const current = getSpmBySlug(currentIdOrSlug);

  return all
    .filter((p) => p.id !== current?.id && p.slug !== currentIdOrSlug)
    .slice(0, limit);
}
