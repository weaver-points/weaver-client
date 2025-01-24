"use client";

import Image from "next/image";
import { useState } from "react";
import ConnectWalletModal from "@/components/ConnectWalletModal";

export default function RegisterUser() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="font-satoshi  min-w-[53.75vw] max-w-[1032px]  min-h-[63.5vh] max-h-[700px] flex flex-col md:flex-row items-center justify-between px-12  md:border md:border-[#414141] md:rounded-[20px] relative">
      <Image
        src="/RegisterUser.svg"
        alt="group-img-for-screen1"
        height={100}
        width={100}
        className="w-[350px] md:h-[500] object-contain self-end h-fit"
      />

      <div className="min-w-[300px] md:min-w-[200px] md:max-w-[335px] w-[20vw] md:w-[17.43vw] min-h-[180px] md:min-h-[230px]  flex flex-col items-center justify-between text-center text-white">
        <p className="flex flex-col items-center justify-center text-xl lg:text-[28px]">
          <span className="font-light leading-8 ">Mint NFT</span>
          <span className="font-bold  leading-8 ">
            to access
            <br />
            Weaver
          </span>
        </p>
        <button
          className="w-full bg-[#EDFFD0] py-3 text-center text-base text-[#000000] font-[500] rounded-[8px] transform transition duration-300 hover:scale-[1.1]"
          onClick={() => setIsModalOpen(true)}
        >
          Mint
        </button>
        {isModalOpen && <ConnectWalletModal onCloseModal={setIsModalOpen} />}
      </div>
    </div>
  );
}
