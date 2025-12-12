import React, { useState } from 'react';
import sensorsData from '@/data/sensors.json';
import { Card, CardContent } from '@/components/ui/card';
import ProductCatalogCard from '@/components/ProductCatalogCard';
import ProductDetailModal from '@/components/ProductDetailModal';
import levelSensorImg from '@/assets/level-sensor.jpg';

const SensorsCatalog: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const imageMap: Record<string, string> = {
    float: levelSensorImg,
    radar: levelSensorImg,
    vibratingFork: levelSensorImg,
    conductivity: levelSensorImg,
    capacitance: levelSensorImg,
    fuelTransmitter: levelSensorImg,
    ultrasonic: levelSensorImg,
    miniRadar: levelSensorImg,
    hydrostatic: levelSensorImg,
    magneticSwitch: levelSensorImg,
    sideMount: levelSensorImg,
    topMount: levelSensorImg,
    miniSensor: levelSensorImg,
    levelTransmitter: levelSensorImg,
    electromagneticFlow: levelSensorImg,
    vibratingRod: levelSensorImg,
    nrfProbe: levelSensorImg,
    rotatingPaddle: levelSensorImg,
    capacitanceProbe: levelSensorImg,
    microwaveRadarSolid: levelSensorImg,
    weightSwitch: levelSensorImg,
    tiltSwitch: levelSensorImg,
    onlineMoisture: levelSensorImg,
    bulkMoisture: levelSensorImg,
    capacitanceMoisture: levelSensorImg,
    infraredMoisture: levelSensorImg,
    microwaveMoisture: levelSensorImg,
    gasPressure: levelSensorImg,
    ultrasonicGas: levelSensorImg,
    capacitanceGas: levelSensorImg,
    thermalMassFlow: levelSensorImg
  };

  const products = sensorsData as any[];

  const selectedProduct = selectedId ? products.find(p => p.id === selectedId) : null;

  return (
    <div className="min-h-screen bg-background">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-foreground mb-6">Smart Level Sensors</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCatalogCard
                key={p.id}
                id={p.id}
                categoryLabel={p.categoryLabel}
                name={p.name}
                capacity={p.capacity}
                efficiency={p.efficiency}
                features={p.features}
                icons={p.icons}
                image={imageMap[p.imageKey] || levelSensorImg}
                onViewDetails={(id) => setSelectedId(id)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedId(null)}
          category="sensors"
        />
      )}
    </div>
  );
};

export default SensorsCatalog;
