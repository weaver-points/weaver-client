import React from "react";
import { X } from "lucide-react";
import LockBodyScroll from "./LockBodyScroll";
import { createPortal } from "react-dom";

function GenericModal({
  children,
  handleClose,
}: {
  handleClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <>
      {createPortal(
        <>
          <LockBodyScroll lock={true} />
          <div
            className="absolute inset-0 bg-black dark:bg-white bg-opacity-70 backdrop-blur-sm flex justify-center items-center"
            onClick={handleClose}>
            <div
              className="relative bg-[#232222] w-[344px] rounded-[23px] border border-[#444444] p-[18px]"
              onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-[18px] right-[18px]"
                onClick={handleClose}>
                <X size={24} />
              </button>
              {children}
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
}

export default GenericModal;
