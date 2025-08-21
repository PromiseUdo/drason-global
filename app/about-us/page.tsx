import React from "react";

import PageHeader from "./components/page-header";
import HistorySection from "./components/history-section";
import FunFactSection from "./components/fun-fact";
import MissionSection from "./components/mission-section";
import TestimonialSection from "./components/testimonial";
import MissionVision from "./components/mission-vision";

const page = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about", isActive: true },
  ];

  return (
    <div>
      <PageHeader
        title="About Us"
        breadcrumbItems={breadcrumbItems}
        // backgroundImage="/contactus.avif"
      />
      {/* <Main /> */}
      {/* <AboutUniversity /> */}
      <HistorySection />
      <FunFactSection />
      <MissionVision />
      <MissionSection />
      {/* <CampusTourSection /> */}
      {/* <TestimonialSection /> */}
    </div>
  );
};

export default page;
