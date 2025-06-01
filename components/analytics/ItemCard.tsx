import { formatDate } from "@/utils/DateFormatter";
import { CardProps } from "@/utils/interface";
import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { BsDot } from "react-icons/bs";






interface ItemcardProp {
    data: CardProps
}

export default function ItemCard({ data }: ItemcardProp) {
    return (
        <div className="w-full  h-[273px] rounded-lg border-[1px] border-[#988C8C] relative overflow-hidden cursor-pointer hover:scale-105 transition-all duration-150 ease-in-out " >
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start gap-0 " >
                <div className="w-full h-full bg-[#1E1E1E] " >
                    <div className=" h-[64%] w-full flex items-center justify-center relative" >
                        <Image src={data.imageSrc} alt="item image" height={100} width={100} className="h-full w-full object-cover object-center absolute " />
                        <span className=" absolute z-10 top-5 right-5 flex items-center gap-1 bg-[#444444] rounded-[29px] px-3 py-1 text-xs md:text-sm "  > <BiUser size={20} /> {data.participantCount} </span>


                        <div className="absolute bottom-4 left-6 z-10 flex flex-col items-start gap-1  " >
                            <span className="  py-[5px] px-[17px] bg-[#4444446E] flex items-center justify-center gap-2 rounded-[20px] text-xs font-medium " ><Image src={"/layer3-icon.svg"} alt="icon" width={10} height={10} className="w-4 h-4 " /> {data.badgeText} </span>
                            <h1 className="text-white text-lg md:text-2xl font-bold " >{data.title} </h1>
                        </div>
                    </div>
                    <div className="px-6 py-6 flex  items-center justify-between gap-10 h-[36%] " >

                        <div className="flex flex-col items-start gap-1" >
                            <h3 className=" text-sm md:text-lg font-medium text-white  " > {formatDate(data.startTime)} </h3>
                            <p className="text-[#988C8C] text-xs md:text-sm font-medium " >to {formatDate(data.endTime)} </p>

                        </div>


                        <span className={`rounded-[15px] bg-[#FFFFFF] flex items-center justify-center gap-1  font-medium text-xs px-4  py-2 ${data.isLive ? "text-[#8BB151]" : "text-blue-500"} `} >
                            <BsDot size={15} /> {data.isLive ? "Live" : "Completed"}
                        </span>
                    </div>
                </div>


            </div>

        </div>
    )
}