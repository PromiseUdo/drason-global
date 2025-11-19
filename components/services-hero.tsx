'use client';

import React from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import Image from 'next/image';

const ServicesHero = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Static Background Image */}
      <Image
        src="/services-hero-bg.webp"
        alt="Hero background"
        fill
        priority
        className="object-cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <MaxWidthWrapper className="h-full z-40">
        <div className="flex h-full w-full flex-col items-center justify-center text-white">
          <div className="w-full max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              {title}
            </h1>

            <p className="font-medium text-[15px] mb-4 max-w-lg mx-auto text-center">
              {description}
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ServicesHero;
