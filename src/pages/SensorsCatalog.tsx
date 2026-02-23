import React, { useState } from 'react';
import sensorsData from '@/data/sensors.json';
import { Card, CardContent } from '@/components/ui/card';
import ProductCatalogCard from '@/components/ProductCatalogCard';
import ProductDetailModal from '@/components/ProductDetailModal';
import levelSensorImg from '../assets/smart-level-sensors-new.png';
import vibratingForkImg from '../assets/vibrating-fork-v2.jpg';
import vibratingRodImg from '../assets/rod-sensor.jpg';
import capacitanceSensorImg from '../assets/capacitance-level-sensor.jpg';
import floatSensorImg from '../assets/float-level-sensor.jpg';
import fuelTransmitterImg from '../assets/fuel-level-transmitter.png';
import rotatingPaddleImg from '../assets/rotating-paddle-level-sensor.jpg';
import nrfProbeImg from '../assets/nrf-rf-admittance-probe.jpg';
import vibratingForkSensorImg from '../assets/vibrating-fork-level-sensor.png';
import conductivitySensorImg from '../assets/conductivity-level-sensor.png';
import radarSensorImg from '../assets/radar-level-sensor-v2.png';
import miniSensorImg from '../assets/mini-level-sensor.png';
import tiltSwitchImg from '../assets/tilt-level-switch.png';
import vibratingRodSensorImg from '../assets/vibrating-rod-level-sensor.png';
import levelTransmitterImg from '../assets/level-transmitter.png';
import capacitanceProbeImg from '../assets/capacitance-level-probe-v2.png';
import microwaveMoistureImg from '../assets/microwave-moisture-sensor.jpg';
import ultrasonicFlowMeterImg from '../assets/ultrasonic-flow-meter.jpg';
import rfAdmittanceLevelSwitchImg from '../assets/rf-admittance-level-switch.png';


const SensorsCatalog: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const imageMap: Record<string, string> = {
    float: floatSensorImg,
    radar: radarSensorImg,
    vibratingFork: vibratingForkSensorImg,
    conductivity: conductivitySensorImg,
    capacitance: capacitanceSensorImg,
    fuelTransmitter: fuelTransmitterImg,
    ultrasonic: levelSensorImg,
    miniRadar: levelSensorImg,
    hydrostatic: levelSensorImg,
    magneticSwitch: levelSensorImg,
    sideMount: levelSensorImg,
    topMount: levelSensorImg,
    miniSensor: miniSensorImg,
    levelTransmitter: levelTransmitterImg,
    electromagneticFlow: levelSensorImg,
    vibratingRod: vibratingRodSensorImg,
    nrfProbe: nrfProbeImg,
    rfAdmittanceSwitch: rfAdmittanceLevelSwitchImg,
    rotatingPaddle: rotatingPaddleImg,
    capacitanceProbe: capacitanceProbeImg,
    microwaveRadarSolid: levelSensorImg,
    weightSwitch: levelSensorImg,
    tiltSwitch: tiltSwitchImg,
    onlineMoisture: levelSensorImg,
    bulkMoisture: levelSensorImg,
    capacitanceMoisture: levelSensorImg,

    microwaveMoisture: microwaveMoistureImg,
    gasPressure: levelSensorImg,
    ultrasonicGas: levelSensorImg,
    capacitanceGas: levelSensorImg,
    ultrasonicFlow: ultrasonicFlowMeterImg,
    thermalMassFlow: levelSensorImg
  };

  const products = sensorsData as any[];

  const selectedProduct = selectedId ? products.find(p => p.id === selectedId) : null;

  if (selectedProduct) {
    console.log('--- DEBUG START ---');
    console.log('Selected Product Name:', selectedProduct.name);
    console.log('Selected Product ID:', selectedProduct.id);
    console.log('Selected Product ImageKey:', selectedProduct.imageKey); // Should be "vibratingRod"
    console.log('Imported Vibrating Rod Image:', vibratingRodImg);
    console.log('Image Map Entry:', imageMap['vibratingRod']);
    console.log('Selected Product Mapped Image:', imageMap[selectedProduct.imageKey]);
    console.log('--- DEBUG END ---');
  }

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
          product={{
            ...selectedProduct,
            image: imageMap[selectedProduct.imageKey] || levelSensorImg
          }}
          onClose={() => setSelectedId(null)}
          category="sensors"
        />
      )}
    </div>
  );
};

export default SensorsCatalog;
