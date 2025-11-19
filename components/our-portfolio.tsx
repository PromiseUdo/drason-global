'use client';

import React from 'react';
import { ArrowRight, MapPin, Calendar, CheckCircle } from 'lucide-react';
import MaxWidthWrapper from './max-width-wrapper';
import Link from 'next/link';

interface Project {
  id: string;
  number: string;
  title: string;
  client: string;
  location: string;
  year: string;
  status: 'Completed' | 'In Progress';
  scope?: string;
}

const projects: Project[] = [
  {
    id: '01',
    number: '01',
    title: 'Improvement of Earthing Systems of Lightning Protection Systems',
    client: 'NNPC Gas Marketing Limited (NGML)',
    location: 'Guiness Metering Station, Benin City, Edo State',
    year: '2024',
    status: 'Completed',
  },
  {
    id: '02',
    number: '02',
    title: 'Improvement of Earthing Systems of Lightning Protection Systems',
    client: 'NNPC Gas Marketing Limited (NGML)',
    location: 'Time Ceramics Tiles Metering Station, Benin City, Edo State',
    year: '2024',
    status: 'Completed',
  },
  {
    id: '03',
    number: '03',
    title: 'Improvement of Earthing Systems of Lightning Protection Systems',
    client: 'NNPC Gas Marketing Limited (NGML)',
    location: 'Ossiomo Metering Station, Benin City, Edo State',
    year: '2024',
    status: 'Completed',
  },
  {
    id: '04',
    number: '04',
    title:
      'Maintenance on Printers, Repairs, Installation and Spares Requisition',
    client: 'NLNG Shipping and Marine Limited (NSML)',
    location: 'Alfred Temile Vessel',
    year: '2024',
    status: 'Completed',
    scope: 'Maintenance activities',
  },
  {
    id: '05',
    number: '05',
    title: 'RFQ on Deck & Engine Consumables Store Spares Supplies',
    client: 'NLNG Shipping and Marine Limited (NSML)',
    location: 'Alfred Temile Vessel',
    year: '2024',
    status: 'Completed',
    scope: '7-month supply contract',
  },
  {
    id: '06',
    number: '06',
    title: 'Improvement of Earthing Systems of Lightning Protection Systems',
    client: 'NNPC Gas Marketing Limited (NGML)',
    location: 'Time Ceramics Tiles Metering Station, Benin City, Edo State',
    year: '2024',
    status: 'Completed',
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">
              Our Portfolio
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Delivering excellence in engineering and safety solutions
            </p>
          </div>
          {/* <Link
            href="/portfolio"
            className="group mt-4 sm:mt-0 inline-flex items-center gap-2 px-6 py-3 text-sm bg-[#890c25] font-semibold text-white uppercase tracking-wider transition-all duration-300 overflow-hidden relative"
          >
            <span className="relative z-10">View All Projects</span>
            <ArrowRight className="w-4 h-4 relative z-10 -rotate-45 group-hover:rotate-0 transition-transform" />
            <span className="absolute inset-0 bg-[#00984A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          </Link> */}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
            >
              {/* Project Number Badge */}
              {/* <div className="bg-[#000000] text-white px-4 py-2 text-sm font-bold uppercase tracking-wider">
                Project {project.number}
              </div> */}

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 font-heading mb-3 line-clamp-3">
                  {project.title}
                </h3>

                <div className="space-y-3 text-sm text-gray-600 flex-grow">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 text-[#890c25] flex-shrink-0" />
                    <span className="line-clamp-2">{project.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 flex-shrink-0">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#890c25"
                        strokeWidth="2"
                      >
                        <path d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                      </svg>
                    </div>
                    <span>{project.client}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#890c25] flex-shrink-0" />
                    <span>{project.year}</span>
                  </div>

                  {project.scope && (
                    <p className="text-xs italic text-gray-500 mt-2">
                      {project.scope}
                    </p>
                  )}
                </div>

                {/* Status Badge */}
                <div className="mt-4 flex items-center gap-2">
                  <CheckCircle
                    className={`w-5 h-5 ${
                      project.status === 'Completed'
                        ? 'text-[#00984A]'
                        : 'text-yellow-600'
                    }`}
                  />
                  <span
                    className={`text-sm font-medium ${
                      project.status === 'Completed'
                        ? 'text-[#00984A]'
                        : 'text-yellow-600'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Hover Action */}
              {/* <div className="px-6 pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  href={`/portfolio/${project.id}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#890c25] hover:text-[#00984A] transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                </Link>
              </div> */}
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-[#890c25] font-semibold text-white uppercase tracking-wider transition-all duration-300 overflow-hidden relative"
          >
            <span className="relative z-10">All Projects</span>
            <ArrowRight className="w-4 h-4 relative z-10 -rotate-45" />
            <span className="absolute inset-0 bg-[#00984A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PortfolioSection;
