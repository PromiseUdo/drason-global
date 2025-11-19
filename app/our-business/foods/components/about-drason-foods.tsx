import MaxWidthWrapper from '@/components/max-width-wrapper';
import React from 'react';

function AboutDrasonFoods() {
  return (
    <section className="my-20 bg-white">
      <MaxWidthWrapper>
        {/* Title Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4 sm:mb-0">
            About Drason Foods
          </h2>
        </div>

        <div>
          <p className="md:max-w-4xl">
            Drason Foods, a dedicated subsidiary of Drason Global Limited, leads
            the way in promoting healthy agricultural products and food across
            Nigeria and Africa. Committed to sustainability, quality, and
            innovation, we aim to revolutionize the agro-industry with a vision
            to expand globally. Specializing in the production, packaging, and
            marketing of agro products, we focus on health and nutrition,
            positioning ourselves as leaders in delivering top-tier
            agro-services.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default AboutDrasonFoods;
