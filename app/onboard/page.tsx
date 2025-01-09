"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import OnboardScreen1 from "@/components/onboarding-screens/Screen1";
import OnboardScreen2 from "@/components/onboarding-screens/Screen2";
import OnboardScreen3 from "@/components/onboarding-screens/Screen3";
import OnboardScreen4 from "@/components/onboarding-screens/Screen4";
import OnboardScreen5 from "@/components/onboarding-screens/Screen5";
import OnboardScreen6 from "@/components/onboarding-screens/Screen6";
import RegisterUser from "@/components/register-user/RegisterUser";

export default function Onboard() {
  const onBoardSlides = [
    <OnboardScreen1 />,
    <OnboardScreen2 />,
    <OnboardScreen3 />,
    <OnboardScreen4 />,
    <OnboardScreen5 />,
    <OnboardScreen6 />,
    <RegisterUser />,
  ];

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0D0D0D] ">
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
            <div className=" flex justify-center items-center">{slide}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
