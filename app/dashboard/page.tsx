"use client";

import NftContainer from "@/components/NftContainer";
import StatsBox from "@/components/StatsBox";
import Header from "@/components/Header";

export default function Dashboard() {
  return (
    <>
      <div className="font-satoshi w-full min-h-screen flex flex-col items-center justify-start bg-background border-[#636363] py-20">
        <div className="max-w-[652px] w-full flex flex-col items-center justify-start gap-10">
          <Header />
          <StatsBox />
          <NftContainer />
        </div>
      </div>
    </>
  );
}