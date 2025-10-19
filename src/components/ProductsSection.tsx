import React from 'react';
import ProductCard from './ProductCard';
import levelSensorImg from '@/assets/level-sensor.jpg';
import filtrationImg from '@/assets/filtration-system.jpg';
import spmImg from '@/assets/spm-machine.jpg';
import materialHandlingImg from '@/assets/material-handling.jpg';

const ProductsSection = () => {
  const products = [
    {
      title: 'Smart Level Sensors',
      description:
        'Precision sensing for every application — our reliable level sensors deliver unmatched accuracy and performance for liquids, solids, moisture, and gas.',
      image: levelSensorImg,
      features: [
        'High precision and durable designs for all environments',
        'Waterproof, dust-proof, and high-temperature compatible',
        'Custom-built sensors for your exact system requirements',
        'Available for liquids, solids, moisture, and gas applications',
      ],
      industries: [
        'Food & Dairy',
        'Cement',
        'Chemicals',
        'Pharmaceuticals',
        'Automation',
        'Water Treatment',
      ],
      link: '/products#sensors',
    },
    {
      title: 'Advanced Filtration Solutions',
      description:
        'Clean. Reliable. Recyclable. Engineered for durability and performance, our advanced filtration systems meet every industrial demand.',
      image: filtrationImg,
      features: [
        'Multi-stage filtration and recyclable system options',
        'Customizable for specific media and particle size',
        'Heavy-duty performance under high temperature and pressure',
        'Tailored to meet your process and environmental requirements',
      ],
      industries: [
        'Cutting Tools',
        'Aviation',
        'Automobile',
        'Machining',
        'Oil & Bio-Diesel',
        'Food & Beverage',
      ],
      link: '/products#filtration',
    },
    {
      title: 'Material Handling Equipment',
      description:
        'Move smarter, save time — efficient systems for conveying, lifting, and transferring materials with automation-ready designs.',
      image: materialHandlingImg,
      features: [
        'End-to-end handling for lifting, shifting, and storage',
        'Built for high-temperature and cooling operations',
        'Automation-ready with robust and efficient layouts',
        'Custom-engineered systems tailored to your facility',
      ],
      industries: [
        'Automotive',
        'Steel & Heavy Engineering',
        'Packaging',
        'Warehousing',
        'Construction',
        'Food & Beverages',
      ],
      link: '/products#handling',
    },
    {
      title: 'SPM Machines',
      description:
        'Your turnkey project partner — fully customized Special Purpose Machines, built from concept to commissioning.',
      image: spmImg,
      features: [
        'Automation and productivity-focused engineering',
        'Custom integration with existing equipment',
        'Built for reliability and long service life',
        'Tailor-made for your process, speed, and workflow',
      ],
      industries: [
        'Manufacturing',
        'Automotive',
        'Electronics',
        'Packaging',
        'Pharma',
        'Food & Dairy',
      ],
      link: '/products#spm',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Industrial Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trivantas delivers precision-engineered systems for sensing, filtration,
            material handling, and automation — built to perform in the most demanding
            industrial environments.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-card border border-border/50">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can’t find exactly what you’re looking for? Our engineering team designs
              tailor-made solutions to match your application, process, and performance
              goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-block">
                <button className="bg-primary text-primary-foreground hover:bg-primary-hover px-8 py-3 rounded-md font-medium shadow-card hover:shadow-hover transition-all duration-200">
                  Contact Our Engineers
                </button>
              </a>
              <a href="/products" className="inline-block">
                <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-md font-medium transition-all duration-200">
                  View All Products
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
