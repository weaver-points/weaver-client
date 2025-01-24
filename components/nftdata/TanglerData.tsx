"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "@/utils/icons";
import "animate.css";

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

  const showContent = () => {
    setContentHeight((prevContentHeight) =>
      prevContentHeight === "100px" ? "auto" : "100px"
    );
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  return (
    <div
      className="animate__animated animate__zoomIn overflow-hidden bg-[#121212] border-2 border-[#1D1D1D] w-full  my-4 rounded-t-[10px] rounded-b-none px-5 py-5  flex flex-col gap-7 items-center justify-start mt-6 transition duration-300   "
      style={{
        height: contentHeight,
      }}
    >
      <header
        onClick={showContent}
        className=" title w-full flex flex-row items-center justify-between cursor-pointer "
      >
        <div className="flex flex-row items-center gap-5">
          <div className=" w-[55px] h-[55px] lg:w-[57px] lg:h-[57px] flex justify-center items-center rounded-full bg-white relative  ">
            <Image
              src="/TanglerNFT.svg"
              alt="NFT"
              width={100}
              height={100}
              className="lg:w-[45px] lg:h-[45px] w-9 h-10 object-contain"
            />
          </div>
          <h1 className="text-base   " >Tangler</h1>
        </div>

        <FaChevronDown
          className={` transform transition-all duration-300 ${
            isExpanded ? "rotate-[180deg]" : "rotate-[0] "
          } `}
        />
      </header>

      {Nft.map((item, index) => (
        <div
          key={index}
          className="details w-full bg-[#181818] border border-[#343434] rounded-t rounded-lg "
        >
          <div className="w-full h-[240px] flex  ">
            <div className=" border-r border-[#808080] lg:w-32 w-20 h-full flex items-start justify-center py-2 ">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="lg:w-[57] lg:h-[47] w-[35px] h-[35px]  object-contain "
              />
            </div>
            <div className=" h-full w-full flex flex-col ">
              <div className="h-1/2 w-full bg-[#212121]  border-b-[0.5px]  border-[#636363] px-4 py-5  ">
                <h2 className="text-[#F0F0F0] font-bold text-base ">
                  {item.name}{" "}
                </h2>
                <p className="text-[#808080] lg:text-xs text-[10px] font-normal max-w-[380px] ">
                  {item.description}{" "}
                </p>
              </div>
              <div className=" h-1/2 w-full py-4 px-5 flex flex-col justify-between  ">
                <div className="flex w-full items-center justify-between text-xs lg:text-sm  font-bold">
                  <p>
                    <span className="text-[#DDDDDD] font-light ">
                      Category:
                    </span>{" "}
                    {item.category}{" "}
                  </p>
                  <p>
                    {" "}
                    <span className="text-[#DDDDDD] font-light ">
                      Points:
                    </span>{" "}
                    {item.point}{" "}
                  </p>
                </div>

                <div>
                  <p className="flex items-center gap-5 text-xs lg:text-sm ">
                    <span className="text-[#DDDDDD] font-light ">Status: </span>
                    <span
                      className={`bg-[#F2FFEA] border font-normal px-5 py-1 rounded-xl flex items-center w-fit justify-center ${
                        item.status
                          ? "border-[#B0FD81] text-[#40A900]"
                          : "border-[red] text-[red] "
                      } `}
                    >
                      {item.status ? "Done" : "Pending"}{" "}
                    </span>
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </div>

          <div className="w-full bg-[#212121] border-[0.5px] border-[#636363] text-center h-14 flex items-center justify-center ">
            <p className="text-[#808080] font-normal text-xs lg:text-sm  ">
              Click to check transaction history
            </p>
          </div>

          <div className="w-full flex items-center justify-center px-4 py-6 ">
            <button
              disabled={item.status}
              className={` py-3 lg:py-5 w-[97%] bg-[#EDFFD0] text-[#000000] lg:text-base text-[15px] font-medium rounded-lg transform transition duration-300 hover:scale-[1.02]  ${
                item.status ? "cursor-pointer" : "cursor-not-allowed"
              } `}
            >
              Check Status
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
