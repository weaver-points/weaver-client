import React from "react";
import GenericModal from "./GenericModal";

interface ErrorModalProps {
  handleClose: () => void;
  onRetry: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ handleClose, onRetry }) => {
  return (
    <GenericModal handleClose={handleClose}>
      <h4 className="text-lg leading-6 text-white font-semibold">Error</h4>
      <div className="flex flex-col items-center mt-[38px] text-center">
        <img src="/error.svg" className="w-[164px] mb-[22px]" alt="Error Icon" />
        <h3 className="text-base leading-5 font-semibold text-[#EF664A]">
          Unable to connect wallet
        </h3>
        <button
          onClick={onRetry} 
          className="py-3 border border-[#3E4434] rounded-xl flex justify-center items-center gap-x-2 w-full mt-[37px] text-white transition hover:scale-105"
        >
          <img src="/refresh.svg" alt="Retry Icon" className="w-5 h-5" />
          Try Again
        </button>
      </div>
    </GenericModal>
  );
};

export default ErrorModal;
