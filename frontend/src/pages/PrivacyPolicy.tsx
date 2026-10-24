import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, FileText, CheckCircle, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrivacyPolicy: React.FC = () => {
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
            <span className="text-white font-semibold" aria-current="page">Privacy Policy</span>
          </nav>
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm">
              <Shield className="h-7 w-7 text-primary" />
            </div>
            <span className="text-sm font-semibold tracking-wider uppercase text-blue-200">
              Trust & Transparency
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
            How Trivantas protects, handles, and respects your commercial data, engineering schematics, and personal information.
          </p>
          <div className="mt-4 text-xs text-white/60">
            Last Updated: October 2026 • Effective Date: January 2024
          </div>
        </div>
        <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px]" />
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Section 1: Introduction */}
          <div className="border border-border/80 bg-card rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold mr-3">1</span>
              Commitment to Client Confidentiality
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At <strong>Trivantas</strong> ("we", "our", or "us"), we specialize in engineering and supplying industrial hardware solutions, including smart level sensors, filtration systems, wastewater plants, and material handling systems. We understand that our industrial clients and partners share proprietary technical specifications, plant operating parameters, and commercial details with us.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy explains what information we collect when you visit <a href="https://trivantas.com" className="text-primary hover:underline">trivantas.com</a>, request quotes, schedule technical consultations, or partner with us, and how we safeguard that data.
            </p>
          </div>

          {/* Section 2: Information We Collect */}
          <div className="border border-border/80 bg-card rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold mr-3">2</span>
              Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect only the information necessary to provide accurate technical proposals, engineering evaluations, and industrial customer service:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Contact & Business Information:</strong> Name, professional email address, phone number, company name, industrial sector, and plant/office location when submitted via our contact forms or quotation requests.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Technical & Application Specifications:</strong> Process media, tank dimensions, temperature ranges, flow rates, operating pressures, and CAD drawings shared for custom engineering sizing.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Meeting Consultation Data:</strong> Date, time, topic of discussion, and requirements submitted through our Schedule Consultation feature.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Technical Site Analytics:</strong> Anonymized browser type, operating system, pages visited, and general geographic region used strictly to optimize website performance.</span>
              </li>
            </ul>
          </div>

          {/* Section 3: How We Use Your Information */}
          <div className="border border-border/80 bg-card rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold mr-3">3</span>
              How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your data is utilized strictly for legitimate business and industrial engineering operations:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                <h4 className="font-semibold text-foreground text-sm mb-1">Quotation & Proposal Delivery</h4>
                <p className="text-xs text-muted-foreground">Calculating equipment sizing, custom modifications, bill of materials, and formal commercial proposals.</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                <h4 className="font-semibold text-foreground text-sm mb-1">Technical Consultation</h4>
                <p className="text-xs text-muted-foreground">Connecting you with our specialized engineers in Pune or Ankleshwar to review project feasibility.</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                <h4 className="font-semibold text-foreground text-sm mb-1">Warranty & Support</h4>
                <p className="text-xs text-muted-foreground">Maintaining records for product serial tracking, factory acceptance testing (FAT), and field maintenance.</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/40 border border-border/50">
                <h4 className="font-semibold text-foreground text-sm mb-1">No Third-Party Selling</h4>
                <p className="text-xs text-muted-foreground">We never sell, trade, or rent client contact data or engineering drawings to third-party marketing companies.</p>
              </div>
            </div>
          </div>

          {/* Section 4: Non-Disclosure & Intellectual Property */}
          <div className="border border-border/80 bg-card rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold mr-3">4</span>
              Non-Disclosure & Proprietary Engineering Data
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We treat all client engineering drawings, process flow diagrams (PFDs), and manufacturing schematics shared during quotation stages with strict confidentiality. Non-Disclosure Agreements (NDAs) can be executed upon request prior to technical sharing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Access to client engineering files is restricted solely to the Trivantas design and application engineering teams assigned to your evaluation.
            </p>
          </div>

          {/* Section 5: Data Security */}
          <div className="border border-border/80 bg-card rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold mr-3">5</span>
              Data Protection & Security
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We implement industry-standard encryption protocols (HTTPS / TLS 1.3) across our digital infrastructure. All inquiry submissions are routed securely to authorized corporate communication channels.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              While digital transmission cannot be guaranteed to be 100% impenetrable, we adhere to strict administrative, physical, and technological controls to prevent unauthorized access.
            </p>
          </div>

          {/* Section 6: Contact Information */}
          <div className="border border-primary/20 bg-primary/5 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-3 flex items-center">
              <Mail className="h-6 w-6 text-primary mr-3" />
              Contact Our Compliance Team
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you have any questions regarding this Privacy Policy, wish to update your records, or need an NDA executed, please reach out to our administration:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-foreground block">Pune Manufacturing Plant:</span>
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
                <span className="text-muted-foreground"><strong>Direct Helpline:</strong> +91 7028165428</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground"><strong>Compliance & Sales:</strong> sales@trivantas.com</span>
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

export default PrivacyPolicy;
