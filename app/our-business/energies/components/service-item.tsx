'use client';

import {
  ChevronRight,
  Hammer,
  Wrench,
  Paintbrush,
  Gauge,
  Wind,
  RotateCw,
} from 'lucide-react';
import Image from 'next/image';
import Lightbox, { Slide } from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { useState } from 'react';

interface ServiceItem {
  title: string;
  icon: React.ElementType;
  description: string;
  details: string[];
  images?: string[]; // Optional image URLs
}

interface Service {
  name: string;
  items: ServiceItem[];
}

const services: Service[] = [
  {
    name: 'Maintenance',
    items: [
      {
        title: 'Fabrication and Construction',
        icon: Hammer,
        description:
          'Precision metal fabrication, welding, and on-site construction for industrial assets.',
        details: [
          'Structural steel fabrication',
          'Piping systems installation',
          'Pressure vessel repairs',
          'Modular skid assembly',
        ],
        images: [
          '/images/services/fabrication-1.jpg',
          '/images/services/fabrication-2.jpg',
        ],
      },
      {
        title: 'Bolt Torquing And Tensioning',
        icon: Wrench,
        description:
          'Certified hydraulic and manual bolting services ensuring joint integrity.',
        details: [
          'Flange management',
          'Hydraulic torque wrenches (up to 50,000 Nm)',
          'Ultrasonic bolt load monitoring',
          'Tensioning for critical joints',
        ],
      },
      {
        title: 'Blasting, Painting and Coating',
        icon: Paintbrush,
        description:
          'Surface preparation and protective coatings for corrosion control.',
        details: [
          'Grit blasting (SA 2.5)',
          'Epoxy & polyurethane coatings',
          'Thermal spray aluminum (TSA)',
          'Intumescent fireproofing',
        ],
        images: ['/images/services/painting-1.jpg'],
      },
      {
        title: 'Overhead & Offshore Crane Maintenance',
        icon: Paintbrush,
        description:
          'Full lifecycle maintenance and inspection of lifting equipment.',
        details: [
          'API 2C & LOLER compliance',
          'Load testing & certification',
          'Wire rope replacement',
          'Slewing bearing inspection',
        ],
      },
      {
        title: 'Scaffolding',
        icon: Paintbrush,
        description:
          'Safe, compliant access solutions for complex industrial environments.',
        details: [
          'Design & engineering (TG20 compliant)',
          'Rapid erection & dismantling',
          'Confined space access',
          'Temporary roofing systems',
        ],
      },
      {
        title: 'Rope Access',
        icon: Paintbrush,
        description:
          'IRATA-certified technicians for high-angle and difficult-access work.',
        details: [
          'Level 1–3 IRATA teams',
          'Non-destructive testing (NDT)',
          'Welding & cutting at height',
          'Bird proofing & netting',
        ],
        images: [
          '/images/services/rope-access-1.jpg',
          '/images/services/rope-access-2.jpg',
        ],
      },
      {
        title: 'Field Instrumentation',
        icon: Gauge,
        description:
          'Installation, calibration, and loop checking of process instrumentation.',
        details: [
          'Transmitters (P, T, L, F)',
          'Control valve servicing',
          'HART/Fieldbus configuration',
          'Hazardous area (ATEX) compliance',
        ],
      },
      {
        title: 'HVAC Services',
        icon: Wind,
        description:
          'Design, installation, and maintenance of industrial climate control systems.',
        details: [
          'Chiller & AHU overhauls',
          'Ductwork fabrication',
          'Refrigerant recovery',
          'Air quality monitoring',
        ],
      },
      {
        title: 'Rotating Equipment',
        icon: RotateCw,
        description:
          'Overhaul, alignment, and vibration analysis of pumps, turbines, and compressors.',
        details: [
          'Laser alignment',
          'Dynamic balancing',
          'Condition monitoring',
          'Seal & bearing replacement',
        ],
        images: ['/images/services/rotating-1.jpg'],
      },
    ],
  },
];

// Build all slides globally for lightbox
function buildSlides(services: Service[]): Slide[] {
  const slides: Slide[] = [];
  services.forEach((service) =>
    service.items.forEach((item) =>
      item.images?.forEach((url) =>
        slides.push({
          src: url,
          //   title: `${item.title} – ${service.name}`,
        })
      )
    )
  );
  return slides;
}

export function ServicesDetailed() {
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);
  const slides = buildSlides(services);

  // Find global index of an image across all services
  const getGlobalImageIndex = (
    serviceIdx: number,
    itemIdx: number,
    imgIdx: number
  ): number => {
    let count = 0;
    for (let s = 0; s < services.length; s++) {
      const service = services[s];
      for (let i = 0; i < service.items.length; i++) {
        const item = service.items[i];
        if (s < serviceIdx || (s === serviceIdx && i < itemIdx)) {
          count += item.images?.length || 0;
        } else if (s === serviceIdx && i === itemIdx) {
          count += imgIdx;
          return count;
        }
      }
    }
    return count;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive industrial maintenance and specialist services
            delivered with precision and safety.
          </p>
        </div>

        {services.map((service, serviceIdx) => (
          <div key={serviceIdx} className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-2">
              <ChevronRight className="w-6 h-6 text-blue-600" />
              {service.name}
            </h3>

            <div className="space-y-8">
              {service.items.map((item, itemIdx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={itemIdx}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-gray-900">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-gray-600">
                            {item.description}
                          </p>

                          <ul className="mt-4 space-y-2">
                            {item.details.map((detail, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-sm text-gray-700"
                              >
                                <span className="text-blue-600 mt-0.5">•</span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Image Gallery */}
                      {item.images && item.images.length > 0 && (
                        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                          {item.images.map((url, imgIdx) => {
                            const globalIdx = getGlobalImageIndex(
                              serviceIdx,
                              itemIdx,
                              imgIdx
                            );
                            return (
                              <button
                                key={imgIdx}
                                onClick={() => setLightboxIndex(globalIdx)}
                                className="relative group rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
                              >
                                <Image
                                  src={url}
                                  alt={`${item.title} example ${imgIdx + 1}`}
                                  width={300}
                                  height={200}
                                  className="object-cover w-full h-32"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                  <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                  </svg>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Lightbox */}
        <Lightbox
          open={lightboxIndex >= 0}
          index={lightboxIndex}
          close={() => setLightboxIndex(-1)}
          slides={slides}
          plugins={[Thumbnails]}
          controller={{ closeOnBackdropClick: true }}
          labels={{
            Close: 'Close (Esc)',
            Next: 'Next →',
            Previous: '← Previous',
          }}
          carousel={{ finite: false }}
        />
      </div>
    </section>
  );
}
