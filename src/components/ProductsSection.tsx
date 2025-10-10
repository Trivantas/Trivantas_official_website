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
      description: 'Precision measurement solutions for accurate monitoring of liquids, solids, gases, and slurries across diverse industrial applications.',
      image: levelSensorImg,
      features: [
        'High accuracy measurement',
        'Digital display and controls',
        'Multiple output options',
        'Easy installation and calibration'
      ],
      industries: ['Food & Dairy', 'Pharmaceuticals', 'Chemicals', 'Water Treatment'],
      link: '/products#sensors'
    },
    {
      title: 'Advanced Filtration Systems',
      description: 'High-performance industrial filtration technology designed for superior water treatment and process optimization.',
      image: filtrationImg,
      features: [
        'Multi-stage filtration',
        'Automated backwash cycles',
        'Corrosion-resistant materials',
        'Energy-efficient operation'
      ],
      industries: ['Water Treatment', 'Pharmaceuticals', 'Food Processing', 'Chemicals'],
      link: '/products#filtration'
    },
    {
      title: 'SPM (Special Purpose Machines)',
      description: 'Custom-engineered machines designed for specific industrial tasks, enhancing productivity and operational efficiency.',
      image: spmImg,
      features: [
        'Customized engineering solutions',
        'Automated operation',
        'Quality control integration',
        'Scalable designs'
      ],
      industries: ['Manufacturing', 'Automotive', 'Electronics', 'Packaging'],
      link: '/products#spm'
    },
    {
      title: 'Material Handling Equipment',
      description: 'Comprehensive solutions for safe and efficient lifting, shifting, and transportation of heavy materials.',
      image: materialHandlingImg,
      features: [
        'Heavy-duty construction',
        'Safety interlocks',
        'Variable speed controls',
        'Minimal maintenance'
      ],
      industries: ['Warehousing', 'Manufacturing', 'Mining', 'Construction'],
      link: '/products#handling'
    }
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
            Comprehensive hardware solutions engineered for precision, reliability, and performance. 
            Each product is designed to meet the demanding requirements of modern industrial applications.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
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
              Our engineering team specializes in developing tailored solutions for unique industrial challenges. 
              Let us help you find the perfect equipment for your specific requirements.
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