"use client";

import { useState } from "react";
import HomeSection from "./HomeSection";
import AnalyticsDisplay from "./AnalyticsDisplay";
import { CardProps } from "@/utils/interface";




interface AnalyticsSectionProps {
  data: CardProps[]
}


export default function AnalyticsSection({data}: AnalyticsSectionProps) {
  const [displayedSection, setDisplayedSection] = useState("Home");



  const renderDisplayedSection = () => {
    switch (displayedSection) {
      case "Home":
        return <HomeSection />;
      case "Analytics":
        return <AnalyticsDisplay data={data} />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full max-w-[80%] mx-auto mt-[50px]">
      {/* Nav buttons */}
      <div className="w-full flex items-center gap-10 border-b-[2px] border-[#988C8C4F] pb-2">
        <button
          onClick={() => setDisplayedSection("Home")}
          className={`text-xl font-normal relative
            text-[#988C8C]
            before:content-['']
            before:absolute
            before:bottom-[-8px]
            before:bg-[#E0FFB0]
            before:h-[3px]
            hover:before:w-full
            before:transition-all
            before:duration-200
            before:ease-in-out
            ${displayedSection === "Home" ? "text-[#FFFFFF] before:w-full" : "before:w-0"}
          `}
        >
          Home
        </button>

        <button
          onClick={() => setDisplayedSection("Analytics")}
          className={`text-xl font-normal relative
            text-[#988C8C]
            before:content-['']
            before:absolute
            before:bottom-[-8px]
            before:bg-[#E0FFB0]
            before:h-[3px]
            hover:before:w-full
            before:transition-all
            before:duration-200
            before:ease-in-out
            ${displayedSection === "Analytics" ? "text-[#FFFFFF] before:w-full" : "before:w-0"}
          `}
        >
          Analytics
        </button>
      </div>

      {/* Section content */}
      <div className="w-full pt-10 py-5 px-1 md:px-3">{renderDisplayedSection()}</div>
    </section>
  );
}
