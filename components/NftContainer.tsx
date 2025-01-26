import { useState } from "react";
import OrbiterData from "./nftdata/OrbiterData";
import FunnelerData from "./nftdata/FunnelerData";
import TanglerData from "./nftdata/TanglerData";

export default function NftContainer() {
  const [currentNFt, setCurrentNft] = useState("TanglerData");

  function toggleCurrentNft(nft: string) {
    setCurrentNft(nft);
  }

  return (
    <div className="w-full ">
      <ul className="flex flex-row items-center gap-6 py-1 pb-2 border-b-2 border-[#1D1D1D] dark:bg-[#0D0D0D] dark:text-white my-2">
        <li
          onClick={() => toggleCurrentNft("TanglerData")}
          className={`px-3 cursor-pointer relative after:content-[' '] after:w-0 after:h-[2px] after:absolute after:bottom-[-10] after:left-0 after:bg-[#E0FFB0] hover:after:w-full after:transition-all after:duration-300 hover: transition-all duration-300 ${
            currentNFt === "TanglerData" ? " after:w-full" : "text-[#818181]"
          }`}
        >
          Tangler
        </li>
        <li
          onClick={() => toggleCurrentNft("OrbiterData")}
          className={`px-3 cursor-pointer relative after:content-[' '] after:w-0 after:h-[2px] after:absolute after:bottom-[-10] after:left-0 after:bg-[#E0FFB0] hover:after:w-full after:transition-all after:duration-300 hover: transition-all duration-300 ${
            currentNFt === "OrbiterData" ? " after:w-full" : "text-[#818181]"
          }`}
        >
          Orbiter
        </li>
        <li
          onClick={() => toggleCurrentNft("FunnelerData")}
          className={`px-3 text-[#818181] cursor-pointer relative after:content-[' '] after:w-0 after:h-[2px] after:absolute after:bottom-[-10] after:left-0 after:bg-[#E0FFB0] hover:after:w-full after:transition-all after:duration-300 hover: transition-all duration-300${
            currentNFt === "FunnelerData" ? " after:w-full" : "text-[#818181]"
          }`}
        >
          Funneler
        </li>
        <li className="px-3 text-[#818181] cursor-pointer relative after:content-[' '] after:w-0 after:h-[2px] after:absolute after:bottom-[-10] after:left-0 after:bg-[#E0FFB0] hover:after:w-full after:transition-all after:duration-300 hover: transition-all duration-300">
          Ekubo-Weaver Badge
        </li>
      </ul>

      {currentNFt === "TanglerData" && <TanglerData />}
      {currentNFt === "OrbiterData" && <OrbiterData />}
      {currentNFt === "FunnelerData" && <FunnelerData />}
    </div>
  );
}
