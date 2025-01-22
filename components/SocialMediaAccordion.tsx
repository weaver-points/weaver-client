"use client";

import { FaChevronDown } from "@/utils/icons";
import "animate.css";

function SocialMediaAccordion({
  social,
  isExpanded,
  toggleAccordion,
}: {
  social: {
    name: string;
    category: string;
    points: string;
    status: string;
    image: string;
  };
  isExpanded: boolean;
  toggleAccordion: () => void;
}) {
  return (
    <div
      className="animate__animated animate__zoomIn overflow-hidden bg-[#121212] border-2 border-[#1D1D1D] w-full rounded-t-[10px] rounded-b-none px-[20px] md:px-[30px] py-6 md:pb-[30px] md:pt-9 flex flex-col gap-7 items-center justify-start"
      style={{
        height: isExpanded ? "auto" : "120px",
      }}
    >
      <div onClick={toggleAccordion} className="title cursor-pointer w-full">
        <div className="flex flex-row gap-x-2">
          <div className="w-fit h-fit flex justify-center items-center rounded-full">
            <img
              src={social.image}
              alt="social badge"
              className="w-[55px] h-[55px]"
            />
          </div>
          <div className="flex flex-col items-center w-full">
            <div
              className={`px-3 flex justify-between w-full pb-7 ${
                isExpanded ? "border-l-[0.4px] border-b-[0.4px]" : "border-none"
              } border-[#636363] transition-all duration-300`}
            >
              <div>
                <h1 className="font-bold text-sm md:text-base text-[#F0F0F0]">
                  Connect {social.name}
                </h1>
                <p className="text-xs md:text-sm leading-5 text-[#808080] max-w-[220px] md:max-w-[293px]">
                  StarkPoint will measure its success based on the growth in
                  user interactions over time
                </p>
              </div>
              <FaChevronDown
                className={`transform transition-all duration-300 ${
                  isExpanded ? "rotate-[180deg]" : "rotate-[0]"
                }`}
              />
            </div>
            {isExpanded && (
              <div className="details w-full px-[18px] border-l-[0.4px] border-l-[#636363] py-4 flex flex-col gap-y-4 text-xs md:text-sm leading-5 text-[#DDDDDD] transition-all duration-300">
                <div className="flex justify-between">
                  <h4>
                    Category:{" "}
                    <span className="font-bold">{social.category}</span>
                  </h4>
                  <h4>
                    Points: <span className="font-bold">{social.points}</span>
                  </h4>
                </div>
                <div className="flex justify-between">
                  <h4>
                    Status: <span className="font-bold">{social.status}</span>
                  </h4>
                </div>
              </div>
            )}
          </div>
        </div>
        {isExpanded && (
          <button className="py-6 bg-[#EDFFD0] rounded-lg w-full text-base leading-5 font-medium mt-7 text-black">
            Connect {social.name}
          </button>
        )}
      </div>
    </div>
  );
}

export default SocialMediaAccordion;
