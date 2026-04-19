import React from 'react';
import ProductCard from './ProductCard';
import levelSensorImg from '@/assets/smart-level-sensors-new.jpg';
import filtrationImg from '@/assets/filtration-main-page.png';
import spmImg from '@/assets/spm-machine.jpg';
import materialHandlingImg from '@/assets/material-handling-v3.jpg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

      </div>
    </section>
  );
};

export default ProductsSection;