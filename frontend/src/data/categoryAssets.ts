// Hero slide images for Sensors category
import sensorsHeroSlide1 from '@/assets/sensors-hero-slide1.png';
import sensorsHeroSlide2 from '@/assets/sensors-hero-slide2.png';
import sensorsHeroSlide3 from '@/assets/sensors-hero-slide3.png';

// Hero slide images for Filtration category
import filtrationHeroSlide1 from '@/assets/filtration-hero-slide1.png';
import filtrationHeroSlide2 from '@/assets/filtration-hero-slide2.png';
import filtrationHeroSlide3 from '@/assets/filtration-hero-slide3.png';

// Hero slide images for Water Treatment category
import waterTreatmentHeroSlide1 from '@/assets/water-treatment-hero-slide1.png';
import waterTreatmentHeroSlide2 from '@/assets/water-treatment-hero-slide2.png';
import waterTreatmentHeroSlide3 from '@/assets/water-treatment-hero-slide3.png';

// Hero slide images for Handling category
import handlingHeroSlide1 from '@/assets/handling-hero-slide1.png';
import handlingHeroSlide2 from '@/assets/handling-hero-slide2.png';
import handlingHeroSlide3 from '@/assets/handling-hero-slide3.png';

// Hero slide images for Lubrication Systems category
import lubricationHeroSlide1 from '@/assets/lubrication-hero-slide1.png';
import lubricationHeroSlide2 from '@/assets/lubrication-hero-slide2.png';
import lubricationHeroSlide3 from '@/assets/lubrication-hero-slide3.png';

// Hero slide images for SPM Machines category
import spmHeroSlide1 from '@/assets/spm-hero-slide1.png';
import spmHeroSlide2 from '@/assets/spm-hero-slide2.png';
import spmHeroSlide3 from '@/assets/spm-hero-slide3.png';

// Category fallback and showcase images
import levelSensorImg from '@/assets/smart-level-sensors-new.jpg';
import filtrationImg from '@/assets/filtration-system.jpg';
import spmImg from '@/assets/spm-machine.jpg';
import materialHandlingImg from '@/assets/material-handling-v3.jpg';
import centralHandlingImg from '@/assets/central-handling-system.jpg';
import floatSensorImg from '@/assets/float-level-sensor.jpg';
import fuelTransmitterImg from '@/assets/fuel-level-transmitter.png';
import rotatingPaddleImg from '@/assets/rotating-paddle-level-sensor.jpg';
import nrfProbeImg from '@/assets/nrf-rf-admittance-probe.jpg';
import conductivitySensorImg from '@/assets/conductivity-level-sensor.png';
import radarSensorImg from '@/assets/radar-level-sensor-v2.png';
import levelTransmitterImg from '@/assets/level-transmitter.png';
import capacitanceProbeImg from '@/assets/capacitance-level-probe-v2.png';
import microwaveMoistureImg from '@/assets/microwave-moisture-sensor.jpg';
import hydroMixNewImg from '@/assets/hydro-mix-moisture-sensor-new.jpg';
import hydroMixXTImg from '@/assets/hydro-mix-xt-sensor.png';
import moistureSensorGenericImg from '@/assets/moisture-sensor-generic.png';
import paperBandFilterImg from '@/assets/paper-band-filter-new.jpeg';
import oilSkimmerImg from '@/assets/oil-skimmer.jpeg';
import magneticSeparatorImg from '@/assets/magnetic-separators-new.jpeg';
import ultrasonicLevelSensorImgV2 from '@/assets/ultrasonic-level-sensor-v2.png';
import capacitanceLevelSensorImgV2 from '@/assets/capacitance-level-sensor-v2.png';
import electromagneticFlowMeterImg from '@/assets/electromagnetic-flow-meter.png';
import hydrostaticLevelSensorImg from '@/assets/hydrostatic-level-sensor.png';
import magneticLevelSwitchImg from '@/assets/magnetic-level-switch.jpg';
import gasSensorImg from '@/assets/gas-sensor.png';
import radarSolidLevelSensorImg from '@/assets/radar-solid-level-sensor.png';
import miniSensorImg from '@/assets/mini-level-sensor.png';
import tiltSwitchImg from '@/assets/tilt-level-switch.png';
import vibratingRodSensorImg from '@/assets/vibrating-rod-level-sensor.png';
import vibratingForkSensorImgV2 from '@/assets/vibrating-fork-sensor.png';
import vibratingForkSolidSensorImg from '@/assets/vibrating-fork-solid-sensor.png';
import ultrasonicFlowMeterImg from '@/assets/ultrasonic-flow-meter.jpg';
import rfAdmittanceLevelSwitchImg from '@/assets/rf-admittance-level-switch.png';

import zldImg from '@/assets/ZLD.jpeg';
import stpImg from '@/assets/sewage-treatment-plant.jpg';
import etpImg from '@/assets/effluent-treatment-plants.jpeg';
import lubricationImg from '@/assets/lubrication-system.png';
import desalinationImg from '@/assets/desalination.jpeg';
import sumpCleanerImg from '@/assets/sump-cleaner.jpeg';
import magBandFilterImg from '@/assets/Mag Band Filter.png';

