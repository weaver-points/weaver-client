"use client";

import AnalyticsChart from "@/components/analytics/AnalyticsChart";
import UserNav from "@/components/analytics/UserNav";
import UserStats from "@/components/analytics/UserStats";
import { SocialLinks } from "@/utils/interface";
import { useTheme } from "@/components/ThemeContext";
import { Globe, MessageCircle, Send, Twitter } from "lucide-react";

export default function Page() {
  const { theme } = useTheme();

  const projectTags: string[] = ["DAO", "NFT", "NFT marketplace"];

  const projectDescription: string =
    "Need a marketplace for your infrastructure? This is the perfect...";

  const socialLinks: SocialLinks[] = [
    {
      link: "",
      icon: (
        <Globe
          size={20}
          className="text-muted-foreground hover:text-foreground transition-colors"
        />
      ),
    },
    {
      link: "",
      icon: (
        <MessageCircle
          size={20}
          className="text-muted-foreground hover:text-foreground transition-colors"
        />
      ),
    },
    {
      link: "",
      icon: (
        <Send
          size={20}
          className="text-muted-foreground hover:text-foreground transition-colors"
        />
      ),
    },
    {
      link: "",
      icon: (
        <Twitter
          size={20}
          className="text-muted-foreground hover:text-foreground transition-colors"
        />
      ),
    },
  ];

  return (
    <div
      className={`bg-background text-foreground pb-10 font-satoshi min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "dark-theme" : "light-theme"
      }`}>
      <UserNav />
      <UserStats
        projectTags={projectTags}
        projectDescription={projectDescription}
        socialLinks={socialLinks}
      />

      <section className="w-full max-w-[1400px] mx-auto mt-[50px] px-4 md:px-0">
        {/* Nav buttons */}
        <div className="w-full flex items-center gap-10 border-b-2 border-border pb-2">
          <button
            className={`text-xl font-normal relative text-muted-foreground hover:text-foreground transition-colors
              before:content-['']
              before:absolute
              before:bottom-[-8px]
              before:bg-primary
              before:h-[3px]
              hover:before:w-full
              before:transition-all
              before:duration-200
              before:ease-in-out
              before:w-0
            `}>
            Home
          </button>

          <button
            className={`text-xl font-normal relative text-foreground
              before:content-['']
              before:absolute
              before:bottom-[-8px]
              before:bg-primary
              before:h-[3px]
              before:w-full
              before:transition-all
              before:duration-200
              before:ease-in-out
            `}>
            Analytics
          </button>
        </div>

        {/* Section content */}
        <div className="w-full rounded-lg border border-border mx-auto mt-[30px] h-[179px] bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center px-[3%]">
          <h1 className="font-bold text-2xl md:text-[32px] text-foreground">
            DAO Voter
          </h1>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-10 justify-between items-start mt-[70px]">
          <div className="w-full md:max-w-[190px] flex-col items-center md:items-start gap-5">
            <div className="flex flex-col items-center md:items-start gap-8">
              <h2 className="text-foreground text-2xl md:text-[32px] font-medium">
                Participants
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-[85px] h-[85px] flex flex-col items-start justify-center gap-2">
                  <p className="font-normal text-lg text-primary">Active</p>
                  <span className="border border-border rounded-[10px] w-[55px] h-[55px] md:w-[85px] md:h-[50px] text-base md:text-[28px] font-medium text-primary flex items-center justify-center bg-primary/10">
                    543
                  </span>
                </div>

                <div className="w-[85px] h-[85px] flex flex-col items-center justify-center gap-2">
                  <p className="font-normal text-lg text-muted-foreground">
                    Inactive
                  </p>
                  <span className="rounded-[10px] w-[55px] h-[55px] md:w-[85px] md:h-[50px] text-base md:text-[28px] font-medium text-muted-foreground flex items-center justify-center bg-muted">
                    543
                  </span>
                </div>
              </div>
            </div>
            <p className="text-primary font-normal text-2xl mt-[14px] text-center md:text-left">
              May 20 - May 31
            </p>
          </div>

          <div className="w-full max-w-[868px]">
            <AnalyticsChart />
          </div>
        </div>
      </section>
    </div>
  );
}
