"use client";

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/max-width-wrapper";

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading capitalize">
            General Contact Information
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {contactItems.map((item, index) => (
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
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ContactInfo;
