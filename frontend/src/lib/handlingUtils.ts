import {
  HANDLING_CATALOG,
  HandlingItem,
  slugify,
  getHandlingSlug,
  getHandlingBySlug,
} from '../data/handlingCatalog';

import materialHandlingImg from '@/assets/material-handling-v3.jpg';
import centralHandlingImg from '@/assets/central-handling-system.jpg';
import magneticTypeChipConveyorImg from '@/assets/Magnetic Type Chip Conveyor.jpg';
import coolingConveyorsImg from '@/assets/Cooling Conveyors.jpg';
import aeroMechanicalConveyorsImg from '@/assets/Aero-Mechanical Conveyors.jpg';
import bucketElevatorsConveyorsImg from '@/assets/Bucket Elevators Conveyors.jpg';
import gravityConveyorsImg from '@/assets/Gravity Conveyors.jpg';
import foodConveyorImg from '@/assets/Food Conveyor.png';
import scrapperConveyorImg from '@/assets/SCrapper Conveyor.png';
import slatTypeChipConveyorImg from '@/assets/Slat Type Chip Conveyor.jpg';
import screwTypeChipConveyorImg from '@/assets/Screw Type Chip Conveyor.jpg';
import pneumaticConveyorsImg from '@/assets/Pneumatic Conveyors.jpg';
import vibratingConveyorsImg from '@/assets/Vibrating Conveyors.jpg';

export type HandlingProduct = HandlingItem;
export { slugify, getHandlingSlug, getHandlingBySlug };

export const handlingImageMap: Record<string, string> = {
  centralHandling: centralHandlingImg,
  scraperConveyor: scrapperConveyorImg,
  slatConveyor: slatTypeChipConveyorImg,
  screwConveyor: screwTypeChipConveyorImg,
  magneticConveyor: magneticTypeChipConveyorImg,
  rollerConveyor: materialHandlingImg,
  sparePartsConveyor: materialHandlingImg,
  allMaterialHandling: materialHandlingImg,
  foodConveyor: foodConveyorImg,
  pneumaticConveyor: pneumaticConveyorsImg,
  vibratingConveyor: vibratingConveyorsImg,
  bucketElevator: bucketElevatorsConveyorsImg,
  gravityConveyor: gravityConveyorsImg,
  aeroConveyor: aeroMechanicalConveyorsImg,
  coolingConveyor: coolingConveyorsImg,
  chipShredder: materialHandlingImg,
  briquetter: materialHandlingImg,
  automatedHandling: materialHandlingImg,
  customAutomation: materialHandlingImg,
  default: materialHandlingImg,
};

export const productsWithHandlingImages = [
  "Magnetic Type Chip Conveyor",
  "Centralized Chip Handling System",
  "Cooling Conveyors",
  "Aero-Mechanical Conveyors",
  "Bucket Elevators / Conveyors",
  "Gravity Conveyors",
  "Food Conveyor",
  "Scraper Type Chip Conveyor",
  "Slat Type Chip Conveyor",
  "Screw Type Chip Conveyor",
  "Pneumatic Conveyors",
  "Vibrating Conveyors"
];

export const chipProcessingAndAdvancedSolutions = [
  "Chips Shredder / Cutter",
  "Chips Compacting & Briquetting",
  "Automated Handling Systems",
  "Customized Concepts & Automation Solutions"
];

/**
 * Check if the handling product has a specific real image or should remove the image card
 */
export function hasSpecificHandlingImage(item: HandlingProduct): boolean {
  if (chipProcessingAndAdvancedSolutions.includes(item.name)) return false;
  return productsWithHandlingImages.includes(item.name);
}

/**
 * Resolve product image by its imageKey
 */
export function getHandlingImage(item: HandlingProduct): string {
  if (item.imageKey && handlingImageMap[item.imageKey]) {
    return handlingImageMap[item.imageKey];
  }
  return handlingImageMap.default;
}

/**
 * Return all handling products enriched with slug and resolved image
 */
export function getAllHandlingProductsWithImages(): (HandlingProduct & { slug: string; image: string })[] {
  return HANDLING_CATALOG.map((item) => ({
    ...item,
    slug: getHandlingSlug(item),
    image: getHandlingImage(item),
  }));
}

/**
 * Get related material handling equipment
 */
export function getRelatedHandlingProducts(
  currentIdOrSlug: string,
  limit: number = 3
): (HandlingProduct & { slug: string; image: string })[] {
  const all = getAllHandlingProductsWithImages();
  const current = getHandlingBySlug(currentIdOrSlug);

  return all
    .filter((p) => p.id !== current?.id && p.slug !== currentIdOrSlug)
    .slice(0, limit);
}
