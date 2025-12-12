import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Info, Zap, Settings, Shield } from 'lucide-react';
import ProductDetailModal from '@/components/ProductDetailModal';
import sensorsData from '@/data/sensors.json';
import filtrationData from '@/data/filtration.json';
import handlingData from '@/data/handling.json';
import spmData from '@/data/spm.json';

const ProductDetails = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const productCategories: Record<string, any> = {
    sensors: {
      title: 'Smart Level Sensors',
      description: 'Comprehensive range of precision measurement solutions',
      products: (sensorsData as any) || []
    },
    filtration: {
      title: 'Advanced Filtration Systems',
      description: 'Industrial-grade filtration solutions for various applications',
      products: (filtrationData as any) || []
    },
    spm: {
      title: 'Special Purpose Machines',
      description: 'Custom-engineered automation solutions',
      products: (spmData as any) || []
    },
    handling: {
      title: 'Material Handling Equipment',
      description: 'Comprehensive lifting and transportation solutions',
      products: (handlingData as any) || []
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