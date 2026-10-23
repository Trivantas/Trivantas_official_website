import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft,
  CheckCircle,
  Wrench,
  ShieldCheck,
  Headphones,
  FileText,
  Mail,
  Calendar,
  Layers,
  ArrowRight,
  Cpu,
  Gauge,
  Sliders,
  Check,
  Bot
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  getSpmBySlug,
  getRelatedSpmProducts,
  SpmItem,
} from '@/data/spmCatalog';

const SpmProductDetail: React.FC = () => {
  const { productname } = useParams<{ productname: string }>();
  const navigate = useNavigate();

  const product: SpmItem | undefined = productname
    ? getSpmBySlug(productname)
    : undefined;

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productname]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Cpu className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">Machine Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The SPM machine you requested (<code>{productname}</code>) could not be located in our catalog.
          </p>
          <Button onClick={() => navigate('/products/spm')} className="shadow-lg">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to SPM Machines
          </Button>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedSpmProducts(productname || '', 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Sticky Bar - Breadcrumb & Back */}
      <div className="border-b border-border/80 bg-background/95 backdrop-blur-md sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between text-sm flex-wrap gap-2">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-muted-foreground hover:text-foreground -ml-2 h-8 px-2.5 font-medium hover:bg-muted"
          >
            <Link to="/products/spm">
              <ArrowLeft className="mr-1.5 h-4 w-4" />
              <span>Back to SPM Machines</span>
            </Link>
          </Button>
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground flex items-center gap-1.5 flex-wrap">
            <Link to="/" className="hover:text-foreground hover:underline">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-foreground hover:underline">Products</Link>
            <span>/</span>
            <Link to="/products/spm" className="hover:text-foreground hover:underline">SPM</Link>
            <span>/</span>
            <span className="text-foreground font-semibold truncate max-w-[200px]" aria-current="page">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Text-Heavy Showcase Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="mb-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 text-xs font-semibold mb-3">
              <Bot className="h-3.5 w-3.5" />
              {product.categoryLabel || 'Special Purpose Machines (SPMs)'}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-4">
              {product.name}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Custom-engineered Special Purpose Machine designed for high-precision, repetitive manufacturing operations. Fully integrated with PLC automation, multi-axis servo drives, and robust industrial fixtures to drastically reduce cycle times.
            </p>
          </div>

          {/* 2-Column High-Density Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Specifications, Features, Applications */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Key Specifications Grid */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                  <Gauge className="mr-2 h-5 w-5 text-primary" />
                  Key Machine Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">Production Throughput</span>
                    <span className="font-semibold text-foreground text-sm block">
                      {product.capacity || 'Custom High-Speed Cycle Time'}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">Process Efficiency</span>
                    <span className="font-semibold text-foreground text-sm block">
                      {product.efficiency || 'Automated multi-station production'}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">Operating Speed / Range</span>
                    <span className="font-semibold text-foreground text-sm block">
                      {product.range || 'Custom RPM / Feed Rates'}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">Machining Accuracy</span>
                    <span className="font-semibold text-foreground text-sm block">
                      {product.accuracy || 'High Repeatability (±0.02 mm)'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm space-y-4">
                  <h3 className="text-lg font-bold text-foreground flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-industrial-success" />
                    Automation Features & Design Advantages
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {product.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 border border-border/40 text-sm">
                        <div className="w-5 h-5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-muted-foreground leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications */}
              {product.applications && product.applications.length > 0 && (
                <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm space-y-4">
                  <h3 className="text-lg font-bold text-foreground flex items-center">
                    <Sliders className="mr-2 h-5 w-5 text-industrial-info" />
                    Target Workpieces & Industry Applications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app: string, idx: number) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="px-3 py-1.5 text-sm bg-accent/40 border-border/70 hover:border-primary/50 transition-colors"
                      >
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Technical Details, Installation & Support, CTAs */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
              
              {/* Action CTAs Box */}
              <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-lg space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-border/50">
                  <Badge variant="secondary" className="px-3 py-1 font-mono text-xs uppercase bg-primary/10 text-primary">
                    {product.type || 'Custom SPM'}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-mono">
                    ID: {product.id}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground text-base">Inquire or Order this Machine</h3>
                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="w-full shadow-md hover:shadow-primary/20 transition-all font-medium"
                    onClick={() => navigate(`/contact?product=${encodeURIComponent(product.name)}`)}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Request Detailed Quote
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-primary/20 hover:border-primary/50 font-medium"
                    onClick={() => navigate(`/contact?product=${encodeURIComponent(product.name)}&type=datasheet`)}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Download Machine Datasheet
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full text-muted-foreground hover:text-foreground justify-center text-sm"
                    onClick={() => navigate('/schedule', { state: { productName: product.name } })}
                  >
                    <Calendar className="mr-2 h-4 w-4 text-primary" />
                    Schedule Engineering Consultation
                  </Button>
                </div>
              </div>

              {/* Technical Specifications Table */}
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div className="rounded-2xl border border-border/80 overflow-hidden bg-card shadow-sm">
                  <div className="bg-muted px-4 py-3 border-b border-border">
                    <h4 className="font-semibold text-sm text-foreground flex items-center">
                      <Layers className="mr-2 h-4 w-4 text-primary" />
                      Technical Details & Specifications
                    </h4>
                  </div>
                  <div className="divide-y divide-border/60 p-2">
                    {Object.entries(product.specifications).map(([key, val], idx) => (
                      <div
                        key={idx}
                        className="grid grid-cols-2 p-3 text-sm hover:bg-muted/30 transition-colors rounded-lg"
                      >
                        <span className="font-medium text-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-muted-foreground text-right truncate">
                          {String(val)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Turnkey Assurance & Support */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm space-y-4">
                <h4 className="font-semibold text-sm text-foreground flex items-center">
                  <Wrench className="mr-2 h-4 w-4 text-industrial-warning" />
                  Turnkey Commissioning & Support
                </h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-industrial-success flex-shrink-0 mt-0.5" />
                    <span>On-site mechanical installation, leveling & alignment</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Headphones className="h-4 w-4 text-industrial-success flex-shrink-0 mt-0.5" />
                    <span>PLC logic configuration, HMI setup & cycle trials</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Layers className="h-4 w-4 text-industrial-success flex-shrink-0 mt-0.5" />
                    <span>Operator training and comprehensive technical documentation</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Related SPM Machines */}
      {relatedProducts.length > 0 && (
        <section className="py-14 bg-muted/30 border-t border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Explore Other Special Purpose Machines</h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Drilling, tapping, milling, welding, and assembly automation
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/products/spm')}
                className="hidden sm:inline-flex"
              >
                View All SPM Machines
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  to={`/products/spm/${item.slug}`}
                  className="block group/item focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
                  aria-label={`View specifications for ${item.name}`}
                >
                  <Card
                    className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border border-border overflow-hidden flex flex-col p-6 h-full"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="text-[10px] uppercase font-mono">
                        {item.type || 'SPM Machine'}
                      </Badge>
                      <span className="text-xs text-muted-foreground font-mono">
                        {item.id}
                      </span>
                    </div>
                    <h3 className="font-bold text-foreground text-base group-hover:text-primary transition-colors mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-4 flex-grow">
                      {item.features?.[0] || item.capacity || 'Custom Industrial Automation'}
                    </p>
                    <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-primary">
                      <span>View Specifications</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Banner */}
      <section className="bg-primary text-primary-foreground py-12 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Need a Turnkey Special Purpose Machine Built for Your Component?
          </h2>
          <p className="text-primary-foreground/90 text-base mb-6 max-w-2xl mx-auto">
            Our SPM design team develops bespoke multi-station assembly, drilling, tapping, and testing stations engineered to optimize your plant's throughput.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="shadow-lg"
            >
              <Link to={`/contact?product=${encodeURIComponent(product.name)}`}>
                Consult SPM Automation Team
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Link to="/products/spm">
                Back to SPM Catalog
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpmProductDetail;
