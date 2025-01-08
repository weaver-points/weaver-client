"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import OnboardScreen1 from "@/components/onboarding-screens/Screen1";
import OnboardScreen2 from "@/components/onboarding-screens/Screen2";

export default function Onboard() {
  const onBoardSlides = [<OnboardScreen1 />, <OnboardScreen2 />];

  return (
    <div className="h-screen flex justify-center items-center">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          stopOnLastSlide: true,
        }}
        spaceBetween={50}
        slidesPerView={1}
        loop={false}
      >
        {onBoardSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">{slide}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
