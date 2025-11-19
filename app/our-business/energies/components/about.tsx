import MaxWidthWrapper from '@/components/max-width-wrapper';
import React from 'react';

function AboutDrasonEnergies() {
  return (
    <section className="my-20 bg-white text center ">
      <MaxWidthWrapper>
        {/* Title Section */}
        <div className="flex w-full  flex-col sm:flex-row justify-center items-center mb-6">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 font-heading mb-4 sm:mb-0">
            About Drason Energies
          </h2>
        </div>

        <div className=" max-w-5xl mx-auto">
          <p className=" text-center">
            Drason Energy Services; a division of Drason Global Limited, is a
            leading service provider within the Oil & Gas industry. We offer a
            comprehensive suite of solutions across the entire energy value
            chain, from upstream exploration and production to downstream
            processing and transportation.
          </p>

          <p className=" text-center">
            Our team of highly skilled professionals delivers best-in-class
            services in design, engineering, construction, procurement,
            instrumentation, automation & control, operations, maintenance, and
            pipeline integrity. We are your trusted partner for achieving
            optimal project outcomes throughout your Oil & Gas operations.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default AboutDrasonEnergies;
