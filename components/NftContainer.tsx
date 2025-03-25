"use client";
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
        <div className="w-full">
            <ul className="flex flex-row items-center gap-8 py-3 border-b border-[#1D1D1D] dark:bg-[#0D0D0D] dark:text-white">
                <li
                    onClick={() => toggleCurrentNft("TanglerData")}
                    className={`cursor-pointer relative ${
                        currentNFt === "TanglerData"
                            ? "text-white after:absolute after:content-[''] after:h-[1px] after:w-[60px] after:bg-[#9FE870] after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2"
                            : "text-[#818181]"
                    }`}
                >
                    Tangler
                </li>
                <li
                    onClick={() => toggleCurrentNft("OrbiterData")}
                    className={`cursor-pointer relative ${
                        currentNFt === "OrbiterData"
                            ? "text-white after:absolute after:content-[''] after:h-[1px] after:w-[60px] after:bg-[#9FE870] after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2"
                            : "text-[#818181]"
                    }`}
                >
                    Orbiter
                </li>
                <li
                    onClick={() => toggleCurrentNft("FunnelerData")}
                    className={`cursor-pointer relative ${
                        currentNFt === "FunnelerData"
                            ? "text-white after:absolute after:content-[''] after:h-[1px] after:w-[60px] after:bg-[#9FE870] after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2"
                            : "text-[#818181]"
                    }`}
                >
                    Funneler
                </li>
                <li className="cursor-pointer text-[#818181]">
                    Ekubo-Weaver Badge
                </li>
            </ul>

            {currentNFt === "TanglerData" && <TanglerData />}
            {currentNFt === "OrbiterData" && <OrbiterData />}
            {currentNFt === "FunnelerData" && <FunnelerData />}
        </div>
    );
}
