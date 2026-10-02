import React from 'react';
import { X } from 'lucide-react';
import SensorGrid from './SensorGrid';

type SensorGroup = {
  productId: string;
  title: string;
  items: string[];
};

type Props = {
  open: boolean;
  title: string;
  groups: SensorGroup[];
  onClose: () => void;
  onGetQuote: () => void;
};

const SensorModal: React.FC<Props> = ({ open, title, groups, onClose, onGetQuote }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card border border-border/50 rounded-xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-lg" aria-label="Close modal">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {groups.map((group, i) => (
            <div key={i} className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <SensorGrid items={group.items} />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-accent/30 px-6 py-4 flex gap-3 justify-end border-t border-border/50">
          <button onClick={onClose} className="px-6 py-2 rounded-md font-medium border border-input bg-background hover:bg-accent transition">Close</button>
          <button onClick={onGetQuote} className="px-6 py-2 rounded-md font-medium bg-primary text-primary-foreground hover:bg-primary-hover transition">Get Quote</button>
        </div>
      </div>
    </div>
  );
};

export default SensorModal;
