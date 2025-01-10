"use client";

import { FaTelegramPlane, FaChevronDown } from "@/utils/icons";
import { useState } from "react";


export default function TaskBox() {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText =
    "StarkPoint will measure its success based on the growth in user interactions over time";

  const displayedText = isExpanded
    ? fullText
    : `${fullText.split(" ").slice(0, 6).join(" ")}...`;

  return (
    <div className="bg-[#121212] border-2 border-[#1D1D1D] w-full h-auto rounded-t-[10px] rounded-b-none px-10 py-5">
      <div className="flex space-x-5">
        <div className="bg-[#33BEF0] w-fit h-fit p-2 rounded-full flex items-center justify-center">
          <FaTelegramPlane size={30} className="" />
        </div>

        <div
          className={`flex flex-col items-center ${
            isExpanded ? "border-l border-gray-700" : ""
          } w-full`}
        >
          <div    onClick={() => setIsExpanded(!isExpanded)} className="flex justify-between items-center w-full pl-3 cursor-pointer ">
            <h2>Connect Telegram</h2>
            <FaChevronDown
              className={` transform transition-all duration-300 cursor-pointer ${
                isExpanded ? "rotate-[180deg]" : "rotate-[0] "
              } `}
            
            />
          </div>
          <p className="font-thin text-secondary pl-3 w-full">
            {displayedText}
          </p>

          {isExpanded && (
            <div className="w-full mt-3 space-y-2 border-t border-gray-700 pt-2">
              <div className="flex justify-between items-center pl-3">
                <p className="space-x-2">
                  <span className="font-thin text-secondary">Category:</span>
                  <span>Socials</span>
                </p>
                <p className="space-x-2">
                  <span className="font-thin text-secondary">Points:</span>
                  <span>40</span>
                </p>
              </div>
              <p className="space-x-2 pl-3">
                <span className="font-thin text-secondary">Status:</span>
                <span>Done</span>
              </p>
            </div>
          )}
        </div>
      </div>
      {isExpanded && (
        <button
          className={`py-5 w-full bg-[#EDFFD0] text-[#000000] text-base font-medium rounded-lg transform transition duration-300 hover:scale-[1.02] mt-5`}
        >
          Connect Telegram
        </button>
      )}
    </div>
  );
}
