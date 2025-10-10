import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Award, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: 'Excellence',
      description: 'We deliver superior quality solutions that exceed industry standards and customer expectations.'
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: 'Partnership',
      description: 'Building long-term relationships with our clients based on trust, reliability, and mutual success.'
    },
    {
      icon: <Target className="h-8 w-8 text-secondary" />,
      title: 'Innovation',
      description: 'Continuously advancing technology and processes to provide cutting-edge industrial solutions.'
    },
    {
      icon: <Heart className="h-8 w-8 text-secondary" />,
      title: 'Integrity',
      description: 'Conducting business with transparency, honesty, and ethical practices in every interaction.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Trivantas</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Building the future of industrial solutions through innovation, reliability, and partnerships that last.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                For over 15 years, Trivantas has been at the forefront of industrial hardware innovation. 
                Founded with a vision to provide comprehensive solutions that bridge the gap between technology 
                and practical industrial needs, we have grown into a trusted partner for businesses across multiple sectors.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our expertise spans Smart Level Sensors, Advanced Filtration Systems, Special Purpose Machines, 
                and Material Handling Equipment. Each solution is engineered to deliver precision, efficiency, 
                and reliability that our clients depend on for their critical operations.
              </p>
              <Button variant="default" size="lg">
                Learn More About Our Solutions
              </Button>
            </div>
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Industry Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide innovative, reliable, and cost-effective industrial hardware solutions 
                  that enhance operational efficiency and drive sustainable growth for our partners. 
                  We are committed to understanding unique challenges and delivering customized solutions 
                  that exceed expectations.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading provider of comprehensive industrial solutions globally, 
                  recognized for our innovation, quality, and customer-centric approach. 
                  We envision a future where our technology empowers industries to achieve 
                  unprecedented levels of efficiency and sustainability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape how we build lasting partnerships with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-hover transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Let's discuss how Trivantas can help transform your industrial operations with our comprehensive solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Contact Our Team
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;