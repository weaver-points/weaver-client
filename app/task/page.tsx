"use client";
import TaskBox from "@/components/TaskBox";
import TaskStats from "@/components/TaskStats";
import Image from "next/image";
import {
  FaTelegramPlane,
  FaDiscord,
  FaXTwitter,
  FiGithub,
} from "@/utils/icons";
import Header from "@/components/Header";

export default function Tasks() {
  return (
    <div className="font-satoshi w-full min-h-screen flex flex-col items-center justify-start bg-background text-foreground py-20">
      <div className="max-w-[652px] w-full flex flex-col items-center justify-start gap-10 ">
        <Header />
        <TaskStats />
        <TaskBox
          backgroundColor="bg-[#33BEF0] dark:bg-[#1e293b]"
          icon={<FaTelegramPlane size={30} />}
          taskName="Telegram"
        />
        <TaskBox
          backgroundColor="bg-[#EDEDED] dark:bg-[#232222]"
          icon={<FaXTwitter size={30} className="text-black dark:text-white" />}
          taskName="Twitter"
        />
        <TaskBox
          backgroundColor="bg-[#EDEDED] dark:bg-[#232222]"
          icon={<FaDiscord size={30} className="text-[#8C9EFF]" />}
          taskName="Discord"
        />
        <TaskBox
          backgroundColor="bg-black dark:bg-white"
          icon={<FiGithub size={30} className="text-white dark:text-black" />}
          taskName="Github"
        />
        <TaskBox
          backgroundColor="bg-[#EDEDED] dark:bg-[#232222]"
          icon={<FaDiscord size={30} className="text-[#8C9EFF]" />}
          taskName="Discord"
        />
      </div>
    </div>
  );
}
