import handlingData from './handling.json';

export interface HandlingItem {
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

export const HANDLING_CATALOG: HandlingItem[] = handlingData as HandlingItem[];

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

export function getHandlingSlug(item: HandlingItem): string {
  return item.id || slugify(item.name);
}

export function getHandlingBySlug(slug: string): HandlingItem | undefined {
  if (!slug) return undefined;
  const target = slug.toLowerCase().trim();

  return HANDLING_CATALOG.find((item) => {
    const idMatch = item.id?.toLowerCase() === target;
    const slugifiedIdMatch = slugify(item.id || '') === target;
    const slugifiedNameMatch = slugify(item.name || '') === target;
    const nameMatch = item.name?.toLowerCase() === target;

    return idMatch || slugifiedIdMatch || slugifiedNameMatch || nameMatch;
  });
}

export function getAllHandlingProducts(): (HandlingItem & { slug: string })[] {
  return HANDLING_CATALOG.map((item) => ({
    ...item,
    slug: getHandlingSlug(item),
  }));
}
