import filtrationData from './filtration.json';

export interface FiltrationItem {
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

export const FILTRATION_CATALOG: FiltrationItem[] = filtrationData as FiltrationItem[];

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

export function getFiltrationSlug(item: FiltrationItem): string {
  return item.id || slugify(item.name);
}

export function getFiltrationBySlug(slug: string): FiltrationItem | undefined {
  if (!slug) return undefined;
  const target = slug.toLowerCase().trim();

  return FILTRATION_CATALOG.find((item) => {
    const idMatch = item.id?.toLowerCase() === target;
    const slugifiedIdMatch = slugify(item.id || '') === target;
    const slugifiedNameMatch = slugify(item.name || '') === target;
    const nameMatch = item.name?.toLowerCase() === target;

    return idMatch || slugifiedIdMatch || slugifiedNameMatch || nameMatch;
  });
}

export function getAllFiltrationProducts(): (FiltrationItem & { slug: string })[] {
  return FILTRATION_CATALOG.map((item) => ({
    ...item,
    slug: getFiltrationSlug(item),
  }));
}
