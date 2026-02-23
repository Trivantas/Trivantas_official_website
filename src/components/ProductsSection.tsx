import React from 'react';
import ProductCard from './ProductCard';
import levelSensorImg from '@/assets/smart-level-pressure-gauge.jpg';
import filtrationImg from '@/assets/filtration-main-page.png';
import spmImg from '@/assets/spm-machine.jpg';
import materialHandlingImg from '@/assets/material-handling-v3.jpg';
import { motion } from 'framer-motion';

const ProductsSection = () => {
  const products = [
    {
      title: 'Smart Level Sensors ',
      description: 'Precision Monitoring for Liquids, Solids, Moisture & Gas',
      image: levelSensorImg,
      imageClassName: 'object-cover',
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
      title: 'Advanced Filtration Systems ',
      description: 'For any application where filtration and recycling are essential, our advanced filtration systems provide dependable performance.',
      image: filtrationImg,
      imageClassName: 'object-cover',
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
      title: 'Material Handling Equipment',
      description: 'When you need to shift and transfer materials quickly while saving time, our efficient material handling equipment is the perfect solution.',
      image: materialHandlingImg,
      features: [
        'Heavy-duty construction',
        'Safety interlocks',
        'Variable speed controls',
        'Minimal maintenance'
      ],
      industries: ['Warehousing', 'Manufacturing', 'Mining', 'Construction'],
      link: '/products#handling'
    },
    {
      title: 'SPM (Special Purpose Machines)',
      description: 'Your turnkey project partner fully customized Special Purpose Machines from concept to commissioning.',
      image: spmImg,
      features: [
        'Customized engineering solutions',
        'Automated operation',
        'Quality control integration',
        'Scalable designs'
      ],
      industries: ['Manufacturing', 'Automotive', 'Electronics', 'Packaging'],
      link: '/products#spm'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Our <span className="text-primary">Industrial Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive hardware solutions engineered for precision, reliability, and performance.
            Each product is designed to meet the demanding requirements of modern industrial applications.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-5xl mx-auto bg-primary text-primary-foreground rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Our engineering team specializes in developing tailored solutions for unique industrial challenges.
              Let us help you find the perfect equipment for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-md font-bold shadow-lg transition-all duration-300">
                  Contact Our Engineers
                </button>
              </a>
              <a href="/products">
                <button className="bg-white/10 border border-white/20 text-white hover:bg-white/20 px-8 py-3 rounded-md font-bold shadow-lg transition-all duration-300">
                  View All Products
                </button>
              </a>
            </div>
          </div>
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;