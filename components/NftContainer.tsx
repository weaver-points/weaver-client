import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function NftContainer() {

    const [contentHeight, setContentHeight] = useState("100px")
    const [isExpanded, setIsExpanded] = useState(false);

    const showContent = () => {
        setContentHeight((prevContentHeight) => (prevContentHeight === "100px" ? "auto" : "100px") )
        setIsExpanded((prevIsExpanded) => !prevIsExpanded)

        console.log(isExpanded)
    }
  return (
    <div className="w-full ">
      <ul className="flex flex-row items-center gap-6 py-1 pb-2 border-b-2 border-[#1D1D1D] my-2 ">
        <li className="px-3 cursor-pointer relative after:content-[' '] after:w-0 after:h-[2px] after:absolute after:bottom-[-10] after:left-0 after:bg-[#E0FFB0] hover:after:w-full after:transition-all after:duration-300 ">
          Tangler
        </li>
        <li className="px-3 cursor-pointer relative after:content-[' '] after:w-0 after:h-[2px] after:absolute after:bottom-[-10] after:left-0 after:bg-[#E0FFB0] hover:after:w-full after:transition-all after:duration-300 ">
          Orbiter
        </li>
        <li className="px-3 cursor-pointer relative after:content-[' '] after:w-0 after:h-[2px] after:absolute after:bottom-[-10] after:left-0 after:bg-[#E0FFB0] hover:after:w-full after:transition-all after:duration-300 ">
          Funneler
        </li>
        <li className="px-3 cursor-pointer relative after:content-[' '] after:w-0 after:h-[2px] after:absolute after:bottom-[-10] after:left-0 after:bg-[#E0FFB0] hover:after:w-full after:transition-all after:duration-300 ">
          Ekubo-Weaver Badge
        </li>
      </ul>

      <div className="overflow-hidden bg-[#121212] border-2 border-[#1D1D1D] w-full  my-4 rounded-t-[10px] rounded-b-none px-5 py-5  flex flex-col items-center justify-start mt-6 transition duration-300   "
      style={{
        height: contentHeight
      }}
      >

        <header onClick={showContent} className=" title w-full flex flex-row items-center justify-between cursor-pointer ">

            <div className="flex flex-row items-center gap-5" >
            <div className="w-[57px] h-[57px] rounded-full bg-white relative  " >
                <Image src= "/TanglerNFT.svg" alt="NFT" width={100} height={100} className="w-[45px] h-[45px] object-contain absolute top-[20%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]   " />
            </div>
            <h1>Tangler</h1>

            </div>

            <FaChevronDown className={` transform transition-all duration-300 ${isExpanded ? "rotate-[180deg]" : "rotate-[0] "} `}  />
        </header>
      </div>
    </div>
  );
}
