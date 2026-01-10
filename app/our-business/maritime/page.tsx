import ServicesHero from '@/components/services-hero';
import React from 'react';
import AboutDrasonMaritime from './components/about';
import Services from './components/services';
import { CallToAction } from '../energies/components/call-to-action';
import OurClients from '@/components/our-clients';

const page = () => {
  return (
    <div>
      <ServicesHero
        title="Drason Maritime"
        description="A subsidiary of Drason Global Limited, is a leading Maritime Company that provides comprehensive services to the oil & gas industry and vessels docking at ports in Nigeria & West Africa, with a focus on quality, safety, efficiency, and excellence."
      />
      <AboutDrasonMaritime />
      <Services />

      <div className="py-32">
        <OurClients />
      </div>

      <CallToAction />
    </div>
  );
};

export default page;
