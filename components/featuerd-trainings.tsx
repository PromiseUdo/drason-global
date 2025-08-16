"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import Link from "next/link";

interface Program {
  title: string;
  description: string;
  image: string;
  link: string;
}

const programs: Program[] = [
  {
    title: "Energy, Oil and Gas Economics",
    description:
      "comprehensive training in process safety engineering tailored for engineers, operators, technicians, and HSE (Health, Safety, and Environment) professionals",
    image: "/energy.webp",
    link: "#",
  },
  {
    title: "Process Safety Engineering",
    description:
      "Enhanced understanding of process safety concepts, improved risk assessment skills, compliance with safety regulations, and ability to implement effective safety measures",
    image: "/safety.webp",
    link: "#",
  },
  {
    title: "Mechanical",
    description:
      "Gain expertise in areas such as thermodynamics, fluid mechanics, materials science, and mechanical design",
    image: "/welding.webp",
    link: "#",
  },
  {
    title: "Instrumentation",
    description:
      "Focuses on various industries' instrumentation principles, control systems, sensors, and automation technologies",
    image: "/instrumentation.webp",
    link: "#",
  },
];

const FeaturedTrainings: React.FC = () => {
  return (
    <section className="my-20 bg-white">
      <MaxWidthWrapper>
        {/* Title Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4 sm:mb-0">
            Training Programs
          </h2>
          <Link
            href="#"
            className="group overflow-hidden inline-flex relative items-center gap-2 px-6 py-3 text-sm bg-[#890c25] font-semibold text-white  uppercase tracking-wider  transition-colors"
          >
            <span className="relative z-10">Explore</span>

            <span className="absolute inset-0 bg-[#00984A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>

            <ArrowRight className="-rotate-45 w-4 h-4 relative z-10" />
          </Link>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center bg-no-repeat h-96  shadow-md overflow-hidden group"
              style={{ backgroundImage: `url(${program.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors" />
              <div className="relative p-10 flex flex-col justify-between  h-full z-10">
                <div>
                  <h5 className="text-[26px] font-semibold text-white font-heading mb-2">
                    {program.title}
                  </h5>
                  <p className="text-base text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {program.description}
                  </p>
                </div>

                <Link
                  href={program.link}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white   tracking-wider"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 -rotate-45" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FeaturedTrainings;
