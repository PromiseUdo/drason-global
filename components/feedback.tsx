"use client";

import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import MaxWidthWrapper from "@/components/max-width-wrapper";

interface Testimonial {
  name: string;
  designation: string;
  text: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Engr. Chukwuma Okeke",
    designation: "HSE Manager",
    text: "As an oil & gas company, we require strict compliance. Their team consistently meets all safety and operational standards.",
    image: "/testifier1.jpg",
    rating: 5,
  },
  {
    name: "Margaret Olawumi",

    designation: "Operations Coordinator",
    text: "The 24/7 support has been invaluable during our offshore operations. Immediate response at any hour makes them our preferred partner.",
    image: "/testifier2.jpg",
    rating: 5,
  },
  {
    name: "Dr. Amina Mohammed",
    designation: "Operations Director",
    text: "The agro-consulting services helped us increase our yield by 40% in just one planting season. Truly exceptional service!",
    image: "/testifier3.jpg",
    rating: 5,
  },
];

const Feedback: React.FC = () => {
  return (
    <section className="my-20 py-20 bg-[#f6f6f6] mt-20">
      <MaxWidthWrapper>
        {/* Title Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">
            What Our Client's Say
          </h2>
          <p className="mt-2 text-[15px] md:text-lg text-gray-600">
            Hear from industry leaders who trust our services and training
            programs
          </p>
        </div>

        {/* Testimonial Slider */}
        <div>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            speed={1000}
            autoplay={{ delay: 7000 }}
            pagination={{ el: ".rts__pagination", clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              575: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              991: { slidesPerView: 2.2 },
              1201: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-md p-6">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-base text-gray-700 leading-relaxed mb-6">
                    {testimonial.text}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src={testimonial.image}
                          alt={`${testimonial.name} avatar`}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="text-lg font-normal text-gray-900 mb-0">
                          {testimonial.name}
                        </h5>
                        <span className="text-sm text-gray-600">
                          {testimonial.designation}
                        </span>
                      </div>
                    </div>
                    <div className="relative w-16 h-16">
                      <Image
                        src="/quote.svg"
                        alt="Quote icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="rts__pagination flex justify-center gap-2 mt-4" />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Feedback;
