import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  id: string;
  categoryLabel: string;
  name: string;
  capacity: string;
  efficiency: string;
  features: string[];
  icons: string[];
  image: string;
  onViewDetails: (id: string) => void;
  imageClassName?: string;
  index?: number;
};

const ProductCatalogCard: React.FC<Props> = ({
  id,
  categoryLabel,
  name,
  capacity,
  efficiency,
  features,
  icons,
  image,
  onViewDetails,
  imageClassName,
  index = 0
}) => {
  const visibleFeatures = features.slice(0, 2);
  const extraCount = Math.max(0, features.length - visibleFeatures.length);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="bg-card border border-border/40 rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow h-full"
    >
      <div
        className="relative h-40 w-full overflow-hidden cursor-pointer group/img"
        onClick={() => onViewDetails(id)}
      >
        <motion.img
          src={image}
          alt={name}
          className={`w-full h-full ${imageClassName || 'object-cover'}`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute left-4 top-4 px-3 py-1 rounded-full bg-yellow-400 text-black text-xs font-semibold shadow-sm">{categoryLabel}</div>
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="px-5 py-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{name}</h3>
        </div>

        <div className="mt-2 text-sm text-muted-foreground flex-1">
          <div><span className="font-medium text-foreground">Capacity:</span> {capacity}</div>
          <div><span className="font-medium text-foreground">Efficiency:</span> {efficiency}</div>

          <div className="mt-3 flex items-center gap-2 flex-wrap">
            {visibleFeatures.map((f, i) => (
              <span key={i} className="px-3 py-1 bg-accent/30 text-foreground rounded-full text-[10px] font-medium border border-border/30">{f}</span>
            ))}
            {extraCount > 0 && (<span className="px-2 py-1 text-xs text-muted-foreground">+{extraCount} more</span>)}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between pt-4 border-t border-border/10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {icons.map((ic, idx) => (
              <span key={idx} className="inline-flex items-center justify-center text-base grayscale contrast-125 opacity-70">{ic}</span>
            ))}
          </div>

          <button
            onClick={() => onViewDetails(id)}
            className="text-primary text-sm font-bold hover:underline underline-offset-4 flex items-center gap-1 group/details"
          >
            View Details
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
            >
              →
            </motion.span>
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCatalogCard;
