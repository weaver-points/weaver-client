import Image from "next/image";
import React from "react";
import { useTheme } from "@/components/ThemeContext";


export default function TaskStats() {
  const { theme } = useTheme();
  const point = 40
  const totalPoint = 100

  return (
    <div className= {` border-2 border-[#1D1D1D] w-full space-y-5 h-auto my-4 rounded-t-[10px]  rounded-b-none px-10 py-5
          ${ theme === "dark" ? "bg-[#121212] text-white" : " bg-white text-black"
        }`} 
    >
      <div>
        <div className="flex justify-between font-light">
          <p>Total Points</p>
          <p>
            {point}/{totalPoint}
          </p>
        </div>
        <progress value={point} max={100} className="taskProgressBar w-full" />
        <p className="text-sm font-medium text-secondary">
          Build and verify digital reputation without having to sacrifice user
          privacy.
        </p>
      </div>
      <div className="flex justify-between items-center pl-10 pt-10 ">
        <h1 className="text-5xl font-medium">$20.45</h1>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <Image
              src="/argent-logo.svg"
              alt="argent-logo"
              height={28}
              width={28}
            />
            <p className="font-bold text-xl">argent</p>
          </div>
          <p className="border border-gray-600/20 font-thin py-0.5 px-7 rounded-lg mt-7">
            Balance
          </p>
        </div>
      </div>
    </div>
  );
}

