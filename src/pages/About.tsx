import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Award, Target, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About Trivantas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
          >
            Building the future of industrial solutions through innovation, reliability, and partnerships that last.
          </motion.p>
        </div>
        <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px]"></div>
      </section>

      {/* Company Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                For over 7 years, Trivantas has been at the forefront of industrial hardware innovation.
                Founded with a vision to provide comprehensive solutions that bridge the gap between technology
                and practical industrial needs, we have grown into a trusted partner for businesses across multiple sectors.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our expertise spans Smart Level Sensors, Advanced Filtration Systems, Special Purpose Machines,
                and Material Handling Equipment. Each solution is engineered to deliver precision, efficiency,
                and reliability that our clients depend on for their critical operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="default" size="lg" className="group">
                  Our Solutions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <a href="/TRIVANTAS_Flipbook.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    View Flipbook
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-card rounded-3xl p-10 shadow-card border border-border/50"
            >
              <div className="grid grid-cols-2 gap-10">
                {[
                  { label: "Years Experience", value: "7+" },
                  { label: "Projects Completed", value: "600+" },
                  { label: "Industry Partners", value: "50+" },
                  { label: "Client Satisfaction", value: "99.99%" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-accent/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-card h-full border-none bg-background/50 backdrop-blur-sm overflow-hidden group">
                <CardContent className="p-10 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide innovative, reliable, and cost-effective industrial hardware solutions
                    that enhance operational efficiency and drive sustainable growth for our partners.
                    We are committed to understanding unique challenges and delivering customized solutions
                    that exceed expectations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-card h-full border-none bg-background/50 backdrop-blur-sm overflow-hidden group">
                <CardContent className="p-10 relative">
                  <div className="absolute top-0 right-0 w-1 h-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading provider of comprehensive industrial solutions globally,
                    recognized for our innovation, quality, and customer-centric approach.
                    We envision a future where our technology empowers industries to achieve
                    unprecedented levels of efficiency and sustainability.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              These principles guide everything we do and shape how we build lasting partnerships with our clients.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full"
              >
                <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300 h-full border-border/40 group">
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="mb-6 flex justify-center"
                    >
                      <div className="p-4 rounded-2xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                        {value.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-primary text-primary-foreground rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
              Let's discuss how Trivantas can help transform your industrial operations with our comprehensive solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="shadow-lg hover:shadow-secondary/20 transition-all duration-300">
                Contact Our Team
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20 shadow-lg transition-all duration-300">
                Schedule a Consultation
              </Button>
            </div>
          </div>
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;