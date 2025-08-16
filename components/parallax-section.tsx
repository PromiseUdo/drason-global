"use client";

import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";

interface ParallaxImageSectionProps {
  backgroundImage?: string;
}

const ParallaxImageSection: React.FC<ParallaxImageSectionProps> = ({
  backgroundImage = "/01.webp",
}) => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat h-[600px] bg-fixed md:h-[500px] sm:h-[250px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <MaxWidthWrapper>
        <div className="h-full" />
      </MaxWidthWrapper>
    </section>
  );
};

export default ParallaxImageSection;
