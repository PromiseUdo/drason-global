import MaxWidthWrapper from '@/components/max-width-wrapper';
import React from 'react';

function AboutDrasonMaritime() {
  return (
    <section className="mt-20 bg-white text center ">
      <MaxWidthWrapper>
        {/* Title Section */}
        <div className="flex w-full  flex-col sm:flex-row justify-center items-center mb-6">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 font-heading mb-4 sm:mb-0">
            About Drason Maritime
          </h2>
        </div>

        <div className=" max-w-5xl space-y-3 mx-auto">
          <p className=" text-center">
            Drason Maritime Solutions and Supplies, a subsidiary of Drason
            Global Limited, is a leading Maritime Company that provides
            comprehensive services to the oil & gas industry and vessels docking
            at ports in Nigeria & West Africa, with a focus on quality, safety,
            efficiency, and excellence.
          </p>

          <p className=" text-center">
            We ensure that vessels receive reliable supplies and support to meet
            their operational needs.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default AboutDrasonMaritime;
