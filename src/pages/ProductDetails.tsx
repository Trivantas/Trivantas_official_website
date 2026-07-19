import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Info, CheckCircle, ArrowRight } from 'lucide-react';
import ProductDetailModal, { ProductType } from '@/components/ProductDetailModal';
import { motion } from 'framer-motion';
import { pageContent } from '@/data/pageContent';
import sensorsData from '@/data/sensors.json';
import filtrationData from '@/data/filtration.json';
import handlingData from '@/data/handling.json';
import spmData from '@/data/spm.json';
import waterTreatmentData from '@/data/water-treatment.json';

// Import images
import levelSensorImg from '@/assets/smart-level-sensors-new.jpg';
import filtrationImg from '@/assets/filtration-system.jpg';
import spmImg from '@/assets/spm-machine.jpg';
import materialHandlingImg from '@/assets/material-handling-v3.jpg';
import centralHandlingImg from '@/assets/central-handling-system.jpg';
import vibratingForkImg from '@/assets/vibrating-fork-v2.jpg';
import vibratingRodImg from '@/assets/rod-sensor.jpg';
import capacitanceSensorImg from '@/assets/capacitance-level-sensor.jpg';
import floatSensorImg from '@/assets/float-level-sensor.jpg';
import fuelTransmitterImg from '@/assets/fuel-level-transmitter.png';
import rotatingPaddleImg from '@/assets/rotating-paddle-level-sensor.jpg';
import nrfProbeImg from '@/assets/nrf-rf-admittance-probe.jpg';
import vibratingForkSensorImg from '@/assets/vibrating-fork-level-sensor.png';
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
import desalinationImg from '@/assets/desalination.jpeg';
import sumpCleanerImg from '@/assets/sump-cleaner.jpeg';
import magBandFilterImg from '@/assets/Mag Band Filter.png';

import highAccuracyLevelIndicatorImg from '@/assets/high-accuracy-level-indicator.jpeg';
import centralCoolantImg from '@/assets/central-coolant-filtration.jpeg';
import mobileFilterImg from '@/assets/mobile-type-filters.jpeg';
import pressureBedImg from '@/assets/compact-pressure-bed-filters.png';
import chRoAndUfImg from '@/assets/ChROandUF.png';
import waterFiltrationTreatmentsImg from '@/assets/waterfiltrationtreatments.png';

const productsWithoutImages = [
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
  "Spare Parts for Filtration Systems (Bags, Paper, Candle, etc.)"
];

