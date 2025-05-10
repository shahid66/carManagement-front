"use client"; // <===== REQUIRED

import { Card } from "@/components/ui/card";
import BFContainer from "@/components/ui/core/BFContainer";
import Image from "next/image";
import React from "react";

// Swiper components, modules and styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Our custom button component

type Review = {
  name: string;
  position: string;
  image: string;
  review: string;
  rating: number;
};

interface DemoSliderProps {
  data: Review[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <div className="py-16 bg-gray-100">
      <BFContainer>
        <div className="container mx-auto text-center">
          {/* Title */}
          <h2 className="text-2xl text-center font-bold text-gray-900 mb-2">
            Our Services
          </h2>
          <div className="h-1 w-12 bg-green-400 mx-auto mb-8 rounded-full" />
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 }, // Mobile: 1 slide at a time
              640: { slidesPerView: 2, spaceBetween: 20 }, // Small screens
              768: { slidesPerView: 3, spaceBetween: 30 }, // Tablets
              1024: { slidesPerView: 4, spaceBetween: 40 }, // Laptops
              1280: { slidesPerView: 4, spaceBetween: 50 }, // Large screens
            }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {data.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-white shadow-lg rounded-lg p-6 text-center">
                  <div className="flex flex-col items-center">
                    {/* Avatar */}
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="w-[60px] h-[60px] object-cover rounded-full border-2 border-gray-300"
                    />

                    {/* Name & Position */}
                    <h3 className="text-lg font-bold mt-3">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {testimonial.position}
                    </p>

                    {/* Review */}
                    <p className="text-gray-600 mt-4">{testimonial.review}</p>

                    {/* Rating */}
                    <div className="flex mt-3">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <span key={i} className="text-yellow-500 text-xl">
                            ★
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </BFContainer>
    </div>
  );
};

export default DemoSlider;
