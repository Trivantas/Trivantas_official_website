import React from 'react';
import SensorCard from './SensorCard';

type Props = {
  items: string[];
  columns?: number; // optional control for columns
};

const SensorGrid: React.FC<Props> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {items.map((name, i) => (
        <SensorCard key={i} name={name} />
      ))}
    </div>
  );
};

export default SensorGrid;
