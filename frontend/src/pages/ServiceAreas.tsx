import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Factory, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PRODUCT_CATEGORIES = [
  { href: "/products/sensors", label: "Smart level sensors" },
  { href: "/products/filtration", label: "Industrial filtration" },
  { href: "/products/water-treatment", label: "Water treatment plants" },
  { href: "/products/handling", label: "Material handling" },
  { href: "/products/lubrication-systems", label: "Lubrication systems" },
  { href: "/products/spm", label: "Special purpose machines" },
];

const ServiceAreas: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="py-16 md:py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-white/70 flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-white hover:underline">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-semibold" aria-current="page">
              Service Areas
            </span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Plants, Offices & Service Areas</h1>
          <p className="text-lg text-white/90 max-w-3xl leading-relaxed">
            Trivantas manufactures and supports industrial equipment from Pune (Maharashtra) and Ankleshwar
            (Gujarat), with B2B project delivery for Mumbai, Jalgaon, western India, and nationwide clients.
          </p>
        </div>
        <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px]" />
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Card className="border border-border/80 shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-3 mb-4">
                <Factory className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xl font-bold text-foreground">Pune manufacturing plant</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Primary fabrication, assembly, and pre-dispatch testing for sensors, filtration, water
                    treatment, and handling systems.
                  </p>
                </div>
              </div>
              <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                <MapPin className="inline h-4 w-4 text-primary mr-1 -mt-0.5" aria-hidden />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Trivantas,+Kanjane+Nagar,+Ghar+society+Road,+677,+Tal,+Mulshi,+Uravade,+Maharashtra+412115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Trivantas, No. 677, Ghar society Road, Tal Mulshi, Uravade, Pune — 412115, Maharashtra, India
                </a>
              </address>
            </CardContent>
          </Card>

          <Card className="border border-border/80 shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xl font-bold text-foreground">Ankleshwar, Gujarat office</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Regional sales and project coordination for chemical, pharmaceutical, and process industries in
                    Gujarat.
                  </p>
                </div>
              </div>
              <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=167+%26+168+Aadhya+2,+Andada,+Ankleshwar,+Gujarat+393002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  167 &amp; 168 Aadhya 2, Andada, Ankleshwar — 393002, Gujarat, India
                </a>
              </address>
            </CardContent>
          </Card>

          <div className="border border-border/80 bg-card rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-3">Where we serve</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm leading-relaxed">
              <li>
                <strong className="text-foreground font-medium">Pune &amp; Maharashtra</strong> — local plant
                support, site visits, and engineering consultations.
              </li>
              <li>
                <strong className="text-foreground font-medium">Mumbai</strong> — B2B supply and project support
                (no separate Mumbai street office; contact Pune or Gujarat teams).
              </li>
              <li>
                <strong className="text-foreground font-medium">Jalgaon</strong> — North Maharashtra service area
                for quotes and delivery coordination (registered address on Contact; no separate Jalgaon branch office).
              </li>
              <li>
                <strong className="text-foreground font-medium">Gujarat &amp; Ankleshwar</strong> — branch-led
                quotes, delivery coordination, and aftermarket support.
              </li>
              <li>
                <strong className="text-foreground font-medium">Pan-India</strong> — industrial equipment quotes,
                custom engineering, and export inquiries.
              </li>
            </ul>
          </div>

          <div className="border border-border/80 bg-card rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg font-bold text-foreground mb-3">Contact (NAP)</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Phone and email are consistent across locations for sales and engineering.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" aria-hidden />
                <a href="tel:+917028165428" className="text-muted-foreground hover:text-primary">
                  +91 7028165428
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" aria-hidden />
                <a href="mailto:sales@trivantas.com" className="text-muted-foreground hover:text-primary">
                  sales@trivantas.com
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/contact">
                  Request a quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/products">Browse product catalog</Link>
              </Button>
            </div>
          </div>

          <nav aria-label="Industrial product categories" className="pt-4 border-t border-border/60">
            <p className="text-sm font-semibold text-foreground mb-3">Solutions by category</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {PRODUCT_CATEGORIES.map((c) => (
                <li key={c.href}>
                  <Link to={c.href} className="text-primary hover:underline font-medium">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default ServiceAreas;
