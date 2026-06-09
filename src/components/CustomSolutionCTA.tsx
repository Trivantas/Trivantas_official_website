import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CustomSolutionCTA = () => {
    return (
        <section className="pt-12 md:pt-32 pb-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-primary text-primary-foreground rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl"
                >
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Need a Custom Solution?
                        </h3>
                        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                            Our engineering team specializes in developing tailored solutions for unique industrial challenges.
                            Let us help you find the perfect equipment for your specific requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <button className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-md font-bold shadow-lg transition-all duration-300">
                                    Contact Our Engineers
                                </button>
                            </Link>
                            <Link to="/products">
                                <button className="bg-white/10 border border-white/20 text-white hover:bg-white/20 px-8 py-3 rounded-md font-bold shadow-lg transition-all duration-300">
                                    View All Products
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* Decorative background shapes */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default CustomSolutionCTA;
