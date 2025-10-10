import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Wrench, BarChart3, Users, X } from 'lucide-react';

interface ProductDetailModalProps {
  product: any;
  onClose: () => void;
  category?: string;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose, category }) => {
  if (!product) return null;

  return (
    <Dialog open={!!product} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-foreground">
              {product.name}
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <Badge variant="secondary" className="w-fit">
            {product.type}
          </Badge>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Key Information */}
          <div className="space-y-6">
            {/* Quick Specs */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                Key Specifications
              </h3>
              <div className="space-y-3">
                {category === 'sensors' && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Measurement Range:</span>
                      <span className="font-medium">{product.range}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Accuracy:</span>
                      <span className="font-medium">{product.accuracy}</span>
                    </div>
                  </>
                )}
                {category === 'filtration' && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Flow Capacity:</span>
                      <span className="font-medium">{product.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Efficiency:</span>
                      <span className="font-medium">{product.efficiency}</span>
                    </div>
                  </>
                )}
                {category === 'spm' && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Production Rate:</span>
                      <span className="font-medium">{product.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Efficiency:</span>
                      <span className="font-medium">{product.efficiency}</span>
                    </div>
                  </>
                )}
                {category === 'handling' && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Load Capacity:</span>
                      <span className="font-medium">{product.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {product.span ? 'Working Span:' : product.speed ? 'Operating Speed:' : 'Lift Height:'}
                      </span>
                      <span className="font-medium">{product.span || product.speed || product.lift}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <Separator />

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-industrial-success" />
                Key Features
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {product.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Applications */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Users className="mr-2 h-5 w-5 text-industrial-info" />
                Applications
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app: string, index: number) => (
                  <Badge key={index} variant="outline" className="bg-accent/50">
                    {app}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Technical Details */}
          <div className="space-y-6">
            {/* Technical Specifications */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Wrench className="mr-2 h-5 w-5 text-industrial-warning" />
                Technical Details
              </h3>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}:
                    </span>
                    <span className="font-medium">{value as string}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Installation & Support */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Installation & Support
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-industrial-success rounded-full mt-2 flex-shrink-0"></div>
                  <span>Complete installation support by certified technicians</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-industrial-success rounded-full mt-2 flex-shrink-0"></div>
                  <span>Comprehensive training for operation and maintenance</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-industrial-success rounded-full mt-2 flex-shrink-0"></div>
                  <span>24/7 technical support and remote monitoring</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-industrial-success rounded-full mt-2 flex-shrink-0"></div>
                  <span>1-year comprehensive warranty with extended options</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button className="w-full" size="lg">
                Request Detailed Quote
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                Download Technical Datasheet
              </Button>
              <Button variant="ghost" className="w-full">
                Schedule Technical Consultation
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;