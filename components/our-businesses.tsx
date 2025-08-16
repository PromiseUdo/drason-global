"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
}

const services: Service[] = [
  {
    title: "Agro Services",
    description:
      "Comprehensive agricultural solutions including equipment leasing, crop consulting, and farm management services.",
    image: "/03.webp", // Replace with actual image path
    link: "#",
  },
  {
    title: "Maritime Services",
    description:
      "End-to-end maritime solutions including vessel chartering, logistics, and port operations management.",
    image: "/maritime.webp", // Replace with actual image path
    link: "#",
  },
  {
    title: "Oil & Gas Services",
    description:
      "Specialized solutions for the energy sector including equipment supply, maintenance, and technical support.",
    image: "/01.webp", // Replace with actual image path
    link: "#",
  },
  {
    title: "Training Programs",
    description:
      "Industry-recognized certification courses for professionals across all our service sectors.",
    image: "/presentation.webp", // Replace with actual image path
    link: "#",
  },
];

const BusinessSection: React.FC = () => {
  return (
    <section className="my-20 bg-white">
      <MaxWidthWrapper>
        {/* Title Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4 sm:mb-0">
            Our Business Divisions
          </h2>
          <Link
            href="/"
            className="group overflow-hidden inline-flex relative items-center gap-2 px-6 py-3 text-sm bg-[#890c25] font-semibold text-white uppercase tracking-wider transition-colors"
          >
            <span className="relative z-10">View All Services</span>
            <span className="absolute inset-0 bg-[#00984A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <ArrowRight className="-rotate-45 w-4 h-4 relative z-10" />
          </Link>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center bg-no-repeat h-96 shadow-md overflow-hidden group"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/80 group-hover:via-black/50 transition-colors" />

              <div className="relative p-6 flex flex-col justify-between h-full z-10">
                <div>
                  <h5 className="text-2xl font-semibold text-white font-heading mb-2">
                    {service.title}
                  </h5>
                  <p className="text-base text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                </div>

                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white tracking-wider hover:text-amber-200 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default BusinessSection;
