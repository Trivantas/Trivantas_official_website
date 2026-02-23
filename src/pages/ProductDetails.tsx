import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Info, CheckCircle, ArrowRight } from 'lucide-react';
import ProductDetailModal from '@/components/ProductDetailModal';
import { pageContent } from '@/data/pageContent';
import sensorsData from '@/data/sensors.json';
import filtrationData from '@/data/filtration.json';
import handlingData from '@/data/handling.json';
import spmData from '@/data/spm.json';

// Import images
import levelSensorImg from '@/assets/smart-level-sensors-new.png';
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
import paperBandFilterImg from '@/assets/paper-band-filter.jpg';
import oilSkimmerImg from '@/assets/oil-skimmer.jpg';
import magneticSeparatorImg from '@/assets/magnetic-separator.jpg';
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

import highAccuracyLevelIndicatorImg from '@/assets/high-accuracy-level-indicator.jpeg';

const ProductDetails = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const productDataMap: Record<string, any[]> = {
    sensors: sensorsData,
    filtration: filtrationData,
    spm: spmData,
    handling: handlingData
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
  const getProductImage = (product: any) => {
    if (product.imageKey && imageMap[product.imageKey]) {
      return imageMap[product.imageKey];
    }
    // Fallback based on category
    if (category === 'handling') return materialHandlingImg;
    if (category === 'filtration') return filtrationImg;
    if (category === 'spm') return spmImg;
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
                    {groupProducts.map((product: any) => (
                      <Card
                        key={product.id}
                        className="group cursor-pointer hover:shadow-hover transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                        onClick={() => setSelectedProduct({
                          ...product,
                          image: getProductImage(product)
                        })}
                      >
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
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-primary-foreground rounded-3xl shadow-2xl p-8 md:p-12 text-center overflow-hidden relative">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-30 pointer-events-none">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Custom Engineered Solutions
              </h2>
              <div className="text-xl text-primary-foreground/90 mb-10 leading-relaxed whitespace-pre-line max-w-3xl mx-auto">
                {content.customSolutionText}
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-10 max-w-2xl mx-auto shadow-inner">
                <p className="text-lg font-medium mb-0">
                  {content.contactText || "Interested in a custom quote or demo? Contact Trivantas today."}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => navigate('/contact')}
                  className="font-bold shadow-lg hover:shadow-xl transition-all min-w-[160px]"
                >
                  Get in Touch
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate('/schedule')}
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-all min-w-[160px]"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
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