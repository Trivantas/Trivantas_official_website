import React, { useState } from 'react';
import { X } from 'lucide-react';
import productsData from '@/data/products.json';

type ProductSection = {
  title: string;
  items: string[];
};

type Category = {
  id: string;
  title: string;
  sections: ProductSection[];
};

const ProductsSection: React.FC = () => {
  const categories: Category[] = (productsData as { categories: Category[] }).categories || [];
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Products</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Explore our product categories. Click a card to learn more or contact us for a custom solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <article
              key={cat.id}
              className="bg-card border border-border/50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col"
              aria-labelledby={`cat-${cat.id}`}
            >
              <header>
                <h3 id={`cat-${cat.id}`} className="text-lg font-semibold text-foreground mb-3">
                  {cat.title}
                </h3>
              </header>

              <div className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {cat.sections.map((sec, sIdx) => (
                    <button
                      key={sIdx}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className="flex items-center gap-2 px-3 py-1 bg-accent/10 text-foreground text-sm rounded-full border border-border/30 hover:bg-accent/20 transition"
                    >
                      <span className="font-medium">{sec.title}</span>
                      <span className="text-xs text-muted-foreground">{`(${sec.items.length})`}</span>
                    </button>
                  ))}
                </div>
              </div>

              <footer className="mt-4">
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-hover transition"
                >
                  Learn more
                </button>
              </footer>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-card border border-border/50 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-4">
              <h2 className="text-2xl font-bold">{selectedCategory.title}</h2>
              <button
                onClick={() => setSelectedCategory(null)}
                className="p-1 hover:bg-white/20 rounded-lg transition"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {selectedCategory.sections.map((sec, sIdx) => (
                <div key={sIdx} className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{sec.title}</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {sec.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-muted-foreground text-sm bg-accent/30 px-3 py-2 rounded-md hover:bg-accent/50 transition"
                      >
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="bg-accent/30 px-6 py-4 flex gap-3 justify-end border-t border-border/50">
              <button
                onClick={() => setSelectedCategory(null)}
                className="px-6 py-2 rounded-md font-medium border border-input bg-background hover:bg-accent transition"
              >
                Close
              </button>
              <a href="/contact" className="inline-block">
                <button className="px-6 py-2 rounded-md font-medium bg-primary text-primary-foreground hover:bg-primary-hover transition">
                  Get Quote
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsSection;
