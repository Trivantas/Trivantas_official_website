import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Scale, ShieldCheck, CheckCircle, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Banner */}
      <section className="py-16 md:py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-white/70 flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-white hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white font-semibold" aria-current="page">Terms of Service</span>
          </nav>
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm">
              <Scale className="h-7 w-7 text-primary" />
            </div>
            <span className="text-sm font-semibold tracking-wider uppercase text-blue-200">
              Commercial & Operational Terms
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
            Standard terms governing website usage, commercial quotations, custom engineering specifications, and hardware procurement with Trivantas.
          </p>
          <div className="mt-4 text-xs text-white/60">
            Last Updated: October 2026 • Governing Law: Maharashtra, India
          </div>
        </div>
        <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px]" />
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Section 1: Overview */}
          <div className="border border-border/80 bg-card rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold mr-3">1</span>
              Agreement to Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your access to and use of <a href="https://trivantas.com" className="text-primary hover:underline">trivantas.com</a> and describe the commercial principles under which <strong>Trivantas</strong> provides industrial hardware, quotations, and engineering consultation services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By accessing this website, submitting request-for-quote (RFQ) forms, or engaging our engineering team, you agree to be bound by these Terms and our Privacy Policy.
            </p>
          </div>

          {/* Section 2: Quotations & Commercial Proposals */}
          <div className="border border-border/80 bg-card rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold mr-3">2</span>
              Quotations & Commercial Proposals
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a specialized industrial equipment manufacturer, our pricing and technical scopes reflect application-specific sizing:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Quotation Validity:</strong> All formal commercial proposals are valid for 30 calendar days from the date of issuance unless explicitly stated otherwise in the written quote.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Technical Scope:</strong> Equipment specifications provided on website catalog sheets represent standard operational configurations. Custom modifications (flange standards, wetted material alloys, custom voltages) will be finalized in the formal Purchase Order.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Taxes & Freight:</strong> Unless stated as inclusive, quotations are exclusive of statutory GST, customs duties, and transit freight from our Pune or Gujarat plants.</span>
              </li>
            </ul>
          </div>

          {/* Section 3: Intellectual Property */}
          <div className="border border-border/80 bg-card rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold mr-3">3</span>
              Intellectual Property Rights
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              All website content—including product photographs, technical CAD diagrams, sensor calibration algorithms, blog publications, and brand logos—is the exclusive intellectual property of Trivantas and protected by Indian and international intellectual property laws.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You may download or print product data sheets solely for internal technical evaluation or procurement purposes within your organization. Commercial reproduction or distribution without prior written consent from Trivantas is strictly prohibited.
            </p>
          </div>

          {/* Section 4: Product Warranty & Quality Testing */}
          <div className="border border-border/80 bg-card rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold mr-3">4</span>
              Warranty & Factory Acceptance Testing (FAT)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Quality assurance is central to our engineering commitment:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                <h4 className="font-semibold text-foreground text-sm mb-1">Standard 12-Month Warranty</h4>
                <p className="text-xs text-muted-foreground">All Trivantas manufactured sensors and machinery carry a standard 12-month warranty against manufacturing defects from the date of dispatch.</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                <h4 className="font-semibold text-foreground text-sm mb-1">Factory Testing (FAT)</h4>
                <p className="text-xs text-muted-foreground">Every system undergoes 100% pre-dispatch quality checks, hydrostatic pressure testing (where applicable), and electrical calibration at our Pune facility.</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                <h4 className="font-semibold text-foreground text-sm mb-1">Warranty Exclusions</h4>
                <p className="text-xs text-muted-foreground">Warranty does not cover normal wear-and-tear components (filter media, scraper blades), improper electrical wiring, or operation beyond stated pressure/temperature limits.</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                <h4 className="font-semibold text-foreground text-sm mb-1">Field Support & Commissioning</h4>
                <p className="text-xs text-muted-foreground">On-site supervision, installation assistance, and operator training are available upon request as per commercial agreement.</p>
              </div>
            </div>
          </div>

          {/* Section 5: Governing Law & Dispute Resolution */}
          <div className="border border-border/80 bg-card rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold mr-3">5</span>
              Governing Law & Legal Jurisdiction
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              These Terms, all quotations, purchase orders, and commercial transactions entered into with Trivantas shall be governed by and construed in accordance with the laws of the Republic of India.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Any dispute, controversy, or claim arising out of or relating to these Terms or equipment supply shall be subject to the exclusive jurisdiction of the competent courts of <strong>Pune, Maharashtra, India</strong>.
            </p>
          </div>

          {/* Section 6: Contact Information */}
          <div className="border border-primary/20 bg-primary/5 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-3 flex items-center">
              <Mail className="h-6 w-6 text-primary mr-3" />
              Corporate Inquiries & Contracting
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For corporate master service agreements (MSAs), vendor registration, or quotation terms inquiries, contact our legal and commercial team:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-foreground block">Headquarters & Pune Plant:</span>
                  <span className="text-muted-foreground">Trivantas, 677, Kanjane Nagar, Ghar society Road, Tal Mulshi, Uravade, Maharashtra 412115</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-foreground block">Gujarat Branch Office:</span>
                  <span className="text-muted-foreground">167 & 168 Aadhya 2, Andada, Ankleshwar, Gujarat 393002</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground"><strong>Phone:</strong> +91 7028165428</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground"><strong>Commercial Email:</strong> sales@trivantas.com</span>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <Button asChild variant="outline" className="rounded-xl">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
