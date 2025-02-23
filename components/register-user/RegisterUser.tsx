"use client";

import Image from "next/image";
import { useState } from "react";
import RegisterUserModal from "@/components/register-user/RegisterUserModal";

export default function RegisterUser() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleMint = () => {
    setIsProcessing(true);
    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsModalOpen(true);
    }, 2000);
  };

  return (
    <div className="font-satoshi min-w-[53.75vw] max-w-[1032px] min-h-[63.5vh] max-h-[700px] flex flex-row items-center justify-between px-12 border border-[#414141] dark:bg-[#0D0D0D] dark:text-white rounded-[20px] relative">
      <Image
        src="/RegisterUser.svg"
        alt="group-img-for-screen1"
        height={100}
        width={100}
        className="w-[350px] h-[500px] object-contain self-end"
      />

      <div className="min-w-[200px] max-w-[335px] w-[17.43vw] min-h-[230px] flex flex-col items-center justify-between text-center">
        <p className="flex flex-col items-center justify-center text-xl lg:text-[28px]">
          <span className="font-light leading-8">NFT mint processing</span>
          {/* <span className="font-bold leading-8">
            processing
          </span> */}
        </p>

        <div className="w-full flex flex-col items-center justify-between gap-4">
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <div className="w-full flex items-center justify-between">
              <span>Verify your identity document</span><br />
              <span>Upload your official documents</span>
            </div>
            <div className="w-full flex items-center justify-between">
              <span>NFT Minting</span>
              <span>🔄</span>
            </div>
            <div className="w-full flex items-center justify-between">
              <span>Fee</span>
              <span>$0.00</span>
            </div>
          </div>

          <div className="w-full flex items-center justify-start gap-2">
            <input
              type="checkbox"
              id="terms"
              checked={isTermsAccepted}
              onChange={(e) => setIsTermsAccepted(e.target.checked)}
            />
<label htmlFor="terms" className="text-sm">
  <div className="flex items-start">
    <div className="flex items-center h-5">
      <input
        id="terms"
        name="terms"
        type="checkbox"
        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
        required
      />
    </div>
    <div className="ml-3">
      <span>
        Please read our{" "}
        <a href="#" className="text-blue-500">
          privacy policy
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-500">
          terms of service
        </a>
      </span>
      <p className="text-sm text-gray-500">
        Note: You need to be 18 and above. The verification fee is not-refundable, if your ID is declined.
      </p>
    </div>
  </div>
</label>
          </div>

          <button
            className="w-full bg-[#EDFFD0] py-3 text-center text-base font-[500] rounded-[8px] transform transition duration-300 hover:scale-[1.1] text-[#0D0D0D] disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleMint}
            disabled={!isTermsAccepted || isProcessing}
          >
            {isProcessing ? "Processing..." : "Pay"}
          </button>
        </div>

        {isModalOpen && <RegisterUserModal onCloseModal={() => setIsModalOpen(false)} />}
      </div>
    </div>
  );
}
