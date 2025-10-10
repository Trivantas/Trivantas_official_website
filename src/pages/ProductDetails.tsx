import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Info, Zap, Settings, Shield } from 'lucide-react';
import ProductDetailModal from '@/components/ProductDetailModal';

const ProductDetails = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const productCategories = {
    sensors: {
      title: 'Smart Level Sensors',
      description: 'Comprehensive range of precision measurement solutions',
      products: [
        {
          id: 1,
          name: 'Ultrasonic Level Sensor ULS-300',
          type: 'Non-contact measurement',
          range: '0.3m to 15m',
          accuracy: '±0.25% of measured value',
          features: ['Non-contact measurement', 'Self-cleaning technology', 'Temperature compensation', 'IP67 protection'],
          applications: ['Water tanks', 'Chemical storage', 'Waste management'],
          specifications: { power: '24VDC', output: '4-20mA / RS485', material: 'PVDF housing' }
        },
        {
          id: 2,
          name: 'Radar Level Sensor RLS-500',
          type: 'Microwave technology',
          range: '0.5m to 50m',
          accuracy: '±1mm',
          features: ['Through-air measurement', 'Unaffected by vapor/foam', 'High temperature capability', 'HART protocol'],
          applications: ['Oil & gas storage', 'Chemical processing', 'Food industry'],
          specifications: { power: '24VDC', output: '4-20mA / HART', material: 'Stainless steel 316L' }
        },
        {
          id: 3,
          name: 'Capacitive Level Sensor CLS-200',
          type: 'RF capacitance',
          range: '0.1m to 20m',
          accuracy: '±0.5% of span',
          features: ['Continuous level measurement', 'Interface detection', 'Coating resistant', 'Easy calibration'],
          applications: ['Powder materials', 'Granular solids', 'Slurries'],
          specifications: { power: '24VDC', output: '4-20mA', material: 'PTFE coated probe' }
        }
      ]
    },
    filtration: {
      title: 'Advanced Filtration Systems',
      description: 'Industrial-grade filtration solutions for various applications',
      products: [
        {
          id: 4,
          name: 'Multi-Media Filter MMF-1000',
          type: 'Gravity filtration',
          capacity: '10-100 m³/hr',
          efficiency: '99.5% turbidity removal',
          features: ['Multi-layer media', 'Automatic backwash', 'Low maintenance', 'Corrosion resistant'],
          applications: ['Water treatment', 'Pre-filtration', 'Industrial process water'],
          specifications: { pressure: '6 bar max', material: 'FRP/SS vessel', media: 'Sand/Anthracite/GAC' }
        },
        {
          id: 5,
          name: 'Reverse Osmosis System RO-2000',
          type: 'Membrane filtration',
          capacity: '5-200 m³/day',
          efficiency: '99.7% salt rejection',
          features: ['High-pressure pumps', 'Energy recovery', 'CIP system', 'PLC control'],
          applications: ['Desalination', 'Ultra-pure water', 'Pharmaceutical water'],
          specifications: { pressure: '55 bar', recovery: '75%', membranes: 'Spiral wound' }
        },
        {
          id: 6,
          name: 'Bag Filter System BFS-500',
          type: 'Mechanical filtration',
          capacity: '1-50 m³/hr',
          efficiency: '1-500 micron filtration',
          features: ['Quick-change bags', 'Pressure monitoring', 'Multiple configurations', 'Sanitary design'],
          applications: ['Chemical processing', 'Food & beverage', 'Paint filtration'],
          specifications: { pressure: '10 bar max', material: 'SS316L', bags: 'Various materials' }
        }
      ]
    },
    spm: {
      title: 'Special Purpose Machines',
      description: 'Custom-engineered automation solutions',
      products: [
        {
          id: 7,
          name: 'Automated Assembly Line AAL-X1',
          type: 'Assembly automation',
          capacity: '100-500 units/hour',
          efficiency: '99.8% uptime',
          features: ['Vision inspection', 'Robotics integration', 'Quality control', 'Data logging'],
          applications: ['Automotive parts', 'Electronics assembly', 'Medical devices'],
          specifications: { power: '415V 3-phase', control: 'Siemens PLC', footprint: '10m x 3m' }
        },
        {
          id: 8,
          name: 'Testing & Inspection Station TIS-200',
          type: 'Quality control',
          capacity: '50-200 tests/hour',
          efficiency: '±0.01% accuracy',
          features: ['Automated testing', 'Data acquisition', 'Statistical analysis', 'Rejection system'],
          applications: ['Component testing', 'Quality assurance', 'R&D applications'],
          specifications: { power: '230V single phase', software: 'LabVIEW based', accuracy: 'Class 0.1' }
        },
        {
          id: 9,
          name: 'Packaging Machine PM-Auto',
          type: 'Packaging automation',
          capacity: '60-300 packs/min',
          efficiency: '99.5% accuracy',
          features: ['Multi-format capability', 'Servo drives', 'HMI interface', 'Changeover memory'],
          applications: ['Food packaging', 'Pharmaceutical', 'Consumer goods'],
          specifications: { power: '415V 3-phase', control: 'Allen Bradley', formats: 'Multiple sizes' }
        }
      ]
    },
    handling: {
      title: 'Material Handling Equipment',
      description: 'Comprehensive lifting and transportation solutions',
      products: [
        {
          id: 10,
          name: 'Overhead Crane OHC-50T',
          type: 'Heavy lifting',
          capacity: '5-50 tons',
          span: '10-30 meters',
          features: ['Variable speed control', 'Load monitoring', 'Safety systems', 'Remote operation'],
          applications: ['Steel industry', 'Heavy manufacturing', 'Shipyards'],
          specifications: { power: '415V 3-phase', duty: 'A5/M5', control: 'Radio remote' }
        },
        {
          id: 11,
          name: 'Conveyor System CS-Belt',
          type: 'Material transport',
          capacity: '100-1000 kg/m',
          speed: '0.1-2.0 m/s',
          features: ['Modular design', 'Easy maintenance', 'Various belt types', 'Automated controls'],
          applications: ['Warehousing', 'Distribution', 'Manufacturing'],
          specifications: { power: 'Variable', length: 'Custom', width: '300-1200mm' }
        },
        {
          id: 12,
          name: 'Pneumatic Lift Table PLT-2000',
          type: 'Vertical lifting',
          capacity: '500-2000 kg',
          lift: '0.5-3.0 meters',
          features: ['Smooth operation', 'Safety valves', 'Position sensors', 'Manual override'],
          applications: ['Ergonomic lifting', 'Assembly lines', 'Maintenance'],
          specifications: { power: 'Compressed air', pressure: '6-8 bar', safety: 'CE certified' }
        }
      ]
    }
  };

  const currentCategory = productCategories[category as keyof typeof productCategories];

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Category Not Found</h1>
          <Button onClick={() => navigate('/products')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/products')}
            className="mb-6 text-white hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentCategory.title}</h1>
          <p className="text-xl text-white/90 max-w-3xl">{currentCategory.description}</p>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCategory.products.map((product) => (
              <Card 
                key={product.id} 
                className="group cursor-pointer hover:shadow-hover transition-all duration-300 hover:-translate-y-2"
                onClick={() => setSelectedProduct(product)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{product.type}</Badge>
                    <Info className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    {category === 'sensors' && (
                      <>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Range:</span> {product.range}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Accuracy:</span> {product.accuracy}
                        </p>
                      </>
                    )}
                    {category === 'filtration' && (
                      <>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Capacity:</span> {product.capacity}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Efficiency:</span> {product.efficiency}
                        </p>
                      </>
                    )}
                    {category === 'spm' && (
                      <>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Capacity:</span> {product.capacity}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Efficiency:</span> {product.efficiency}
                        </p>
                      </>
                    )}
                    {category === 'handling' && (
                      <>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Capacity:</span> {product.capacity}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">
                            {product.span ? 'Span:' : product.speed ? 'Speed:' : 'Lift:'}
                          </span> {product.span || product.speed || product.lift}
                        </p>
                      </>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 3 && (
                      <span className="text-xs text-muted-foreground px-2 py-1">
                        +{product.features.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      <Zap className="h-4 w-4 text-industrial-warning" />
                      <Settings className="h-4 w-4 text-industrial-info" />
                      <Shield className="h-4 w-4 text-industrial-success" />
                    </div>
                    <span className="text-sm text-primary font-medium group-hover:underline">
                      View Details
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need Technical Specifications?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our technical team can provide detailed specifications, custom configurations, and engineering support for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigate('/contact')} size="lg">
              Request Technical Data
            </Button>
            <Button variant="outline" onClick={() => navigate('/schedule')} size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
          category={category}
        />
      )}
    </div>
  );
};

export default ProductDetails;