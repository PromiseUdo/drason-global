'use client';

import React from 'react';
import MaxWidthWrapper from './max-width-wrapper';
import Image from 'next/image';

interface Section {
  title: string;
  content: string;
  image: string;
}

const sections: Section[] = [
  {
    title: 'Our Vision',
    content:
      'To be the foremost integrated services company in the oil and gas and energy sectors, setting unparalleled standards and driving global impact through innovation, efficiency, and sustainable growth.',
    image: '/maintenance.webp',
  },
  {
    title: 'Our Mission',
    content:
      'To optimize operations, deliver exceptional value to clients, drive sustainable growth, and make a positive global impact. ',
    image: '/instrumentation.jpg',
  },
];

const MissionVision: React.FC = () => {
  return (
    <MaxWidthWrapper className="my-24">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-14">
        {sections.map((section, index) => (
          <div key={index} className="border-t-[1px] border-black pt-8 ">
            <h2 className="text-3xl text-[#890c25] font-semibold">
              {section.title}
            </h2>
            <div className="mt-6 relative overflow-hidden  shadow transition-shadow duration-300 flex flex-col h-[500px] border border-gray-200">
              {/* Image - Top Half */}
              <div className="relative h-1/2 w-full">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Text - Bottom Half, Gray BG, Pinned to Bottom */}
              <div className="flex-1 bg-gray-100 p-6 flex flex-col justify-end">
                <p className="text-gray-700 leading-relaxed text-xl">
                  {section.content}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="border-t-[1px] border-black pt-8 ">
          <h2 className="text-3xl text-[#890c25] font-semibold">Our Values</h2>
          <div className="mt-6 relative overflow-hidden duration-300 flex flex-col h-[500px] ">
            {/* Image - Top Half */}
            <div className="relative h-1/2 w-full">
              <Image
                src="/manpower.webp"
                alt="values"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Text - Bottom Half, Gray BG, Pinned to Bottom */}
            <div className="flex-1 bg-gray-100 px-6 py-2 flex flex-col justify-end">
              <p className="text-gray-700 leading-relaxed text-xl">Integrity</p>
            </div>
            <div className="flex-1 bg-gray-100 px-6 py-2 mt-2 flex flex-col justify-end">
              <p className="text-gray-700 leading-relaxed text-xl">
                Excellence
              </p>
            </div>
            <div className="flex-1 bg-gray-100 px-6 py-2 mt-2 flex flex-col justify-end">
              <p className="text-gray-700 leading-relaxed text-xl">Safety</p>
            </div>
            <div className="flex-1 bg-gray-100 px-6 py-2 mt-2 flex flex-col justify-end">
              <p className="text-gray-700 leading-relaxed text-xl">
                Sustainability
              </p>
            </div>
            {/* <div className="flex-1 bg-gray-100 px-6 py-2 mt-2 flex flex-col justify-end">
              <p className="text-gray-700 leading-relaxed text-">Loyalty</p>
            </div> */}
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default MissionVision;
