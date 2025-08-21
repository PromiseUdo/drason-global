import MaxWidthWrapper from "@/components/max-width-wrapper";
import React from "react";

const MissionVision = () => {
  return (
    <div className="py-12">
      <MaxWidthWrapper>
        <div className="flex flex-col text-white md:flex-row gap-6">
          {/* Mission Div */}

          <div className="flex-1 bg-[#890c25] p-6 ">
            <h2 className="text-2xl font-bold mb-4 font-heading">Vision</h2>
            <p className="text-[15px]">
              To be the foremost integrated services company in the oil and gas
              and energy sectors, setting unparalleled standards and driving
              global impact through innovation, efficiency, and sustainable
              growth.
            </p>
          </div>

          {/* Vision Div */}

          <div className="flex-1 bg-[#000C1F] p-6">
            <h2 className="text-2xl font-bold mb-4 font-heading">Mission</h2>
            <p className="text-[15px]">
              To optimize operations, deliver exceptional value to clients,
              drive sustainable growth, and make a positive global impact.
              Through strategic acquisitions and a commitment to excellence, we
              aim to serve our clients in Nigeria, expand regionally in West
              Africa, and establish a strong presence in international markets.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default MissionVision;
