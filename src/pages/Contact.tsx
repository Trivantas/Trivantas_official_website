import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';


const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          'service_i8s6s0m',   // replace with your EmailJS service ID
          'template_szjcjqt',  // replace with your EmailJS template ID
          form.current,
          'MU7jAXxb5HHIYpQ3I'    // replace with your EmailJS public key
        )
        .then(
          () => {
            alert('Message sent successfully!');
            form.current?.reset();
          },
          (error) => {
            console.error(error.text);
            alert('Failed to send message. Please try again.');
          }
        );
    }
  };

  return (

    <div className="min-h-screen bg-background">
        {/* Side Quick Links */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
        <a
          href="https://wa.me/8999078762" // replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
        >
          <Phone className="w-6 h-6" />
        </a>
        <a
          href="mailto:info@trivantas.com" // replace with your email
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Get in touch with our team to discuss your industrial hardware requirements.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                        <Input name="from_name" placeholder="Your full name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                        <Input name="company" placeholder="Your company name" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                        <Input
                          name="reply_to"
                          type="email"
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                        <Input name="phone" type="tel" placeholder="+91 98765 43210" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                      <Input name="subject" placeholder="What can we help you with?" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your requirements, project details, or any questions you have..."
                        className="min-h-32"
                        required
                      />
                    </div>
                    <Button type="submit" variant="default" size="lg" className="w-full md:w-auto">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Address</h4>
                        <p className="text-muted-foreground">
                          A-002, Utpal Classic, Bhukum,<br /> Pune. 412115.<br />
                          India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                        <p className="text-muted-foreground">📞 8983845428</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Email</h4>
                        <p className="text-muted-foreground">📧 sales@trivantas.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">Business Hours</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      Download Product Catalog
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Request Technical Specifications
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Schedule Site Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Visit Our <span className="text-primary">Facility</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of Mumbai's industrial district, our facility showcases
              our complete range of products and capabilities.
            </p>
          </div>
          {/* <Card className="overflow-hidden shadow-card">
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold text-foreground">Interactive Map</p>
                  <p className="text-muted-foreground">Coming Soon</p>
                </div>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </section>
    </div>
  );
};

export default Contact;
