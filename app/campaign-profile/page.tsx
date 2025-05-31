"use client";
import Image from "next/image";
import { Globe, MessageSquare, Share2, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/components/ThemeContext";
import CampaignProfileCard from "@/components/dasboard-components/CampaignProfileCard";
import CampaignProfileTabs from "@/components/dasboard-components/CampaignProfileTabs";
import CampaignProfileInfo from "@/components/dasboard-components/CampaignProfileInfo";

export default function CampaignProfile() {
  const { theme } = useTheme();
  return (
    <div
      className={`font-satoshi w-full min-h-screen flex flex-col items-center justify-start border-[#636363] px-2 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="border w-full border-gray-800   mx-4 my-6 overflow-hidden">
        {/* Banner Image */}
        <div className="w-full h-60 relative">
          <Image
            src="/campaign.jpg"
            alt="Profile banner"
            fill
            className="object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="px-6 pt-16 pb-6 w-full xl:max-w-[1440px] mx-auto relative">
          <CampaignProfileInfo />
          <CampaignProfileTabs />
        </div>
      </div>
    </div>
  );
}
