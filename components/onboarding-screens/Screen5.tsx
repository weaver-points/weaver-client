import Image from "next/image";
import { useSwiper } from "swiper/react";

export default function OnboardScreen5() {
  const swiper = useSwiper();
  const skipToLast = () => {
    swiper?.slideTo(6);
  };
  return (
    <div className="px-y min-w-[53.75vw] max-w-[1032px] min-h-[63.5vh] max-h-[700px] flex flex-row items-center justify-between px-16  border border-[#414141] rounded-[20px] relative">
      <small
        className="absolute top-[10%] right-[10%] text-[#5E5E5E] text-base font-[500] transition duration-300 hover:text-[#EDFFD0] cursor-pointer  "
        onClick={skipToLast}
      >
        Skip
      </small>
      <Image
        src="/Frame13.svg"
        alt="group-img-for-screen1"
        height={100}
        width={100}
        className="w-[280px] h-[500] object-contain  self-end "
      />

      <div className="min-w-[335px] min-h-[230px]  flex flex-col items-center justify-between text-center text-white  ">
        <p className="flex flex-col items-center justify-center text-xl lg:text-[28px]   ">
          <span className="font-light leading-8 ">Increase</span>
          <span className="font-bold  leading-8 ">Onchain Reputation</span>
        </p>
        <button className="w-full bg-[#EDFFD0] py-3 text-center text-base text-[#000000] font-[500] rounded-[8px] transform transition duration-300 hover:scale-[1.1] ml-5">
          Let’s get it🚀
        </button>
      </div>
    </div>
  );
}
