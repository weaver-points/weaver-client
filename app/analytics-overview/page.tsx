"use client";

import AnalyticsSection from "@/components/analytics/AnalyticsSection";
import { cardData } from "@/components/analytics/data";
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
    <div className="bg-background text-foreground pb-5 font-satoshi min-h-screen">
      <UserNav />
      <UserStats
        projectTags={projectTags}
        projectDescription={projectDescription}
        socialLinks={socialLinks}
      />
      <AnalyticsSection data={cardData} />
    </div>
  );
}
