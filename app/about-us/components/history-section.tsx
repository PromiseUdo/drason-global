import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/max-width-wrapper";

const HistorySection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <MaxWidthWrapper>
        <div className=" mx-auto ">
          <div className="flex flex-col lg:flex-row md:gap-16 items-center">
            {/* Image Column */}
            <div className="lg:w-1/2">
              <div className="relative w-full aspect-[4/3]  overflow-hidden">
                <Image
                  src="/maritime.webp"
                  alt="Euston University History"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:w-1/2">
              <div className=" mx-auto lg:mx-0">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 font-heading">
                  About Drason Global
                </h2>
                <div className="space-y-6 text-[#737477] ">
                  <p>
                    Drason Global Limited is an indigenous company incorporated
                    in Nigeria in 2020 that provides benchmark quality
                    performance to our clients based on innovative solutions,
                    safety, environmental responsibility, dedicated professional
                    employees that are guided by Godly principles and modern
                    efficient equipment.
                  </p>
                  <p>
                    We will continue to deliver value added services and
                    products to our clients and to grow through accretive
                    acquisitions in our business areas. We are in a leading
                    position to provide products and services primarily to the
                    domestic market, the West Africa Sub region and eventually
                    to the International Markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HistorySection;
