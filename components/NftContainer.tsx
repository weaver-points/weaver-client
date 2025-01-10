import { useState } from "react";
import TanglerData from "./nftdata/TanglerData";
import OrbiterData from "./nftdata/OrbiterData";

export default function NftContainer() {
  const [currentNFt, setCurrentNft] = useState("TanglerData");

  function handleTangler() {
    setCurrentNft("TanglerData");
  }

  function handleOrbiter() {
    setCurrentNft("OrbiterData");
  }

  return (
    <div className="w-full">
      <ul className="flex flex-row items-center gap-6 py-1 pb-2 border-b-2 border-[#1D1D1D] my-2">
        <li
          onClick={handleTangler}
          className={`px-3 cursor-pointer relative after:content-[' '] after:w-0 after:h-[2px] after:absolute after:bottom-[-10] after:left-0 after:bg-[#E0FFB0] hover:after:w-full after:transition-all after:duration-300 hover:text-white transition-all duration-300 ${
            currentNFt === "TanglerData" ? "text-white after:w-full" : "text-[#818181]"
          }`}
        >
          Tangler
        </li>
        <li
          onClick={handleOrbiter}
          className={`px-3 cursor-pointer relative after:content-[' '] after:w-0 after:h-[2px] after:absolute after:bottom-[-10] after:left-0 after:bg-[#E0FFB0] hover:after:w-full after:transition-all after:duration-300 hover:text-white transition-all duration-300 ${
            currentNFt === "OrbiterData" ? "text-white after:w-full" : "text-[#818181]"
          }`}
        >
          Orbiter
        </li>
        <li className="px-3 text-[#818181] cursor-pointer relative after:content-[' '] after:w-0 after:h-[2px] after:absolute after:bottom-[-10] after:left-0 after:bg-[#E0FFB0] hover:after:w-full after:transition-all after:duration-300 hover:text-white transition-all duration-300">
          Funneler
        </li>
        <li className="px-3 text-[#818181] cursor-pointer relative after:content-[' '] after:w-0 after:h-[2px] after:absolute after:bottom-[-10] after:left-0 after:bg-[#E0FFB0] hover:after:w-full after:transition-all after:duration-300 hover:text-white transition-all duration-300">
          Ekubo-Weaver Badge
        </li>
      </ul>

      
      {currentNFt === "TanglerData" && <TanglerData />}
      {currentNFt === "OrbiterData" && <OrbiterData />}
    </div>
  );
}
