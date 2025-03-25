"use client";

import NftContainer from "@/components/NftContainer";
import StatsBox from "@/components/StatsBox";
import Header from "@/components/Header";
import { useTheme } from "@/components/ThemeContext";

export default function Dashboard() {
    const { theme } = useTheme();
    return (
        <>
            <div
                className={`font-satoshi w-full min-h-screen flex flex-col items-center justify-start border-[#636363] md:py-20 py-10 px-2 ${
                    theme === "dark"
                        ? "bg-black text-white"
                        : "bg-white text-black"
                }`}
            >
                <div className="max-w-[652px] md:w-full flex flex-col items-center justify-start gap-10">
                    <Header />
                    <StatsBox />
                    <NftContainer />
                </div>
            </div>
        </>
    );
}
