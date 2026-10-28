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
  FileText,
  Mail,
  Calendar,
  Layers,
  ArrowRight,
  Filter,
  Check,
  Sparkles,
  Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  getSparePartBySlug,
  getRelatedSparePartsProducts,
  SparePartItem,
} from '@/data/sparePartsCatalog';
import { getSparePartImage } from '@/lib/sparePartsUtils';

const SparePartsProductDetail: React.FC = () => {
  const { productname } = useParams<{ productname: string }>();
  const navigate = useNavigate();

  const product: SparePartItem | undefined = productname
    ? getSparePartBySlug(productname)
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
            <Filter className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The spare part you requested (<code>{productname}</code>) could not be located in our catalog.
          </p>
          <Button onClick={() => navigate('/products/spare-parts')} className="shadow-lg">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Spare Parts
          </Button>
        </div>
      </div>
    );
  }

  const productImage = getSparePartImage(product);
  const relatedProducts = getRelatedSparePartsProducts(productname || '', 3);

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
            <Link to="/products/spare-parts">
              <ArrowLeft className="mr-1.5 h-4 w-4" />
              <span>Back to Spare Parts</span>
            </Link>
          </Button>
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground flex items-center gap-1.5 flex-wrap">
            <Link to="/" className="hover:text-foreground hover:underline">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-foreground hover:underline">Products</Link>
            <span>/</span>
            <Link to="/products/spare-parts" className="hover:text-foreground hover:underline">Spare Parts</Link>
            <span>/</span>
            <span className="text-foreground font-semibold truncate max-w-[200px]" aria-current="page">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

                {/* Product Type Tag */}
                <div className="relative z-10 flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="px-3 py-1 font-mono text-xs tracking-wider uppercase bg-primary/10 text-primary border-primary/20">
                    {product.type || 'Filtration Spare Part'}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-mono">
                    ID: {product.id}
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative h-[320px] sm:h-[380px] w-full flex items-center justify-center p-6 my-2 rounded-2xl overflow-hidden bg-white/60 dark:bg-slate-950/50 border border-slate-200/50 dark:border-slate-800/50">
                  <img
                    src={productImage}
                    alt={`${product.name} - Spare Part by Trivantas`}
                    fetchPriority="high"
                    decoding="async"
                    className="max-h-full max-w-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Badges / Highlights */}
                <div className="mt-4 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5 text-foreground font-medium">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    100% Quality Inspected
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Zap className="h-4 w-4 text-amber-500" />
                    Direct OEM Replacement
                  </span>
                </div>
              </div>

              {/* Action CTAs Box */}
              <div className="mt-6 p-6 rounded-2xl bg-card border border-border/80 shadow-lg space-y-3">
                <h3 className="font-semibold text-foreground text-sm">Need pricing or custom dimensions?</h3>
                <Button
                  size="lg"
                  className="w-full shadow-md hover:shadow-primary/20 transition-all font-medium"
                  onClick={() => navigate(`/contact?product=${encodeURIComponent(product.name)}`)}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Request Fast Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-primary/20 hover:border-primary/50 font-medium"
                  onClick={() => navigate(`/contact?product=${encodeURIComponent(product.name)}&type=datasheet`)}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Request Specification Sheet
                </Button>
                <Button
                  variant="ghost"
                  className="w-full text-muted-foreground hover:text-foreground justify-center text-sm"
                  onClick={() => navigate('/schedule', { state: { productName: product.name } })}
                >
                  <Calendar className="mr-2 h-4 w-4 text-primary" />
                  Consult Our Technical Team
                </Button>
              </div>
            </motion.div>

            {/* Right Column: Information, Features, Specs */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Header Banner */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-3">
                  <Filter className="h-3.5 w-3.5" />
                  {product.categoryLabel || 'Industrial Spare Parts'}
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-4">
                  {product.name}
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Engineered industrial consumable offering verified micron retention, high dirt-holding capacity, and maximum operational uptime across harsh manufacturing conditions.
                </p>
              </div>

              {/* Key Operating Parameters */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                  <Layers className="mr-2 h-5 w-5 text-primary" />
                  Key Product Metrics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">Capacity / Sizing</span>
                    <span className="font-semibold text-foreground text-sm block">
                      {product.capacity || 'Standard & custom dimensions'}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">Efficiency & Retention</span>
                    <span className="font-semibold text-foreground text-sm block">
                      {product.efficiency || 'High porosity & particle capture'}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">Working Range / Rating</span>
                    <span className="font-semibold text-foreground text-sm block">
                      {product.range || 'Industrial Grade Specification'}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">Micron / Accuracy</span>
                    <span className="font-semibold text-foreground text-sm block">
                      {product.accuracy || 'Application Calibrated'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm space-y-4">
                  <h3 className="text-lg font-bold text-foreground flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-emerald-500" />
                    Key Features & Technical Advantages
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {product.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-muted/30 border border-border/40 text-sm">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    <Sparkles className="mr-2 h-5 w-5 text-blue-500" />
                    Recommended Applications & Equipment
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app: string, idx: number) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="px-3.5 py-1.5 text-sm bg-accent/40 border-border/70 hover:border-primary/50 transition-colors"
                      >
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Specifications Table */}
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div className="rounded-2xl border border-border/80 overflow-hidden bg-card shadow-sm">
                  <div className="bg-muted px-5 py-3.5 border-b border-border">
                    <h4 className="font-semibold text-sm text-foreground flex items-center">
                      <Wrench className="mr-2 h-4 w-4 text-primary" />
                      Detailed Engineering Specifications
                    </h4>
                  </div>
                  <div className="divide-y divide-border/60">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="px-5 py-3 text-sm grid grid-cols-1 sm:grid-cols-3 hover:bg-muted/20 transition-colors">
                        <span className="font-medium text-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="sm:col-span-2 text-muted-foreground mt-1 sm:mt-0 font-mono text-xs sm:text-sm">
                          {String(value)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-border/80">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    Related Spare Parts & Consumables
                  </h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    Explore complementary filtration elements, rolls, and cartridges.
                  </p>
                </div>
                <Button variant="outline" size="sm" asChild className="hidden sm:flex">
                  <Link to="/products/spare-parts">
                    View All Spares <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => {
                  const relImage = getSparePartImage(rel);
                  return (
                    <Link
                      key={rel.id}
                      to={`/products/spare-parts/${rel.id}`}
                      className="group block"
                    >
                      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border/80">
                        <div className="h-48 w-full p-6 flex items-center justify-center bg-muted/20 border-b border-border/50">
                          <img
                            src={relImage}
                            alt={rel.name}
                            loading="lazy"
                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-5">
                          <Badge variant="secondary" className="mb-2 text-[10px] uppercase font-mono bg-primary/10 text-primary">
                            {rel.type || 'Spare Part'}
                          </Badge>
                          <h3 className="font-bold text-foreground text-base group-hover:text-primary transition-colors line-clamp-1">
                            {rel.name}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">
                            {rel.efficiency || 'High durability industrial replacement part.'}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default SparePartsProductDetail;
