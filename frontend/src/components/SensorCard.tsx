import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  name: string;
};

const SensorCard: React.FC<Props> = ({ name }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border border-border/30 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow cursor-default"
    >
      <div className="text-sm font-medium text-foreground leading-snug text-center">{name}</div>
    </motion.div>
  );
};

export default SensorCard;
