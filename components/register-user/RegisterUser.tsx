"use client";

import Image from "next/image";
import { useState } from "react";
import RegisterUserModal from "@/components/register-user/RegisterUserModal";

export default function RegisterUser() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="font-satoshi  min-w-[53.75vw] max-w-[1032px] min-h-[63.5vh] max-h-[700px] flex flex-row items-center justify-between px-12  border border-[#414141] dark:bg-[#0D0D0D] dark:text-white rounded-[20px] relative">
      <Image
        src="/RegisterUser.svg"
        alt="group-img-for-screen1"
        height={100}
        width={100}
        className="w-[400px] h-[600px] object-contain  self-end -ml-6"
      />

      <div className="min-w-[200px] max-w-[335px] w-[17.43vw]  min-h-[230px]  flex flex-col items-center justify-between text-center">
        <p className="flex flex-col items-center justify-center text-xl lg:text-[28px]   ">
          <span className="font-light leading-8 ">Mint NFT</span>
          <span className="font-bold  leading-8 ">
            to access
            <br />
            Weaver
          </span>
        </p>
        <button
          className="w-full bg-[#EDFFD0] py-3 text-center text-base font-[500] rounded-[8px] transform transition duration-300 hover:scale-[1.1] text-[#0D0D0D]"
          onClick={() => setIsModalOpen(true)}
        >
          Mint
        </button>
        {isModalOpen && <RegisterUserModal onCloseModal={setIsModalOpen} />}
      </div>
    </div>
  );
}
