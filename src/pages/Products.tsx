import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import levelSensorImg from '@/assets/level-sensor.jpg';
import filtrationImg from '@/assets/filtration-system.jpg';
import spmImg from '@/assets/spm-machine.jpg';
import materialHandlingImg from '@/assets/material-handling.jpg';

interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  applications: string[];
  industries: string[];
}

const Products: React.FC = () => {
  const navigate = useNavigate();

  const products: Product[] = [
    {
      id: 'sensors',
      title: 'Smart Level Sensors by Trivantas',
      subtitle: 'Precision Monitoring for Liquids, Solids, Moisture & Gas',
      description:
        "Wherever precision sensing is essential, Trivantas delivers. Our smart level sensors are engineered for accuracy and durability—available in waterproof, dust-proof, high-temperature, and high-pressure designs. We also specialize in custom-built sensors tailored to your application's exact requirements.",
      image: levelSensorImg,
      features: [
        'Robust performance in demanding environments',
        'Waterproof, dust-proof, high-temperature & high-pressure options',
        'Tailor-made outputs to match your system requirements',
        'Application-specific modifications available',
      ],
      applications: [
        '💧 Liquid Level Sensors & Switches',
        '🧱 Solid Level Sensors & Switches',
        '💨 Moisture & Humidity Sensors',
        '🧪 Gas Level & Detection Sensors',
      ],
      industries: [
        '🍞 Food & Dairy',
        '🏗️ Cement',
        '🌾 Animal Feed',
        '⚗️ Chemicals',
        '📦 Packaging',
        '⚙️ Automation',
        '💊 Pharmaceuticals',
        '🔌 Power',
        '🧪 Polymers',
        '🏭 Steel',
        '💧 Water Treatment',
        '🛢️ Oil & Bulk Handling',
      ],
    },
    {
      id: 'filtration',
      title: 'Advanced Filtration Solutions by Trivantas',
      subtitle: 'Clean. Reliable. Recyclable.',
      description:
        "Where clean separation is critical, Trivantas delivers advanced filtration systems engineered for performance, durability, and sustainability. Whether you're filtering liquids, oils, emulsions, or gases, our systems are designed for high-pressure, high-temperature, waterproof, and dust-proof operations—adapted to meet your specific industrial needs.",
      image: filtrationImg,
      features: [
        'Multi-stage filtration options',
        'Customizable for specific media & particle size',
        'Recyclable filtration where applicable',
        'Heavy-duty performance in industrial environments',
        'Compact or large-scale systems tailored to your application',
      ],
      applications: [
        '💧 Coolant Filtration Systems',
        '🥫 Food-Grade Oil, Alcohol & Water Filtration',
        '🌊 Environmental Filtration Systems',
        '♻️ Recyclable Filtration Systems',
        '⚙️ Custom Engineered Filtration Solutions',
      ],
      industries: [
        '🛠️ Cutting Tools',
        '✈️ Aviation',
        '⚙️ Machining',
        '🔩 Bearings',
        '🚗 Automobile',
        '🌱 Oil & Bio-Diesel',
        '🏭 Rolling Mills',
        '🍽️ Food & Beverage',
        '🥂 Alcohol',
      ],
    },
    {
      id: 'handling',
      title: 'Material Handling Equipment by Trivantas',
      subtitle: 'Move Smarter. Save Time.',
      description:
        'When you need to shift and transfer materials quickly while saving time, our efficient material handling equipment is the perfect solution. Built for high temperatures as well as cooling operations, our systems deliver reliable performance even in the most demanding environments. We also design and supply custom-built material handling solutions tailored to your specific requirements and automation needs.',
      image: materialHandlingImg,
      features: [
        'End-to-end solutions for conveying, lifting, shifting, and storage',
        'Built for high-temperature & cooling operations',
        'Automation-ready systems for efficiency and precision',
        'Heavy-duty performance in industrial environments',
        'Customized layouts and concepts designed around your facility',
      ],
      applications: [
        '🔹 Conveyors & Chip Handling Systems',
        '🔹 Auxiliary & Specialized Conveyors',
        '🔹 Chip Processing & Advanced Solutions',
        '⚙️ Custom Engineered Material Handling Systems',
      ],
      industries: [
        '🚗 Automotive',
        '🏭 Steel & Heavy Engineering',
        '📦 Packaging',
        '🏢 Warehousing & Logistics',
        '🍽️ Food & Beverages',
        '🏗️ Cement & Construction',
        '⚗️ Chemical & Pharma',
        '🔌 Power & Energy',
      ],
    },
    {
      id: 'spm',
      title: 'SPM (Special Purpose Machines) by Trivantas',
      subtitle: 'Your Turnkey Project Partner',
      description:
        'Fully customized Special Purpose Machines (SPM) — from concept to commissioning. We design and build SPMs for productivity enhancement, automation, and precision engineering across industries.',
      image: spmImg,
      features: [
        'End-to-end support: concept, design, manufacturing & commissioning',
        'Built for productivity, reliability & long service life',
        'Automation-ready & industry-compliant',
        'Custom integration with your existing systems',
        'Proven expertise across multiple industries',
      ],
      applications: [
        '✔️ Assembly SPMs',
        '✔️ Drilling & Tapping SPMs',
        '✔️ Milling & Cutting SPMs',
        '✔️ Welding & Riveting SPMs',
        '✔️ Testing & Inspection SPMs',
        '✔️ Packaging & Process-Specific SPMs',
        '✔️ Fully Automated & Semi-Automated SPMs',
      ],
      industries: [
        '🍞 Food & Dairy',
        '🏗️ Cement',
        '🌾 Animal Feed',
        '⚗️ Chemicals',
        '📦 Packaging',
        '⚙️ Automation',
        '💊 Pharmaceuticals',
        '🔌 Power',
        '🧪 Polymers',
        '🏭 Steel',
      ],
    },
  ];

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

      {/* Products Section */}
      {products.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          className={`py-20 ${index % 2 === 1 ? 'bg-accent/30' : ''}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
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
                  <h3 className="text-xl font-bold text-foreground mb-4">Key Highlights</h3>
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
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
