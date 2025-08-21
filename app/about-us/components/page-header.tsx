"use client";

import React from "react";
// import Breadcrumb from "./breadcrumb";
import MaxWidthWrapper from "@/components/max-width-wrapper";

interface BreadcrumbItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface PageHeaderProps {
  title: string;
  breadcrumbItems: BreadcrumbItem[];
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  breadcrumbItems,
  backgroundImage = "/maritime.webp",
}) => {
  return (
    <section
      className="py-20 bg-cover h-[100vh] flex items-center justify-center bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      <MaxWidthWrapper className="">
        <div className="relative z-10 flex gap-10 flex-col items-center justify-center">
          {/* <Breadcrumb items={breadcrumbItems} /> */}
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
            {title}
          </h2>

          <p className="text-center text-white text-[15px] leading-[22.5px] max-w-lg">
            {" "}
            Drason Global Limited is an indigenous company incorporated in
            Nigeria in 2020 that provides benchmark quality performance to our
            clients based on innovative solutions, safety, environmental
            responsibility, dedicated professional employees that are guided by
            Godly principles and modern efficient equipment.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PageHeader;
