import React from 'react';

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
};

const ProductCatalogCard: React.FC<Props> = ({ id, categoryLabel, name, capacity, efficiency, features, icons, image, onViewDetails }) => {
  const visibleFeatures = features.slice(0, 2);
  const extraCount = Math.max(0, features.length - visibleFeatures.length);

  return (
    <article className="bg-card border border-border/40 rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-transform transform hover:-translate-y-1">
      <div className="relative h-36 w-full">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute left-4 top-4 px-3 py-1 rounded-full bg-yellow-400 text-black text-xs font-semibold">{categoryLabel}</div>
      </div>

      <div className="px-5 py-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-bold text-foreground">{name}</h3>
        </div>

        <div className="mt-2 text-sm text-muted-foreground">
          <div><span className="font-medium text-foreground">Capacity:</span> {capacity}</div>
          <div><span className="font-medium text-foreground">Efficiency:</span> {efficiency}</div>
        </div>

        <div className="mt-3 flex items-center gap-2 flex-wrap">
          {visibleFeatures.map((f, i) => (
            <span key={i} className="px-3 py-1 bg-accent/10 text-foreground rounded-full text-xs border border-border/30">{f}</span>
          ))}
          {extraCount > 0 && (<span className="px-2 py-1 text-xs text-muted-foreground">+{extraCount} more</span>)}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {icons.map((ic, idx) => (
              <span key={idx} className="inline-flex items-center justify-center text-base">{ic}</span>
            ))}
          </div>

          <button onClick={() => onViewDetails(id)} className="text-primary text-sm font-semibold hover:underline">View Details</button>
        </div>
      </div>
    </article>
  );
};

export default ProductCatalogCard;
