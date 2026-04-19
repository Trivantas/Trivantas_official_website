import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Settings, Headphones } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Shield className="h-8 w-8 text-secondary" />,
            title: 'Industrial Reliability',
            description: 'Our hardware is engineered for the most demanding environments, ensuring 24/7 operational continuity and longevity.'
        },
        {
            icon: <Target className="h-8 w-8 text-secondary" />,
            title: 'Precision Engineering',
            description: 'Leveraging advanced sensor technology to deliver high-accuracy measurements that drive efficiency in your processes.'
        },
        {
            icon: <Settings className="h-8 w-8 text-secondary" />,
            title: 'Customized Solutions',
            description: 'From concept to commissioning, we develop tailored engineering solutions that solve your unique industrial challenges.'
        },
        {
            icon: <Headphones className="h-8 w-8 text-secondary" />,
            title: 'Technical Support',
            description: 'Our team of expert engineers provides dedicated technical assistance and post-installation support for all our systems.'
        }
    ];

    return (
        <section className="py-24 bg-accent/30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-foreground mb-6"
                    >
                        Why Choose <span className="text-primary">Trivantas</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-3xl mx-auto"
                    >
                        We combine years of industrial expertise with cutting-edge technology to deliver hardware solutions that empower your business.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-hover transition-all duration-300"
                        >
                            <div className="mb-6 flex justify-center lg:justify-start">
                                <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative background shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mb-32 blur-3xl"></div>
        </section>
    );
};

export default Features;
