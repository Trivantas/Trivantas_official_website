import {
  SPARE_PARTS_CATALOG,
  SparePartItem,
  slugify,
  getSparePartSlug,
  getSparePartBySlug,
  getRelatedSparePartsProducts,
} from '../data/sparePartsCatalog';

import coolantFilterPaperRollImg from '@/assets/spare-parts/coolant-oil-hot-water-filter-paper-roll.png';
import filterPaperRollImg from '@/assets/spare-parts/filter-paper-roll.png';
import dustCollectorAirFilterImg from '@/assets/spare-parts/dust-collector-air-filter.png';
import liquidFilterBagImg from '@/assets/spare-parts/liquid-filter-bag.png';
import dustCollectorFilterBagImg from '@/assets/spare-parts/dust-collector-filter-bag.png';
import pleatedDustCollectionFilterImg from '@/assets/spare-parts/pleated-dust-collection-filter.png';
import oilFilterImg from '@/assets/spare-parts/oil-filter.png';
import pressureSuctionOilFilterImg from '@/assets/spare-parts/pressure-suction-oil-filter.png';
import hydraulicOilFilterImg from '@/assets/spare-parts/hydraulic-oil-filter.png';
import ssWashableFilterImg from '@/assets/spare-parts/ss-washable-filter.png';
import highPressureOilFilterImg from '@/assets/spare-parts/high-pressure-oil-filter.png';
import waterFilterElementImg from '@/assets/spare-parts/water-filter-element.png';
import airFilterImg from '@/assets/spare-parts/air-filter.png';
import compositeFilterImg from '@/assets/spare-parts/composite-filter.png';
import coolantFilterImg from '@/assets/spare-parts/coolant-filter.png';
import ssSinteredWedgeWireFilterCartridgesImg from '@/assets/spare-parts/ss-sintered-wedge-wire-filter-cartridges.png';
import ppPleatedFilterCartridgesImg from '@/assets/spare-parts/pp-pleated-filter-cartridges.png';
import rbcFilterCartridgesImg from '@/assets/spare-parts/rbc-filter-cartridges.png';
import paintBoothFilterImg from '@/assets/spare-parts/paint-booth-filter.png';
import strainerFilterInsertImg from '@/assets/spare-parts/strainer-filter-insert.png';
import edmFilterImg from '@/assets/spare-parts/edm-filter.png';
import polyesterMediaImg from '@/assets/spare-parts/polyester-media.png';
import ahuAirFilterBoxTypeImg from '@/assets/spare-parts/ahu-air-filter-box-type.png';
import ahuAirFilterPocketTypeImg from '@/assets/spare-parts/ahu-air-filter-pocket-type.png';
import sparePartsMainImg from '@/assets/spare-parts-main.png';

export type SparePartProduct = SparePartItem;
export { slugify, getSparePartSlug, getSparePartBySlug, getRelatedSparePartsProducts };

export const sparePartsImageMap: Record<string, string> = {
  coolantFilterPaperRoll: coolantFilterPaperRollImg,
  filterPaperRoll: filterPaperRollImg,
  dustCollectorAirFilter: dustCollectorAirFilterImg,
  liquidFilterBag: liquidFilterBagImg,
  dustCollectorFilterBag: dustCollectorFilterBagImg,
  pleatedDustCollectionFilter: pleatedDustCollectionFilterImg,
  oilFilter: oilFilterImg,
  pressureSuctionOilFilter: pressureSuctionOilFilterImg,
  hydraulicOilFilter: hydraulicOilFilterImg,
  ssWashableFilter: ssWashableFilterImg,
  highPressureOilFilter: highPressureOilFilterImg,
  waterFilterElement: waterFilterElementImg,
  airFilterSpare: airFilterImg,
  compositeFilter: compositeFilterImg,
  coolantFilterSpare: coolantFilterImg,
  ssSinteredWedgeWireFilterCartridges: ssSinteredWedgeWireFilterCartridgesImg,
  ppPleatedFilterCartridges: ppPleatedFilterCartridgesImg,
  rbcFilterCartridges: rbcFilterCartridgesImg,
  paintBoothFilter: paintBoothFilterImg,
  strainerFilterInsert: strainerFilterInsertImg,
  edmFilter: edmFilterImg,
  polyesterMedia: polyesterMediaImg,
  ahuAirFilterBoxType: ahuAirFilterBoxTypeImg,
  ahuAirFilterPocketType: ahuAirFilterPocketTypeImg,
  spareParts: sparePartsMainImg,
  default: sparePartsMainImg,
};

export const productsWithSparePartsImages: string[] = [
  "Coolant, Oil, Hot Water Filter Paper Roll",
  "Filter Paper Roll",
  "Dust Collector Air Filter",
  "Liquid Filter Bag",
  "Dust Collector Filter Bag",
  "Pleated dust collection filter",
  "Oil Filter",
  "Pressure & Suction Oil Filter",
  "Hydraulic Oil Filter",
  "SS Washable Filter",
  "High Pressure Oil Filter",
  "Water Filter Element",
  "Air Filter",
  "Composite Filter",
  "Coolant Filter",
  "SS Sintered Wedge Wire Filter Cartridges",
  "PP Pleated Filter Cartridges",
  "RBC Filter Cartridges",
  "Paint Booth Filter",
  "Strainer Filter Insert",
  "EDM Filter",
  "Polyester Media",
  "AHU Air Filter (Box Type / Flange Type)",
  "AHU Air Filter (Pocket Type)",
];

/**
 * Resolve product image by its imageKey or name
 */
export function getSparePartImage(item: SparePartProduct): string {
  if (item.imageKey && sparePartsImageMap[item.imageKey]) {
    return sparePartsImageMap[item.imageKey];
  }
  return sparePartsImageMap.default;
}

/**
 * Return all spare parts products enriched with slug and resolved image
 */
export function getAllSparePartsWithImages(): (SparePartProduct & { slug: string; image: string })[] {
  return SPARE_PARTS_CATALOG.map((item) => ({
    ...item,
    slug: getSparePartSlug(item),
    image: getSparePartImage(item),
  }));
}
