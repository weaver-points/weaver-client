"use client";

import { IoMdClose } from "@/utils/icons";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

interface RegisterUserModalProps {
  onCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RegisterUserModal({
  onCloseModal,
}: RegisterUserModalProps) {
  const [nickname, setNickname] = useState("");
  const [isMinted, setIsMinted] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const handleMint = () => {
    // Here you can add the logic for the mint process
    setIsMinted(true);
    // Redirect to the /dashboard page after completing the mint
    router.push("/dashboard");
  };

  return createPortal(
    <div
      className="bg-transparent fixed inset-0 flex justify-center items-center z-[100] font-satoshi"
      onClick={() => onCloseModal(false)}
    >
      <div
        className="border border-[#414141] bg-[#181717] rounded-[20px] px-5 py-5 space-y-3 w-[80vw] max-w-[493px] 2xl:w-2/5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="font-medium text-white text-xl">Register User</h2>
          <IoMdClose
            size={30}
            className="cursor-pointer text-white"
            onClick={() => onCloseModal(false)}
          />
        </div>
        <div className="space-y-4">
          <label htmlFor="nickname" className="block text-white">
            Nickname
          </label>
          <input
            id="nickname"
            type="text"
            placeholder="Name you wish to be called"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full bg-[#2C2C2C] text-white p-2 rounded-[8px] focus:outline-none"
          />
          <button
            className={`w-full py-3 text-center text-base font-[500] rounded-[8px] transform transition duration-300 ${
              isMinted
                ? "bg-[#EDFFD0] text-[#000000]"
                : "bg-gray-500 text-gray-300"
            }`}
            onClick={handleMint}
            disabled={!nickname || isMinted}
          >
            {isMinted ? "Minted" : "Mint Now"}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
