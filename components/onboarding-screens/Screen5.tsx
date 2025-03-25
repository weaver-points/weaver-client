import Image from "next/image";
import { useSwiper } from "swiper/react";

export default function OnboardScreen5() {
    const swiper = useSwiper();
    return (
        <div className="font-satoshi min-w-[53.75vw] max-w-[1032px] min-h-[63.5vh] max-h-[700px] flex md:flex-row flex-col space-y-3 md:items-center md:justify-between px-16 md:border border-[#414141] dark:bg-[#0D0D0D] dark:text-white rounded-[20px] relative">
            <Image
                src="/Frame13.svg"
                alt="group-img-for-screen1"
                height={100}
                width={100}
                className="md:w-[359px] w-[300px] h-[552px] object-contain self-end -ml-6 "
            />

            <div className="min-w-[200px] max-w-[335px] w-[17.43vw]  min-h-[230px]  flex flex-col items-center justify-between text-center">
                <p className="flex flex-col items-center justify-center text-xl lg:text-[28px]   ">
                    <span className="font-light leading-8 ">Increase</span>
                    <span className="font-bold block whitespace-nowrap ">
                        Onchain Reputation
                    </span>
                </p>
                <button className="w-full bg-[#EDFFD0] py-3 text-center text-base font-[500] rounded-[8px] transform transition duration-300 hover:scale-[1.1] ml-5 text-[#0D0D0D]">
                    Let's get it🚀
                </button>
            </div>
        </div>
    );
}
