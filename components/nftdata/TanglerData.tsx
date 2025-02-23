"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "@/utils/icons";
import "animate.css";
import { useTheme } from "@/components/ThemeContext";


type NftItem = {
  name: string;
  point: number;
  status: boolean;
  description: string;
  category: string;
  image: string;
};

const Nft: NftItem[] = [
  {
    name: "Transaction History",
    description:
      "Weaver will measure its success based on the amount of transactions on Starknet",
    point: 10,
    status: true,
    category: "Tangler",
    image: "/transaction.svg",
  },
  {
    name: "Stake History",
    description:
      "Weaver will measure its success based on the amount of transactions on Starknet",
    point: 10,
    status: true,
    category: "Tangler",
    image: "/staking.svg",
  },
  {
    name: "Mint History",
    description:
      "Weaver will measure its success based on the amount of transactions on Starknet",
    point: 10,
    status: true,
    category: "Tangler",
    image: "/mint.svg",
  },
];

export default function TanglerData() {
  const [contentHeight, setContentHeight] = useState("100px");
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme } = useTheme();

  
  const showContent = () => {
    setContentHeight((prevContentHeight) =>
      prevContentHeight === "100px" ? "auto" : "100px"
    );
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  return (
    <div
    className={`animate__animated animate__zoomIn overflow-hidden border-2 border-[#343434] w-full my-4 rounded-t-[10px] rounded-b-none px-5 py-5 flex flex-col gap-7 items-center justify-start mt-6 transition duration-300 ${
      theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
    }`}
    style={{
      height: contentHeight,
    }}
  >

      <header
        onClick={showContent}
        className="title w-full flex flex-row items-center justify-between cursor-pointer"
      >
        <div className="flex flex-row items-center gap-5">
          <div className="w-[57px] h-[57px] flex justify-center items-center rounded-full border-[#636363] relative">
            <Image
              src="/TanglerNFT.svg"
              alt="NFT"
              width={100}
              height={100}
              className="w-[45px] h-[45px]"
            />
          </div>
          <h1 className=" dark:text-white">Tangler</h1>
        </div>

        <FaChevronDown
          className={`transform transition-all duration-300 ${
            isExpanded ? "rotate-[180deg]" : "rotate-[0]"
          }`}
        />
      </header>

      {Nft.map((item, index) => (
        <div
          key={index}
          className= {` details w-full border rounded-lg rounded-b border-[#343434]
            ${ theme === "dark" ? "bg-[#181818] text-white " : "bg-white text-black"
          }`}
        >
          <div className="w-full h-[240px] flex">
            <div className="border-r border-[#808080] w-32 h-full flex items-start justify-center py-2">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="w-[57px] h-[47px] object-contain"
              />
            </div>
            <div className="h-full w-full flex flex-col">

              <div className= {` h-1/2 w-full  border-b-[0.5px] px-4 py-5 border-[#636363]
                ${ theme === "dark" ? "bg-[#212121] text-white" : "bg-white text-black"
                   }`}>
                <h2 className=" font-bold text-base">
                  {item.name}
                </h2>
                <p className=" text-xs font-normal max-w-[380px] dark:text-[#808080]">
                  {item.description}
                </p>
              </div>
              <div className="h-1/2 w-full py-4 px-5 flex flex-col justify-between">
                <div className="flex w-full items-center justify-between text-sm font-bold">
                  <p>
                    <span className=" font-light dark:text-[#DDDDDD]">
                      Category:
                    </span>{" "}
                    {item.category}
                  </p>
                  <p>
                    <span className=" font-light dark:text-[#DDDDDD]">
                      Points:
                    </span>{" "}
                    {item.point}
                  </p>
                </div>

                <div>
                  <p className="flex items-center gap-5">
                    <span className=" font-light dark:text-[#DDDDDD]">
                      Status:
                    </span>
                    <span
                      className={`bg-gray-100 border text-sm font-normal px-5 py-1 rounded-xl flex items-center w-fit justify-center dark:bg-[#F2FFEA] ${
                        item.status
                          ? "border-green-500 text-green-700 dark:border-[#B0FD81] dark:text-[#40A900]"
                          : "border-red-500 text-red-500"
                      }`}
                    >
                      {item.status ? "Done" : "Pending"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=  {` w-full  border-t border-b  text-center h-14 flex items-center justify-center dark:bg-[#212121] border-[#636363]
          ${ theme === "dark" ? "bg-[#212121] text-white" : "bg-white text-black"
        }`}>
            <p className="text-gray-600 font-normal text-sm dark:text-[#808080]">
              Click to check transaction history
            </p>
          </div>

          <div className="w-full flex items-center justify-center px-4 py-6">
            <button
              disabled={item.status}
              className={`py-5 w-[97%] bg-[#EDFFD0] text-[#000000] text-base font-medium rounded-lg transform transition duration-300 hover:scale-[1.02] dark:bg-[#EDFFD0] dark:text-[#000000] ${
                item.status ? "cursor-pointer" : "cursor-not-allowed"
              }`}
            >
              Check Status
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
