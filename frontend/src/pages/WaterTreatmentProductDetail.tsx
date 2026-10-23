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
  Droplets,
  Factory
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  getWaterTreatmentBySlug,
  getWaterTreatmentImage,
  getRelatedWaterTreatments,
  WaterTreatmentProduct,
} from '@/lib/waterTreatmentUtils';

const WaterTreatmentProductDetail: React.FC = () => {
  const { productname } = useParams<{ productname: string }>();
  const navigate = useNavigate();

  const plant: WaterTreatmentProduct | undefined = productname
    ? getWaterTreatmentBySlug(productname)
    : undefined;

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productname]);

  if (!plant) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Droplets className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">Plant Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The water treatment plant you requested (<code>{productname}</code>) could not be located in our catalog.
          </p>
          <Button onClick={() => navigate('/products/water-treatment')} className="shadow-lg">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Water Treatment Plants
          </Button>
        </div>
      </div>
    );
  }

  const productImage = getWaterTreatmentImage(plant);
  const relatedPlants = getRelatedWaterTreatments(productname || '', 3);

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
            <Link to="/products/water-treatment">
              <ArrowLeft className="mr-1.5 h-4 w-4" />
              <span>Back to Water Treatment Plants</span>
            </Link>
          </Button>
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground flex items-center gap-1.5 flex-wrap">
            <Link to="/" className="hover:text-foreground hover:underline">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-foreground hover:underline">Products</Link>
            <span>/</span>
            <Link to="/products/water-treatment" className="hover:text-foreground hover:underline">Water Treatment</Link>
            <span>/</span>
            <span className="text-foreground font-semibold truncate max-w-[200px]" aria-current="page">{plant.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Showcase Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Plant Image Showcase */}
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
                <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>

                {/* Product Type Tag */}
                <div className="relative z-10 flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="px-3 py-1 font-mono text-xs tracking-wider uppercase bg-primary/10 text-primary border-primary/20">
                    {plant.type || 'Water Treatment'}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-mono">
                    ID: {plant.id}
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative h-[340px] sm:h-[400px] w-full flex items-center justify-center p-4 my-2 rounded-2xl overflow-hidden bg-white/40 dark:bg-slate-950/40">
                  <img
                    src={productImage}
                    alt={`${plant.name} - ${plant.type || 'Industrial Water Treatment Plant'} by Trivantas`}
                    fetchPriority="high"
                    decoding="async"
                    className="max-h-full max-w-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Quick Highlights Footer */}
                <div className="relative z-10 mt-6 pt-5 border-t border-border/60 grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 rounded-xl bg-card/60 border border-border/40">
                    <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-1">Capacity</span>
                    <span className="font-semibold text-foreground text-sm truncate block" title={plant.capacity}>
                      {plant.capacity || 'Custom Sizing'}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-card/60 border border-border/40">
                    <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-1">Compliance</span>
                    <span className="font-semibold text-foreground text-sm truncate block">
                      CPCB / PCB Norms
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Plant Information & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7 space-y-8"
            >
              {/* Plant Header */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold mb-3">
                  <Droplets className="h-3.5 w-3.5" />
                  {plant.categoryLabel || 'Water Treatment Plants'}
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-4">
                  {plant.name}
                </h1>
                
                {(plant.capacity || plant.efficiency) && (
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    {plant.capacity && (
                      <div className="flex items-center gap-1.5">
                        <span className="font-medium text-foreground">Capacity:</span>
                        <span>{plant.capacity}</span>
                      </div>
                    )}
                    {plant.efficiency && (
                      <div className="flex items-center gap-1.5">
                        <span className="font-medium text-foreground">Efficiency:</span>
                        <span>{plant.efficiency}</span>
                      </div>
                    )}
                  </div>
                )}

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Turnkey water purification and wastewater treatment plant engineered for maximum water recovery, minimal sludge footprint, energy-efficient operation, and strict adherence to environmental discharge standards.
                </p>
              </div>

              {/* CTAs */}
              <div className="p-6 rounded-2xl bg-card border border-border/60 shadow-lg space-y-4">
                <h3 className="font-semibold text-foreground text-base">Inquire or Request a Plant Proposal</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    size="lg"
                    className="w-full shadow-md hover:shadow-primary/20 transition-all font-medium"
                    onClick={() => navigate(`/contact?product=${encodeURIComponent(plant.name)}`)}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Request Proposal & Quote
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-primary/20 hover:border-primary/50 font-medium"
                    onClick={() => navigate(`/contact?product=${encodeURIComponent(plant.name)}&type=datasheet`)}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Download Plant Datasheet
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  className="w-full text-muted-foreground hover:text-foreground justify-center text-sm"
                  onClick={() => navigate('/schedule', { state: { productName: plant.name } })}
                >
                  <Calendar className="mr-2 h-4 w-4 text-primary" />
                  Schedule a Consultation with our Water Treatment Specialists
                </Button>
              </div>

              {/* Key Features */}
              {plant.features && plant.features.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-foreground flex items-center">
                    <CheckCircle className="mr-2.5 h-5 w-5 text-industrial-success" />
                    Key Features & Technological Advantages
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {plant.features.map((feature: string, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-card/60 border border-border/50 text-sm"
                      >
                        <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Specifications */}
              {plant.specifications && Object.keys(plant.specifications).length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-foreground flex items-center">
                    <Layers className="mr-2.5 h-5 w-5 text-primary" />
                    Technical Details & Process Design
                  </h2>
                  <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-sm">
                    <div className="divide-y divide-border/60">
                      {Object.entries(plant.specifications).map(([key, val], idx) => (
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
              {plant.applications && plant.applications.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-foreground flex items-center">
                    <Factory className="mr-2.5 h-5 w-5 text-industrial-info" />
                    Target Industries & Process Environments
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {plant.applications.map((app: string, idx: number) => (
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
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Turnkey Execution</span>
                  <span className="text-xs text-muted-foreground">From civil design & fabrication to commissioning</span>
                </div>
                <div className="p-4 rounded-xl bg-muted/40 border border-border/50 flex flex-col items-center text-center">
                  <Wrench className="h-6 w-6 text-industrial-warning mb-2" />
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">O&M Contracts</span>
                  <span className="text-xs text-muted-foreground">Comprehensive operation & maintenance support</span>
                </div>
                <div className="p-4 rounded-xl bg-muted/40 border border-border/50 flex flex-col items-center text-center">
                  <Headphones className="h-6 w-6 text-industrial-success mb-2" />
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Regulatory Assurance</span>
                  <span className="text-xs text-muted-foreground">Guaranteed CPCB/SPCB discharge compliance</span>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Water Treatment Plants */}
      {relatedPlants.length > 0 && (
        <section className="py-14 bg-muted/30 border-t border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Explore Other Water Treatment Solutions</h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Comprehensive wastewater and purification systems
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="hidden sm:inline-flex"
              >
                <Link to="/products/water-treatment">
                  View All Plants
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPlants.map((item) => (
                <Link
                  key={item.id}
                  to={`/products/water-treatment/${item.slug}`}
                  className="block group/item focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
                  aria-label={`View specifications for ${item.name}`}
                >
                  <Card
                    className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border border-border overflow-hidden flex flex-col h-full"
                  >
                    <div className="h-48 w-full p-4 flex items-center justify-center bg-muted/20 relative">
                      <img
                        src={item.image}
                        alt={`${item.name} - ${item.type || 'Water Treatment Plant'} by Trivantas`}
                        loading="lazy"
                        decoding="async"
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge variant="secondary" className="absolute top-3 left-3 text-[10px] uppercase font-mono">
                        {item.type || 'Treatment Plant'}
                      </Badge>
                    </div>
                    <CardContent className="p-5 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="font-bold text-foreground text-base group-hover:text-primary transition-colors line-clamp-1 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {item.features?.[0] || item.efficiency || 'Water Treatment Plant'}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-primary">
                        <span>View Specifications</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
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
            Need a Zero Liquid Discharge (ZLD) or Custom Plant?
          </h2>
          <p className="text-primary-foreground/90 text-base mb-6 max-w-2xl mx-auto">
            Our environmental engineers deliver complete solutions from raw water testing, pilot trials, and civil layout optimization to full commissioning and compliance certifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="shadow-lg"
            >
              <Link to={`/contact?product=${encodeURIComponent(plant.name)}`}>
                Consult Environmental Engineering Team
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Link to="/products/water-treatment">
                Back to Water Treatment Catalog
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaterTreatmentProductDetail;
