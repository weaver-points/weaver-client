import React from "react";
import GenericModal from "./GenericModal";

function ConnectModal({ handleClose }: { handleClose: () => void }) {
  return (
    <GenericModal handleClose={handleClose}>
      <img src="/weaver-logo.svg" className="w-[71px]" alt="" />
      <div className="flex flex-col items-center mt-[38px] text-center">
        <img src="/WeaverSpider.svg" className="w-[164px] mb-[22px]" alt="" />
        <h3 className="text-base text-white font-semibold">
          Connecting Wallet...
        </h3>
        <p className="mt-[25px] text-sm text-[#5A5A5A] max-w-[201px]">
          Confirm the prompt to connect wallet to Weaver
        </p>
      </div>
    </GenericModal>
  );
}

export default ConnectModal;
