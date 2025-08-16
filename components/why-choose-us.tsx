"use client";

import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import Link from "next/link";
import { LiteYoutubeEmbed } from "react-lite-yt-embed";

const whyUs = [
  "Exceptional service delivery with 98% client retention rate,",
  "Personalized solutions, and dedicated support teams for every project",
  "Uncompromising commitment to safety with zero-incident targets",
  "Strategic Location and Global Linkages",
  "A Culture of Excellence Built to Excel",
  "Commitment to Innovation and Research",
  "Vision-Driven Leadership",
  "Certified Professionals",
];

const WhyChooseUs: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoOpen(true);
  };

  const handleCloseModal = () => {
    setIsVideoOpen(false);
  };

  return (
    <>
      <section className="my-20 py-20 bg-white">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Section */}
            <div className="relative">
              <div className="border-gray-900 border-l pl-6 md:pl-10 max-[576px]:border:none">
                <h2 className="text-[33px] md:text-[55px] mb-4 font-bold text-gray-900 font-heading ">
                  Why <span className="text-[#890c25]  ">Choose</span> Us
                </h2>
                <div>
                  <p className="text-[15px] text-[#737477]   mb-8">
                    We combine industry expertise, cutting-edge technology, and
                    unwavering commitment to safety to deliver exceptional
                    results across all our service areas.
                  </p>

                  <div className="relative">
                    <ul className="list-none space-y-3 text-base text-gray-600">
                      {whyUs.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start text-[#737477] text-[15px]"
                        >
                          <svg
                            className="h-5 w-5 text-[#890c25] flex-shrink-0 mt-1 mr-3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="relative mt-12 lg:mt-0">
              <div className="relative">
                <Image
                  src="/01.jpg"
                  alt="Campus video thumbnail"
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 md:h-96 "
                />
                <div className="absolute inset-0 bg-black/20" />
                <button
                  onClick={handlePlayButtonClick}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
                  aria-label="Play video"
                >
                  <div className="relative">
                    <Image
                      src="/play-round.svg"
                      alt="Play round"
                      width={126}
                      height={126}
                      className="animate-spin-slow lg:w-[80px] lg:h-[80px]"
                    />
                    <Image
                      src="/play-icon.svg"
                      alt="Play icon"
                      width={50}
                      height={50}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[30px] lg:h-[30px]"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Commented-out Shape Images */}
          {/* <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/01.png"
              alt="Shape 1"
              width={50}
              height={50}
              className="absolute top-10 left-10 opacity-50"
            />
            <Image
              src="/02.png"
              alt="Shape 2"
              width={50}
              height={50}
              className="absolute bottom-10 left-20 opacity-50"
            />
            <Image
              src="/03.png"
              alt="Shape 3"
              width={50}
              height={50}
              className="absolute top-20 right-10 opacity-50"
            />
            <Image
              src="/04.png"
              alt="Shape 4"
              width={50}
              height={50}
              className="absolute bottom-20 right-20 opacity-50"
            />
          </div> */}
        </MaxWidthWrapper>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
          <div className="relative w-full max-w-4xl">
            <button
              className="absolute top-4 right-4 text-white text-3xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center z-50 hover:bg-black/75 transition-colors"
              onClick={handleCloseModal}
              aria-label="Close video modal"
            >
              <X className="w-6 h-6" />
            </button>
            <LiteYoutubeEmbed
              id=""
              noCookie={true}
              imageAltText="Campus video thumbnail"
              iframeTitle="Unipix University Campus History Video"
            />
          </div>
        </div>
      )}

      {/* Custom Animation for Play Button */}
      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </>
  );
};

export default WhyChooseUs;
