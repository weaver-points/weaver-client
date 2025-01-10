"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function TanglerData() {
  const [contentHeight, setContentHeight] = useState("100px");
  const [isExpanded, setIsExpanded] = useState(false);

  const showContent = () => {
    setContentHeight((prevContentHeight) =>
      prevContentHeight === "100px" ? "auto" : "100px"
    );
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

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
  return (
    <div
      className="overflow-hidden bg-[#121212] border-2 border-[#1D1D1D] w-full  my-4 rounded-t-[10px] rounded-b-none px-5 py-5  flex flex-col gap-7 items-center justify-start mt-6 transition duration-300   "
      style={{
        height: contentHeight,
      }}
    >
      <header
        onClick={showContent}
        className=" title w-full flex flex-row items-center justify-between cursor-pointer "
      >
        <div className="flex flex-row items-center gap-5">
          <div className="w-[57px] h-[57px] rounded-full bg-white relative  ">
            <Image
              src="/TanglerNFT.svg"
              alt="NFT"
              width={100}
              height={100}
              className="w-[45px] h-[45px] object-contain absolute top-[20%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]   "
            />
          </div>
          <h1>Tangler</h1>
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
            <div className=" border-r border-[#808080] w-32 h-full flex items-start justify-center py-2 ">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="w-[57] h-[47] object-contain "
              />
            </div>
            <div className=" h-full w-full flex flex-col ">
              <div className="h-1/2 w-full bg-[#212121]  border-b-[0.5px]  border-[#636363] px-4 py-5  ">
                <h2 className="text-[#F0F0F0] font-bold text-base ">
                  {item.name}{" "}
                </h2>
                <p className="text-[#808080] text-xs font-normal max-w-[380px] ">
                  {item.description}{" "}
                </p>
              </div>
              <div className=" h-1/2 w-full py-4 px-5 flex flex-col justify-between  ">
                <div className="flex w-full items-center justify-between text-sm  font-bold">
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
                  <p className="flex items-center gap-5 ">
                    <span className="text-[#DDDDDD] font-light ">Status: </span>
                    <span
                      className={`bg-[#F2FFEA] border  text-sm font-normal px-5 py-1 rounded-xl flex items-center w-fit justify-center ${
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
            <p className="text-[#808080] font-normal text-sm  ">
              Click to check transaction history
            </p>
          </div>

          <div className="w-full flex items-center justify-center px-4 py-6 ">
            <button
              disabled={item.status}
              className={`py-5 w-[97%] bg-[#EDFFD0] text-[#000000] text-base font-medium rounded-lg transform transition duration-300 hover:scale-[1.02]  ${
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
