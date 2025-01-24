import Image from "next/image";
import { useSwiper } from "swiper/react";

export default function OnboardScreen6() {
  const swiper = useSwiper();
  const skipToLast = () => {
    swiper?.slideTo(6);
  };
  return (
    <div className="font-satoshi px-y min-w-[53.75vw] max-w-[1032px] min-h-[63.5vh] max-h-[700px] flex flex-col md:flex-row items-center justify-between px-16  md:border md:border-[#414141] md:rounded-[20px] relative">
      <small
        className="absolute top-[10%] right-[10%] text-[#5E5E5E] text-base font-[500] transition duration-300 hover:text-[#EDFFD0] cursor-pointer hidden md:block"
        onClick={skipToLast}
      >
        Skip
      </small>
      <Image
        src="/connect-wallet-image.svg"
        alt="group-img-for-screen1"
        height={100}
        width={100}
        className="w-[280px] h-[500] object-contain  self-end "
      />

      <div className="min-w-[300px] md:min-w-[200px] md:max-w-[335px] w-[20vw] md:w-[17.43vw] min-h-[230px]  flex flex-col items-center justify-between text-center text-white  ">
        <p className="flex flex-col items-center justify-center text-xl lg:text-[28px]   ">
          <span className="font-light leading-8 ">Connect Your</span>
          <span className="font-bold  leading-8 ">
            Argent Wallet to
            <br />
            Continue
          </span>
        </p>
        <button className="w-full bg-[#EDFFD0] py-3 text-center text-base text-[#000000] font-[500] rounded-[8px] transform transition duration-300 hover:scale-[1.1] ml-5">
          Let’s get it🚀
        </button>
        <small
          className="text-[#5E5E5E] text-base font-[500] transition duration-300 hover:text-[#EDFFD0] cursor-pointer md:hidden"
          onClick={skipToLast}
        >
          Skip
        </small>
      </div>
    </div>
  );
}
