'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import Lightbox, { Slide } from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const brandImages = [
  { src: '/drason-oil.webp', alt: 'Palm Oil' },
  { src: '/grounded-crayfish.webp', alt: 'Grounded Crayfish' },
  { src: '/yellow-and-white.webp', alt: 'Yellow and White Garri' },
  { src: '/garri.webp', alt: 'Garri' },
  { src: '/crayfish.webp', alt: 'Crayfish' },
  { src: '/egusi.webp', alt: 'Whole Egusi' },
];

// Build slides correctly
const slides: Slide[] = brandImages.map((img) => ({
  src: img.src,
  alt: img.alt,
}));

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  return (
    <section className="py-16 mt-20 md:py-24 bg-gray-50 ">
      <MaxWidthWrapper>
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#890c25] tracking-tight">
            Brand Gallery
          </h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Explore our diverse portfolio of excellence across energy, food,
            maritime, and training.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {brandImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-xl shadow hover:shadow-md transition-all duration-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#890c25] focus:ring-offset-2"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain p-3 md:p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={90}
                  priority={index < 3}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center p-3 md:p-4">
                  <p className="text-white font-semibold text-sm md:text-base translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                    {image.alt}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        plugins={[Thumbnails]}
        controller={{ closeOnBackdropClick: true }}
        thumbnails={{ position: 'bottom', width: 80, height: 60, gap: 8 }}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
          thumbnail: { borderRadius: 6 },
        }}
        labels={{
          Close: 'Close (Esc)',
          Next: 'Next',
          Previous: 'Previous',
        }}
        carousel={{ finite: false }}
      />
    </section>
  );
};

export default Gallery;