import highAccuracyLevelIndicatorImg from '@/assets/high-accuracy-level-indicator.jpeg';
import centralCoolantImg from '@/assets/central-coolant-filtration.jpeg';
import mobileFilterImg from '@/assets/mobile-type-filters.jpeg';
import pressureBedImg from '@/assets/compact-pressure-bed-filters.png';
import chRoAndUfImg from '@/assets/ChROandUF.png';
import waterFiltrationTreatmentsImg from '@/assets/waterfiltrationtreatments.png';
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
import cleatConveyorImg from '@/assets/Cleat Conveyor.jpg';

export interface ProductAssetItem {
  id?: string;
  imageKey?: string;
  [key: string]: unknown;
}

export const CATEGORY_HERO_SLIDES_MAP: Record<string, string[]> = {
  sensors: [sensorsHeroSlide1, sensorsHeroSlide2, sensorsHeroSlide3],
  filtration: [filtrationHeroSlide1, filtrationHeroSlide2, filtrationHeroSlide3],
  "water-treatment": [waterTreatmentHeroSlide1, waterTreatmentHeroSlide2, waterTreatmentHeroSlide3],
  handling: [handlingHeroSlide1, handlingHeroSlide2, handlingHeroSlide3],
  "lubrication-systems": [lubricationHeroSlide1, lubricationHeroSlide2, lubricationHeroSlide3],
  spm: [spmHeroSlide1, spmHeroSlide2, spmHeroSlide3],
};

export const PRODUCT_IMAGE_MAP: Record<string, string> = {
  // Handling
  centralHandling: centralHandlingImg,
  scraperConveyor: scrapperConveyorImg,
  slatConveyor: slatTypeChipConveyorImg,
  screwConveyor: screwTypeChipConveyorImg,
  magneticConveyor: magneticTypeChipConveyorImg,
  cleatConveyor: cleatConveyorImg,
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

  // Sensors
  levelIndicator: highAccuracyLevelIndicatorImg,
  vibratingRod: vibratingRodSensorImg,
  vibratingFork: vibratingForkSensorImgV2,
  vibratingForkSolid: vibratingForkSolidSensorImg,
  ultrasonicFlow: ultrasonicFlowMeterImg,
  float: floatSensorImg,
  fuelTransmitter: fuelTransmitterImg,
  rotatingPaddle: rotatingPaddleImg,
  nrfProbe: nrfProbeImg,
  conductivity: conductivitySensorImg,
  radar: radarSensorImg,
  rfAdmittanceSwitch: rfAdmittanceLevelSwitchImg,
  levelTransmitter: levelTransmitterImg,
  capacitanceProbe: capacitanceProbeImg,
  microwaveMoisture: microwaveMoistureImg,
  hydroMixNew: hydroMixNewImg,
  hydroMixXT: hydroMixXTImg,
  moistureSensorGeneric: moistureSensorGenericImg,

  // Filtration & Water Treatment
  paperBand: paperBandFilterImg,
  oilSkimmer: oilSkimmerImg,
  magneticSeparator: magneticSeparatorImg,
  zld: zldImg,
  stp: stpImg,
  etp: etpImg,
  desalination: desalinationImg,
  sumpCleaner: sumpCleanerImg,
  magBandFilter: magBandFilterImg,
  centralCoolant: centralCoolantImg,
  mobileFilter: mobileFilterImg,
  pressureBed: pressureBedImg,
  membranePlants: chRoAndUfImg,
  mineralWater: waterFiltrationTreatmentsImg,

  // Defaults/Fallbacks
  electromagneticFlow: electromagneticFlowMeterImg,
  ultrasonic: ultrasonicLevelSensorImgV2,
  capacitance: capacitanceLevelSensorImgV2,
  hydrostatic: hydrostaticLevelSensorImg,
  magneticSwitch: magneticLevelSwitchImg,
  gasPressure: gasSensorImg,
  microwaveRadarSolid: radarSolidLevelSensorImg,
  miniSensor: miniSensorImg,
  tiltSwitch: tiltSwitchImg,
  lubrication: lubricationImg,
  default: levelSensorImg,
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
  "Spare Parts for Filtration Systems (Bags, Paper, Candle, etc.)",
];

export const productsWithImages = [
  "Magnetic Type Chip Conveyor",
  "Centralized Chip Handling System",
  "Cleat Conveyor",
  "Cooling Conveyors",
  "Aero-Mechanical Conveyors",
  "Bucket Elevators / Conveyors",
  "Gravity Conveyors",
  "Food Conveyor",
  "Scraper Type Chip Conveyor",
  "Slat Type Chip Conveyor",
  "Screw Type Chip Conveyor",
  "Pneumatic Conveyors",
  "Vibrating Conveyors",
];

export function getCategoryHeroSlides(category?: string): string[] {
  if (!category) return [];
  return CATEGORY_HERO_SLIDES_MAP[category] || [];
}

export function getProductImageSrc(product: ProductAssetItem, category?: string): string {
  if (product.imageKey && PRODUCT_IMAGE_MAP[product.imageKey]) {
    return PRODUCT_IMAGE_MAP[product.imageKey];
  }
  if (category === "handling") return materialHandlingImg;
  if (category === "filtration") return filtrationImg;
  if (category === "spm") return spmImg;
  if (category === "water-treatment") return stpImg;
  if (category === "lubrication-systems") return lubricationImg;
  return levelSensorImg;
}
