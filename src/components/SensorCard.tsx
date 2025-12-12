import React from 'react';

type Props = {
  name: string;
};

const SensorCard: React.FC<Props> = ({ name }) => {
  return (
    <div className="bg-white border border-border/30 rounded-lg p-3 shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5">
      <div className="text-sm font-medium text-foreground leading-snug text-center">{name}</div>
    </div>
  );
};

export default SensorCard;
