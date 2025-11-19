import ServicesHero from '@/components/services-hero';
import React from 'react';
import BrandGallery from './components/brand-gallery';
import AboutDrasonFoods from './components/about-drason-foods';
import ServicesSection from './components/services';

const page = () => {
  return (
    <div>
      <ServicesHero
        title="Drason Foods"
        description=" Drason Foods, a dedicated subsidiary of Drason Global Limited,
              leads the way in promoting healthy agricultural products and food
              across Nigeria and Africa."
      />
      <AboutDrasonFoods />
      <ServicesSection />
      <BrandGallery />
    </div>
  );
};

export default page;
