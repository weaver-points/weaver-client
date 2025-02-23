"use client";

import Image from "next/image";
import { useState } from "react";
import RegisterUserModal from "@/components/register-user/RegisterUserModal";

export default function RegisterUser() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [identityVerified, setIdentityVerified] = useState(false);

  const handleTermsAcceptance = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handlePayment = () => {
    if (termsAccepted && identityVerified) {
      setPaymentProcessing(true);
      // Simulate payment processing
      setTimeout(() => {
        setPaymentProcessing(false);
        alert("Payment successful! NFT minted.");
      }, 3000);
    } else {
      alert("Please verify your identity and accept the terms.");
    }
  };
  return (
    <div className="font-satoshi w-[1032px] h-[675px] top-[174px] left-[204px] flex flex-row items-center justify-between px-12 border border-[#414141] dark:bg-[#0D0D0D] dark:text-white rounded-[20px] absolute">
      <Image
        src="/RegisterUser.svg"
        alt="group-img-for-screen1"
        height={100}
        width={100}
        className="w-[537px] h-[654px] object-contain self-end"
      />

<div className=" text-left min-w-[200px] max-w-[335px] w-[17.43vw] min-h-[230px] flex flex-col items-center justify-between text-center">
  <p className="flex flex-col items-center justify-center">
    {/* Updated "NFT mint processing" text with Figma measurements */}
    <span
      className="font-satoshi font-light text-[27.13px] leading-[32.3px] tracking-[-0.04em]"
    >
      NFT mint processing
    </span>
  </p>


        <div className="w-full">
          <div className="text-left">
            <div className="mt-4">
              <div className="flex items-center mb-2">
                <span className="mr-2">1.</span>
                <span>Verify your Identity document
                  <br />
                  <p className="text-sm text-gray-500 font-satoshi font-light">Upload your official document</p>
                </span>
                
              </div>
              <div className="flex items-center">
                <span className="mr-2">2.</span>
                <span>Mint your Weaver NFT
                  <br />
                  <p className="text-sm text-gray-500 font-satoshi font-light">Get a unique NFT that represents your identity</p>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 w-[424px] h-[42px] g-[2px]">
            <p className="text-left text-sm font-satoshi font-light">ID verification Fee:$0.00</p>
            <p className="text-left text-sm text-gray-500 font-satoshi font-light">Age verification notice: You must be at least 18 years old.</p>
          </div>

          <div className="mt-4">
  <label className="flex items-center">
    <input
      type="checkbox"
      checked={termsAccepted}
      onChange={handleTermsAcceptance}
      className="mr-2"
    />
    <span className="text-left text-sm text-gray-500 font-satoshi font-light">please read our <a href="#" className="text-blue-500">Privacy Policy</a> and <a href="#" className="text-blue-500">Terms of Service</a>
    </span>
  </label>
</div>

<div className="mt-4">
  <label className="flex items-center">
    <input
      type="checkbox"
      checked={identityVerified}
      onChange={() => setIdentityVerified(!identityVerified)}
      className="mr-2"
    />
    <span
      className="text-left text-sm text-gray-500 font-satoshi font-light">Note: You need to be 18 and above. The verification fee is not-refundable, if your ID is declined.
    </span>
  </label>
</div>

          <button
            className="w-full bg-[#EDFFD0] py-3 text-center text-base font-[500] rounded-[8px] transform transition duration-300 hover:scale-[1.1] text-[#0D0D0D] mt-4"
            onClick={handlePayment}
            disabled={!termsAccepted || paymentProcessing}
          >
            {paymentProcessing ? "Processing..." : "Pay"}
          </button>
        </div>

        {isModalOpen && <RegisterUserModal onCloseModal={setIsModalOpen} />}
      </div>
    </div>
  );
}