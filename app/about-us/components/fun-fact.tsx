import MaxWidthWrapper from "@/components/max-width-wrapper";
import React from "react";

const FunFactSection = () => {
  return (
    <MaxWidthWrapper>
      <section className="py-12 bg-transparent text-[#191919] w-full md:w-10/12  mx-auto">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="text-[#191919] flex flex-col md:flex-row justify-between items-center gap-8">
              {/* Stat 1 */}
              <div className="flex-1 text-center  relative">
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                  10+ Years
                </h2>
                <p className="text-[15px] ">Years of Operational Excellence</p>
                <div className="hidden md:block absolute right-0 top-1/2 bottom-1/2 w-px bg-gray-300/50 h-16 transform -translate-y-1/2"></div>
              </div>

              {/* Stat 2 */}
              <div className="flex-1 text-center  relative">
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                  100%
                </h2>
                <p className="text-[15px]">Client Retention</p>
                <div className="hidden md:block absolute right-0 top-1/2 bottom-1/2 w-px bg-gray-300/50 h-16 transform -translate-y-1/2"></div>
              </div>

              {/* Stat 3 */}
              <div className="flex-1 text-center ">
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                  50+
                </h2>
                <p className="text-[15px]">Students Trained</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default FunFactSection;
