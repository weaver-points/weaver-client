"use client";

import NftContainer from "@/components/NftContainer";
import StatsBox from "@/components/StatsBox";
import Header from "@/components/Header";
import { useTheme } from "@/components/ThemeContext";
import ConnectButton from "@/components/ConnectButton";

export default function Dashboard() {
    const { theme } = useTheme();
    return (
        <div
            className={
                `font-satoshi w-full min-h-screen flex flex-col items-center justify-start border-border md:py-20 py-10 px-2 bg-background text-foreground`
            }
        >
            <div className="w-full max-w-5xl flex flex-col md:gap-12 gap-8 items-center justify-start">
                {/* Responsive row for Header and StatsBox */}
                <div className="w-full flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
                    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                        <Header />
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
                        <StatsBox />
                    </div>
                </div>
                {/* NftContainer always full width below */}
                <div className="w-full">
                    <NftContainer />
                </div>
            </div>
        </div>
    );
}
