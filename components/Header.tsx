"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "@/components/ThemeContext";

function Header() {
    const { theme } = useTheme();
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div
                className="w-full flex flex-col items-center justify-center gap-5 bg-background text-foreground"
            >
                <div className="w-full flex flex-col items-center justify-center gap-7">
                    <div className="w-full flex justify-center items-center">
                        <Image
                            src="/weaver.svg"
                            alt="weaver-logo"
                            height={100}
                            width={100}
                        />
                    </div>
                    <div
                        className="flex flex-col items-center justify-center w-full gap-3 bg-background text-foreground"
                    >
                        <Image
                            src="/first-group-image.svg"
                            alt="group-img-for-screen1"
                            height={128}
                            width={210}
                            className="w-[210px] h-[85px] mx-auto"
                        />
                        <p className="text-xl text-center font-semibold">
                            Retention campaign
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
