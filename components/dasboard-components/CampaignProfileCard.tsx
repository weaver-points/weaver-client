import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
const CampaignProfileCard = () => {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-800">
      <div className="relative h-72">
        <Image
          src="/campaign.jpg"
          alt="DAO Voter"
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-[#232222]/50 rounded-full px-6 py-2 flex items-center gap-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.38505 10.3211C3.44187 10.8827 0.968909 12.0294 2.47511 13.4644C3.21088 14.1653 4.03033 14.6667 5.06058 14.6667H10.9394C11.9697 14.6667 12.7891 14.1653 13.5249 13.4644C15.0311 12.0294 12.5581 10.8827 11.6149 10.3211C9.4032 9.00406 6.5968 9.00406 4.38505 10.3211Z"
              stroke="#F5F5F5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11 4.33331C11 5.99017 9.65687 7.33331 8 7.33331C6.34315 7.33331 5 5.99017 5 4.33331C5 2.67646 6.34315 1.33331 8 1.33331C9.65687 1.33331 11 2.67646 11 4.33331Z"
              stroke="#F5F5F5"
              stroke-width="1.5"
            />
          </svg>

          <span className="text-sm">987</span>
        </div>
        <div className="absolute flex justify-center flex-col bottom-6 left-2  rounded-md px-1.5 py-0.5 flex items-center gap-1">
          <div className="flex bg-[#1E1E1E]/50 justify-start items-start px-4 mr-4 py-2 gap-2 rounded-full">
            <img className="mt-1" src="/layer3.png" />
            <span className="text-sm font-normal">Layer3</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">DAO Voter</h3>
        </div>
      </div>
      <div className="p-4 bg-[#1E1E1E] h-[80px] flex items-center justify-between">
        <div className="flex flex-col">
          <div className=" text-white">
            <p className="text-lg font-semibold">May 20th, 5:02pm</p>
            <p className="text-sm text-[#988C8C]">to May 31, 9:07 pm</p>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-center">
          <Badge className="bg-white text-[#8bb151] rounded-full hover:bg-gray-200">
            <div className="h-1 w-1 rounded-full">
              <p className="hidden">s</p>
            </div>
            Live
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default CampaignProfileCard;
