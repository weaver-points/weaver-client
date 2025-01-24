"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import OnboardScreen1 from "@/components/onboarding-screens/Screen1";
import OnboardScreen2 from "@/components/onboarding-screens/Screen2";
import OnboardScreen3 from "@/components/onboarding-screens/Screen3";
import OnboardScreen4 from "@/components/onboarding-screens/Screen4";
import OnboardScreen5 from "@/components/onboarding-screens/Screen5";
import OnboardScreen6 from "@/components/onboarding-screens/Screen6";
import RegisterUser from "@/components/register-user/RegisterUser";

export default function Onboard() {
  const [swiper, setSwiper] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const onBoardSlides = [
    <OnboardScreen1 />,
    <OnboardScreen2 />,
    <OnboardScreen3 />,
    <OnboardScreen4 />,
    <OnboardScreen5 />,
    <OnboardScreen6 />,
    <RegisterUser />,
  ];

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0D0D0D] relative">
      <Swiper
        onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        spaceBetween={50}
        slidesPerView={1}
        loop={false}
        className="h-screen"
      >
        {onBoardSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="h-screen w-full flex justify-center items-center relative">
              {slide}
              <div className="absolute bottom-1/2 transform translate-y-1/2 left-0 right-0 flex justify-between px-4 z-10">
                {currentSlide > 1 && (
                  <button
                    onClick={handlePrev}
                    className="text-white bg-blue-500 p-2 rounded-full shadow-lg"
                  >
                    <HiOutlineChevronLeft size={24} />
                  </button>
                )}

                {currentSlide > 1 && currentSlide < 6 && (
                  <button
                    onClick={handleNext}
                    className="text-white bg-blue-500 p-2 rounded-full shadow-lg ml-auto"
                  >
                    <HiOutlineChevronRight size={24} />
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
