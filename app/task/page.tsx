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
    <div className="font-satoshi w-full min-h-screen flex flex-col items-center justify-start dark:bg-[#0D0D0D] dark:text-white py-20">
      <div className="max-w-[652px] w-full flex flex-col items-center justify-start gap-10 ">
        <Header />
        <TaskStats />
        <TaskBox
          backgroundColor="bg-[#33BEF0]"
          icon={<FaTelegramPlane size={30} />}
          taskName="Telegram"
        />
        <TaskBox
          backgroundColor="bg-[#EDEDED]"
          icon={<FaXTwitter size={30} className="text-black" />}
          taskName="Twitter"
        />
        <TaskBox
          backgroundColor="bg-[#EDEDED]"
          icon={<FaDiscord size={30} className="text-[#8C9EFF]" />}
          taskName="Discord"
        />
        <TaskBox
          backgroundColor="bg-black"
          icon={<FiGithub size={30} className="text-white" />}
          taskName="Github"
        />
        <TaskBox
          backgroundColor="bg-[#EDEDED]"
          icon={<FaDiscord size={30} className="text-[#8C9EFF]" />}
          taskName="Discord"
        />
      </div>
    </div>
  );
}
