import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import Features from '../components/Features';
import Industries from '../components/Industries';
import CustomSolutionCTA from '../components/CustomSolutionCTA';

const Index = () => {
  return (
    <div className="pb-12">
      <HeroSection />
      <ProductsSection />
      <Features />
      <Industries />
      <CustomSolutionCTA />
    </div>
  );
};

export default Index;
