import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import levelSensorImg from '@/assets/level-sensor.jpg';
import filtrationImg from '@/assets/filtration-system.jpg';
import spmImg from '@/assets/spm-machine.jpg';
import materialHandlingImg from '@/assets/material-handling.jpg';

const Products = () => {
  const navigate = useNavigate();
  
  const products = [
    {
      id: 'sensors',
      title: 'Smart Level Sensors',
      subtitle: 'Precision Measurement Technology',
      description: 'Advanced sensor technology for accurate monitoring of liquids, solids, gases, and slurries across diverse industrial applications.',
      image: levelSensorImg,
      features: [
        'High accuracy measurement (±0.1% of reading)',
        'Digital display with intuitive interface',
        'Multiple output options (4-20mA, RS485, Ethernet)',
        'Temperature compensation technology',
        'Easy installation and calibration',
        'Explosion-proof variants available'
      ],
      applications: [
        'Tank level monitoring',
        'Flow measurement',
        'Interface detection',
        'Pump control systems'
      ],
      industries: ['Food & Dairy', 'Pharmaceuticals', 'Chemicals', 'Water Treatment', 'Oil & Gas']
    },
    {
      id: 'filtration',
      title: 'Advanced Filtration Systems',
      subtitle: 'Superior Water Treatment Technology',
      description: 'High-performance industrial filtration solutions designed for optimal water treatment and process optimization across multiple industries.',
      image: filtrationImg,
      features: [
        'Multi-stage filtration process',
        'Automated backwash cycles',
        'Corrosion-resistant materials',
        'Energy-efficient operation',
        'Real-time monitoring systems',
        'Customizable configurations'
      ],
      applications: [
        'Water purification',
        'Wastewater treatment',
        'Process water recycling',
        'Chemical separation'
      ],
      industries: ['Water Treatment', 'Pharmaceuticals', 'Food Processing', 'Chemicals', 'Power Generation']
    },
    {
      id: 'spm',
      title: 'SPM (Special Purpose Machines)',
      subtitle: 'Custom Engineering Solutions',
      description: 'Tailor-made machines designed for specific industrial tasks, engineered to enhance productivity and operational efficiency.',
      image: spmImg,
      features: [
        'Customized engineering solutions',
        'Automated operation and controls',
        'Quality control integration',
        'Scalable modular designs',
        'Advanced safety systems',
        'Remote monitoring capabilities'
      ],
      applications: [
        'Assembly automation',
        'Testing equipment',
        'Packaging solutions',
        'Material processing'
      ],
      industries: ['Manufacturing', 'Automotive', 'Electronics', 'Packaging', 'Aerospace']
    },
    {
      id: 'handling',
      title: 'Material Handling Equipment',
      subtitle: 'Efficient Material Transportation',
      description: 'Comprehensive solutions for safe and efficient lifting, shifting, and transportation of heavy materials across industrial facilities.',
      image: materialHandlingImg,
      features: [
        'Heavy-duty construction',
        'Safety interlocks and sensors',
        'Variable speed controls',
        'Minimal maintenance requirements',
        'Ergonomic operation design',
        'Integration with existing systems'
      ],
      applications: [
        'Conveyor systems',
        'Lifting equipment',
        'Storage solutions',
        'Sorting systems'
      ],
      industries: ['Warehousing', 'Manufacturing', 'Mining', 'Construction', 'Logistics']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Comprehensive industrial hardware solutions engineered for precision, reliability, and performance.
          </p>
        </div>
      </section>

      {/* Products Sections */}
      {products.map((product, index) => (
        <section 
          key={product.id} 
          id={product.id}
          className={`py-20 ${index % 2 === 1 ? 'bg-accent/30' : ''}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {product.title}
                  </h2>
                  <p className="text-lg text-primary font-semibold">{product.subtitle}</p>
                </div>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-industrial-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Applications</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.applications.map((app, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Industries */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Industries Served</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.industries.map((industry, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-secondary/10 text-secondary-foreground text-sm rounded-full border border-secondary/20"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="default" 
                  size="lg" 
                  className="group"
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  Get Quote for {product.title}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <Card className="overflow-hidden shadow-hover">
                  <CardContent className="p-0">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Solution?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Our engineering team is ready to help you select the right equipment for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Contact Our Engineers
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;