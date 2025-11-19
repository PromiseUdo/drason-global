'use client';

import React from 'react';
import Image from 'next/image';

const services = [
  { title: 'Maintenance', img: '/maintenance.webp' },
  {
    title: 'Engineering / Installation Services',
    img: '/installation.webp',
  },
  { title: 'Procurement', img: '/procurement.webp' },
  { title: 'Inspection Services', img: '/inspection.webp' },
  { title: 'Manpower Supply', img: '/manpower.webp' },
  { title: 'Facility Support', img: '/support.webp' },
];

const Services = () => {
  return (
    <section className="relative z-30 -mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border border-gray-200 overflow-hidden">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group  hover:cursor-pointer relative flex flex-col bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Overlay - Now covers entire card */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 pointer-events-none z-30" />

              {/* Text */}
              <div className="relative z-10 flex items-center justify-center text-center bg-[#0c0c0c] text-white font-semibold text-xs md:text-sm px-3 py-4 min-h-[72px]">
                <h3 className="leading-snug">{service.title}</h3>
              </div>

              {/* Image */}
              <div className="relative w-full h-32 md:h-40 bg-gray-50 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover object-center transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  quality={90}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
