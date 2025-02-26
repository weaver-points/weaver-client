"use client";

import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div>
      <div className="max-w-[652px] w-full flex flex-col items-center justify-start gap-5">
        <div className="flex flex-col items-center justify-center gap-7 max-w-[390.17px] max-h-[150px] ">
          <Image
            src="/weaver.svg"
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
      </div>
    </div>
  );
}

export default Header;

