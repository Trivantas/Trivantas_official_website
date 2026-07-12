import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  ArrowRight, 
  Compass, 
  Eye, 
  Calendar, 
  CheckCircle, 
  Building 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We deliver superior quality solutions that exceed industry standards and customer expectations.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Partnership',
      description: 'Building long-term relationships with our clients based on trust, reliability, and mutual success.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Continuously advancing technology and processes to provide cutting-edge industrial solutions.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
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

      {/* Company Story & Stats Section */}
      <section className="py-12 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative subtle background dots */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(234,88,12,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Story text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-center lg:text-left">
                Our <span className="text-primary">Story</span>
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
              
              {/* Highlight Quote */}
              <div className="border-l-4 border-primary bg-accent/20 p-6 rounded-r-2xl mb-8 shadow-sm">
                <p className="text-foreground/90 italic font-medium leading-relaxed">
                  "At Trivantas, we don't just supply equipment; we build the foundational systems that power modern industry, drive sustainability, and ensure long-term operational success."
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="default"
                  size="lg"
                  className="group bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/20 transition-all duration-300 rounded-xl"
                  onClick={() => navigate('/products')}
                >
                  Our Solutions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-border hover:bg-accent text-foreground rounded-xl"
                  onClick={() => window.open('/TRIVANTAS_Flipbook.pdf', '_blank')}
                >
                  View Flipbook
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 bg-gradient-card rounded-3xl p-6 sm:p-10 shadow-card border border-border/50"
            >
              <div className="grid grid-cols-2 gap-6 sm:gap-10">
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
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full border-0 bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl overflow-hidden group relative">
                {/* Top border accent line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary"></div>
                <CardContent className="p-10 md:p-12">
                  <div className="p-4 rounded-2xl bg-primary/10 w-fit mb-6">
                    <Compass className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    To provide innovative, reliable, and cost-effective industrial hardware solutions
                    that enhance operational efficiency and drive sustainable growth for our partners.
                    We are committed to understanding unique challenges and delivering customized solutions
                    that exceed expectations.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Tailored Engineering Solutions</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Operational Efficiency Boost</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Unwavering Quality Control</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full border-0 bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl overflow-hidden group relative">
                {/* Top border accent line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-800"></div>
                <CardContent className="p-10 md:p-12">
                  <div className="p-4 rounded-2xl bg-slate-100 w-fit mb-6">
                    <Eye className="h-8 w-8 text-slate-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-slate-800 transition-colors">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    To be the leading provider of comprehensive industrial solutions globally,
                    recognized for our innovation, quality, and customer-centric approach.
                    We envision a future where our technology empowers industries to achieve
                    unprecedented levels of efficiency and sustainability.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-slate-800" />
                      <span>Global Integration & Automation</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-slate-800" />
                      <span>Sustainable Industrial Practices</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-slate-800" />
                      <span>Next-Generation Technical Excellence</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="pb-12 md:pb-24 pt-6 md:pt-12 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape how we build lasting partnerships with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="h-full"
              >
                <Card className="text-center bg-white shadow-sm hover:shadow-lg transition-all duration-300 h-full border border-slate-100 rounded-3xl overflow-hidden group relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.05 }}
                      className="mb-6 flex justify-center"
                    >
                      <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 text-primary transition-all duration-300">
                        {value.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
              Let's discuss how Trivantas can help transform your industrial operations with our comprehensive solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="shadow-lg hover:shadow-secondary/20 transition-all duration-300"
                onClick={() => navigate('/contact')}
              >
                Contact Our Team
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 shadow-lg transition-all duration-300"
                onClick={() => navigate('/schedule')}
              >
                Schedule a Consultation
              </Button>
            </div>
          </motion.div>
        </div>
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
      </section>
    </div>
  );
};

export default About;
