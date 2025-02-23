import React from "react";
import GenericModal from "./GenericModal";

function ConnectedModal({ handleClose }: { handleClose: () => void }) {
  return (
    <GenericModal handleClose={handleClose}>
      <h4 className="text-lg leading-6 text-white font-semibold">Connected</h4>
      <div className="flex flex-col items-center mt-[38px] text-center">
        <img src="/connected.svg" className="w-[164px] mb-[22px]" alt="" />
        <h3 className="text-base leading-5 font-semibold text-white">
          Wallet is connected
        </h3>
        <button className="py-3 bg-[#8BB151] rounded-xl flex justify-center items-center gap-x-2 w-full mt-[37px] text-white">
          Dismiss
        </button>
      </div>
    </GenericModal>
  );
}

export default ConnectedModal;
