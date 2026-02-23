import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  if (!product) return null;

  // Check if we should use the new text-heavy layout (no image)
  const isTextLayout = category === 'filtration' || category === 'spm' || category === 'handling';

  return (
    <Dialog open={!!product} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="mb-6 space-y-2">
          <DialogHeader className="p-0 space-y-2 text-left">
            <DialogTitle className="text-2xl font-bold text-foreground">
              {product.name}
            </DialogTitle>
            <Badge variant="secondary" className="w-fit">
              {product.type}
            </Badge>
          </DialogHeader>
        </div>

        {isTextLayout ? (
          /* Text-Heavy 2-Column Layout (No Image) */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Left Column: Specs, Features, Applications */}
            <div className="space-y-8">
              {/* Key Specifications */}
              <div className="border border-border rounded-md overflow-hidden">
                <h4 className="bg-muted px-4 py-2 font-medium text-sm text-foreground border-b border-border">
                  Key Specifications
                </h4>
                <div className="p-4 space-y-3 bg-card">
                  <div className="flex justify-between border-b border-border/50 pb-2 last:border-0 last:pb-0">
                    <span className="text-muted-foreground">Capacity</span>
                    <span className="font-medium text-foreground text-right">{product.capacity || 'As per customer requirements'}</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2 last:border-0 last:pb-0">
                    <span className="text-muted-foreground">Efficiency</span>
                    <span className="font-medium text-foreground text-right">{product.efficiency || 'As per customer requirements'}</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2 last:border-0 last:pb-0">
                    <span className="text-muted-foreground">Range</span>
                    <span className="font-medium text-foreground text-right">{product.range || 'As per customer requirements'}</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2 last:border-0 last:pb-0">
                    <span className="text-muted-foreground">Accuracy</span>
                    <span className="font-medium text-foreground text-right">{product.accuracy || 'As per customer requirements'}</span>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-industrial-success" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {product.features?.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Users className="mr-2 h-5 w-5 text-industrial-info" />
                  Applications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications?.map((app: string, index: number) => (
                    <Badge key={index} variant="outline" className="bg-accent/50">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Tech Details, Installation, Support, CTAs */}
            <div className="space-y-8">
              {/* Technical Details */}
              <div className="border border-border rounded-md overflow-hidden">
                <h4 className="bg-muted px-4 py-2 font-medium text-sm text-foreground border-b border-border">
                  Technical Details
                </h4>
                <div className="p-4 space-y-3 bg-card">
                  {Object.entries(product.specifications || {}).map(([key, value], index) => (
                    <div key={index} className="flex justify-between border-b border-border/50 pb-2 last:border-0 last:pb-0">
                      <span className="text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="font-medium text-foreground text-right">{value as string}</span>
                    </div>
                  ))}
                  {(!product.specifications || Object.keys(product.specifications).length === 0) && (
                    <div className="text-sm text-muted-foreground italic">No additional technical details.</div>
                  )}
                </div>
              </div>

              {/* Installation & Support */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Wrench className="mr-2 h-5 w-5 text-industrial-warning" />
                  Installation & Support
                </h4>
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

              {/* CTAs */}
              <div className="space-y-3 pt-4">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => {
                    onClose();
                    navigate('/contact');
                  }}
                >
                  Request Detailed Quote
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  onClick={() => {
                    onClose();
                    navigate('/contact');
                  }}
                >
                  Download Technical Datasheet
                </Button>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => {
                    onClose();
                    navigate('/schedule', { state: { productName: product.name } });
                  }}
                >
                  Schedule Technical Consultation
                </Button>
              </div>
            </div>
          </div>
        ) : (
          /* Original Layout (Image + Specs) for Sensors etc. */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Left Column: Image, Features, Applications */}
            <div className="space-y-8">
              {/* Product Image */}
              <div className="flex items-center justify-center bg-muted/20 rounded-lg p-4">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    style={product.imageStyle}
                    className="max-h-[400px] w-full object-contain rounded-md"
                  />
                ) : (
                  <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground">
                    No Image Available
                  </div>
                )}
              </div>

              <Separator />

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-industrial-success" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {product.features?.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Users className="mr-2 h-5 w-5 text-industrial-info" />
                  Applications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications?.map((app: string, index: number) => (
                    <Badge key={index} variant="outline" className="bg-accent/50">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Key Specs, Installation, CTA */}
            <div className="space-y-6">
              {/* Key Specifications Table */}
              <div className="border border-border rounded-md overflow-hidden">
                <h4 className="bg-muted px-4 py-2 font-medium text-sm text-foreground border-b border-border">
                  Key Specifications
                </h4>
                <div className="p-4 space-y-3 bg-card">
                  {category === 'sensors' && (
                    <>
                      <div className="flex justify-between border-b border-border/50 pb-2 last:border-0 last:pb-0">
                        <span className="text-muted-foreground">Measurement Range</span>
                        <span className="font-medium text-foreground text-right">{product.range}</span>
                      </div>
                      <div className="flex justify-between border-b border-border/50 pb-2 last:border-0 last:pb-0">
                        <span className="text-muted-foreground">Accuracy</span>
                        <span className="font-medium text-foreground text-right">{product.accuracy}</span>
                      </div>
                    </>
                  )}
                  {/* Technical Details (Subset) */}
                  {Object.entries(product.specifications || {}).map(([key, value], index) => (
                    <div key={index} className="flex justify-between border-b border-border/50 pb-2 last:border-0 last:pb-0">
                      <span className="text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="font-medium text-foreground text-right">{value as string}</span>
                    </div>
                  ))}
                </div>
              </div>

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
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => {
                    onClose();
                    navigate('/contact');
                  }}
                >
                  Request Detailed Quote
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  onClick={() => {
                    onClose();
                    navigate('/contact');
                  }}
                >
                  Download Technical Datasheet
                </Button>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => {
                    onClose();
                    navigate('/schedule', { state: { productName: product.name } });
                  }}
                >
                  Schedule Technical Consultation
                </Button>
              </div>
            </div>
          </div>
        )}

      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;