"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";

const slides = [
  {
    image: "/01.webp",
    headline: "Excellent Services in Oil and Gas Sector",
    subheading: "Drason Energies",
    primaryButton: "Explore",
    secondaryButton: "Learn more",
  },

  {
    image: "/03.webp",
    headline: "Sustainable, healthy agro products for your well-being",
    subheading: "Drason Foods",
    primaryButton: "Explore",
    secondaryButton: "Learn more",
  },

  {
    image: "/maritime.webp",
    headline: "Efficient Commercial Maritime Services",
    subheading: "Drason Maritime",
    primaryButton: "Explore",
    secondaryButton: "Learn more",
  },
  {
    image: "/presentation.webp",
    headline: "Effective trainings for growth",
    subheading: "Drason Trainings",
    primaryButton: "View Courses",
    secondaryButton: "Learn more",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const,
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Navigation Arrows */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-4">
        <button
          onClick={prevSlide}
          className="hidden md:block z-30 p-3 rounded-full border-2 border-[#cccccc] hover:border-[#890c25] text-[#cccccc] hover:bg-[#890c25] hover:text-white transition-all duration-300"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block z-30 p-3 rounded-full border-2 border-[#cccccc] hover:border-[#890c25] text-[#cccccc] hover:bg-[#890c25] hover:text-white transition-all duration-300"
          aria-label="Next slide"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence mode="sync">
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={index}
                className="absolute inset-0 h-full w-full"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    opacity: { duration: 1 }, // smoother fade
                    scale: { duration: 8, ease: "linear" },
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 1 }, // fade out smoothly
                }}
              >
                {/* Use Next.js <Image> for better loading */}
                <Image
                  src={slide.image}
                  alt="Hero background"
                  fill
                  priority
                  className="object-cover"
                  quality={100}
                />
                <div className="absolute inset-0 bg-black/60" />
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Content */}
      <MaxWidthWrapper className="h-full z-40 ">
        <div className="flex h-full w-full flex-col items-center justify-center text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="w-full max-w-4xl text-center"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.div variants={textVariants}>
                <p className="font-medium text-[15px] uppercase tracking-[4px] mb-4">
                  {slides[currentSlide].subheading}
                </p>
              </motion.div>

              <motion.div variants={textVariants}>
                <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  {slides[currentSlide].headline}
                </h1>
              </motion.div>

              <motion.div
                variants={textVariants}
                className="flex justify-center gap-4"
              >
                <Link
                  href="#"
                  className="inline-flex gap-2 items-center relative text-center uppercase bg-[#890c25] h-[44px] px-12 py-2.5 text-[14px] text-white tracking-[2px] font-medium overflow-hidden group"
                >
                  <span className="relative z-10">
                    {slides[currentSlide].primaryButton}
                  </span>
                  <span className="absolute inset-0 bg-[#00984A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  <ArrowRight className="w-4 h-4 text-white relative z-10" />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroSlider;
