"use client";

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Map from "./map";
import { FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa6"; // Font Awesome 6 icons

interface ContactItem {
  icon: React.ReactNode;
  content?: string | JSX.Element;
  links?: { href: string; label: string }[];
}

const contactItems: ContactItem[] = [
  {
    icon: <MapPin className="w-12 h-12 text-[#890c25]" />,
    content: <>Kilometer 10 Abakaliki-Enugu Expressway, Ebonyi State</>,
  },
  {
    icon: <Phone className="w-12 h-12 text-[#890c25]" />,
    links: [{ href: "tel:+2347062168146", label: "+234 (0) 706 216 8146" }],
  },
  {
    icon: <Mail className="w-12 h-12 text-[#890c25]" />,
    links: [
      {
        href: "mailto:info@drasonglobal.com",
        label: "info@drasonglobal.com",
      },
    ],
  },
];

const ContactInfo: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <MaxWidthWrapper>
        <div className="text-center mb-10">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading capitalize">
            General Contact Information
          </h2> */}
        </div>
        <div className="grid grid-cols-12 gap-6 justify-items-center">
          <div className="bg-[#F6F6F6] col-span-12 md:col-span-3  h-64 md:h-96 p-6 w-full  flex flex-col items-start gap-6 justify-start hover:shadow-md transition-shadow duration-300">
            <div className="flex-1">
              <div className="flex-1 flex flex-col gap-y-[2rem]">
                <div className="">
                  <h3 className="text-[#890c25] font-semibold text-[15px] mb-4">
                    General Enquiries:
                  </h3>

                  <p className="text-[#890c25] text-[15px]">
                    Call: +234 (0) 706 216 8146
                  </p>
                </div>
                <div>
                  <h3 className="text-[#890c25] font-semibold text-[15px] mb-4">
                    Customer Care:
                  </h3>

                  <p className="text-[#890c25] text-[15px]">
                    info@drasonglobal.com
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#890c25] transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#890c25] transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#890c25] transition-colors duration-300"
                    aria-label="YouTube"
                  >
                    <FaYoutube size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#890c25] transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-red-100 col-span-12 md:col-span-3 h-64  md:h-96   p-6 w-full  flex flex-col items-start gap-6 justify-start hover:shadow-md transition-shadow duration-300">
            <div className="flex-1">
              <h3 className="text-[#890c25] font-semibold text-[15px] mb-4">
                Corporate Head Office:
              </h3>

              <p className="text-[#890c25] text-[15px]">
                1 Etim Okpoyo Close,
                <br /> off PH/Aba Expressway, <br /> Port Harcourt, <br />
                Rivers state
              </p>
            </div>
          </div>
          <div className="bg-[#F6F6F6] col-span-12 md:col-span-6   h-96   w-full  flex flex-col items-center gap-6 justify-center hover:shadow-md transition-shadow duration-300">
            <div className="flex-1 w-full">
              <Map />
            </div>
          </div>

          {/* {contactItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#F6F6F6] border border-gray-300  p-6 w-full max-w-sm flex flex-col items-center gap-6 justify-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div className="flex-1">
                {item.links ? (
                  <div className="space-y-1">
                    {item.links.map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        className="block text-[15px] text-center text-gray-600 hover:text-[#890c25] transition-colors"
                        aria-label={
                          link.href.startsWith("tel:")
                            ? `Call ${link.label}`
                            : `Email ${link.label}`
                        }
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-[15px] text-center text-gray-600">
                    {item.content}
                  </p>
                )}
              </div>
            </div>
          ))} */}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ContactInfo;
