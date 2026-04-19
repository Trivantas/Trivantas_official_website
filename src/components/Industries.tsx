import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Droplets, Truck, Factory, Utensils } from 'lucide-react';

const Industries = () => {
    const industries = [
        {
            icon: <Beaker className="h-8 w-8" />,
            title: 'Pharmaceutical',
            description: 'Precision sensors and automation solutions engineered to exceed cGMP standards for critical lab and production environments.',
            className: 'md:col-span-1 md:row-span-1 bg-gradient-to-br from-blue-500/10 to-primary/5',
        },
        {
            icon: <Utensils className="h-6 w-6" />,
            title: 'Food & Beverage',
            description: 'Sanitary instrumentation and reliable sensing solutions for dairy, brewery, and food processing lines.',
            className: 'md:col-span-1 md:row-span-1 bg-gradient-to-br from-orange-500/10 to-primary/5',
        },
        {
            icon: <Droplets className="h-6 w-6" />,
            title: 'Water Treatment',
            description: 'Advanced filtration systems and multi-point level monitoring to ensure efficiency and compliance in recycling plants.',
            className: 'md:col-span-1 md:row-span-1 bg-gradient-to-br from-cyan-500/10 to-primary/5',
        },
        {
            icon: <Truck className="h-6 w-6" />,
            title: 'Logistics & Handling',
            description: 'Heavy-duty conveyors and material handling equipment designed to maximize throughput in modern warehouses.',
            className: 'md:col-span-1 md:row-span-1 bg-gradient-to-br from-slate-500/10 to-primary/5',
        },
        {
            icon: <Factory className="h-6 w-6" />,
            title: 'Manufacturing',
            description: 'Custom Special Purpose Machines (SPMs) that drive Industry 4.0 and the future of smart factory automation.',
            className: 'md:col-span-1 md:row-span-1 bg-gradient-to-br from-indigo-500/10 to-primary/5',
        }
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-foreground mb-6"
                    >
                        Industries We <span className="text-primary">Serve</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                    >
                        Deploying precision engineered solutions across diverse sectors to drive industrial excellence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[minmax(280px,_auto)]">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className={`p-8 rounded-3xl border border-border/50 backdrop-blur-sm group hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden relative ${industry.className}`}
                        >
                            <div className="relative z-10">
                                <div className="p-3 w-fit rounded-2xl bg-white dark:bg-slate-900 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                                    {industry.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{industry.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-[90%]">
                                    {industry.description}
                                </p>
                            </div>

                            {/* Subtle background decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
