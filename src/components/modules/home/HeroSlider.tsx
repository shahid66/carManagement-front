"use client"; // <===== REQUIRED

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

const HeroSlide: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <div className="py-16 bg-gray-100">
      <BFContainer>
        <div className="container mx-auto text-center">
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            spaceBetween={20}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {data.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-[500px] relative">
                  <Image
                    src="/banner2.webp"
                    alt="My Image"
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </BFContainer>
    </div>
  );
};

export default HeroSlide;
