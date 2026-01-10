// 'use client';

// import React from 'react';
// import Image from 'next/image';

// const services = [
//   { title: 'Maintenance', img: '/maintenance.webp' },
//   {
//     title: 'Engineering / Installation Services',
//     img: '/installation.webp',
//   },
//   { title: 'Procurement', img: '/procurement.webp' },
//   { title: 'Inspection Services', img: '/inspection.webp' },
//   { title: 'Manpower Supply', img: '/manpower.webp' },
//   { title: 'Facility Support', img: '/support.webp' },
// ];

// const Services = () => {
//   return (
//     <section className="relative z-30 -mt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border border-gray-200 overflow-hidden">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               className="group  hover:cursor-pointer relative flex flex-col bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
//             >
//               {/* Overlay - Now covers entire card */}
//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 pointer-events-none z-30" />

//               {/* Text */}
//               <div className="relative z-10 flex items-center justify-center text-center bg-[#0c0c0c] text-white font-semibold text-xs md:text-sm px-3 py-4 min-h-[72px]">
//                 <h3 className="leading-snug">{service.title}</h3>
//               </div>

//               {/* Image */}
//               <div className="relative w-full h-32 md:h-40 bg-gray-50 overflow-hidden">
//                 <Image
//                   src={service.img}
//                   alt={service.title}
//                   fill
//                   className="object-cover object-center transition-transform duration-500"
//                   sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
//                   quality={90}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const servicesData = [
  {
    title: 'Maintenance',
    img: '/maintenance.webp',
    subServices: [
      'Fabrication and Construction',
      'Bolt Torquing And Tensioning',
      'Blasting, Painting and Coating',
      'Overhead & Offshore Crane Maintenance',
      'Scaffolding',
      'Rope Access',
      'Field Instrumentation',
      'HVAC Services',
      'Rotating Equipment',
    ],
  },
  {
    title: 'Engineering / Installation Services',
    img: '/installation.webp',
    subServices: [
      'Onshore/Offshore pipeline',
      'Laying & Pigging',
      'Equipment Leasing',
      'Static & Rotating Equipment',
      'Project Management',
      'Mooring Systems Services',
      'Electrical Services',
      'Vessels and Heavy Equipment',
      'Pressure Regulatory Monitoring System (PRMS)',
    ],
  },
  {
    title: 'Procurement',
    img: '/procurement.webp',
    subServices: [
      'Safety Equipment and Materials',
      'Subsea Systems',
      'Piping Accessories',
      'Logistics',
      'Chemicals & Grease Electrical &  Instrumentation materials',
      'Mechanical Materials & Consumables',
    ],
  },
  {
    title: 'Inspection Services',
    img: '/inspection.webp',
    subServices: [
      'Instrumentation Inspection',
      'Non-destructive Test',
      'ROVs',
      'Overhead Cranes Compressors',
    ],
  },
  {
    title: 'Manpower Supply',
    img: '/manpower.webp',
    subServices: [
      'Technical Personnel',
      'Administrative Personnel',
      'HSE Personnel',
      'Training',
      'Expatriate Personnel',
    ],
  },
  {
    title: 'Facility Support',
    img: '/support.webp',
    subServices: [
      'Janitorial Services',
      'Security Services',
      'HVAC Management',
      'Utilities Management',
    ],
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative z-30 -mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border border-gray-200 overflow-visible">
          {servicesData.map((service, idx) => (
            <div
              key={idx}
              className="group hover:cursor-pointer relative flex flex-col bg-white border border-gray-100 transition-all duration-300 overflow-visible"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Main Service Card */}
              <div
                className={`relative transition-all duration-300 ${
                  hoveredIndex === idx ? 'shadow-2xl z-50' : 'hover:shadow-xl'
                }`}
              >
                {/* Overlay */}
                <div
                  className={`absolute inset-0 transition-colors duration-500 pointer-events-none z-30 ${
                    hoveredIndex === idx ? 'bg-black/60' : 'bg-black/0'
                  }`}
                />

                {/* Text */}
                <div className="relative z-40 flex items-center justify-center text-center bg-[#0c0c0c] text-white font-semibold text-xs md:text-sm px-3 py-4 min-h-[72px]">
                  <h3 className="leading-snug">{service.title}</h3>
                </div>

                {/* Image */}
                <div className="relative w-full h-32 md:h-40 bg-gray-50 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Sub-Services Dropdown */}
              <div
                className={`absolute top-full left-0 right-0 bg-white shadow-2xl border border-gray-200 z-40 transition-all duration-300 ${
                  hoveredIndex === idx
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="py-2">
                  <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                    Services Offered
                  </div>
                  <ul className="py-1">
                    {service.subServices.map((subService, subIdx) => (
                      <li
                        key={subIdx}
                        className="px-4 py-2.5 hover:bg-gray-50 transition-colors duration-150 flex items-center justify-between group/item cursor-pointer"
                      >
                        <span className="text-sm text-gray-700 group-hover/item:text-gray-900">
                          {subService}
                        </span>
                        {/* <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover/item:opacity-100 transition-opacity duration-150" /> */}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
