"use client";

import Image from "next/image";
import Link from "next/link";
import { MoreHorizontal, Plus, Twitter } from "lucide-react";

interface UserStatsProps {
  projectTags: string[];
  projectDescription: string;
  socialLinks: {
    link: string;
    icon: React.ReactNode;
  }[];
}

export default function UserStats({
  projectTags,
  projectDescription,
  socialLinks,
}: UserStatsProps) {
  return (
    <section className="py-7 flex flex-col items-start w-full">
      <div className="w-full h-[126px] md:h-[270px] bg-muted bg-[url('/item-image.svg')] bg-no-repeat bg-cover bg-center"></div>

      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-10 items-start px-[4%] md:px-0">
        <div className="w-[100px] h-[100px] md:w-[138px] md:h-[138px] rounded-full bg-background flex items-center justify-center border-[5px] border-primary mt-[-60px]">
          <Image
            src={"/user-icon.svg"}
            alt="user profile image"
            height={100}
            width={100}
            className="rounded-full bg-cover bg-center h-[80px] w-[80px] md:h-[103px] md:w-[103px]"
          />
        </div>

        <div className="w-full flex items-start flex-col md:flex-row gap-10 justify-between">
          <div className="w-full basis-1/2 max-w-[520px] flex flex-col gap-5">
            <div className="flex items-center justify-between gap-5">
              <h1 className="font-medium text-3xl md:text-5xl text-foreground">
                Coiton
              </h1>

              <div className="flex items-center gap-4">
                <button className="flex items-center justify-center border border-primary p-[13px] rounded-[4px] text-foreground hover:bg-primary/10 transition-colors">
                  <MoreHorizontal className="text-xs md:text-[25px]" />
                </button>
                <button className="flex items-center justify-center border border-primary p-[13px] rounded-[4px] text-foreground hover:bg-primary/10 transition-colors">
                  <Twitter className="text-xs md:text-[25px]" />
                </button>
              </div>
            </div>
            <div className="flex w-fit items-center gap-2">
              {projectTags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-[4px] bg-muted py-1 px-2 text-base font-normal text-foreground">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-lg font-normal text-muted-foreground">
              {projectDescription}
            </p>

            <div className="flex items-center gap-6">
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.link}>
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.icon}
                  </button>
                </Link>
              ))}
            </div>
          </div>

          <div className="basis-1/2 max-w-[520px] flex items-start flex-col-reverse md:flex-row justify-center gap-6">
            <button className="py-3 px-6 flex items-center justify-center gap-[5px] text-lg md:text-2xl font-bold text-primary-foreground bg-primary border border-border rounded-lg hover:scale-95 duration-150 ease-in-out">
              <Plus /> Follow
            </button>

            <div className="bg-card flex items-center justify-center rounded-[10px] gap-6 py-4 px-5 border border-border">
              <div className="flex flex-col items-start gap-1">
                <small className="font-normal text-muted-foreground text-sm md:text-base">
                  Followers
                </small>
                <p className="text-foreground font-bold text-lg md:text-[22px]">
                  8,674
                </p>
              </div>

              <div className="w-[1px] h-10 bg-border mx-4"></div>
              <div className="flex flex-col items-start gap-1">
                <small className="font-normal text-muted-foreground text-sm md:text-base">
                  Token
                </small>
                <p className="text-foreground font-bold text-lg md:text-[22px]">
                  TGE Upcoming
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
