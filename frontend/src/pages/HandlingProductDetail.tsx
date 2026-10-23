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
  Truck,
  Cog,
  Gauge,
  Sliders,
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  getHandlingBySlug,
  getHandlingImage,
  getRelatedHandlingProducts,
  hasSpecificHandlingImage,
  HandlingProduct,
} from '@/lib/handlingUtils';

const HandlingProductDetail: React.FC = () => {
  const { productname } = useParams<{ productname: string }>();
  const navigate = useNavigate();

  const product: HandlingProduct | undefined = productname
    ? getHandlingBySlug(productname)
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
            <Truck className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">Equipment Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The handling equipment you requested (<code>{productname}</code>) could not be located in our catalog.
          </p>
          <Button onClick={() => navigate('/products/handling')} className="shadow-lg">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Material Handling
          </Button>
        </div>
      </div>
    );
  }

  const showImage = hasSpecificHandlingImage(product);
  const productImage = showImage ? getHandlingImage(product) : '';
  const relatedProducts = getRelatedHandlingProducts(productname || '', 3);

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
            <Link to="/products/handling">
              <ArrowLeft className="mr-1.5 h-4 w-4" />
              <span>Back to Material Handling</span>
            </Link>
          </Button>
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground flex items-center gap-1.5 flex-wrap">
            <Link to="/" className="hover:text-foreground hover:underline">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-foreground hover:underline">Products</Link>
            <span>/</span>
            <Link to="/products/handling" className="hover:text-foreground hover:underline">Material Handling</Link>
            <span>/</span>
            <span className="text-foreground font-semibold truncate max-w-[200px]" aria-current="page">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {showImage ? (
            /* Layout WITH Image Card */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Left Column: Product Image Showcase */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-5 lg:sticky lg:top-32"
              >
                <div className="relative rounded-3xl bg-gradient-to-b from-white/90 via-slate-50/70 to-slate-100/90 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-950/90 backdrop-blur-2xl border border-white/80 dark:border-slate-800 p-8 shadow-2xl overflow-hidden group">
                  
                  {/* Tech Reticle Corners */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors"></div>
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors"></div>
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors"></div>

                  {/* Subtle Ambient Glow */}
                  <div className="absolute -top-24 -right-24 w-60 h-60 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
                  <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>

                  {/* Product Type Tag */}
                  <div className="relative z-10 flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="px-3 py-1 font-mono text-xs tracking-wider uppercase bg-primary/10 text-primary border-primary/20">
                      {product.type || 'Conveyor System'}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-mono">
                      ID: {product.id}
                    </span>
                  </div>

                  {/* Image Container */}
                  <div className="relative h-[340px] sm:h-[400px] w-full flex items-center justify-center p-4 my-2 rounded-2xl overflow-hidden bg-white/40 dark:bg-slate-950/40">
                    <img
                      src={productImage}
                      alt={`${product.name} - ${product.type || 'Material Handling Equipment'} by Trivantas`}
                      fetchPriority="high"
                      decoding="async"
                      className="max-h-full max-w-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Quick Highlights Footer */}
                  <div className="relative z-10 mt-6 pt-5 border-t border-border/60 grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 rounded-xl bg-card/60 border border-border/40">
                      <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-1">Capacity</span>
                      <span className="font-semibold text-foreground text-sm truncate block" title={product.capacity}>
                        {product.capacity || 'Custom Sizing'}
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-card/60 border border-border/40">
                      <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-1">Build</span>
                      <span className="font-semibold text-foreground text-sm truncate block">
                        Heavy Industrial
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Product Information & CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-7 space-y-8"
              >
                {/* Product Header */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-semibold mb-3">
                    <Truck className="h-3.5 w-3.5" />
                    {product.categoryLabel || 'Material Handling Equipment'}
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-4">
                    {product.name}
                  </h1>
                  
                  {(product.capacity || product.efficiency) && (
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                      {product.capacity && (
                        <div className="flex items-center gap-1.5">
                          <span className="font-medium text-foreground">Capacity:</span>
                          <span>{product.capacity}</span>
                        </div>
                      )}
                      {product.efficiency && (
                        <div className="flex items-center gap-1.5">
                          <span className="font-medium text-foreground">Efficiency:</span>
                          <span>{product.efficiency}</span>
                        </div>
                      )}
                    </div>
                  )}

                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Heavy-duty industrial material handling and conveying equipment built for high durability, non-stop factory throughput, low maintenance, and seamless integration with machining centers and automated production lines.
                  </p>
                </div>

                {/* CTAs */}
                <div className="p-6 rounded-2xl bg-card border border-border/60 shadow-lg space-y-4">
                  <h3 className="font-semibold text-foreground text-base">Inquire or Order this Equipment</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button
                      size="lg"
                      className="w-full shadow-md hover:shadow-primary/20 transition-all font-medium"
                      onClick={() => navigate(`/contact?product=${encodeURIComponent(product.name)}`)}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Request Technical Quote
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-primary/20 hover:border-primary/50 font-medium"
                      onClick={() => navigate(`/contact?product=${encodeURIComponent(product.name)}&type=datasheet`)}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Download Datasheet
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full text-muted-foreground hover:text-foreground justify-center text-sm"
                    onClick={() => navigate('/schedule', { state: { productName: product.name } })}
                  >
                    <Calendar className="mr-2 h-4 w-4 text-primary" />
                    Schedule a Consultation with our Automation Engineers
                  </Button>
                </div>

                {/* Key Features */}
                {product.features && product.features.length > 0 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-foreground flex items-center">
                      <CheckCircle className="mr-2.5 h-5 w-5 text-industrial-success" />
                      Key Features & Advantages
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.map((feature: string, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-card/60 border border-border/50 text-sm"
                        >
                          <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                          <span className="text-muted-foreground leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technical Specifications */}
                {product.specifications && Object.keys(product.specifications).length > 0 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-foreground flex items-center">
                      <Layers className="mr-2.5 h-5 w-5 text-primary" />
                      Technical Specifications
                    </h2>
                    <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-sm">
                      <div className="divide-y divide-border/60">
                        {Object.entries(product.specifications).map(([key, val], idx) => (
                          <div
                            key={idx}
                            className="grid grid-cols-1 sm:grid-cols-3 p-3.5 text-sm hover:bg-muted/40 transition-colors"
                          >
                            <span className="font-medium text-foreground capitalize sm:col-span-1">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                            <span className="text-muted-foreground sm:col-span-2">
                              {String(val)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Applications */}
                {product.applications && product.applications.length > 0 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-foreground flex items-center">
                      <Cog className="mr-2.5 h-5 w-5 text-industrial-info" />
                      Target Industries & Applications
                    </h2>
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

                {/* Assurance & Support Box */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-muted/40 border border-border/50 flex flex-col items-center text-center">
                    <ShieldCheck className="h-6 w-6 text-primary mb-2" />
                    <span className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Heavy Industrial Build</span>
                    <span className="text-xs text-muted-foreground">Rugged fabrication for demanding workshop duties</span>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/40 border border-border/50 flex flex-col items-center text-center">
                    <Wrench className="h-6 w-6 text-industrial-warning mb-2" />
                    <span className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">On-Site Integration</span>
                    <span className="text-xs text-muted-foreground">Custom mounting, chutes & motor sizing</span>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/40 border border-border/50 flex flex-col items-center text-center">
                    <Headphones className="h-6 w-6 text-industrial-success mb-2" />
                    <span className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Spare Parts Support</span>
                    <span className="text-xs text-muted-foreground">Chains, slats, scrapers & replacement spares</span>
                  </div>
                </div>

              </motion.div>
            </div>
          ) : (
            /* Layout WITHOUT Image Card (Text-Focused Layout for Chip Processing & Advanced Solutions) */
            <div className="space-y-10">
              
              {/* Header Banner */}
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-semibold mb-3">
                  <Cog className="h-3.5 w-3.5" />
                  {product.categoryLabel || 'Material Handling Equipment'}
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-4">
                  {product.name}
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Specialized chip processing, shredding, and automated material handling system engineered to compact metal scrap, recover residual cutting oil, and streamline production workshop flow.
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
                      Key Operating Capabilities
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                        <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">Scrap / Material Throughput</span>
                        <span className="font-semibold text-foreground text-sm block">
                          {product.capacity || 'Custom High Capacity'}
                        </span>
                      </div>
                      <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                        <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">Process Efficiency</span>
                        <span className="font-semibold text-foreground text-sm block">
                          {product.efficiency || 'Automated volume reduction & oil recovery'}
                        </span>
                      </div>
                      <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                        <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">Operating Parameters</span>
                        <span className="font-semibold text-foreground text-sm block">
                          {product.range || 'Custom Sizing & Stroke'}
                        </span>
                      </div>
                      <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                        <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">Automation Level</span>
                        <span className="font-semibold text-foreground text-sm block">
                          {product.accuracy || 'Continuous Automatic Operation'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  {product.features && product.features.length > 0 && (
                    <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm space-y-4">
                      <h3 className="text-lg font-bold text-foreground flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-industrial-success" />
                        Key Features & Engineering Advantages
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        {product.features.map((feature: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 border border-border/40 text-sm">
                            <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                        Target Applications & Chip Types
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
                        {product.type || 'Chip Processing'}
                      </Badge>
                      <span className="text-xs text-muted-foreground font-mono">
                        ID: {product.id}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground text-base">Inquire or Order this System</h3>
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
                        Download Technical Datasheet
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
                          Technical Specifications
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

                  {/* Heavy Build & Automation Support */}
                  <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm space-y-4">
                    <h4 className="font-semibold text-sm text-foreground flex items-center">
                      <Wrench className="mr-2 h-4 w-4 text-industrial-warning" />
                      Integration, Tooling & Automation Support
                    </h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-start gap-2.5">
                        <ShieldCheck className="h-4 w-4 text-industrial-success flex-shrink-0 mt-0.5" />
                        <span>Hardened cutting teeth, hydraulic ram and compacting dies</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Headphones className="h-4 w-4 text-industrial-success flex-shrink-0 mt-0.5" />
                        <span>PLC integration with bin level indicators & auto-start sensors</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Layers className="h-4 w-4 text-industrial-success flex-shrink-0 mt-0.5" />
                        <span>Turnkey layout optimization for machine tool scrap discharge</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          )}

        </div>
      </section>

      {/* Related Handling Equipment */}
      {relatedProducts.length > 0 && (
        <section className="py-14 bg-muted/30 border-t border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Explore Complementary Handling Equipment</h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Discover chip conveyors, automated conveyors, and recycling units
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="hidden sm:inline-flex"
              >
                <Link to="/products/handling">
                  View All Handling Equipment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((item) => {
                const itemHasImage = hasSpecificHandlingImage(item);
                return (
                  <Link
                    key={item.id}
                    to={`/products/handling/${item.slug}`}
                    className="block group/item focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
                    aria-label={`View specifications for ${item.name}`}
                  >
                    <Card
                      className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border border-border overflow-hidden flex flex-col p-5 h-full"
                    >
                      {itemHasImage ? (
                        <div className="h-44 w-full p-3 flex items-center justify-center bg-muted/20 relative rounded-xl mb-4">
                          <img
                            src={item.image}
                            alt={`${item.name} - ${item.type || 'Conveyor Equipment'} by Trivantas`}
                            loading="lazy"
                            decoding="async"
                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                          <Badge variant="secondary" className="absolute top-2 left-2 text-[10px] uppercase font-mono">
                            {item.type || 'Conveyor'}
                          </Badge>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="secondary" className="text-[10px] uppercase font-mono">
                            {item.type || 'Handling'}
                          </Badge>
                          <span className="text-xs text-muted-foreground font-mono">
                            {item.id}
                          </span>
                        </div>
                      )}
                      <div className="flex flex-col flex-grow justify-between">
                        <div>
                          <h3 className="font-bold text-foreground text-base group-hover:text-primary transition-colors line-clamp-1 mb-1">
                            {item.name}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {item.features?.[0] || item.capacity || 'Industrial Material Handling'}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-primary">
                          <span>View Specifications</span>
                          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Banner */}
      <section className="bg-primary text-primary-foreground py-12 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Need a Customized Chip Conveyor or Automated Handling System?
          </h2>
          <p className="text-primary-foreground/90 text-base mb-6 max-w-2xl mx-auto">
            Our automation engineers design bespoke conveying and chip recycling systems customized to your workshop footprint, metal chip profile, coolant viscosity, and machine tool heights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="shadow-lg"
            >
              <Link to={`/contact?product=${encodeURIComponent(product.name)}`}>
                Contact Automation Engineers
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Link to="/products/handling">
                Back to Handling Catalog
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HandlingProductDetail;
