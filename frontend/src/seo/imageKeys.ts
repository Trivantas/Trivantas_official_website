import { getProductByPath, getBlogByPath } from "./productIndex";

export const PRODUCT_IMAGEKEY_TO_ASSET_BASE: Record<string, string[]> = {
  // Handling
  centralHandling: ["central-handling-system"],
  scraperConveyor: ["SCrapper Conveyor", "scrapper-conveyor"],
  slatConveyor: ["Slat Type Chip Conveyor", "slat-type-chip-conveyor"],
  screwConveyor: ["Screw Type Chip Conveyor", "screw-type-chip-conveyor"],
  magneticConveyor: ["Magnetic Type Chip Conveyor", "magnetic-type-chip-conveyor"],
  cleatConveyor: ["Cleat Conveyor", "cleat-conveyor"],
  rollerConveyor: ["material-handling-v3"],
  sparePartsConveyor: ["material-handling-v3"],
  allMaterialHandling: ["material-handling-v3"],
  foodConveyor: ["Food Conveyor", "food-conveyor"],
  pneumaticConveyor: ["Pneumatic Conveyors", "pneumatic-conveyors"],
  vibratingConveyor: ["Vibrating Conveyors", "vibrating-conveyors"],
  bucketElevator: ["Bucket Elevators Conveyors", "bucket-elevators-conveyors"],
  gravityConveyor: ["Gravity Conveyors", "gravity-conveyors"],
  aeroConveyor: ["Aero-Mechanical Conveyors", "aero-mechanical-conveyors"],
  coolingConveyor: ["Cooling Conveyors", "cooling-conveyors"],
  chipShredder: ["material-handling-v3"],
  briquetter: ["material-handling-v3"],
  automatedHandling: ["material-handling-v3"],
  customAutomation: ["material-handling-v3"],

  // Sensors
  levelIndicator: ["high-accuracy-level-indicator"],
  vibratingRod: ["vibrating-rod-level-sensor"],
  vibratingFork: ["vibrating-fork-sensor"],
  vibratingForkSolid: ["vibrating-fork-solid-sensor"],
  ultrasonicFlow: ["ultrasonic-flow-meter"],
  float: ["float-level-sensor"],
  fuelTransmitter: ["fuel-level-transmitter"],
  rotatingPaddle: ["rotating-paddle-level-sensor"],
  nrfProbe: ["nrf-rf-admittance-probe"],
  conductivity: ["conductivity-level-sensor"],
  radar: ["radar-level-sensor-v2"],
  rfAdmittanceSwitch: ["rf-admittance-level-switch"],
  levelTransmitter: ["level-transmitter"],
  capacitanceProbe: ["capacitance-level-probe-v2"],
  microwaveMoisture: ["microwave-moisture-sensor"],
  hydroMixNew: ["hydro-mix-moisture-sensor-new"],
  hydroMixXT: ["hydro-mix-xt-sensor"],
  moistureSensorGeneric: ["moisture-sensor-generic"],
  electromagneticFlow: ["electromagnetic-flow-meter"],
  ultrasonic: ["ultrasonic-level-sensor-v2"],
  capacitance: ["capacitance-level-sensor-v2"],
  hydrostatic: ["hydrostatic-level-sensor"],
  magneticSwitch: ["magnetic-level-switch", "float-level-sensor"],
  gasPressure: ["gas-sensor"],
  microwaveRadarSolid: ["radar-solid-level-sensor"],
  miniSensor: ["mini-level-sensor"],
  tiltSwitch: ["tilt-level-switch"],

  // Filtration & Water Treatment
  paperBand: ["paper-band-filter-new"],
  oilSkimmer: ["oil-skimmer"],
  magneticSeparator: ["magnetic-separators-new"],
  zld: ["ZLD"],
  stp: ["sewage-treatment-plant"],
  etp: ["effluent-treatment-plants"],
  desalination: ["desalination"],
  sumpCleaner: ["sump-cleaner"],
  magBandFilter: ["Mag Band Filter", "mag-band-filter"],
  centralCoolant: ["central-coolant-filtration"],
  mobileFilter: ["mobile-type-filters"],
  pressureBed: ["compact-pressure-bed-filters"],
  membranePlants: ["ChROandUF"],
  mineralWater: ["waterfiltrationtreatments"],

  // Lubrication & SPMs
  lubrication: ["lubrication-system", "lubrication-hero-slide3"],
  
  // Spare Parts
  spareParts: ["spare-parts-main"],
  coolantFilterPaperRoll: ["coolant-oil-hot-water-filter-paper-roll"],
  filterPaperRoll: ["filter-paper-roll"],
  dustCollectorAirFilter: ["dust-collector-air-filter"],
  liquidFilterBag: ["liquid-filter-bag"],
  dustCollectorFilterBag: ["dust-collector-filter-bag"],
  pleatedDustCollectionFilter: ["pleated-dust-collection-filter"],
  oilFilter: ["oil-filter"],
  pressureSuctionOilFilter: ["pressure-suction-oil-filter"],
  hydraulicOilFilter: ["hydraulic-oil-filter"],
  ssWashableFilter: ["ss-washable-filter"],
  highPressureOilFilter: ["high-pressure-oil-filter"],
  waterFilterElement: ["water-filter-element"],
  airFilterSpare: ["air-filter"],
  compositeFilter: ["composite-filter"],
  coolantFilterSpare: ["coolant-filter"],
  ssSinteredWedgeWireFilterCartridges: ["ss-sintered-wedge-wire-filter-cartridges"],
  ppPleatedFilterCartridges: ["pp-pleated-filter-cartridges"],
  rbcFilterCartridges: ["rbc-filter-cartridges"],
  paintBoothFilter: ["paint-booth-filter"],
  strainerFilterInsert: ["strainer-filter-insert"],
  edmFilter: ["edm-filter"],
  polyesterMedia: ["polyester-media"],
  ahuAirFilterBoxType: ["ahu-air-filter-box-type"],
  ahuAirFilterPocketType: ["ahu-air-filter-pocket-type"],

  default: ["smart-level-sensors-new"],
};

