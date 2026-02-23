import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center space-x-2">
              <img src="/images/Icon-Color.png" alt="Trivantas Logo" className="h-12 w-12 object-contain" />
              <div>
                <h3 className="text-2xl font-bold mb-0 leading-none">Trivantas</h3>
                <p className="text-primary-foreground/80 text-sm mt-1">One Stop Solution</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted partner for comprehensive industrial hardware solutions.
              Building reliable partnerships that go beyond business.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/trivantas/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/_trivantas_?igsh=MWVxaG53b3hleXBieg==" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="/TRIVANTAS_Flipbook.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  Flipbook
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products#sensors" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  Smart Level Sensors
                </Link>
              </li>
              <li>
                <Link to="/products#filtration" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  Filtration Systems
                </Link>
              </li>
              <li>
                <Link to="/products#spm" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  SPM Machines
                </Link>
              </li>
              <li>
                <Link to="/products#handling" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  Material Handling
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Utpal+Classic+Bhukum+Pune+412115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 text-sm hover:text-primary transition-colors"
                >
                  Trivantas, A-002, Utpal Classic, Bhukum, <br /> Pune. 412115.
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="https://wa.me/917028165428"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 text-sm hover:text-primary transition-colors"
                >
                  7028165428
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@trivantas.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 text-sm hover:text-primary transition-colors"
                >
                  sales@trivantas.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Trivantas. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;