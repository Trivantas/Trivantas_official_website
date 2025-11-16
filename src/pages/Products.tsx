import React, { useState } from 'react';
import productsData from '@/data/products.json';
import levelSensorImg from '@/assets/level-sensor.jpg';
import filtrationImg from '@/assets/filtration-system.jpg';
import spmImg from '@/assets/spm-machine.jpg';
import materialHandlingImg from '@/assets/material-handling.jpg';
import { X } from 'lucide-react';

type ProductSection = {
  title: string;
  items: string[];
};

type Category = {
  id: string;
  title: string;
  sections: ProductSection[];
};

const imageMap: Record<string, string> = {
  sensors: levelSensorImg,
  filtration: filtrationImg,
  handling: materialHandlingImg,
  spm: spmImg,
};

const Products: React.FC = () => {
  const categories: Category[] = (productsData as { categories: Category[] }).categories || [];
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Industrial engineering solutions built for precision, durability, and performance — by Trivantas.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <article key={cat.id} className="bg-card rounded-xl shadow-md overflow-hidden flex flex-col">
                <div className="relative h-44 w-full">
                  <img src={imageMap[cat.id]} alt={cat.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute left-4 bottom-4 text-white">
                    <h3 className="text-2xl font-bold">{cat.title}</h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {cat.sections.map((sec, sIdx) => (
                        <span key={sIdx} className="px-3 py-1 bg-accent/10 text-foreground rounded-full text-sm border border-border/30">
                          {sec.title} <span className="text-xs text-muted-foreground">({sec.items.length})</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:bg-primary-hover transition"
                    >
                      Learn more
                    </button>
                    <a href="/contact" className="inline-block">
                      <button className="px-4 py-2 rounded-md border border-input bg-background hover:bg-accent transition">Contact</button>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal - same style as ProductsSection */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-card border border-border/50 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-4">
              <h2 className="text-2xl font-bold">{selectedCategory.title}</h2>
              <button onClick={() => setSelectedCategory(null)} className="p-1 hover:bg-white/20 rounded-lg">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {selectedCategory.sections.map((sec, sIdx) => (
                <div key={sIdx} className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{sec.title}</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {sec.items.map((item, i) => (
                      <li key={i} className="flex items-start text-muted-foreground text-sm bg-accent/30 px-3 py-2 rounded-md hover:bg-accent/50 transition">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-accent/30 px-6 py-4 flex gap-3 justify-end border-t border-border/50">
              <button onClick={() => setSelectedCategory(null)} className="px-6 py-2 rounded-md font-medium border border-input bg-background hover:bg-accent transition">Close</button>
              <a href="/contact" className="inline-block">
                <button className="px-6 py-2 rounded-md font-medium bg-primary text-primary-foreground hover:bg-primary-hover transition">Get Quote</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
