import React from "react";
import GenericModal from "./GenericModal";

function ErrorModal({ handleClose }: { handleClose: () => void }) {
  return (
    <GenericModal handleClose={handleClose}>
      <h4 className="text-lg leading-6 text-white font-semibold">Error</h4>
      <div className="flex flex-col items-center mt-[38px] text-center">
        <img src="/error.svg" className="w-[164px] mb-[22px]" alt="" />
        <h3 className="text-base leading-5 font-semibold text-[#EF664A]">
          Unable to connect wallet
        </h3>
        <button className="py-3 border border-[#3E4434] rounded-xl flex justify-center items-center gap-x-2 w-full mt-[37px] text-white">
          <img src="/refresh.svg" alt="" />
          Try Again
        </button>
      </div>
    </GenericModal>
  );
}

export default ErrorModal;
