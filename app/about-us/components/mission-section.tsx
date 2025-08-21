import React from "react";
import Image from "next/image";

const MissionSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="flex justify-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-heading">
            Our Values
          </h2>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Vertical Separator Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2">
            <div className="h-full w-px bg-gray-300 mx-auto"></div>
          </div>{" "}
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side */}
            <div className="space-y-16 md:pr-8">
              {/* Diversity */}
              <div className="relative">
                <div className="flex flex-col items-center md:items-end text-right">
                  <div className="flex items-center justify-center md:justify-end">
                    <h5 className="text-xl font-semibold text-gray-900 font-heading">
                      Integrity
                    </h5>
                    <div className="hidden md:block w-16 h-px bg-gray-300 ml-4 -mr-12"></div>
                  </div>
                  <p className="text-[#737477] mt-2 text-center md:text-right  text-[15px]  mr-8">
                    We uphold the highest level of integrity in all our actions,
                    fostering trust and transparency with our clients, partners,
                    and employees
                  </p>
                </div>
                <div className="mt-6 relative w-full md:w-[calc(100%-2rem)] h-80 mx-auto md:ml-auto md:mr-8">
                  {" "}
                  <Image
                    src="/maritime.webp"
                    alt="Diversity"
                    fill
                    className="object-cover "
                  />
                </div>
              </div>

              {/* Innovation */}
              <div className="relative">
                <div className="flex flex-col items-center md:items-end text-right">
                  <div className="flex items-center justify-end">
                    <h5 className="text-xl font-semibold text-gray-900 font-heading">
                      Excellence
                    </h5>
                    <div className="hidden md:block w-16 h-px bg-gray-300 ml-4 -mr-12"></div>
                  </div>
                  <p className="text-[#737477] mt-2 text-center md:text-right text-[15px]  mr-8">
                    We strive for excellence in everything we do, exceeding
                    expectations and setting new standards to deliver
                    exceptional outcomes for our clients and stakeholders
                  </p>
                </div>
                <div className="mt-6 relative w-full md:w-[calc(100%-2rem)] h-80 mx-auto md:ml-auto md:mr-8">
                  <Image
                    src="/maritime.webp"
                    alt="Innovation"
                    fill
                    className="object-cover "
                  />
                </div>
              </div>
              <div className="relative">
                <div className="flex flex-col items-center md:items-end text-right">
                  <div className="flex items-center justify-end">
                    <h5 className="text-xl font-semibold text-gray-900 font-heading">
                      Team Work
                    </h5>
                    <div className="hidden md:block w-16 h-px bg-gray-300 ml-4 -mr-12"></div>
                  </div>
                  <p className="text-[#737477] mt-2 text-center md:text-right text-[15px]  mr-8">
                    Together, we achieve greatness. Our collaborative and
                    supportive work culture empowers every individual to
                    contribute their best and achieve remarkable results as a
                    unified team
                  </p>
                </div>
                <div className="mt-6 relative w-full md:w-[calc(100%-2rem)] h-80 mx-auto md:ml-auto md:mr-8">
                  <Image
                    src="/maritime.webp"
                    alt="Innovation"
                    fill
                    className="object-cover "
                  />
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-16 md:pl-8 md:mt-16">
              {/* Excellence */}
              <div className="relative">
                <div className="flex flex-col items-center md:items-start  text-left">
                  <div className="flex items-center">
                    <div className="hidden md:block w-16 h-px bg-gray-300 mr-4 -ml-12"></div>
                    <h5 className="text-xl font-semibold text-gray-900 font-heading">
                      People
                    </h5>
                  </div>
                  <p className="text-[#737477] mt-2 text-center md:text-left text-[15px]   ml-8 ">
                    Our people are our most valuable asset. We prioritize their
                    growth, well-being, and diversity, fostering an inclusive
                    environment where everyone can thrive
                  </p>
                </div>
                <div className="mt-6 relative w-full md:w-[calc(100%-2rem)] mx-auto mr-auto  h-80  md:ml-8">
                  <Image
                    src="/maritime.webp"
                    alt="Excellence"
                    fill
                    className="object-cover "
                  />
                </div>
              </div>

              {/* Academic Excellence */}
              <div className="relative">
                <div className="flex flex-col items-center md:items-start  text-left">
                  <div className="flex items-center">
                    <div className="hidden md:block w-16 h-px bg-gray-300 mr-4 -ml-12"></div>
                    <h5 className="text-xl font-semibold text-gray-900 font-heading">
                      Customer Satisfaction
                    </h5>
                  </div>
                  <p className="text-[#737477] mt-2 text-center md:text-left text-[15px]   ml-8">
                    Our top priority is customer satisfaction. We are dedicated
                    to understanding our customers' needs and providing
                    unparalleled service to ensure their success and happiness
                  </p>
                </div>
                <div className="mt-6 relative w-full md:w-[calc(100%-2rem)] mx-auto mr-auto  h-80  md:ml-8">
                  <Image
                    src="/maritime.webp"
                    alt="Academic Excellence"
                    fill
                    className="object-cover "
                  />
                </div>
              </div>
              <div className="relative">
                <div className="flex flex-col items-center md:items-start  text-left">
                  <div className="flex items-center">
                    <div className="hidden md:block w-16 h-px bg-gray-300 mr-4 -ml-12"></div>
                    <h5 className="text-xl font-semibold text-gray-900 font-heading">
                      Innovation
                    </h5>
                  </div>
                  <p className="text-[#737477] mt-2 text-center md:text-left text-[15px]   ml-8">
                    Embracing innovation, we continually seek new ideas and
                    solutions to drive progress and stay at the forefront of our
                    industry, delivering cutting-edge products and services
                  </p>
                </div>
                <div className="mt-6 relative w-full md:w-[calc(100%-2rem)] mx-auto mr-auto  h-80  md:ml-8">
                  <Image
                    src="/maritime.webp"
                    alt="Academic Excellence"
                    fill
                    className="object-cover "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
