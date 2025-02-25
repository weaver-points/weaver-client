"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import "swiper/css";
import OnboardScreen1 from "@/components/onboarding-screens/Screen1";
import OnboardScreen2 from "@/components/onboarding-screens/Screen2";
import OnboardScreen3 from "@/components/onboarding-screens/Screen3";
import OnboardScreen4 from "@/components/onboarding-screens/Screen4";
import OnboardScreen5 from "@/components/onboarding-screens/Screen5";
import OnboardScreen6 from "@/components/onboarding-screens/Screen6";
import RegisterUser from "@/components/register-user/RegisterUser";

export default function Onboard() {
  const [isAutoplay, setIsAutoplay] = useState(true); // Control autoplay
  const [showButtons, setShowButtons] = useState(false); // Control button visibility
  const [isLastSlide, setIsLastSlide] = useState(false); // Track if it's the last slide
  const swiperRef = useRef(null); // Reference to the Swiper instance

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
    <div className="min-h-screen flex justify-center items-center">
      <Swiper
        modules={[Autoplay]}
        autoplay={
          isAutoplay ? { delay: 3000, disableOnInteraction: true } : false
        }
        onSlideChange={(swiper) => {
          const currentIndex = swiper.activeIndex;
          const lastSlideIndex = onBoardSlides.length - 1;

          // Enable autoplay only for the first two slides
          if (currentIndex <= 1) {
            setIsAutoplay(true);
            setShowButtons(false); // Hide buttons for the first two slides
          } else {
            setIsAutoplay(false);
            setShowButtons(true); // Show buttons for remaining slides
            if (swiperRef.current) swiperRef.current.autoplay.stop(); // Stop autoplay
          }

          // Check if it's the last slide
          setIsLastSlide(currentIndex === lastSlideIndex);
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Save swiper instance
        }}
        spaceBetween={50}
        slidesPerView={1}
        loop={false}
        className="h-screen w-full"
      >
        {onBoardSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="h-screen w-full flex justify-center items-center">
              {slide}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Conditionally render navigation buttons */}
      {showButtons && !isLastSlide && (
        <>
          {/* Left navigation button */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition z-10"
            aria-label="Previous slide"
          >
            <HiOutlineChevronLeft size={30} />
          </button>

          {/* Right navigation button */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition z-10"
            aria-label="Next slide"
          >
            <HiOutlineChevronRight size={30} />
          </button>
        </>
      )}
    </div>
  );
}



        