export const CATEGORY_DEFAULT_IMAGE_BASES: Record<string, string[]> = {
  sensors: ["sensors-hero-slide1", "smart-level-sensors-new"],
  filtration: ["filtration-hero-slide1", "filtration-system"],
  "water-treatment": ["water-treatment-hero-slide1", "sewage-treatment-plant"],
  handling: ["handling-hero-slide1", "material-handling-v3"],
  "lubrication-systems": ["lubrication-hero-slide3", "lubrication-system"],
  "spare-parts": ["spare-parts-main", "filtration-hero-slide1"],
  spm: ["spm-machine", "spm-hero-slide1"],
};

export const BLOG_IMAGE_BASES: Record<string, string[]> = {
  "industrial-water-oil-coolant-recycling": ["industrial-recycling-blog", "lubrication-hero-slide3"],
  "ultrasonic-level-sensors": ["ultrasonic-sensor-blog"],
  "fuel-level-transmitter": ["fuel-transmitter-blog"],
};

export const STATIC_ROUTE_IMAGE_BASES: Record<string, string[]> = {
  "/products": ["smart-level-sensors-new", "filtration-system"],
  "/blogs": ["industrial-recycling-blog", "lubrication-hero-slide3"],
  "/": ["hero-industrial", "smart-level-sensors-new"],
};

export function getImageCandidatesForPath(pathname: string): string[] {
  const path = pathname === "" ? "/" : pathname.replace(/\/+$/, "") || "/";

  // 1. Individual product detail page
  const product = getProductByPath(path);
  if (product) {
    const key = product.item.imageKey;
    if (key && PRODUCT_IMAGEKEY_TO_ASSET_BASE[key]) {
      return PRODUCT_IMAGEKEY_TO_ASSET_BASE[key];
    }
    const catFallbacks = CATEGORY_DEFAULT_IMAGE_BASES[product.categorySlug];
    if (catFallbacks) return catFallbacks;
    return ["smart-level-sensors-new"];
  }

  // 2. Category listing page
  if (path.startsWith("/products/")) {
    const catSlug = path.slice("/products/".length).split("/")[0];
    if (catSlug && CATEGORY_DEFAULT_IMAGE_BASES[catSlug]) {
      return CATEGORY_DEFAULT_IMAGE_BASES[catSlug];
    }
  }

  // 3. Blog post detail page
  const blog = getBlogByPath(path);
  if (blog) {
    if (BLOG_IMAGE_BASES[blog.id]) {
      return BLOG_IMAGE_BASES[blog.id];
    }
    return ["industrial-recycling-blog", "lubrication-hero-slide3"];
  }

  // 4. Static routes
  if (STATIC_ROUTE_IMAGE_BASES[path]) {
    return STATIC_ROUTE_IMAGE_BASES[path];
  }

  return [];
}
