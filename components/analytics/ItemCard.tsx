import Image from "next/image";





export default function ItemCard() {
    return (
        <div className="w-full max-w-[520px] h-[273px] rounded-lg border-[1px] border-[#988C8C] relative overflow-hidden " >
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start gap-0 " >
            <div className="w-full h-full bg-[#1E1E1E] " >
                    <Image src={"/item-image.svg"} alt="item image" height={100} width={100} className="h-[65%] w-full object-cover object-center " />
                    <div className="px-6 py-5 flex  items-center justify-between gap-10 " >


<span className=" rounded-[15px] bg-[#FFFFFF] flex items-center justify-center gap-1 text-[#8BB151] font-medium text-xs px-4  py-2 " >
    Live
</span>
                    </div>
            </div>


            </div>

        </div>
    )
}