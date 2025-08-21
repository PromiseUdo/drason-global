"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "I would highly recommend Michael Richard to anyone interested the subject matter. It has provided me with invaluable knowledge & a newfound passion topic. My only suggestion would be to add more live.",
      rating: 4.5,
      reviews: 112,
      author: "David Jhon",
      role: "Artist and Instructor",
      authorImage: "/testifier1.jpg",
    },
    {
      id: 2,
      quote:
        "The course was incredibly insightful and well-structured. The instructor's expertise made complex topics easy to understand. I've gained practical skills I can apply immediately.",
      rating: 4.8,
      reviews: 89,
      author: "Sarah Miller",
      role: "Graphic Designer",
      authorImage: "/testifier2.jpg",
    },
    {
      id: 3,
      quote:
        "As a complete beginner, I was nervous about starting, but the course was so well-paced and supportive. I've gone from knowing nothing to feeling confident in my abilities.",
      rating: 5,
      reviews: 64,
      author: "James Wilson",
      role: "Photography Student",
      authorImage: "/testifier3.jpg",
    },
  ];

  return (
    <section className="rts-testimonial py-20 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <div className="rts-testimonial-box bg-white border border-[#FFE4EA] p-8 md:p-12 lg:p-16">
          <div className="testimonial-item flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Testimonial Image */}
            <div className="testimonial-item-image relative min-w-full lg:min-w-[460px] lg:max-w-[460px] h-[500px]">
              <Image
                src="/public-admin.webp"
                alt="testimonial thumbnail"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Testimonial Content */}
            <div className="testimonial-item-content relative w-full lg:w-[570px]">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".rt-next",
                  prevEl: ".rt-prev",
                }}
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="single-testimonial pt-12 pb-8 lg:pt-16 lg:pb-12 lg:pr-12">
                      <div className="flex justify-between items-center mb-12">
                        <div className="rt-icon">
                          <Image
                            src="/quote.svg"
                            alt="quote icon"
                            width={64}
                            height={64}
                          />
                        </div>
                        <div className="rt-review">
                          <div className="rating-star flex gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-5 h-5 ${
                                  i < Math.floor(testimonial.rating)
                                    ? "text-[#FFA41C] fill-current"
                                    : "text-[#FFA41C]"
                                }`}
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                  fill={
                                    i < testimonial.rating
                                      ? "currentColor"
                                      : "none"
                                  }
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                />
                              </svg>
                            ))}
                          </div>
                          <p className="text-[#890c25] font-medium text-sm">
                            {testimonial.rating} ({testimonial.reviews} Reviews)
                          </p>
                        </div>
                      </div>

                      <p className="text-[#737477] testimonial-text text-xl md:text-2xl leading-relaxed md:leading-loose ">
                        {testimonial.quote}
                      </p>

                      <div className="rt-testimonial-author mt-12">
                        <div className="rt-author-meta flex items-center gap-5">
                          <div className="rt-author-img w-[70px] h-[70px] rounded-full border border-[#890c25] p-1">
                            <Image
                              src={testimonial.authorImage}
                              alt={testimonial.author}
                              width={60}
                              height={60}
                              className="rounded-full object-cover w-full h-full"
                            />
                          </div>
                          <div className="rt-author-info">
                            <h5 className="text-lg font-bold mb-1">
                              {testimonial.author}
                            </h5>
                            <p className="text-gray-600">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Arrows */}
              <div className="testimonial-arrow flex gap-3 absolute right-0 bottom-0">
                <button className="rt-slider-btn rt-prev w-10 h-10 border border-[#890c25] flex items-center justify-center hover:bg-[#890c25] transition-colors">
                  <svg
                    className="w-4 h-4 text-[#890c25] hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button className="rt-slider-btn rt-next w-10 h-10 border border-[#890c25] flex items-center justify-center hover:bg-[#890c25] transition-colors">
                  <svg
                    className="w-4 h-4 text-[#890c25] hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
