"use client";
import { useState } from "react";
import OrbiterData from "./nftdata/OrbiterData";
import FunnelerData from "./nftdata/FunnelerData";
import TanglerData from "./nftdata/TanglerData";
import { useTheme } from "./ThemeContext";

export default function NftContainer() {
    const [currentNFt, setCurrentNft] = useState("TanglerData");
    const { theme } = useTheme();

    function toggleCurrentNft(nft: string) {
        setCurrentNft(nft);
    }

    return (
        <div
            className={`w-full bg-background text-foreground`}
        >
            <ul className="flex flex-row items-center gap-8 py-3 border-b border-border">
                <li
                    onClick={() => toggleCurrentNft("TanglerData")}
                    className={`cursor-pointer relative ${
                        currentNFt === "TanglerData"
                            ? "text-green-400 after:absolute after:content-[''] after:h-[1px] after:w-[60px] after:bg-[#9FE870] after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2"
                            : "text-muted-foreground"
                    }`}
                >
                    Tangler
                </li>
                <li
                    onClick={() => toggleCurrentNft("OrbiterData")}
                    className={`cursor-pointer relative ${
                        currentNFt === "OrbiterData"
                            ? "text-green-400 after:absolute after:content-[''] after:h-[1px] after:w-[60px] after:bg-[#9FE870] after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2"
                            : "text-muted-foreground"
                    }`}
                >
                    Orbiter
                </li>
                <li
                    onClick={() => toggleCurrentNft("FunnelerData")}
                    className={`cursor-pointer relative ${
                        currentNFt === "FunnelerData"
                            ? "text-green-400 after:absolute after:content-[''] after:h-[1px] after:w-[60px] after:bg-[#9FE870] after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2"
                            : "text-muted-foreground"
                    }`}
                >
                    Funneler
                </li>
                <li className="cursor-pointer text-muted-foreground">
                    Ekubo-Weaver Badge
                </li>
            </ul>

            {currentNFt === "TanglerData" && <TanglerData />}
            {currentNFt === "OrbiterData" && <OrbiterData />}
            {currentNFt === "FunnelerData" && <FunnelerData />}
        </div>
    );
}
