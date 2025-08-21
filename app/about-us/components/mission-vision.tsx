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
            <p className="">
              We envision a world where technology and human ingenuity combine
              to solve the greatest challenges and unlock limitless
              possibilities.
            </p>
          </div>

          {/* Vision Div */}

          <div className="flex-1 bg-[#00984A] p-6">
            <h2 className="text-2xl font-bold mb-4 font-heading">Mission</h2>
            <p className="">
              Our mission is to empower individuals and organizations with
              innovative solutions that drive progress and create lasting
              impact.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default MissionVision;
