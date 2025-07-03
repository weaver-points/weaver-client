"use client";

import Image from "next/image";
import { Circle, User } from "lucide-react";
import { formatDate } from "@/utils/DateFormatter";

interface ItemcardProp {
  data: {
    imageSrc: string;
    title: string;
    badgeText: string;
    participantCount: string;
    startTime: string;
    endTime: string;
    isLive: boolean;
  };
}

export default function ItemCard({ data }: ItemcardProp) {
  return (
    <div className="w-full h-[273px] rounded-lg border border-border relative overflow-hidden cursor-pointer hover:scale-105 transition-all duration-150 ease-in-out">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start gap-0">
        <div className="w-full h-full bg-card">
          <div className="h-[64%] w-full flex items-center justify-center relative">
            <Image
              src={data.imageSrc}
              alt="item image"
              height={100}
              width={100}
              className="h-full w-full object-cover object-center absolute"
            />
            <span className="absolute z-10 top-5 right-5 flex items-center gap-1 bg-muted/80 rounded-[29px] px-3 py-1 text-xs md:text-sm text-foreground">
              <User size={20} /> {data.participantCount}
            </span>

            <div className="absolute bottom-4 left-6 z-10 flex flex-col items-start gap-1">
              <span className="py-[5px] px-[17px] bg-muted/60 flex items-center justify-center gap-2 rounded-[20px] text-xs font-medium text-foreground">
                <Image
                  src={"/layer3-icon.svg"}
                  alt="icon"
                  width={10}
                  height={10}
                  className="w-4 h-4"
                />{" "}
                {data.badgeText}
              </span>
              <h1 className="text-foreground text-lg md:text-2xl font-bold">
                {data.title}
              </h1>
            </div>
          </div>
          <div className="px-6 py-6 flex items-center justify-between gap-10 h-[36%]">
            <div className="flex flex-col items-start gap-1">
              <h3 className="text-sm md:text-lg font-medium text-foreground">
                {formatDate(data.startTime)}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm font-medium">
                to {formatDate(data.endTime)}
              </p>
            </div>

            <span
              className={`rounded-[15px] bg-background flex items-center justify-center gap-1 font-medium text-xs px-4 py-2 border border-border ${
                data.isLive ? "text-green-600" : "text-blue-500"
              }`}>
              <Circle
                size={15}
                className={data.isLive ? "text-green-600" : "text-blue-500"}
              />{" "}
              {data.isLive ? "Live" : "Completed"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
