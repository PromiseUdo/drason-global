import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa6"; // Font Awesome 6 icons

const Footer = () => {
  return (
    <>
      <div className="w-full mt-20 bg-[#181818] pt-[30px] ">
        <MaxWidthWrapper>
          <div className="relative py-[10px] pt-[20px] pb-[50px]  flex items-center justify-center">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center w-full">
              <h2 className="leading-[30px] mb-4 md:md-0 text-center md:text-left lg:leading-[35px] font-heading font-bold text-[30px] lg:text-[35px] text-[#ffffff]">
                Subscribe To Newsletter
              </h2>
              <div className="p-[10px]">
                <form className="flex flex-col md:flex-row justify-center items-center gap-[20px]">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="placeholder:text-[#C2C2C2]  w-full outline-[#E53945] py-[10px]  text-[15px] px-4   bg-[#181818] text-[#C2C2C2] outline-none"
                  />
                  <button
                    type="submit"
                    className="gap-2 inline-flex items-center px-[30px] py-[15px] font-medium  bg-[#ffffff] text-[#181818]  uppercase tracking-[2px] text-[14px]"
                  >
                    <span className="relative z-10">Subscribe</span>

                    <ArrowRight className="-rotate-45 w-4 h-4 relative z-10" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <hr className="border-gray-500  " />
          <div className="w-full pb-[80px] pt-[50px] grid grid-cols-1 md:grid-cols-4 gap-[40px]">
            {/* First Column */}
            <div className="flex flex-col gap-4">
              <div className=" flex">
                <Image
                  src="/drason-logo.png"
                  alt="Drason logo"
                  width={85}
                  height={50}
                  unoptimized
                  className="w-[85px] h-auto object-contain"
                />
              </div>
              <p className="text-gray-400 text-[14px] leading-[21px] mb-2">
                Address: 1 Etim Okpoyo Close, off PH/Aba Expressway, Port
                Harcourt, Rivers state
              </p>

              <p className="text-gray-400  text-[14px] leading-[21px] mb-2">
                <span className="font-bold">Phone:</span> NG: +234 (0) 706 216
                8146
              </p>
              <p className="text-gray-400 text-[14px] leading-[21px] mb-2">
                <span className="font-bold">Email:</span> info@drasonglobal.com
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-white  text-[30px] leading-[30px] font-heading font-bold  pb-[20px]">
                Company
              </h4>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Gallery
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Consultation
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Contact Us
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-white text-[30px]  leading-[30px] font-heading font-bold  pb-[20px]">
                Businesses
              </h4>

              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Equipment Leasing & Hiring
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Marine Maintenance Services
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Procurement & Supply
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Offshore/Onshore Catering
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Food Export & Trading
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-white  text-[30px] leading-[30px] font-heading font-bold  pb-[20px]">
                Trainings
              </h4>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Energy, Oil and Gas Economics
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Process Safety Engineering
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Mechanical
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Instrumentation
              </a>
            </div>
          </div>

          {/* Lower part of the footer */}
        </MaxWidthWrapper>

        <div className="py-[40px] bg-[#0A0A0A] w-full ">
          <MaxWidthWrapper>
            <div className="w-full flex flex-col gap-6 items-center justify-center">
              <div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#00984A] transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={25} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#00984A] transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={25} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#00984A] transition-colors duration-300"
                    aria-label="YouTube"
                  >
                    <FaYoutube size={25} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#00984A] transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={25} />
                  </a>
                </div>
              </div>
              <div>
                <p className="text-[#cccccc] text-center text-[14px] leading-[21px] ">
                  Copyright © 2025 Drason Global Limited. All rights reserved. -
                  Developed by{" "}
                  <a
                    target="_blank"
                    href="https://pynacode.com"
                    className="underline"
                  >
                    Pynacode
                  </a>
                </p>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    </>
  );
};

export default Footer;
