import {
  SENSOR_CATALOG,
  SensorItem,
  slugify,
  getSensorSlug,
  getSensorBySlug,
} from '../data/sensorCatalog';

// Import sensor image assets
import levelSensorImg from '@/assets/smart-level-sensors-new.jpg';
import highAccuracyLevelIndicatorImg from '@/assets/high-accuracy-level-indicator.jpeg';
import floatSensorImg from '@/assets/float-level-sensor.jpg';
import vibratingForkSensorImgV2 from '@/assets/vibrating-fork-sensor.png';
import vibratingForkSolidSensorImg from '@/assets/vibrating-fork-solid-sensor.png';
import conductivitySensorImg from '@/assets/conductivity-level-sensor.png';
import capacitanceLevelSensorImgV2 from '@/assets/capacitance-level-sensor-v2.png';
import fuelTransmitterImg from '@/assets/fuel-level-transmitter.png';
import ultrasonicLevelSensorImgV2 from '@/assets/ultrasonic-level-sensor-v2.png';
import radarSensorImg from '@/assets/radar-level-sensor-v2.png';
import hydrostaticLevelSensorImg from '@/assets/hydrostatic-level-sensor.png';
import magneticLevelSwitchImg from '@/assets/magnetic-level-switch.jpg';
import miniSensorImg from '@/assets/mini-level-sensor.png';
import levelTransmitterImg from '@/assets/level-transmitter.png';
import electromagneticFlowMeterImg from '@/assets/electromagnetic-flow-meter.png';
import vibratingRodSensorImg from '@/assets/vibrating-rod-level-sensor.png';
import nrfProbeImg from '@/assets/nrf-rf-admittance-probe.jpg';
import rotatingPaddleImg from '@/assets/rotating-paddle-level-sensor.jpg';
import capacitanceProbeImg from '@/assets/capacitance-level-probe-v2.png';
import radarSolidLevelSensorImg from '@/assets/radar-solid-level-sensor.png';
import tiltSwitchImg from '@/assets/tilt-level-switch.png';
import microwaveMoistureImg from '@/assets/microwave-moisture-sensor.jpg';
import gasSensorImg from '@/assets/gas-sensor.png';
import ultrasonicFlowMeterImg from '@/assets/ultrasonic-flow-meter.jpg';
import rfAdmittanceLevelSwitchImg from '@/assets/rf-admittance-level-switch.png';
import hydroMixNewImg from '@/assets/hydro-mix-moisture-sensor-new.jpg';
import hydroMixXTImg from '@/assets/hydro-mix-xt-sensor.png';
import moistureSensorGenericImg from '@/assets/moisture-sensor-generic.png';

export type SensorProduct = SensorItem;
export { slugify, getSensorSlug, getSensorBySlug };

export const sensorImageMap: Record<string, string> = {
  levelIndicator: highAccuracyLevelIndicatorImg,
  float: floatSensorImg,
  vibratingFork: vibratingForkSensorImgV2,
  vibratingForkSolid: vibratingForkSolidSensorImg,
  conductivity: conductivitySensorImg,
  capacitance: capacitanceLevelSensorImgV2,
  fuelTransmitter: fuelTransmitterImg,
  ultrasonic: ultrasonicLevelSensorImgV2,
  radar: radarSensorImg,
  hydrostatic: hydrostaticLevelSensorImg,
  magneticSwitch: magneticLevelSwitchImg,
  sideMount: magneticLevelSwitchImg,
  topMount: floatSensorImg,
  miniSensor: miniSensorImg,
  levelTransmitter: levelTransmitterImg,
  electromagneticFlow: electromagneticFlowMeterImg,
  vibratingRod: vibratingRodSensorImg,
  nrfProbe: nrfProbeImg,
  rotatingPaddle: rotatingPaddleImg,
  capacitanceProbe: capacitanceProbeImg,
  microwaveRadarSolid: radarSolidLevelSensorImg,
  tiltSwitch: tiltSwitchImg,
  onlineMoisture: microwaveMoistureImg,
  bulkMoisture: moistureSensorGenericImg,
  capacitanceMoisture: capacitanceLevelSensorImgV2,
  microwaveMoisture: microwaveMoistureImg,
  gasPressure: gasSensorImg,
  ultrasonicGas: ultrasonicLevelSensorImgV2,
  capacitanceGas: gasSensorImg,
  ultrasonicFlow: ultrasonicFlowMeterImg,
  rfAdmittanceSwitch: rfAdmittanceLevelSwitchImg,
  hydroMixNew: hydroMixNewImg,
  hydroMixXT: hydroMixXTImg,
  moistureSensorGeneric: moistureSensorGenericImg,
  default: levelSensorImg,
};

/**
 * Resolve sensor product image by its imageKey
 */
export function getSensorImage(sensor: SensorProduct): string {
  if (sensor.imageKey && sensorImageMap[sensor.imageKey]) {
    return sensorImageMap[sensor.imageKey];
  }
  return sensorImageMap.default;
}

/**
 * Return all sensor products enriched with slug and resolved image
 */
export function getAllSensors(): (SensorProduct & { slug: string; image: string })[] {
  return SENSOR_CATALOG.map((sensor) => ({
    ...sensor,
    slug: getSensorSlug(sensor),
    image: getSensorImage(sensor),
  }));
}

/**
 * Get related sensors (excluding the current one)
 */
export function getRelatedSensors(
  currentIdOrSlug: string,
  limit: number = 3
): (SensorProduct & { slug: string; image: string })[] {
  const all = getAllSensors();
  const current = getSensorBySlug(currentIdOrSlug);

  return all
    .filter((s) => s.id !== current?.id && s.slug !== currentIdOrSlug)
    .slice(0, limit);
}
