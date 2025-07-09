
import React from 'react';
import { Hero } from '@/components/Hero';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { Statistics } from '@/components/Statistics';
import { HowItWorks } from '@/components/HowItWorks';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Statistics />
      <FeaturedProjects />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
