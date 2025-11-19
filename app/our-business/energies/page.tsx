import ServicesHero from '@/components/services-hero';
import React from 'react';
import Gallery from './components/gallery';
import Services from './components/services';
import AboutDrasonEnergies from './components/about';
import { ServicesDetailed } from './components/service-item';
import { WhyDrasonEnergies } from './components/why-drason';
import { CallToAction } from './components/call-to-action';

const page = () => {
  return (
    <div>
      <ServicesHero
        title="Drason Energies"
        description=" Drason Foods, a dedicated subsidiary of Drason Global Limited,
              leads the way in promoting healthy agricultural products and food
              across Nigeria and Africa."
      />

      <Services />
      <AboutDrasonEnergies />
      <WhyDrasonEnergies />

      <CallToAction />

      {/* <ServicesDetailed /> */}
      {/* <Gallery /> */}
    </div>
  );
};

export default page;
