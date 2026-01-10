'use client';

import React from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Leaf, Truck, Factory, Package, Globe, Trees } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: 'Food Chandeling',
    description:
      'Expert management and distribution of food products, ensuring quality, safety, and nutritional value.',
    icon: <Package className="w-7 h-7" />,
  },
  {
    title: 'Crop Farming',
    description:
      'Sustainable and organic farming practices for the cultivation of nutritious crops.',
    icon: <Leaf className="w-7 h-7" />,
  },
  {
    title: 'Animal and Livestock Feed Production',
    description:
      'Production of high-quality, nutritious feed to support healthy livestock growth and enhance food quality.',
    icon: <Factory className="w-7 h-7" />,
  },
  {
    title: 'Cassava Production',
    description:
      'Specialized techniques in cassava farming to produce high-yield, nutritious cassava products.',
    icon: <Trees className="w-7 h-7" />,
  },
  {
    title: 'Agro-Commodity Export',
    description:
      'Efficient export services to distribute healthy agricultural commodities globally.',
    icon: <Globe className="w-7 h-7" />,
  },
  {
    title: 'Palm Oil Processing',
    description:
      'Advanced processing techniques to produce high-quality, healthy palm oil products.',
    icon: <Truck className="w-7 h-7" />,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <MaxWidthWrapper>
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 font-heading mb-4 sm:mb-0">
            Our Services
          </h2>

          <p className="mt-3 text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            Delivering excellence across the agricultural value chain with
            sustainability, quality, and innovation at our core.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#890c25] hover:bg-[#890c25]/5 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-5 w-14 h-14 rounded-lg bg-[#890c25] text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#890c25] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Subtle Arrow on Hover */}
              {/* <div className="mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-[#890c25] font-medium text-sm flex items-center gap-1">
                  Learn more
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div> */}
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ServicesSection;