const ProductDetails = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

  const productDataMap: Record<string, ProductType[]> = {
    sensors: sensorsData as ProductType[],
    filtration: filtrationData as ProductType[],
    spm: spmData as ProductType[],
    handling: handlingData as ProductType[],
    "water-treatment": waterTreatmentData as ProductType[]
  };

  // Image mapping for specific products
  const imageMap: Record<string, string> = {
    // Handling
    centralHandling: centralHandlingImg,
    scraperConveyor: materialHandlingImg, // Fallback/Placeholder
    slatConveyor: materialHandlingImg,
    screwConveyor: materialHandlingImg,
    magneticConveyor: materialHandlingImg,
    rollerConveyor: materialHandlingImg,
    sparePartsConveyor: materialHandlingImg,
    allMaterialHandling: materialHandlingImg,
    foodConveyor: materialHandlingImg,
    pneumaticConveyor: materialHandlingImg,
    vibratingConveyor: materialHandlingImg,
    bucketElevator: materialHandlingImg,
    gravityConveyor: materialHandlingImg,
    aeroConveyor: materialHandlingImg,
    coolingConveyor: materialHandlingImg,
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
    default: levelSensorImg
  };

  const content = pageContent[category as keyof typeof pageContent];
  const products = productDataMap[category as keyof typeof productDataMap] || [];

  if (!content) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Category Not Found</h1>
          <Button onClick={() => navigate('/products')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  // Helper to find products for a group
  const getProductsForGroup = (groupItems: string[]) => {
    if (!groupItems) return [];
    return groupItems.map(itemName => products.find(p => p.name === itemName)).filter(Boolean);
  };

  // Helper to get image for product
  const getProductImage = (product: ProductType) => {
    if (product.imageKey && imageMap[product.imageKey]) {
      return imageMap[product.imageKey];
    }
    // Fallback based on category
    if (category === 'handling') return materialHandlingImg;
    if (category === 'filtration') return filtrationImg;
    if (category === 'spm') return spmImg;
    if (category === 'water-treatment') return stpImg;
    return levelSensorImg;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/products')}
            className="mb-8 text-white hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {content.title}
            </h1>
            <p className="text-2xl text-secondary font-light mb-6">
              {content.subtitle}
            </p>
            <div className="prose prose-lg prose-invert text-white/90 max-w-none">
              <p className="text-lg leading-relaxed whitespace-pre-line">
                <span className="font-semibold text-white">{content.introPrefix}</span> {content.description}
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Product Groups */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {content.productGroups.map((group, groupIdx) => {
            const groupProducts = getProductsForGroup(group.items || []);
            // Fallback: if no specific items listed, verify if we should show all? 
            // For now, based on content, all groups have items. 
            // If a group has NO products found (maybe naming mismatch), skip or show empty?
            // We'll show the group header even if products are missing to debug.

            return (
              <div key={groupIdx} id={`group-${groupIdx}`}>
                <div className="mb-10 border-l-4 border-primary pl-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {group.title}
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl">
                    {group.description}
                  </p>
                </div>

                {groupProducts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {groupProducts.map((product: ProductType) => (
                      <Card
                        key={product.id}
                        className="group cursor-pointer hover:shadow-hover transition-all duration-300 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
                        onClick={() => setSelectedProduct({
                          ...product,
                          image: getProductImage(product)
                        })}
                      >
                        {category === 'sensors' || category === 'water-treatment' || (category === 'filtration' && !productsWithoutImages.includes(product.name)) ? (
                          <div className="group relative flex flex-col h-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl overflow-hidden rounded-2xl border border-white/60 dark:border-slate-700/50 hover:border-primary/50 dark:hover:border-cyan-500/50 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]">
                            {/* High-Tech Grid Overlay */}
                            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                            
                            {/* Futuristic Glowing Orbs */}
                            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 dark:bg-cyan-500/20 rounded-full blur-[60px] group-hover:bg-primary/30 dark:group-hover:bg-cyan-500/30 group-hover:scale-110 transition-all duration-700 pointer-events-none"></div>
                            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/15 dark:bg-blue-600/20 rounded-full blur-[60px] group-hover:bg-blue-500/25 dark:group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-700 pointer-events-none"></div>

                            {/* Tech Reticle Corners */}
                            <div className="absolute top-5 left-5 w-4 h-4 border-t-2 border-l-2 border-primary/30 dark:border-cyan-500/30 group-hover:border-primary dark:group-hover:border-cyan-400 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 z-10 pointer-events-none"></div>
                            <div className="absolute top-5 right-5 w-4 h-4 border-t-2 border-r-2 border-primary/30 dark:border-cyan-500/30 group-hover:border-primary dark:group-hover:border-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 z-10 pointer-events-none"></div>
                            
                            {/* Holographic Badge */}
                            <div className="absolute top-6 left-8 z-20">
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-primary/10 dark:border-cyan-500/20 text-[10px] font-mono tracking-widest text-primary dark:text-cyan-400 group-hover:border-primary/40 dark:group-hover:border-cyan-400/50 shadow-sm transition-all duration-300">
                                <span className="relative flex h-1.5 w-1.5">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary dark:bg-cyan-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary dark:bg-cyan-500"></span>
                                </span>
                                {product.type?.toUpperCase() || 'SMART SENSOR'}
                              </div>
                            </div>
                            
                            {/* Main Image Container */}
                            <div className="relative h-64 w-full flex items-center justify-center p-12 z-10 mt-6 group-hover:p-8 transition-all duration-700">
                              <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent dark:from-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                              <img
                                src={getProductImage(product)}
                                alt={product.name}
                                className="max-h-full max-w-full object-contain filter drop-shadow-xl group-hover:drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] dark:group-hover:drop-shadow-[0_20px_30px_rgba(34,211,238,0.2)] group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-700 ease-out relative z-10"
                              />
                            </div>
                            

                            {/* Bottom Info Console */}
                            <div className="relative z-20 mt-auto p-6 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border-t border-white/80 dark:border-slate-700/80 group-hover:border-primary/30 dark:group-hover:border-cyan-500/30 transition-colors duration-500">
                              {/* Scanning line effect on border */}
                              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary dark:via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              
                              <div className="flex items-center justify-between gap-4">
                                <div className="flex flex-col">

                                  <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary dark:group-hover:text-cyan-400 transition-colors duration-300">
                                    {product.name}
                                  </h3>
                                </div>
                                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary dark:group-hover:bg-cyan-500 group-hover:text-primary-foreground dark:group-hover:text-slate-900 group-hover:border-transparent shadow-sm group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-500 transform group-hover:rotate-90">
                                  <ArrowRight className="h-5 w-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <CardContent className="p-6 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-4">
                              <Badge variant="secondary" className="bg-secondary/10 text-orange-600 border-secondary/20">
                                {product.type || 'Product'}
                              </Badge>
                              <Info className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                              {product.name}
                            </h3>

                            <div className="space-y-2 mb-6 flex-grow">
                              {/* Category specific specs preview could go here if needed, keeping it simple for now */}
                              <p className="text-sm text-muted-foreground line-clamp-3">
                                {product.efficiency || product.description || "High performance industrial solution."}
                              </p>
                            </div>

                            <div className="mt-auto">
                              <div className="flex flex-wrap gap-2 mb-4">
                                {(product.features || []).slice(0, 2).map((feature: string, idx: number) => (
                                  <span key={idx} className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">
                                    {feature}
                                  </span>
                                ))}
                              </div>

                              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                <span className="text-sm text-muted-foreground">View Specifications</span>
                                <ArrowRight className="h-4 w-4 text-primary transform group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </CardContent>
                        )}
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="bg-muted/30 rounded-lg p-8 text-center border border-dashed border-muted-foreground/30">
                    <p className="text-muted-foreground">Detailed product listing coming soon for this category.</p>
                    {/* Debug info: remove in production */}
                    {/* <p className="text-xs text-muted-foreground mt-2">Looking for: {group.items?.join(', ')}</p> */}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Section */}
      {content.whyChoosePoints && (
        <section className="py-16 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-secondary text-secondary-foreground rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
                  {content.whyChooseTitle || "Why Choose Us?"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {content.whyChoosePoints.map((point, idx) => (
                    <div key={idx} className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <span className="text-lg text-white/90 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Custom Solution / CTA Section */}
      <section className="bg-primary text-primary-foreground py-10 md:py-14 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Custom Engineered Solutions
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 max-w-3xl mx-auto leading-relaxed">
              {content.customSolutionText}
            </p>
            {(content.contactText || "Interested in a custom quote or demo? Contact Trivantas today.") && (
              <p className="text-base text-primary-foreground/85 mb-6 max-w-2xl mx-auto">
                {content.contactText || "Interested in a custom quote or demo? Contact Trivantas today."}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="shadow-lg hover:shadow-secondary/20 transition-all duration-300"
                onClick={() => navigate('/contact')}
              >
                Get in Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 shadow-lg transition-all duration-300"
                onClick={() => navigate('/schedule')}
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          category={category}
        />
      )}
    </div>
  );
};

export default ProductDetails;