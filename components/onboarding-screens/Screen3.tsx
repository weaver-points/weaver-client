import Image from "next/image";
import { useSwiper } from "swiper/react";

export default function OnboardScreen3({}) {
  const swiper = useSwiper();
  const skipToLast = () => {
    swiper?.slideTo(6);
  };
  return (
    <div className="font-satoshi px-y min-w-[53.75vw] max-w-[1032px] min-h-[63.5vh] max-h-[700px] flex flex-row items-center justify-between px-16  border border-[#414141] dark:bg-[#0D0D0D] dark:text-white rounded-[20px] relative">
      <small
        className="absolute top-[10%] right-[10%]  text-base font-[500] transition duration-300 hover:text-[#EDFFD0] cursor-pointer  "
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

      <div className="min-w-[200px] max-w-[335px] w-[17.43vw]  min-h-[230px]  flex flex-col items-center justify-between text-center ">
        <p className="flex flex-col items-center justify-center text-xl lg:text-[28px]   ">
          <span className="font-light leading-8 ">Create a Digital</span>
          <span className="font-bold  leading-8 ">
            Onchain Passport <br /> on Starkpoint
          </span>
        </p>
        <button className="w-full bg-[#EDFFD0] py-3 text-center text-base font-[500] rounded-[8px] transform transition duration-300 hover:scale-[1.1] ml-5 dark:text-[#0D0D0D]">
          Let’s get it🚀
        </button>
      </div>
    </div>
  );
}
