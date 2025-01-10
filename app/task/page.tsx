"use client";
import TaskBox from "@/components/TaskBox";
import TaskStats from "@/components/TaskStats";
import Image from "next/image";

export default function Tasks() {
  return (
    <div className="font-satoshi w-full min-h-screen flex flex-col items-center justify-start bg-[#0D0D0D] text-white py-20">
      <div className="max-w-[652px] w-full flex flex-col items-center justify-start gap-10 ">
        <div className="flex flex-col items-center justify-center gap-7 max-w-[390.17px] max-h-[150px] ">
          <Image
            src="/weaver-logo.svg"
            alt="weaver-logo"
            height={100}
            width={100}
          />
          <div className="flex flex-row items-center justify-between w-full gap-3">
            <Image
              src="/first-group-image.svg"
              alt="group-img-for-screen1"
              height={128}
              width={280}
              className="w-[210px] h-[85px] "
            />
            <p className=" text-xl ">
              <span className="font-light "> Lightweight </span> <br />
              on-chain identity <br />
              platform
            </p>
          </div>
        </div>
        <TaskStats />
        <TaskBox />
        <TaskBox />
        <TaskBox />
        <TaskBox />
      </div>
    </div>
  );
}